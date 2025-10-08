"use client";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import OtpInput from "./otpInput";

interface OtpWrapper {
  onChange: (value: string) => void;
  state?: "normal" | "error";
}

export default function OtpWrapper({ onChange, state = "normal" }: OtpWrapper) {
  const [otp, setOtp] = useState({
    o1: "",
    o2: "",
    o3: "",
    o4: "",
    o5: "",
  });

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  const otpChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    setOtp((pre) => ({ ...pre, [name]: value }));
    onChange(Object.values(otp).join(""));

    if (value && e.target.nextElementSibling instanceof HTMLInputElement) {
      e.target.nextElementSibling.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (e.key === "Backspace" && !target.value) {
      if (target.previousElementSibling instanceof HTMLInputElement) {
        target.previousElementSibling.focus();
      }
    }
  };

  return (
    <div dir="ltr" className="flex gap-4 items-center justify-center mb-4">
      {["o1", "o2", "o3", "o4", "o5"].map((name, i) => {
        return (
          <OtpInput
            key={name}
            ref={inputRefs[i]}
            name={name}
            onChange={otpChangeHandler}
            onKeyDown={handleKeyDown}
            className={
              state === "error" ? "border-[#F23218]" : "border-gray-300"
            }
          />
        );
      })}
    </div>
  );
}
