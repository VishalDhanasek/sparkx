'use client'

import { useRef, useEffect, Fragment } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Tab } from '@headlessui/react'
import { Transition } from '@headlessui/react'
import { Caveat } from 'next/font/google'
import TabImage01 from '@/public/tabs-image-01.jpg'
import Tab0Image2 from '@/public/tabs-image-02.jpg'
import Tab0Image3 from '@/public/tabs-image-03.jpg'





export default function Timeline() {

  
  return (
    <section className="relative bg-gray-100">
        <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
        
      

        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24 ">
        <div className="max-w-3xl mx-auto text-center pb-1 md:pb-1">
            <h1 className="h2 mb-4">SparkX Timeline</h1>
            <p className="text-xl text-gray-600">A Journey through the Timeline of Tech Excellence.</p>
          </div>
            
        

            <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
                

                <div className="w-full max-w-4xl mx-auto">
                
                    
                    <div className="-my-6">

                        
                        <div className="relative pl-8 sm:pl-32 py-6 group">
                            
                            <div className="font-['caveat'] font-medium text-l text-gradient1 mb-1 sm:mb-0">Online</div>
                            
                            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-gradient1 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0 inline-flex items-center justify-center text-xs font-semibold uppercase w-25 h-7 mb-3 sm:mb-0 text-emerald-600 ">March 1 to <br></br> April 15, 2024</time>
                                <h2 className="h4 ">Idea Submission & Registration</h2>
                            </div>
                          
                            <p className=" text-l text-gray-600">Submit your innovative idea through our streamlined process and register your team to participate in the hackathon.</p>
                        </div>
                        
                      
                        <div className="relative pl-8 sm:pl-32 py-6 group">
                            
                            <div className="font-['caveat'] font-medium text-l text-gradient1 mb-1 sm:mb-0">Online</div>
                            
                            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-gradient1 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0 inline-flex items-center justify-center text-xs font-semibold uppercase w-25 h-7 mb-3 sm:mb-0 text-emerald-600 ">July 6 & 7, 2024</time>
                                <h2 className="h4 ">Quarter Final</h2>
                            </div>
                          
                            <p className=" text-l text-gray-600">In the Quarter Final stage, top teams are selected to advance to the semi-final round after presenting polished prototypes that judges evaluate.</p>
                        </div>
                        
                     
                        <div className="relative pl-8 sm:pl-32 py-6 group">
                            
                            <div className="font-['caveat'] font-medium text-l text-gradient1 mb-1 sm:mb-0">Online</div>
                            
                            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-gradient1 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0 inline-flex items-center justify-center text-xs font-semibold uppercase w-25 h-7 mb-3 sm:mb-0 text-emerald-600 ">Aug 3 & 4, 2024</time>
                                <h2 className="h4 ">Semi Final</h2>
                            </div>
                          
                            <p className=" text-l text-gray-600">The Semi-Final narrows the field to the top finalist teams who will advance to compete in the Final round through rigorous judging.</p>
                        </div>
                        
                        
                        <div className="relative pl-8 sm:pl-32 py-6 group">
                            
                            <div className="font-['caveat'] font-medium text-l text-gradient1 mb-1 sm:mb-0">Offline (Codissia, Coimbatore)</div>
                            
                            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-gradient1 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0  inline-flex items-center justify-center text-xs font-semibold uppercase w-25 h-7 mb-3 sm:mb-0 text-emerald-600 ">Sep 6 & 7, 2024</time>
                                <h2 className="h4 ">Grand Finale</h2>
                            </div>
                          
                            <p className=" text-l text-gray-600">The Grand Finale is the concluding event where finalists demo their innovative prototypes to judges, and winners are announced across all prize categories.</p>
                        </div>
                    </div>
                    
                    
                </div>
                </div>
                </div>
                </section>
  )
}    

            

        

    
        
