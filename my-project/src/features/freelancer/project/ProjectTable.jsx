import Table from "../../../ui/Table";
import Loader from "../../../ui/Loader";
import useProjects from "../../../hooks/useProjects";
import ProjectRow from "./ProjectRow";

function ProjectTable() {
  const { isLoading, projects } = useProjects();
  if (isLoading) return <Loader />;
  if (!projects.length) return <div>پروژه یافت نشد</div>;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={index} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;
