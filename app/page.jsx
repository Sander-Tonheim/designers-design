"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Doto } from "next/font/google";
import { animations } from "@/public/lottie/index";
import abstactShapes from "@/public/images/abstractShapes.jpg";
import designSectionBackground from "@/public/images/designSectionBackground.jpg";
import dynamic from "next/dynamic";

const LottieAnimationFrame = dynamic(
  () => import("@/components/lottieAnimationFrame"),
  {
    ssr: false,
  },
);

const doto = Doto({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  adjustFontFallback: false,
});
export default function Home() {
  return (
    <>
      <div className="HERO flex h-[43rem] flex-col items-center gap-20 px-8 py-10 md:flex-row md:justify-between lg:mb-28 lg:h-[43rem]">
        <div
          className={`HEADER flex flex-col text-5xl xs:text-6xl sm:text-6xl md:text-6xl lg:text-7xl ${doto.className}`}
        >
          <motion.h1
            className="font-semibold"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            whileHover={{ scale: 1.2 }}
            drag="y"
            dragConstraints={{ top: -100, bottom: 1000 }}
          >
            Designers
          </motion.h1>
          <motion.h1
            className="font-semibold"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            whileHover={{
              delay: 0,
              scale: 1.1,
            }}
            drag="x"
            dragConstraints={{ left: -100, right: 1000 }}
          >
            design
          </motion.h1>
          <motion.h2
            className="overflow-hidden whitespace-nowrap text-2xl"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "anticipate", delay: 1 }}
          >
            By Nordic design
          </motion.h2>
        </div>
        <LottieAnimationFrame animationData={animations.designer} />
      </div>
      <div className="SECTION_1 flex gap-8 px-8 max-md:flex-col lg:mb-40 lg:h-[35rem] lg:items-center">
        <Image
          alt="Diffrent windows animation"
          src={abstactShapes}
          className="object-scale-down md:max-w-[50%] md:basis-1/2"
        />
        <div className="TEXT flex basis-1/2 flex-col gap-4">
          <h2 className={`text-4xl ${doto.className} `}>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            pariatur vitae ducimus ex dicta, quidem enim unde, ut ea excepturi,
            aliquam sunt impedit repellat! Sapiente molestiae dolorem quos
            accusamus sed! Deserunt distinctio deleniti doloremque quam, aliquam
            facilis aperiam minima impedit repellat nihil quia quod nesciunt
            fugiat delectus sunt sequi eius inventore, ad eos illo
            necessitatibus non, blanditiis est. Iure, laborum. Nam natus ratione
            veritatis! Sit commodi, laudantium mollitia, placeat ex saepe
            laboriosam aspernatur quaerat eaque dolores pariatur, ratione minus
            sunt atque fuga cumque! Deserunt officiis obcaecati minus sequi rem
            molestiae
          </p>
        </div>
      </div>
      <div className="SECTION_2 min relative my-32 min-h-[40rem] w-full lg:mb-40">
        <Image
          className="absolute h-full w-full object-cover"
          src={designSectionBackground}
          alt="Background ilustration"
        />
        <p className="absolute z-10 flex h-full w-full items-center justify-center p-10 py-32 text-center text-7xl text-[#EEEEEE] backdrop-brightness-[40%] lg:p-0 lg:text-8xl">
          Nordic designs BY art
        </p>
      </div>
      <div className="SECTION_3 flex items-center gap-8 px-8 max-md:flex-col md:justify-between lg:mb-40 lg:h-[35rem]">
        <div className="TEXT flex basis-1/2 flex-col gap-4">
          <h2 className={`text-4xl ${doto.className} `}>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            pariatur vitae ducimus ex dicta, quidem enim unde, ut ea excepturi,
            aliquam sunt impedit repellat! Sapiente molestiae dolorem quos
            accusamus sed! Deserunt distinctio deleniti doloremque quam, aliquam
            facilis aperiam minima impedit repellat nihil quia quod nesciunt
            fugiat delectus sunt sequi eius inventore, ad eos illo
            necessitatibus non, blanditiis est. Iure, laborum. Nam natus ratione
            veritatis! Sit commodi, laudantium mollitia, placeat ex saepe
            laboriosam aspernatur quaerat eaque dolores pariatur, ratione minus
            sunt atque fuga cumque! Deserunt officiis obcaecati minus sequi rem
            molestiae
          </p>
        </div>
        <LottieAnimationFrame animationData={animations.phone} />
      </div>
    </>
  );
}
