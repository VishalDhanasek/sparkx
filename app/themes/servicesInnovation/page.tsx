export const metadata = {
  title: "Services Innovation Hub",
  description: "Page description",
};

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/ui/footer";
import Team from "@/components/our-team";
import Banner1 from "@/components/banner1";

export default function ServicesInnovation() {
  return (
    <section className="relative">
      <svg
        className="absolute -mt-24 blur-3xl opacity-30"
        fill="none"
        viewBox="0 0 400 400"
        height="90%"
        width="90%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_10_20)">
          <g filter="url(#filter0_f_10_20)">
            <path
              d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
              fill="#696EE4"
            ></path>
            <path
              d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
              fill="#696EE4"
            ></path>
            <path
              d="M320 400H400V78.75L106.2 134.75L320 400Z"
              fill="#E54697"
            ></path>
            <path
              d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
              fill="#E54697"
            ></path>
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="280.666"
            id="filter0_f_10_20"
            width="350.666"
            x="-150.333"
            y="30.333"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_10_20"
              stdDeviation="80.1666"
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <section>
          <div className="items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl ">
            <div className="text-left">
              <div
                className="items-center mx-auto lg:inline-flex"
                data-aos="zoom-y-out"
              >
                <div className="grid grid-cols-1 mt-10 gap-6 lg:grid-cols-2 lg:gap-12">
                  <div>
                    <div className="relative mb-4 inline-flex text-gradient1 font-semibold">
                      Theme 4
                      <svg
                        className="fill-indigo-300 absolute top-full w-full"
                        xmlns="http://www.w3.org/2000/svg"
                        width="166"
                        height="4"
                      >
                        <path d="M98.865 1.961c-8.893.024-17.475.085-25.716.182-2.812.019-5.023.083-7.622.116l-6.554.067a2910.9 2910.9 0 0 0-25.989.38c-4.04.067-7.709.167-11.292.27l-1.34.038c-2.587.073-4.924.168-7.762.22-2.838.051-6.054.079-9.363.095-1.994.007-2.91-.08-3.106-.225l-.028-.028c-.325-.253.203-.463 1.559-.62l.618-.059c.206-.02.42-.038.665-.054l1.502-.089 3.257-.17 2.677-.132c.902-.043 1.814-.085 2.744-.126l1.408-.06c4.688-.205 10.095-.353 16.167-.444C37.413 1.22 42.753.98 49.12.824l1.614-.037C54.041.707 57.588.647 61.27.6l1.586-.02c4.25-.051 8.53-.1 12.872-.14C80.266.4 84.912.373 89.667.354l2.866-.01c8.639-.034 17.996 0 27.322.03 6.413.006 13.168.046 20.237.12l2.368.027c1.733.014 3.653.05 5.712.105l2.068.064c5.89.191 9.025.377 11.823.64l.924.09c.802.078 1.541.156 2.21.233 1.892.233.29.343-3.235.364l-3.057.02c-.446.003-.89.008-1.33.014a305.77 305.77 0 0 1-4.33-.004c-2.917-.005-5.864-.018-8.783-.019l-4.982.003a447.91 447.91 0 0 1-3.932-.02l-4.644-.023-4.647-.014c-9.167-.026-18.341-.028-26.923.03l-.469-.043Z" />
                      </svg>
                    </div>
                    <h2
                      className="text-5xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4"
                      data-aos="zoom-y-out"
                    >
                      Services Innovation Hub 
                    </h2>
                  </div>
                  <div className="lg:ml-auto">
                    <p className="mt-4 text-lg text-gray-600 tracking-tight lg:mt-4">
                    The service sector spanning industries like retail, hospitality, healthcare, and education is a 
                    vital driver of global economic development and employment. However, there are still many unsolved 
                    challenges and opportunities to enhance access, and efficiency across modern service delivery models. 
                    The Service Incubation Hub track aims to encourage student innovators 
                     to reimagine next-generation services by thoughtfully leveraging technologies like artificial intelligence, 
                     intelligent automation, etc.
                    
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative items-center w-full mx-auto mt-12"
              data-aos="zoom-y-out"
            >
              <img
                className="object-cover object-center w-full bg-gray-300 h-96"
                src="https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
            <div>
              <div className="pt-12 mx-auto lg:max-w-7xl">
                <dl className="grid grid-cols-1 mb-20 gap-6 space-y-0 lg:gap-24 lg:grid-cols-3">
                  <div data-aos="zoom-y-out" data-aos-delay="100">
                    <div>
                      <p className="text-lg font-bold leading-6 text-black">
                      Intelligent Retail
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                    The Intelligent Retail sub-theme focuses on leveraging artificial intelligence, machine learning, 
                    automation and data analytics to radically transform physical and digital commerce experiences. This 
                    encompasses innovations across hyper-personalized promotions, frictionless payment systems, efficient 
                    inventory management and speedy last-mile delivery by predicting consumer needs and optimizing retail 
                    operations from end-to-end. 
                    </div>
                  </div>
                  <div data-aos="zoom-y-out" data-aos-delay="200">
                    <div>
                      <p className="text-lg font-bold leading-6 text-black">
                      Predictive Healthcare
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                    Leverages data and AI for improved diagnostics and personalized care. Seeks to make quality healthcare more
                     preventative, accessible, and affordable. Involves solutions like digital therapeutics tailored to genetics, 
                     sensors enabling telemedicine, and hospital flow optimization. Aim is predicting and shaping health outcomes 
                     through data insights and intelligent systems.
                    </div>
                  </div>
                  <div data-aos="zoom-y-out" data-aos-delay="300">
                    <div>
                      <p className="text-lg font-bold leading-6 text-black">
                      Immersive Learning
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                    The Immersive Learning theme aims to reimagine education and training by leveraging
                     extended reality technologies like virtual and augmented reality. The goal is to build highly engaging,
                      pedagogically sound learning experiences that leverage immersive simulations, intelligent content recommendation engines,
                       and gamification elements to maximize engagement and outcomes. Participants could develop VR field trips that transport 
                       students to any time and place, or use game mechanics and scoring to motivate learning etc
                    </div>
                  </div>
                  <div data-aos="zoom-y-out" data-aos-delay="300">
                    <div>
                      <p className="text-lg font-bold leading-6 text-black">
                      Sustainable Tourism
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                    The Sustainable Tourism theme challenges creating solutions to promote responsible practices in the tourism industry. Participants 
                    could build AI-powered itinerary planners that optimize routes and transportation for minimal environmental impact, AR/VR cultural 
                    heritage experiences that support preservation. The
                     goal is to balance tourism growth with conservation, community inclusion, and authenticity. Innovations from this theme could
                      provide the insights needed to make sustainable tourism an achievable reality globally.
                    </div>
                  </div>
                  
                  
                </dl>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
