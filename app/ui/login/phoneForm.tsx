"use client";
import { PhoneState, sendPhone } from "@/app/lib/actions";
import classNames from "classnames";
import { useActionState, useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/app/ui/button/button";

interface PhoneFormProps {
  setStep: (step: "phone" | "otp") => void;
}

export default function PhoneForm({ setStep }: PhoneFormProps) {
  const [checked, setChecked] = useState(false);
  const initialPhoneState: PhoneState = { error: {}, step: "phone" };
  const [phoneState, phoneFormAction] = useActionState(
    sendPhone,
    initialPhoneState
  );
  useEffect(() => {
    if (phoneState.step === "otp") {
      setStep("otp");
    }
  }, [phoneState.step]);
  return (
    <form action={phoneFormAction}>
      <div
        className={classNames(
          "flex justify-between items-center w-full p-2 border rounded-md",
          phoneState.error?.phone ? "border-[#F23218]" : "border-gray-300"
        )}
      >
        <div className="w-full flex justify-end pl-2">
          <input
            type="tel"
            placeholder="9********"
            name="phone"
            className={"focus:outline-none"}
          />
        </div>
        <div className="flex gap-2 border-r border-gray-300 px-2">
          <span>{"98+"}</span>
          <Image
            src={"/iran-flag-icon.svg"}
            width={24}
            height={24}
            alt="iran flag icon"
          />
        </div>
      </div>
      {phoneState.error?.phone && (
        <p className="text-sm text-[#F23218] my-1">
          {phoneState.error.phone[0]}
        </p>
      )}

      <label
        htmlFor="rules"
        className="flex items-center gap-2 mt-8 mb-4 cursor-pointer text-sm"
      >
        <input
          type="checkbox"
          id="rules"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="peer opacity-0 w-0 h-0"
        />

        {/* Box (shows tick image when checked) */}
        <span
          className={
            "w-5 h-5 border border-gray-400 rounded-md peer-checked:bg-[url('/tick-square-filled.svg')] peer-checked:bg-center peer-checked:bg-no-repeat peer-checked:border-none peer-focus-visible:ring-2 peer-focus-visible:ring-blue-400 peer-focus-visible:ring-offset-2"
          }
        ></span>

        {"با ورود و ثبت‌نام در سایت، با قوانین اتورنت موافقت می‌کنم."}
      </label>
      <Button
        type="submit"
        shape="filled"
        variant="primary"
        borderRadius="lg"
        className="w-full p-3 cursor-pointer"
        disabled={!checked}
      >
        {"تایید و ادامه"}
      </Button>
    </form>
  );
}
