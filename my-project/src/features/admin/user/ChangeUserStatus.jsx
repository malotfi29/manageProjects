import RHFSelect from "../../../ui/RHFSelect"
import { useForm } from "react-hook-form";

import { useQueryClient } from "@tanstack/react-query";

import Loader from "../../../ui/Loader"
import useChangeUserStatus from "./useChangeUserStatus";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

function ChangeUserStatus({ userId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { isUpdating, changeUserStatus } = useChangeUserStatus();
  const queryClient = useQueryClient();
  const onSubmit = (data) => {
    changeUserStatus(
      {userId,data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["users"] });
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          name="status"
          label="تغییر وضعیت کاربر"
          register={register}
          required
          options={options}
        />
        <div className="!mt-8">
          {isUpdating ? (
            <Loader />
          ) : (
            <button type="submit" className="btn btn--primary w-full ">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ChangeUserStatus;