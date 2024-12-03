import { useState } from "react";
import Table from "../../../ui/Table";
import { toPersianNumbers } from "../../../utils/toPersionNumber";
import Modal from "../../../ui/Modal";
import ChangeUserStatus from "./ChangeUserStatus";

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

function UserRow({ index, user }) {
  const { status } = user;
  const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{toPersianNumbers(user.phoneNumber)}</td>
      <td>{user.role}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
        <Modal
          onClose={() => setOpen(false)}
          open={open}
          title="تغییر وضعیت کاربر"
        >
          <ChangeUserStatus onClose={()=>setOpen(false)} userId={user._id}/>
        </Modal>
      </td>
    </Table.Row>
  );
}

export default UserRow;
