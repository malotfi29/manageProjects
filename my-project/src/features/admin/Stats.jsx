import { HiCollection, HiOutlineViewGrid, HiUser } from "react-icons/hi";
import Stat from "../owner/Stat";
import { toPersianNumbers } from "../../utils/toPersionNumber";

function Stats({ proposals, projects, users }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
      <Stat
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        title="درخواست ها"
        value={toPersianNumbers(proposals)}
        color="primary"
      />
      <Stat
        icon={<HiUser className="w-20 h-20" />}
        title="کاربران"
        value={toPersianNumbers(users)}
        color="green"
      />
      <Stat
        icon={<HiCollection className="w-20 h-20" />}
        title="پروژه ها "
        value={toPersianNumbers(projects)}
        color="yellow"
      />
    </div>
  );
}

export default Stats;
