"use client";
import Button from "@/ui/button/button";
import classNames from "classnames";
import Image from "next/image";
import Styles from "./quickReserve.module.scss";
import DropDown from "@/ui/form/dropDown/dropDown";
import DatePicker from "@/ui/form/datePicker/datePicker";

export default function QuickReserve() {
  return (
    <div
      className={classNames(
        // Styles.QuickReserve,
        "w-4/5 mx-auto md:relative md:translate-y-[-50%]",
        "p-4 my-4 md:p-6 bg-white rounded-lg shadow-md"
      )}
    >
      <div
        className={classNames(
          "flex gap-2 items-center md:justify-between ",
          "text-xs md:text-sm",
          "overflow-x-hidden"
          // "hover:overflow-x-auto"
        )}
      >
        <div className="flex gap-2">
          <Button
            shape={"outlined"}
            variant="primary"
            borderRadius="2xl"
            className="whitespace-nowrap px-2 py-2 md:px-4 md:py-2 md:whitespace-normal"
          >
            اچاره خودرو با راننده
          </Button>
          <Button
            shape={"outlined"}
            variant="primary"
            borderRadius="2xl"
            className="whitespace-nowrap px-2 py-1 md:px-4 md:py-2 md:whitespace-normal"
          >
            اجاره خودرو بدون راننده
          </Button>
          <Button
            shape={"outlined"}
            variant="primary"
            borderRadius="2xl"
            className="whitespace-nowrap px-2 py-1 md:px-4 md:py-2 md:whitespace-normal"
          >
            اجاره ماشین عروس
          </Button>
        </div>
        <span className="whitespace-nowrap md:whaitespace-normal">
          اطلاعات بیشتر در مورد رزرو خودرو
        </span>
      </div>
      <div className="mt-2 md:mt-4">
        <div className="hidden md:grid md:grid-cols-9 md:gap-2 md:text-sm">
          <div className="flex items-center gap-1 col-span-5">
            <Image
              src={"/arrow-left.svg"}
              width={16}
              height={16}
              alt="arrow-left"
            />
            <span>محل تحویل خودرو</span>
          </div>
          <div className="flex items-center gap-1 col-span-1">
            <Image
              src={"/arrow-left.svg"}
              width={16}
              height={16}
              alt="arrow-left"
            />
            <span>تاریخ تحویل </span>
          </div>
          <div className="flex items-center gap-1 col-span-1">
            <Image
              src={"/arrow-left.svg"}
              width={16}
              height={16}
              alt="arrow-left"
            />
            <span>ساعت تحویل </span>
          </div>
          <div className="flex items-center gap-1 col-span-1">
            <Image
              src={"/arrow-left.svg"}
              width={16}
              height={16}
              alt="arrow-left"
            />
            <span>تاریخ بازگشت </span>
          </div>
          <div className="flex items-center gap-1 col-span-1">
            <Image
              src={"/arrow-left.svg"}
              width={16}
              height={16}
              alt="arrow-left"
            />
            <span>ساعت بازگشت </span>
          </div>
        </div>
        <div
          className={classNames(
            "grid grid-cols-2 grid-rows-4 md:grid-cols-10 md:grid-rows-1 items-center gap-1 md:gap-2",
            "p-2 md:p-1 md:mt-4 border border-gray-200 rounded-xl"
          )}
        >
          <div
            className={classNames(
              Styles.brderBottom,
              "col-span-2 md:col-span-5 md:border-l border-gray-200"
            )}
          >
            <DropDown
              options={["فرودگاه", "فرودگاه", "فرودگاه"]}
              onChange={() => {}}
              hasBorder={false}
              appendIconSrc="/arrow-down-select.svg"
            />
          </div>
          <div
            className={classNames(
              Styles.brderBottom,
              "col-span-1 md:border-l border-gray-200"
            )}
          >
            <DatePicker hasBorder={false} prependIcon />
          </div>
          <div
            className={classNames(
              Styles.brderBottom,
              "col-span-1 md:border-l border-gray-200"
            )}
          >
            <DropDown
              type="hourPicker"
              onChange={() => {}}
              hasBorder={false}
              prependIconSrc="/clock.svg"
            />
          </div>
          <div
            className={classNames(
              Styles.brderBottom,
              "col-span-1 md:border-l border-gray-200"
            )}
          >
            <DatePicker hasBorder={false} prependIcon />
          </div>
          {/* <div className="col-span-2 flex justify-between items-center"> */}
          <div className={classNames(Styles.brderBottom, "col-span-1")}>
            <DropDown
              type="hourPicker"
              onChange={() => {}}
              hasBorder={false}
              prependIconSrc="/clock.svg"
              // className="w-1/2"
              className="col-span-1"
            />
          </div>
          <Button
            iconPosition="right"
            iconSrc={"/search-normal.svg"}
            variant="secondary"
            type="submit"
            shape="filled"
            borderRadius="xl"
            className="p-2 col-span-2 md:p-3 md:col-span-1"
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
