"use client";
import Image from "next/image";
import React from "react";
import ic_glowing_cycle_01 from "@/public/Themes/Diwali/ic_glowing_cycle_01.png";
import ic_cycle_02 from "@/public/Themes/Diwali/ic_cycle_02.png";
import ic_cycle_03 from "@/public/Themes/Diwali/ic_cycle_03.png";
import ic_lamp from "@/public/Themes/Diwali/ic_lamp.png";


function DiwaliFragment() {
  return (
    <div className="relative w-full overflow-hidden flex h-screen items-center justify-center bg-no-repeat bg-cover  sm:bg-[url('/Deewali/Deewali_base.jpg')] bg-[url('/Deewali/bg-Mobile.jpg')]">
      <Image
        alt="element_1"
        className="absolute opacity-35 w-auto h-[280px] sm:size-[1070px] animate-rotate"
        src={ic_cycle_03}
      />
      <Image
        alt="element_2"
        className="absolute opacity-35 sm:size-[750px] animate-rotate_right"
        src={ic_cycle_02}
      />
      <Image
        alt="Glowing_Rolloing"
        className="absolute w-auto h-[230px] sm:size-[550px] animate-center "
        src={ic_glowing_cycle_01}
      />
      <Image alt="Lamp" className="absolute w-auto h-[300px]  sm:h-[800px] " src={ic_lamp} />
      {/* <Lottie animationData={groovyWalkAnimation} /> */}
      <div className="absolute flex w-full h-screen justify-center">
        <div className="absolute bottom-10">
          {/* <GradualSpacing
      className="text-transparent bg-clip-text bg-gradient-to-b from-orange-500  max-w-96 flex flex-wrap font-display text-center  font-bold -tracking-widest md:leading-[5rem]"
      text="Wishing you a Diwali filled with love, laughter, and endless light. May each diya you light bring warmth to your heart and joy to your home. Happy Diwali!"
        /> */}
        </div>
      </div>
    </div>
  );
}

export default DiwaliFragment;
