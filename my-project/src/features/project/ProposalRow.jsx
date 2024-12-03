import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersionNumber";
import { useState } from "react";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";

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

function ProposalRow({ index, proposal }) {
    const{status,user}=proposal
    const[open,setOpen]=useState(false)
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>{truncateText(proposal.description, 30)}</td>
      <td>{toPersianNumbers(proposal.duration)} روز</td>
      <td>{toPersianNumbersWithComma(proposal.price)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>{statusStyle[status].label}</span>
      </td>
      <td>
        <button onClick={()=>setOpen(true)}>تغییر وضعیت</button>
        <Modal onClose={()=>setOpen(false)} open={open} title="تغییر وضعیت درخواست">
            <ChangeProposalStatus proposalId={proposal._id} onClose={()=>setOpen(false)}/>
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
