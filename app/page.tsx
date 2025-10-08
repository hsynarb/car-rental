import PageScreen from "../ui/pageScreen/pageScreen";
import Button from "../ui/button/button";
import QuickReserve from "../ui/quickReserve/quickReserve";
import CarCard from "../ui/carCard/carCard";
import Icon from "../ui/icon/icon";
import classNames from "classnames";
import ReserveGuide from "../ui/reserveGuide/reserveGuide";

export default function Home() {
  const cars = [
    {
      imgSrc: "/landcruise-2016.png",
      title: "تویوتا کرولا",
      model: 2020,
      dailyPrice: 500000,
      monthlyPrice: 12000000,
      gaurantee: 200,
    },
  ];
  return (
    <>
      <PageScreen childrenPosition="center" src="/image-header.png">
        <div className="flex gap-1 md:flex-col md:gap-4">
          <p className="text-[#d79c10] font-bold text-xl md:text-5xl text-secondary-100">
            اُتـــو رِنت؛ سریع،
          </p>
          <p className="text-[#d79c10] font-bold text-xl md:text-5xl">
            آسان و به صرفه
          </p>
        </div>
        <p className="md:text-xl mt-2">
          سرویس دهنده رزرو خودرو در ایران در کمترین زمان ممکن!{" "}
        </p>
        <div className="mt-4 flex gap-4">
          <Button
            shape="filled"
            borderRadius="md"
            variant="secondary"
            className="font-bold text-sm px-3 md:px-6 py-2"
          >
            رزرو آسان خودرو
          </Button>
          <Button
            shape="outlined"
            borderRadius="md"
            variant="secondary"
            className="font-bold text-sm px-3 md:px-6 py-2"
          >
            تماس با ما
          </Button>
        </div>
      </PageScreen>
      <QuickReserve />
      <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 w-4/5 mx-auto mb-6">
        <div className="flex gap-2 md:col-start-2">
          <Button
            shape="filled"
            variant="primary"
            borderRadius="md"
            className="px-4 py-2 text-sm w-full"
          >
            پرطرفدار
          </Button>
          <Button
            shape="outlined"
            variant="primary"
            borderRadius="md"
            className="px-4 py-2 text-sm w-full"
          >
            پرطرفدار
          </Button>
          <Button
            shape="outlined"
            variant="primary"
            borderRadius="md"
            className="px-4 py-2 text-sm w-full"
          >
            پرطرفدار
          </Button>
        </div>
        <div className="flex col-span-1 justify-end items-center">
          <div className="flex gap-2 items-center">
            <span className="text-sm md:text-lg font-semibold">مشاهده همه</span>
            <Icon
              src="/arrow-left-simple.svg"
              className="w-[16px] md:w-[24px]"
            />
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 md:gap-6",
          "w-4/5 mx-auto"
        )}
      >
        <CarCard {...cars[0]} />
        <CarCard {...cars[0]} />
        <CarCard {...cars[0]} />
        <CarCard {...cars[0]} />
        <CarCard {...cars[0]} />
        <CarCard {...cars[0]} />
      </div>
      <ReserveGuide />
    </>
  );
}
