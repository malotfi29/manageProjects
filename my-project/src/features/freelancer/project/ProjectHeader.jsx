import FilterDropDown from "../../../ui/FilterDropDown";
import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";

const sortOptions = [
  {
    label: "مرتب سازی(جدیدترین)",
    value: "latest",
  },
  {
    label: "مرتب سازی(قدیمی ترین)",
    value: "earliest",
  },
];

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

function ProjectHeader() {
  const { transformedCategories } = useCategories();

  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="font-bold text-lg">لیست پروژه ها</h1>
      <div className="flex items-center justify-between gap-x-4">
        <Filter filterField="status" options={statusOptions}/>
        <FilterDropDown
          filterField="category"
          options={[
            {
              value: "ALL",
              label: "همه(دسته بندی)",
            },
            ...transformedCategories,
          ]}
        />

        <FilterDropDown filterField="sort" options={sortOptions} />
      </div>
    </div>
  );
}

export default ProjectHeader;
