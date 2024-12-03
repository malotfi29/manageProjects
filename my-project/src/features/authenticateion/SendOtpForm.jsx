
import TextField from "../../ui/TextField";

import Loader from "../../ui/Loader";

function SendOtpForm({ isSendOtp,register,onSubmit }) {
  
  

  return (
    <div>
      <form className="space-y-8" onSubmit={onSubmit}>
        <TextField
          name="phoneNumber"
          
          label="شماره تلفن"
          register={register}
          autoComplete="off"
        />
        {isSendOtp ? (
          <Loader />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            ارسال کد تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default SendOtpForm;
