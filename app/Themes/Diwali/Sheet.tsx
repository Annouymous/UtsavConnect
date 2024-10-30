'use client'
import { RainbowButton } from "@/components/ui/rainbow-button";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import element_2 from "@/public/Deewali/element_2.png";
import Glowing_Rolloing from "@/public/Deewali/Glowing-Rolloing.png";
import Lamp from "@/public/Deewali/Lamp.png";
import Image from "next/image";
import GradualSpacing from "@/components/ui/gradual-spacing";

export default function Sheet() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
          <RainbowButton onClick={onOpen} className="animate-bounce">
            {/* <Lottie className="size-10" animationData={gift} /> */}
            Create Customized Greeting
          </RainbowButton>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-transparent min-h-[600px] overflow-hidden bg-no-repeat bg-contain bg-[url('/Deewali/sheet_1.jpg')]">
          {(onClose) => (
            <>
              <ModalBody className="flex items-center w-full h-full">
                <div className="
                bg-gradient-to-r from-white to-white
                text-transparent bg-clip-text
                font-serif
                capitalize font-semibold text-lg py-28 flex  w-full h-full justify-center items-center">
                    इस दिवाली, आइए हम एकजुटता, प्यार और साझा करने की खुशी का जश्न मनाएं। 
                    इस त्यौहार की खूबसूरती आपके दिलों को हमेशा रोशन रखे। 
                    दिवाली की शुभकामनाएँ!
                </div>
                <Image
                    alt="element_2"
                    className="absolute bottom-3 size-28 opacity-35  animate-rotate_right"
                    src={element_2}
                />
                <Image
                    alt="Glowing_Rolloing"
                    className="absolute size-24 bottom-5   animate-center "
                    src={Glowing_Rolloing}
                />
                <Image alt="Lamp" className="size-28 bottom-5 absolute " src={Lamp} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}