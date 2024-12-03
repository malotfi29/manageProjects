import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loader from "../../ui/Loader"
import useCreateProposal from "./useCreateProposal";


function CreateProposal({ onClose, projectId }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const{isCreating,createProposal}=useCreateProposal()

const onSubmit=(data)=>{
createProposal({...data,projectId},{
    onSuccess:()=>onClose()
})

}


  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="توضیحات"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 10,
              message: "حداقل 10 کاراکتر وارد کنید",
            },
          }}
          errors={errors}
        />

        <TextField
          label="قیمت"
          name="price"
          register={register}
          required
          type="number"
          validationSchema={{
            required: "قیمت ضروری است",
          }}
          errors={errors}
        />

        <TextField
          label="مدت زمان"
          name="duration"
          register={register}
          required
          type="number"
          validationSchema={{
            required: "مدت زمان ضروری است",
          }}
          errors={errors}
        />

        <div className="mb-8">
          {isCreating ? (
            <Loader />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateProposal;
