export const metadata = {
    title: 'About Us',
    description: 'Page description',
  }
  
  import Link from 'next/link'
  import Image from 'next/image';
  import Footer from '@/components/ui/footer';
  import Team from '@/components/our-team';
  import Banner1 from '@/components/banner1';

  
  export default function AboutUs() {
    return (
      <section className="relative">
        





        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="">
            



        {/* Section header */}
        <section className="overflow-hidden  pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]  " data-aos="zoom-y-out">

          
        

        <div className="container mx-auto ">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="./images/3.JPG"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="./images/2.jpg"
                      alt=""
                      className="w-full rounded-2xl "
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="./images/4.JPG"
                      alt=""
                      className="w-full rounded-2xl "
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="./images/5.jpeg"
                      alt=""
                      className="w-full rounded-2xl "
                    />
                  </div>
                </div>
              </div>
            </div>
            
        
                   

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
              <div className="relative inline-flex text-indigo-500 font-semibold">
                            About Us
                            <svg className="fill-indigo-300 absolute top-full w-full" xmlns="http://www.w3.org/2000/svg" width="166" height="4">
                                <path d="M98.865 1.961c-8.893.024-17.475.085-25.716.182-2.812.019-5.023.083-7.622.116l-6.554.067a2910.9 2910.9 0 0 0-25.989.38c-4.04.067-7.709.167-11.292.27l-1.34.038c-2.587.073-4.924.168-7.762.22-2.838.051-6.054.079-9.363.095-1.994.007-2.91-.08-3.106-.225l-.028-.028c-.325-.253.203-.463 1.559-.62l.618-.059c.206-.02.42-.038.665-.054l1.502-.089 3.257-.17 2.677-.132c.902-.043 1.814-.085 2.744-.126l1.408-.06c4.688-.205 10.095-.353 16.167-.444C37.413 1.22 42.753.98 49.12.824l1.614-.037C54.041.707 57.588.647 61.27.6l1.586-.02c4.25-.051 8.53-.1 12.872-.14C80.266.4 84.912.373 89.667.354l2.866-.01c8.639-.034 17.996 0 27.322.03 6.413.006 13.168.046 20.237.12l2.368.027c1.733.014 3.653.05 5.712.105l2.068.064c5.89.191 9.025.377 11.823.64l.924.09c.802.078 1.541.156 2.21.233 1.892.233.29.343-3.235.364l-3.057.02c-.446.003-.89.008-1.33.014a305.77 305.77 0 0 1-4.33-.004c-2.917-.005-5.864-.018-8.783-.019l-4.982.003a447.91 447.91 0 0 1-3.932-.02l-4.644-.023-4.647-.014c-9.167-.026-18.341-.028-26.923.03l-.469-.043Z" />
                            </svg>
                        </div>
                <h2 className="h2 mb-9 mt-2 " data-aos="zoom-y-out">Our Story</h2>
                <p className="mb-7 text-lg text-gray-600">
                SparkX 2024 is Tamil Nadu's largest inter-collegiate hackathon, hosting 5,000 students from across the state to innovate solutions in Manufacturing Revolution, 
                Tech Titans Showcase, AgriTech, Cross-Sector Collaborations, and Future of Work on September 6 & 7 in Coimbatore. 
                </p>
                <p className="mb-7 text-lg text-gray-600">
                Participants can benefit from expert guidance, access 
                cutting-edge cloud platforms and kits from sponsors, and showcase their prototypes for a chance to win cash prizes, internships, and licensing deals. The 10-week hackathon
                 concludes with a grand demo day and awards ceremony attended by tech CEOs and celebrity judges. Interested students must register as a team by April 15, 2024.
                </p>
                <p className="mb-7 text-lg text-gray-600">
                SparkX's mission is to nurture a culture of innovation, cultivate ideas, and translate these ideas into solutions 
                for real-world problems by catalysing the student community. SparkX has ambitions to take the 
                 platform global by 2025 as Asia's most aspirational and large-scale hackathon that draws the builders of tomorrow. Register to join us now if you feel the
                  spark and hunger to build change using technology!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Brands Section Start */}

      
        <div className="container mx-auto -mb-[90px] -mt-[40px]">
        <div className="pt-32 pb-12 md:pt-[60px]  content-center">
     <div className="max-w-6xl mx-auto text-center mb-5">
            <h2 className="h2 text-4xl">Organizers</h2>
            
          </div>


{/* Items */}
<div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-4">


{/* Item */}
<div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
  <img className="max-w-full fill-current text-gray-400" src="/startnet.png" width="144" height="24">
    
  </img>
</div>

{/* Item */}
<div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
  <img className="max-w-full fill-current text-gray-400" src="/growbinar.png" width="194" height="24">
    
  </img>
</div>


{/* Item */}
<div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
  <img className="max-w-full fill-current text-gray-400" src="/startuptn.png" width="194" height="24">
    
  </img>
</div>

{/* Item */}
<div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
  <img className="max-w-full fill-current text-gray-400" src="/dreamtn.png" width="114" height="14">
    
  </img>
</div>


</div>

        </div>
        </div>
     
      {/* ====== Brands Section End */}


          <Team />

          
  
          </div>


        </div>

      </section>
    )
  }
  