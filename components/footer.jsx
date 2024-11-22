"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import OpenEmailButton from "./openEmailButton";
import logo from "@/public/logo.svg";
export default function Footer() {
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
		<nav className=' sticky left-0 top-0 z-50 w-full'>
			<div className='mx-auto h-[88px] max-w-screen-xl items-center  p-6 md:relative md:flex md:justify-between md:px-8 md:py-7'>
				<div className='LOGO flex flex-nowrap items-center justify-between md:block '>
					<Link href='/'>
						<Image
							alt='Logo'
							src={logo}
							height={55}
						/>
					</Link>
					<div className='md:hidden'>
						<button
							className='rounded-md p-2 text-gray-700 '
							onClick={() => setState(!state)}>
							<Menu size={30} />
						</button>
					</div>
				</div>
				<div
					className={` absolute left-0 top-[88px] flex w-full justify-self-center overflow-hidden transition-[height] duration-300 ease-in-out md:relative  md:top-0  md:flex md:h-full md:w-fit md:items-center md:justify-between md:bg-transparent md:backdrop-blur-none ${
						state ? "h-52" : "h-0"
					}`}>
					<ul className='SLIDE-IN flex h-fit w-full flex-col gap-4 px-6 py-4 md:w-fit md:flex-row md:justify-center md:gap-4 md:p-0 lg:gap-8'>
						{menus.map((item, idx) => (
							<li
								key={idx}
								onClick={() => setState(false)}>
								<Link
									href={item.path}
									className={`text-lg font-medium leading-6 text-active hover:text-gray-50 `}>
									{item.title}
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
