"use client";

import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

type DropdownProps = {
  children: React.ReactNode;
  title: string;
};

export default function DropdownRight({ children, title }: DropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <li
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
      onFocus={() => setDropdownOpen(true)}
      onBlur={() => setDropdownOpen(false)}
    >
      <a
        className={`font-medium  px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out `}
        href="#0"
        aria-expanded={dropdownOpen}
        onClick={(e) => e.preventDefault()}
      >
        {title}
        <svg
          className="w-2.5 h-2.5 ms-1 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </a>
      <Transition
        show={dropdownOpen}
        as="ul"
        className="origin-top-left absolute top-0 left-full w-40 bg-white py-2 ml-4 rounded shadow-lg font-medium text-gray-600 hover:text-gray-900"
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 translate-x-2"
        enterTo="opacity-100 translate-x-0"
        leave="transition ease-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {children}
      </Transition>
    </li>
  );
}
