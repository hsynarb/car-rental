import { JSX, useState } from "react";
import { Calendar } from "react-multi-date-picker";
import classNames from "classnames";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/gregorian_fa";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface DatePickerProps {
  prependIcon?: boolean;
  appendIcon?: boolean;
  hasBorder?: boolean;
  className?: string;
}

export default function DatePicker({
  prependIcon,
  appendIcon,
  hasBorder,
  className,
}: DatePickerProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | undefined>("");

  return (
    <div className={classNames(className, "relative")}>
      <div
        className={classNames(
          "flex justify-between items-center gap-2 cursor-pointer",
          "px-2 py-1 md:px-3 md:py-2",
          {
            "border border-gray-200 rounded-lg": hasBorder,
          }
        )}
      >
        {prependIcon && (
          <Image
            src="/calendar.svg"
            width={24}
            height={24}
            alt="calendar-icon"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
        <input
          readOnly
          value={selectedDate}
          className="w-full focus:outline-none hover:cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        {appendIcon && (
          <Image
            src="/calendar.svg"
            width={24}
            height={24}
            alt="calendar-icon"
            onClick={() => setIsOpen(!isOpen)}
            className="w-[20px] md:w-[24px]"
          />
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={classNames("absolute right-1/2 translate-x-1/2 z-10")}
            onClick={() => setIsOpen(false)}
          >
            <Calendar
              calendar={persian}
              locale={persian_fa}
              weekDays={["ش", "ی", "د", "س", "چ", "پ", "ج"]}
              months={[
                "فروردین",
                "اردیبهشت",
                "خرداد",
                "تیر",
                "مرداد",
                "شهریور",
                "مهر",
                "آبان",
                "آذر",
                "دی",
                "بهمن",
                "اسفند",
              ]}
              monthYearSeparator={" "}
              value={selectedDate}
              onChange={(date) => {
                setSelectedDate(date?.toString());
                setIsOpen(false);
              }}
              className=""
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
