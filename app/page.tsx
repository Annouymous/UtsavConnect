'use client'
import InviteSheet from '@/library/InviteSheet'
import DiwaliFragment_2 from '@/library/Themes/Diwali/DiwaliFragment_2'
import React, { useEffect, useState } from 'react'
import {Cinzel_Decorative} from 'next/font/google'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useSearchParams } from 'next/navigation'
import { diwaliWishes } from '@/library/Themes/Diwali/wishe'
import { Suspense } from 'react';

const Cinzel = Cinzel_Decorative({
  weight:['400'],
  subsets:["latin"],
  display:'auto'
})
function page() {
  const params = useSearchParams()
  const [Greeting,setGreeting] = useState('')
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  function getPersonalizedDiwaliWish(wish:number, sender:string, receiver = "") {
    let wishTemplate = diwaliWishes[wish];
    wishTemplate = wishTemplate.replace("{sender}", sender);
    if (receiver) {
      wishTemplate = wishTemplate.replace("{receiver}", receiver);
    } else {
      wishTemplate = wishTemplate.replace("{receiver}, ", "");
    }
    return wishTemplate;
  }
  useEffect(()=>{
    if(params){
      const personName = params?.get('personName') as string
      const wish = params?.get('wish') as string
      const participant = params?.get('participant') as string
      if(wish){
        const getWish = getPersonalizedDiwaliWish(parseInt(wish),personName,participant)
        if(personName && wish){
          setGreeting(getWish)
          onOpen()
        }
      }
    }
  },[])

  return (
    <DiwaliFragment_2>
       <div className='absolute flex w-full h-full justify-center items-center'>
       <Modal 
        classNames={{
          backdrop: "backdrop-blur-md bg-gradient-to-t from-orange-900 to-zinc-900/10  backdrop-opacity-20"
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        >
        <ModalContent className="bg-transparent bg-cover sm:bg-cover bg-no-repeat bg-[url('/Themes/Diwali/ic_wsh.jpg')]">
          {(onClose) => (
            <>
              <ModalHeader>

              </ModalHeader>
              <ModalBody className='my-auto text-[#ffecae] flex justify-center items-center'>
                <span className='h-32'></span>
                <span className={`text-center sm:pt-8 text-xs ${Cinzel.className}`}>
                  {
                    Greeting ? Greeting : 'no Greetings !'
                  }
                </span>
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </div>
      <div className='m-5 flex w-full sm:justify-end justify-center items-end sm:items-start mb-32'>
        <InviteSheet/>
      </div>
    </DiwaliFragment_2>
  )
}

export default page

