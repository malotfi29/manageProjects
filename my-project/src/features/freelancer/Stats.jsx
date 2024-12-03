import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../owner/Stat";
import {toPersianNumbersWithComma,toPersianNumbers} from "../../utils/toPersionNumber"


function Stats({ proposals}) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce(
    (acc, curr) => curr.price + acc,
    0
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
      <Stat
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        title="درخواست ها"
        value={toPersianNumbers(numOfProposals)}
        color="primary"
      />
      <Stat
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        title="درخواست های تایید شده"
        value={toPersianNumbers(acceptedProposals.length)}
        color="green"
      />
      <Stat
        icon={<HiCollection className="w-20 h-20" />}
        title="کیف پول "
        value={toPersianNumbersWithComma(balance)}
        color="yellow"
      />
    </div>
  );
}

export default Stats;
