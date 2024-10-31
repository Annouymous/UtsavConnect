'use client'
import { Input } from "@/components/ui/input";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Switch} from "@nextui-org/react";
import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import {Snippet} from "@nextui-org/snippet";
import { RainbowButton } from "@/components/ui/rainbow-button";
import ic_gift from "@/public/Themes/Diwali/gift.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion"
import { diwaliWishes } from "./Themes/Diwali/wishe";



let Base = 'https://utsav-connect-g6x8.vercel.app'
export default function InviteSheet() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [participant,SetParticipant] = useState('')
  const [personName,SetPersonName] = useState('')
  const [CustomLink,SetCustomLink] = useState('')
  const [isSelected, setIsSelected] = useState(false);
  const [isLinkVisible,setIsLinkVisible] = useState(false)

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  

  const HandlePersonName = (event: React.ChangeEvent<HTMLInputElement>) => SetPersonName(event.target.value) 
  const HandleParticipant = (event: React.ChangeEvent<HTMLInputElement>) => SetParticipant(event.target.value) 

    
  const HandleGenerate = () => {
    const params = new URLSearchParams(searchParams);
    const randomIndex = Math.floor(Math.random() * diwaliWishes.length);
    params.set('personName', personName);
    if(participant.length>0){
      params.set('participant', participant);
    }
    params.set('wish', randomIndex.toString());
    SetCustomLink(`${Base}${pathname}?${params.toString()}`)
    setIsLinkVisible(true)
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <RainbowButton className="animate-bounce" onClick={onOpen}>
        <Lottie  className="w-auto h-10" animationData={ic_gift} />
          Generate Greeting
        </RainbowButton>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="overflow-hidden">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Custom Greeting</ModalHeader>
              <ModalBody>
                <Input onChange={HandlePersonName} placeholder="Place you name"/>
                {
                  isSelected && 
                  <motion.div animate={{ opacity: 1}} transition={{ duration: 0.5 }} initial={{ opacity: 0}}>
                    <Input onChange={HandleParticipant} placeholder="Participant name ? "/>
                  </motion.div>
                }
  
                <Switch className="capitalize text-gray-800" isSelected={isSelected} onValueChange={setIsSelected} color="success"  size="sm"> <span className="opacity-35">would you like to add Participant name ?</span></Switch>
                {
                  isLinkVisible && 
                  <motion.div animate={{ opacity: 1}} transition={{ duration: 0.5 }} initial={{ opacity: 0}}>
                      <Snippet>
                          <div style={{ maxWidth: '300px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                              {CustomLink}
                          </div>
                      </Snippet>
                  </motion.div>
                }
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={HandleGenerate}>
                  Generate link
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}