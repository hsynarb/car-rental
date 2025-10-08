import { useEffect, useState } from "react";

export default function CountDown() {
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  if (minutes === 0 && seconds === 0) {
    return <span className="text-sm text-[#F23218]">{"ارسال مجدد"}</span>;
  } else return <div>{`${minutes}:${seconds}`}</div>;
}
