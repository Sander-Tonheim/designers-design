"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import OpenEmailButton from "./openEmailButton";
import logo from "@/public/logo.svg";
export default function Navbar() {
  const [state, setState] = useState(false);
  const [current, setCurrent] = useState("");

  const path = usePathname();

  useEffect(() => {
    setCurrent(path);
  }, [path]);

  const menus = [
    { title: "Home", path: "/" },
    { title: "Testimonials", path: "/testimonials" },
    { title: "About", path: "/about" },
    { title: "News", path: "/news" },
  ];

  return (
    <nav className="sticky left-0 top-0 z-50 w-full bg-white">
      <div className="mx-auto h-[88px] max-w-screen-xl items-center p-4 md:relative md:flex md:justify-between md:p-6 md:px-8 md:py-7">
        <div className="LOGO flex flex-nowrap items-center justify-between md:block">
          <Link href="/">
            <Image alt="Logo" src={logo} height={55} />
          </Link>
          <div className="md:hidden">
            <button
              className="rounded-md p-2 text-gray-700"
              onClick={() => setState(!state)}
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
        <div
          className={`absolute left-0 top-[88px] flex w-full justify-self-center overflow-hidden bg-black bg-opacity-70 backdrop-blur-sm transition-[height] duration-300 ease-in-out md:relative md:top-0 md:flex md:h-full md:w-fit md:items-center md:justify-between md:bg-transparent md:backdrop-blur-none ${
            state ? "h-52" : "h-0"
          }`}
        >
          <ul className="SLIDE-IN flex h-fit w-full flex-col gap-4 px-6 py-4 md:w-fit md:flex-row md:justify-center md:gap-4 md:p-0 lg:gap-8">
            {menus.map((item, idx) => (
              <li key={idx} onClick={() => setState(false)}>
                <Link
                  href={item.path}
                  className={`text-active text-lg font-medium leading-6 hover:text-gray-50`}
                >
                  <p className="text-[#fff] md:text-gray-900">{item.title}</p>
                </Link>
              </li>
            ))}
            <OpenEmailButton />
          </ul>
        </div>
      </div>
    </nav>
  );
}
