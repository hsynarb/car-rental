"use server";
import { redirect } from "next/navigation";
import { z } from "zod";

const TelFormSchems = z.object({
  phone: z
    .string()
    .min(11, "شماره موبایل باید ۱۱ رقم باشد.")
    .max(11, "شماره موبایل باید ۱۱ رقم باشد."),
});

const OtpFormSchema = z.object({
  otp: z.string().min(5, "otp باید ۵ رقم باشد").max(5, "otp باید ۵ رقم باشد"),
});
export type PhoneState = {
  error?: { phone?: string[] };
  step?: string;
};

export type OtpState = {
  error?: { otp?: string[] };
};

export const sendPhone = async (prevState: PhoneState, formData: FormData) => {
  const validateFields = TelFormSchems.safeParse({
    phone: formData.get("phone"),
  });
  if (!validateFields.success) {
    return {
      error: { ...validateFields.error.flatten().fieldErrors },
      step: "phone",
    };
  }
  return {
    step: "otp",
  };
};

export const sendOtp = async (prevState: OtpState, formData: FormData) => {
  const otp =
    String(formData.get("o1") ?? "") +
    String(formData.get("o2") ?? "") +
    String(formData.get("o3") ?? "") +
    String(formData.get("o4") ?? "") +
    String(formData.get("o5") ?? "");
  console.log({ otp });
  const phone = formData.get("phone");
  console.log({ phone });
  const validateFields = OtpFormSchema.safeParse({
    otp,
  });
  if (!validateFields.success) {
    return {
      error: { ...validateFields.error.flatten().fieldErrors },
      step: "otp",
    };
  }
  if (otp !== "11111")
    return {
      error: { otp: ["کد وارد شده اشتباه است."] },
    };
  redirect("/");
};
