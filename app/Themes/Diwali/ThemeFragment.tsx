"use client";
import Image from "next/image";
import React from "react";
import element_1 from "@/public/Deewali/element_1.png";
import element_2 from "@/public/Deewali/element_2.png";
import Glowing_Rolloing from "@/public/Deewali/Glowing-Rolloing.png";
import Lamp from "@/public/Deewali/Lamp.png";
import Lottie from "lottie-react";
import GradualSpacing from "@/components/ui/gradual-spacing";
import groovyWalkAnimation from "@/public/Deewali/Fireworks_1.json";
import { RainbowButton } from "@/components/ui/rainbow-button";
import gift from "@/public/Deewali/gift.json";
import Sheet from "./Sheet";

function ThemeFragment() {
  return (
    <div className="relative w-full overflow-hidden flex h-screen items-center justify-center bg-no-repeat bg-cover bg-[url('/Deewali/Deewali_base.jpg')]">
      <Image
        alt="element_1"
        className="absolute opacity-35 size-[1070px] animate-rotate"
        src={element_1}
      />
      <Image
        alt="element_2"
        className="absolute opacity-35 size-[750px] animate-rotate_right"
        src={element_2}
      />
      <Image
        alt="Glowing_Rolloing"
        className="absolute size-[550px] animate-center "
        src={Glowing_Rolloing}
      />
      <Image alt="Lamp" className="absolute w-auto h-[800px] " src={Lamp} />
      <Lottie animationData={groovyWalkAnimation} />
      <div className="absolute flex w-full h-screen justify-center">
        <div className="absolute bottom-10">
          {/* <GradualSpacing
      className="text-transparent bg-clip-text bg-gradient-to-b from-orange-500  max-w-96 flex flex-wrap font-display text-center  font-bold -tracking-widest md:leading-[5rem]"
      text="Wishing you a Diwali filled with love, laughter, and endless light. May each diya you light bring warmth to your heart and joy to your home. Happy Diwali!"
        /> */}
          <Sheet/>
        </div>
      </div>
    </div>
  );
}

export default ThemeFragment;
