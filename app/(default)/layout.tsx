'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <>
      <main className="grow">
        <Header />


        {children}

      </main>

      <Footer />
    </>
  )
}
