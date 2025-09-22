import { useActionState } from "react";
import Button from "@/app/ui/button/button";
import CountDown from "@/app/ui/countDown";
import OtpWrapper from "@/app/ui/login/otp/otpWrapper";
import { sendOtp, PhoneState, OtpState } from "@/app/lib/actions";

interface OtpFormProps {
  setStep: (step: "phone" | "otp") => void;
}

export default function OtpForm({ setStep }: OtpFormProps) {
  const initialOtpState: OtpState = { error: {} };
  const [otpState, otpFormAction] = useActionState(sendOtp, initialOtpState);

  return (
    <form action={otpFormAction}>
      <OtpWrapper
        onChange={(otp) => console.log({ otp })}
        state={otpState.error?.otp?.length ? "error" : "normal"}
      />
      {otpState.error?.otp?.length !== 0 && (
        <p className="text-sm text-[#F23218] my-1">
          {otpState.error?.otp?.[0]}
        </p>
      )}
      <div className="flex justify-between w-full mb-4 text-sm text-[#194BF0]">
        <CountDown />
        <span className="cursor-pointer" onClick={() => setStep("phone")}>
          {"ویرایش شماره موبایل"}
        </span>
      </div>
      <Button
        type="submit"
        shape="filled"
        variant="primary"
        borderRadius="lg"
        className="w-full p-3 cursor-pointer"
      >
        {"تایید و ادامه"}
      </Button>
    </form>
  );
}
