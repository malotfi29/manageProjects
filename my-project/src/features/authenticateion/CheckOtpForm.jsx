import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Loader from "../../ui/Loader";
import { useNavigate } from "react-router-dom";

const RESEND_TIME = 90;

function CheckOtpForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {
  const naviget = useNavigate();
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  
  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) return naviget("/complete-profile");
      if (user.status !== 2) {
        naviget("/");
        toast.error("پروفایل شما در انتظار تایید است");
        return;
      }
      if (user.role === "OWNER") return naviget("/owner");
      if (user.role === "FREELANCER") return naviget("/freelancer");
      if (user.role === "ADMIN") return naviget("/admin");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <button onClick={onBack}>
        <HiArrowRight className="w-6 h-6 text-secondary-500" />
      </button>
      {otpResponse && (
        <p>
          {otpResponse?.message}{" "}
          <button onClick={onBack}>
            <CiEdit />
          </button>
        </p>
      )}
      <div className="mb-4 text-secondary-500">
        {time > 0 ? (
          <p>{time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button onClick={onResendOtp}>ارسال مجدد کد تایید</button>
        )}
      </div>
      <form className="space-y-8" onSubmit={checkOtpHandler}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: "0.5rem",
          }}
        />
        {isPending ? (
          <Loader />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default CheckOtpForm;
