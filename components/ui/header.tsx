'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'
import LogoWhite from './logowhite'

export default function Header() {

  const [top, setTop] = useState<boolean>(false)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
          {top ? <LogoWhite /> : <Logo />}
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            <ul className={`flex grow justify-end flex-wrap items-center ${!top ? 'text-black' : 'text-white'}`}>

              <li>
                <Link href="/" className={`font-medium  px-5 py-3 flex items-center transition duration-150 ease-in-out ${!top ? 'text-gray-600' : 'text-white'}`}>Events</Link>
              </li>

              <li>
                <Link href="/aboutus" className={`font-medium  px-5 py-3 flex items-center transition duration-150 ease-in-out ${!top ? 'text-gray-600' : 'text-white'}`}>About Us</Link>
              </li>


              <li>
                <Link href="/mentors" className={`font-medium  px-5 py-3 flex items-center transition duration-150 ease-in-out ${!top ? 'text-gray-600' : 'text-white'}`}>Mentors</Link>
              </li>

              <li>
                <Link href="/partners" className={`font-medium  px-5 py-3 flex items-center transition duration-150 ease-in-out ${!top ? 'text-gray-600' : 'text-white'}`}>Partners</Link>
              </li>

              <Dropdown children={<>
              <li>
                <Link href="/themes/agriTech" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out ">Agri-Tech Revolution</Link>
              </li>
              <li>
                  <Link href="/themes/manufacturingRev" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Manufacturing Revolution</Link>
              </li>
              <li>
                  <Link href="/themes/techTitans" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Tech Titans Showcase</Link>
              </li>
              <li>
                  <Link href="/themes/servicesInnovation" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Services Innovation Hub</Link>
              </li>
              <li>
                  <Link href="/themes/crossSector" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Cross Sector Collaborations</Link>
              </li>

              </>}
              title={'Themes'} />



              <li>
                <Link href="/contactus" className={`font-medium  px-5 py-3 flex items-center transition duration-150 ease-in-out ${!top ? 'text-gray-600' : 'text-white'}`}>Contact Us</Link>
              </li>
              </ul>


            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">

              <li>
                <Link href="/register" className="btn-sm text-white bg-gradient1 ml-3">
                  <span>Register</span>
                  <svg className="w-3 h-3 fill-current text-white shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </Link>
              </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
