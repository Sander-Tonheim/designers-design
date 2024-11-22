"use client";
import { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";

const LottieAnimationFrame = ({ animationData }) => {
  return (
    <Lottie
      animationData={animationData}
      className="max-h-[400px] max-w-[400px] lg:max-h-[30rem] lg:max-w-[30rem]"
    />
  );
};

export default LottieAnimationFrame;
