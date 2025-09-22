import classNames from "classnames";
import { ChangeEvent, ChangeEventHandler, RefObject, useState } from "react";

interface InputProps {
  onChange: ChangeEventHandler;
  name: string;
  className?: string;
  ref: RefObject<HTMLInputElement | null>;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function OtpInput({
  onChange,
  name,
  className,
  ref,
  onKeyDown,
}: InputProps) {
  const [value, setValue] = useState("");
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(e);
  };
  return (
    <input
      ref={ref}
      value={value}
      onChange={handleChange}
      name={name}
      type="number"
      minLength={1}
      maxLength={1}
      min={0}
      max={9}
      inputMode="numeric"
      onKeyDown={onKeyDown}
      className={classNames(
        className,
        "w-[56px] h-[56px] border rounded-lg focus:outline-none px-4 py-2 text-center"
      )}
    />
  );
}
