'use client'
import React, { ReactNode, useEffect } from "react";
import ic_cycle_03 from "@/public/Themes/Diwali/ic_cycle_03.png";
import ic_cycle_02 from "@/public/Themes/Diwali/ic_cycle_02.png";
import ic_glowing_cycle_01 from "@/public/Themes/Diwali/ic_glowing_cycle_01.png";
import ic_lamp from "@/public/Themes/Diwali/ic_lamp.png";
import ic_Fireworks_1 from "@/public/Themes/Diwali/Fireworks_1.json";
import ic_happy from "@/public/Themes/Diwali/ic_happy.png";
import Image from "next/image";
import Lottie from "lottie-react";

function DiwaliFragment_2({
  children,
}: {
  children: React.ReactNode;
}) {
    useEffect(() => {
        setTimeout(() => {
            if (typeof window !== 'undefined') {
                const audio = new Audio('/Themes/Diwali/music.mp3');
                audio.play().catch((error) => {
                  console.error("Autoplay failed:", error);
                });
              }
        }, 4000);
      }, []);
    
      useEffect(() => {
        if (typeof window !== 'undefined') {
          const audio = new Audio('/Themes/Diwali/sfx.mp3');
          const intervalId = setInterval(() => {
            audio.play().catch((error) => {
              console.error("Error playing audio:", error);
            });
          }, 2600);
          return () => {
            clearInterval(intervalId);
          };
        }
      }, []);

  return (
    <div className="relative w-full overflow-hidden flex h-screen items-center justify-center bg-no-repeat bg-cover bg-[url('/Themes/Diwali/ic_mobile_background.jpg')] sm:bg-[url('/Themes/Diwali/ic_desktop_background.jpg')]">
      <Image
        alt="ic_cycle_03"
        className="absolute opacity-35 sm:size-[1070px] animate-rotate"
        src={ic_cycle_03}
      />
      <Image
        alt="ic_cycle_02"
        className="absolute w-auto h-[280px] opacity-35 sm:size-[750px] animate-rotate_right"
        // className="absolute opacity-35 sm:size-[750px] animate-rotate_right"
        src={ic_cycle_02}
      />
      <Image
        alt="ic_glowing_cycle_01"
        className="absolute w-auto h-[230px] sm:size-[550px] animate-center "
        src={ic_glowing_cycle_01}
      />
      <Image alt="ic_lamp" className="absolute w-auto h-[250px] sm:h-[800px] " src={ic_lamp} />
      <Lottie animationData={ic_Fireworks_1} />
      <div className="absolute flex w-full h-screen">
        {
        children
        }
      </div>
    </div>
  );
}

export default DiwaliFragment_2;
