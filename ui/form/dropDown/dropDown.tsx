import classNames from "classnames";
import Image from "next/image";
import { JSX, useState } from "react";
import Styles from "./dropDown.module.scss";

interface DropDownProps {
  options?: string[];
  onChange: (value: string) => void;
  appendIconSrc?: string;
  prependIconSrc?: string;
  className?: string;
  hasBorder?: boolean;
  hasIconAnimation?: boolean;
  type?: "regular" | "hourPicker";
}

/**
 * A simple dropdown component that allows users to select an option.
 *
 * @param {DropDownProps} props - The properties for the dropdown component.
 * @returns {JSX.Element} The rendered dropdown component.
 */

export default function DropDown({
  options = [],
  onChange,
  appendIconSrc,
  prependIconSrc,
  className,
  hasBorder = true,
  hasIconAnimation = true,
  type = "regular",
}: DropDownProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const hourOptions = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ];
  return (
    <div className={classNames(className, Styles.DropDown, "relative")}>
      <div
        className={classNames(
          "flex justify-between items-center gap-2 rounded-lg cursor-pointer",
          "px-2 py-1 md:px-3 md:py-2",
          {
            "border border-gray-300": hasBorder,
          }
        )}
      >
        {prependIconSrc && (
          <Image
            src={prependIconSrc}
            width={24}
            height={24}
            alt="prependIcon"
            className="w-[20px] md:w-[24px]"
          />
        )}
        <input
          value={selectedValue}
          onClick={() => setIsOpen(!isOpen)}
          readOnly
          className="w-full focus:outline-none hover:cursor-pointer"
        ></input>
        {appendIconSrc && (
          <Image
            src={appendIconSrc}
            width={24}
            height={24}
            alt={"appendIcon"}
            className={classNames("w-[20px] md:w-[24px]", {
              "rotate-180 transition-transform duration-300 ease-in-out":
                isOpen && hasIconAnimation,
            })}
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
      {
        <div
          className={classNames(
            "absolute bg-white border border-gray-300 rounded-lg mt-2 w-full shadow-lg",
            "transition-all duration-300 ease-in-out max-h-60 overflow-y-auto z-1",
            {
              "opacity-100 translate-y-0": isOpen,
              "opacity-0 translate-y-2 pointer-events-none": !isOpen,
            }
          )}
        >
          {type === "regular"
            ? options.map((option, index) => (
                <div
                  key={index}
                  className="p-4 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    onChange(option);
                    setSelectedValue(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </div>
              ))
            : hourOptions.map((option) => (
                <div
                  key={option}
                  className="p-4 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    onChange(option);
                    setSelectedValue(`0${option}:00`);
                    setIsOpen(false);
                  }}
                >
                  {`0${option}:00`}
                </div>
              ))}
        </div>
      }
    </div>
  );
}
