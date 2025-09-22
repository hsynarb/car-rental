import Icon from "@/app/ui/icon/icon";
import Image from "next/image";
export default function ReserveGuide() {
  return (
    <section
      className={
        "flex flex-col gap-8 mt-4 w-4/5 mx-auto md:grid md:grid-cols-3 md:grid-rows-2"
      }
    >
      <div className="flex items-center gap-3">
        <div className="p-4 bg-white rounded-xl">
          <Icon src="/car.svg" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 font-bold text-2xl md:flex-col xl:flex-row">
            <h2 className="text-[#d79c10]">خودروی</h2>
            <h3>خود را انتخاب کنید.</h3>
          </div>
          <p>خودروی مورد نظر خود را، متناسب با درخواست خود انتخاب کنید.</p>
        </div>
      </div>
      <Image
        src={"/reserve-guide-car.png"}
        width={392}
        height={746}
        alt="car-picture"
        className={
          "hidden md:block md:col-span-1 md:row-start-1 md:row-end-3 md:col-start-2 md:col-end-3"
        }
      />
      <div className="flex items-center gap-3 md:flex-row-reverse">
        <div className="p-4 bg-white rounded-xl">
          <Icon src="/calendar.svg" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 font-bold text-2xl md:flex-col xl:flex-row">
            <h2 className="text-[#d79c10]">تاریخ</h2>
            <h3>تحویل را تعیین کنید.</h3>
          </div>
          <p>{"تاریخ موردنظر خود را از تقویم، انتخاب و رزرو کنید."}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="p-4 bg-white rounded-xl">
          <Icon src="/cards.svg" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 font-bold text-2xl md:flex-col xl:flex-row">
            <h2 className="text-[#d79c10]">هزینه</h2>
            <h3>اجاره را پرداخت کنید.</h3>
          </div>
          <p>
            {
              "می توانید از طریق کیف پول آنلاین یا کارت های عضو شبکه شتاب هزینه اجاره را پرداخت کنید."
            }
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 md:flex-row-reverse">
        <div className="p-4 bg-white rounded-xl">
          <Icon src="/box.svg" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 font-bold text-2xl md:flex-col xl:flex-row">
            <h2 className="text-[#d79c10]">خودرو</h2>
            <h3>را دریافت کنید.</h3>
          </div>
          <p>{"در زمان و مکان تعیین شده، خودروی خود را دریافت کنید."}</p>
        </div>
      </div>
    </section>
  );
}
