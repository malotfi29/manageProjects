import { useEffect, useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useUser from "./useUser";

function CompleteProfileForm() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [role, setRole] = useState("");
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const naviget = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });

  const{user}=useUser()
//   useEffect(()=>{
// if(user) naviget("/",{replace:true})
//   },[user])


  const onSubmit = async (data) => {
    try {
      const { user, message } = await mutateAsync(data);
      toast.success(message);
      if (user.status !== 2) {
        naviget("/");
        toast.error("پروفایل شما در انتظار تایید است");
        return;
      }
      if (user.role === "OWNER") return naviget("/owner");
      if (user.role === "FREELANCER") return naviget("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            required
            validationSchema={{
              required: " نام و نام خانوادگی ضروری است",
            }}
            errors={errors}
          />
          <TextField
            label="ایمیل"
            name="email"
            register={register}
            required
            validationSchema={{
              required: "    ایمیل ضروری است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "ایمیل نامعتبر است",
              },
            }}
            errors={errors}
          />
          <div className="">
            <div className="flex items-center justify-start gap-x-8">
              <RadioInput
                label="کارفرما"
                name="role"
                value="OWNER"
                id="OWNER"
                register={register}
                checked={watch("role") === "OWNER"}
                validationSchema={{
                  required: "انخاب نقش ضروری است",
                }}
                errors={errors}
              />
              <RadioInput
                label="فریلنسر"
                name="role"
                value="FREELANCER"
                id="FREELANCER"
                register={register}
                checked={watch("role") === "FREELANCER"}
                validationSchema={{
                  required: "انتخاب نقش ضروری است",
                }}
                errors={errors}
              />
            </div>
            {errors && errors["role"] && (
              <span className="text-error block text-sm mt-2">
                {errors["role"]?.message}
              </span>
            )}
          </div>
          {isPending ? (
            <Loader />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
