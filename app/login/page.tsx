"use client";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import PhoneForm from "@/app/ui/login/phoneForm";
import OtpForm from "@/app/ui/login/otp/otpForm";

export default function Page() {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  return (
    <div className="my-30 flex justify-center">
      <div className="flex bg-white rounded-lg">
        <div className="p-10">
          <div className="flex justify-center items-center mb-20">
            <Image
              src={"/header-logo.svg"}
              width={59}
              height={59}
              alt="app-logo"
              className=" ml-2"
            />
            <span
              className={classNames(
                "text-xl text-[#194bf0] font-black md:text-2xl"
              )}
            >
              {"اُتــو"}
            </span>
            <span
              className={classNames(
                "text-xl text-[#d79c10] font-black md:text-2xl"
              )}
            >
              {"رِنت"}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center mt-20">
            <span className="mb-8 text-lg font-bold">{"ورود یا ثبت نام"}</span>
            <p className="mb-4 text-sm">
              {"کد تایید به شماره موبایلی که وارد می‌کنید، ارسال خواهد شد."}
            </p>
            {step === "phone" && <PhoneForm setStep={setStep} />}
            {step === "otp" && <OtpForm setStep={setStep} />}
          </div>
        </div>{" "}
        <Image
          src={"/login-car-pic.png"}
          width={356}
          height={855}
          alt="login-car-picture"
          className="hidden md:block"
        />
      </div>
    </div>
  );
}
