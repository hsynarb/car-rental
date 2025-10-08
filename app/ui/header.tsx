"use client";
import Image from "next/image";
import Styles from "./header.module.scss";
import classNames from "classnames";
import Button from "./button/button";
import { url } from "inspector";
import PageScreen from "./pageScreen/pageScreen";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const sideBarVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 100,
        damping: 30,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 100,
        damping: 30,
      },
    },
  };

  const headerConstants = {
    reserveCar: "رزرو خودرو",
    ourServices: "خدمات ما",
    blog: "بلاگ",
    aboutUs: "درباره ما",
    contactUs: "تماس با ما",
  };

  // const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <header className={classNames(Styles.Header)}>
        {/* <AnimatePresence>
          {isOpen && (
            <motion.aside
              variants={sideBarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 1 }}
            >
              <ul className="flex flex-col gap-4 p-4 bg-white fixed h-full w-3/10 top-16 right-0 z-20 md:hidden">
                  <li>
                    <a href="/" className={`hover:underline`}>
                      {headerConstants.reserveCar}
                    </a>
                  </li>
                  <li>
                    <a href="/cars" className="hover:underline">
                      {headerConstants.ourServices}
                    </a>
                  </li>
                  <li>{headerConstants.blog}</li>
                  <li>
                    <a href="/about" className="hover:underline">
                      {headerConstants.aboutUs}
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:underline">
                      {headerConstants.contactUs}
                    </a>
                  </li>
                </ul>
            </motion.aside>
          )}
        </AnimatePresence> */}
        <div
          className={classNames(
            "fixed h-screen w-screen z-19 backdrop-blur-xs",
            "transition-transform ease-in-out duration-400",
            {
              "translate-x-0": isOpen,
              "translate-x-[100%]": !isOpen,
            }
          )}
        >
          <div
            className={classNames(
              "h-full w-3/10 right-0 bg-white border border-gray-200 z-20 md:hidden rounded-lg"
            )}
          >
            <div className="flex justify-end">
              <Image
                src={"/close.svg"}
                width={24}
                height={24}
                alt="closeIcon"
                onClick={() => setIsOpen(false)}
                className="m-3"
              />
            </div>
            <ul className={classNames("flex flex-col gap-4 p-4")}>
              <li>
                <Link href={"/"} className="hover:underline">
                  {headerConstants.reserveCar}
                </Link>
              </li>
              <li>
                <Link href={"/cars"} className="hover:underline">
                  {headerConstants.ourServices}
                </Link>
              </li>
              <li>
                <Link href={"/blog"} className="hover:underline">
                  {headerConstants.blog}
                </Link>
              </li>
              <li>
                <Link href={"/about-us"} className="hover:underline">
                  {headerConstants.aboutUs}
                </Link>
              </li>
              <li>
                <Link href={"/contact-us"} className="hover:underline">
                  {headerConstants.contactUs}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <nav
          className={
            "p-3 flex items-center justify-between absolute top-0 left-0 right-0 md:left-1/10 md:right-1/10 z-10 bg-white"
          }
        >
          <div className="md:flex md:items-center">
            <Image
              src={"/header-logo.svg"}
              width={59}
              height={59}
              alt="app-logo"
              className="w-1/2 md:w-full ml-2"
              onClick={() => setIsOpen(!isOpen)}
            />
            <span
              className={classNames(
                // Styles.brandAuto,
                "hidden md:block md:text-[#194bf0] md:font-black md:text-2xl md:text-primary"
              )}
            >
              {"اُتــو"}
            </span>
            <span
              className={classNames(
                // Styles.brandRent,
                "hidden md:block md:text-[#d79c10] md:font-black md:text-2xl md:text-secondary"
              )}
            >
              {"رِنت"}
            </span>
          </div>
          <ul className="hidden md:flex md:gap-10">
            <li>
              <Link href={"/"} className="hover:underline">
                {headerConstants.reserveCar}
              </Link>
            </li>
            <li>
              <Link href={"/cars"} className="hover:underline">
                {headerConstants.ourServices}
              </Link>
            </li>
            <li>
              <Link href={"/blog"} className="hover:underline">
                {headerConstants.blog}
              </Link>
            </li>
            <li>
              <Link href={"/about-us"} className="hover:underline">
                {headerConstants.aboutUs}
              </Link>
            </li>
            <li>
              <Link
                href={"/contact-us"}
                className="hover:underline"
                children={headerConstants.contactUs}
              />

              <Link href={"/contact-us"} className="hover:underline">
                {headerConstants.contactUs}
              </Link>
            </li>
          </ul>
          <Button
            shape="filled"
            variant="primary"
            borderRadius="md"
            className="text-sm px-2 py-1 cursor-pointer md:text-base md:px-4 md:py-2"
            onClick={() => redirect("/login")}
          >
            ورود/ثبت نام
          </Button>
        </nav>
      </header>
    </>
  );
}
