'use client'
import React, { useEffect, useState } from 'react'
import element_1 from '../public/Deewali/element_1.png'
import element_2 from '../public/Deewali/element_2.png'
import Glowing_Rolloing from '../public/Deewali/Glowing-Rolloing.png'
import Lamp from '../public/Deewali/Lamp.png'
import Image from 'next/image'
import Lottie from "lottie-react";
import { RainbowButton } from '@/components/ui/rainbow-button'
import MobileTheme from './Themes/Diwali/MobileTheme'
import ThemeFragment from './Themes/Diwali/ThemeFragment'

function page() {
  const [music, setMusic] = useState<HTMLAudioElement | null>(null);
  const [sfx, setSfx] = useState<HTMLAudioElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize(); // Check screen size on mount
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const audio = new Audio('/Deewali/music.mp3');
      setMusic(audio);
      audio.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const audio = new Audio('/Deewali/sfx.mp3');
      setSfx(audio);
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

  return isMobile ? <MobileTheme/> : <ThemeFragment/>
}

export default page