import Image from "next/image";
import Button from "@/app/ui/button/button";
import Styles from "./pageScreen.module.scss";
import classNames from "classnames";

// This component is used to display the main screen of the application
// It includes a background image, a title, a subtitle, and two buttons
// The buttons are styled using the Button component from the UI library

// Props interface defines the expected properties for the PageScreen component
// It includes children for nested content and src for the background image source

interface Props {
  children: React.ReactNode;
  childrenPosition?: "left" | "right" | "center";
  src: string;
}

export default function PageScreen({ children, childrenPosition, src }: Props) {
  return (
    <div className={classNames(Styles.PageScreen, "relative")}>
      <Image
        src={src}
        width={1440}
        height={683}
        alt="header-background"
        className={classNames("object-cover object-center w-full h-full")}
        priority
      />
      <div
        className={classNames(
          Styles.title,
          "flex flex-col justify-center text-center",
          {
            "items-start": childrenPosition === "right",
            "items-end": childrenPosition === "left",
            "items-center": childrenPosition === "center",
          }
        )}
      >
        {children}
      </div>
    </div>
  );
}
