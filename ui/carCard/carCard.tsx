import Image from "next/image";
import Button from "@/ui/button/button";
import classNames from "classnames";

interface CarCardProps {
  imgSrc: string;
  title: string;
  model: number;
  dailyPrice: number;
  monthlyPrice: number;
  gaurantee: number;
  className?: string;
}

export default function CarCard({
  imgSrc,
  title,
  model,
  dailyPrice,
  monthlyPrice,
  gaurantee,
  className,
}: CarCardProps) {
  return (
    <div className={classNames(className, "bg-white rounded-lg shadow-md p-6")}>
      <div className="w-full max-w-sm sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto flex flex-col gap-2">
        <Image
          src={imgSrc}
          width={350}
          height={225}
          alt="carPicture"
          className="w-full h-auto"
        />
        <div className="w-full flex flex-col gap-2">
          <span className="font-bold">{title}</span>
          <span className="text-xs text-gray-500">{`مدل: ${model}`}</span>
          <div className="flex justify-between items-center bg-gray-200 rounded-lg p-2">
            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-500">{`از ۱تا۳۰ روز:`}</span>
              <span className="">{` ${dailyPrice}`}</span>
            </div>
            <span className="text-xs text-gray-500">{"روزانه"}</span>
          </div>
          <div className="flex justify-between items-center bg-gray-200 rounded-lg p-2">
            <div className="flex items-center gap-1 ">
              <span className="text-xs text-gray-500">{`از ۱تا۳۰ روز:`}</span>
              <span>{` ${monthlyPrice}`}</span>
            </div>
            <span className="text-xs text-gray-500">{"ماهانه"}</span>
          </div>
          <div className="flex justify-between items-center border-t border-gray-200 pt-2 mt-1">
            <span className="text-sm font-medium">{"مبلغ ضمانت:"}</span>
            <span className="text-sm font-bold">{`${gaurantee} میلیون تومان`}</span>
          </div>
          <Button variant="primary" shape="filled" className="p-2">
            درخواست رزرو
          </Button>
        </div>
      </div>
    </div>
  );
}
