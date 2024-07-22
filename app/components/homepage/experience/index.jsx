// import { experiences } from "@/utils/data/experience";
// import { useState } from "react";
import Experience_usestate from "./experience-usestate";
import Image from "next/image";
// import { BsPersonWorkspace } from "react-icons/bs";
// import AnimationLottie from "../../helper/animation-lottie";
// import GlowCard from "../../helper/glow-card";
// import experience from '/public/lottie/code.json';
// import { MdVisibility } from "react-icons/md";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <Experience_usestate ></Experience_usestate>
      </div>
    </div>
  );
};

export default Experience;