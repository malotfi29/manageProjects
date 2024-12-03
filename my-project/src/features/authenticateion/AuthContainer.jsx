import SendOtpForm from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useUser from "./useUser";
import { replace, useNavigate } from "react-router-dom";

function AuthContainer() {
  const navigate = useNavigate();
  const {
    isPending: isSendOtp,
    error,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });
  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const [step, setStep] = useState(1);

  const { user } = useUser();
  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user]);

  const { handleSubmit, register, getValues } = useForm();
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOtpForm
            isSendOtp={isSendOtp}
            onSubmit={handleSubmit(sendOtpHandler)}
            setStep={setStep}
            register={register}
            // phoneNumber={phoneNumber}
            // setPhoneNumber={setPhoneNumber}
          />
        );
      case 2:
        return (
          <CheckOtpForm
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep(1)}
            onResendOtp={sendOtpHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };
  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
