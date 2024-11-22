"use client";
import React from "react";

export default function OpenEmailButton() {
	return (
		<button
			className='w-fit text-lg font-medium leading-[21px] text-white md:text-gray-900 '
			onClick={() => {
				window.open("mailto:contact@syncdna.com");
			}}>
			Contact
		</button>
	);
}
