'use client'

import { useRef, useEffect, Fragment } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Tab } from '@headlessui/react'
import { Transition } from '@headlessui/react'
import { Caveat } from 'next/font/google'
import TabImage01 from '@/public/tabs-image-01.jpg'
import Tab0Image2 from '@/public/tabs-image-02.jpg'
import Tab0Image3 from '@/public/tabs-image-03.jpg'
import Accordion from './accordion'




export default function Faq() {

    const faqs = [
        {
          title: "What are the hackathon tracks/themes?",
          text: "The event features five themes – Manufacturing Revolution, Tech Titans showcase, AgriTech Revolution, Cross-Sector Collaborations and Services Innovation Hub. You can browse the specific problem statements and suggested ideas during the application process. ",
          active: true,
        },
        {
          title: "What kind of prototypes can we build?",
          text: "Teams can build web/mobile apps, data visualisation dashboards, intelligent systems, IoT applications, or hardware prototypes. Ultimately, new solutions or extensions of existing open-source projects are allowed during the hackathon.",
          active: false,
        },
        {
          title: "Where do we submit the final presentations?",
          text: "Teams upload a video recording of their product demo and slides to the portal. The presentation and Q&A occur virtually over video conference with judging panels. ",
          active: false,
        },
        {
          title: "What kind of prizes can be won?",
          text: "The top 3 teams in each theme win cash prizes worth Rs.50,000, Rs.25,000 and Rs.15,000, respectively. Specialised sponsor prizes for gear, grants, and acceleration opportunities also exist.",
          active: false,
        },
        
      ]

  
  return (
    
    <section className="relative bg-white">

<div className="absolute  pointer-events-none opacity-10 " aria-hidden="true">
    <img className='h-[500px] -ml-[170px]' src='./illus.png' alt="Flower and sky"></img>
    <svg width="1360" height="978" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="70%" y1="0%" x2="50%" y2="70%" id="illustration-01">
          <stop stopColor="#E54697" offset="20%" />
          <stop stopColor="#696EE4" offset="100%" />
          
        </linearGradient>
      </defs>
      
    </svg>
  </div>



        
      

        <div className="w-full max-w-4xl mx-auto px-4 md:px-6 py-24 ">

        <div className="max-w-3xl mx-auto text-center pb-1 md:pb-1">
            <h1 className="h2 mb-4">FAQ</h1>
            <p className="text-xl text-gray-600 mb-[60px]">Most frequently asked Questions</p>
          </div>

            
        {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.title} id={`faqs-${index}`} active={faq.active}>
              {faq.text}
            </Accordion>
          ))}

        
                    
                    
                
                
                </div>
                </section>
  )
}    

            

        

    
        
