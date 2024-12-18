import Table from "../../ui/Table"
import { toPersianNumbers, toPersianNumbersWithComma } from "../../utils/toPersionNumber";
import truncateText from "../../utils/truncateText"


const statusStyle = [
    {
      label: "رد شده",
      className: "badge--danger",
    },
    {
      label: "در انتظار تایید",
      className: "badge--secondary",
    },
    {
      label: "تایید شده",
      className: "badge--success",
    },
  ];

function ProposalRow({index,proposal}) {
    const {status}=proposal
    
  return (
   <Table.Row>
    <td>{index+1}</td>
    <td>{truncateText(proposal.description,30)}</td>
    <td>{toPersianNumbers(proposal.duration)} روز</td>
    <td>{toPersianNumbersWithComma(proposal.price)}</td>
    <td>
        <span className={`badge ${statusStyle[status].className}`}>{statusStyle[status].label}</span>
      </td>
   </Table.Row>
  )
}

export default ProposalRow
