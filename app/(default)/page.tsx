export const metadata = {
  title: 'Home',
  description: 'SparkX 2024',
  kewwords: 'SparkX'
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import FancyTestimonialSliderPage from '@/app/fancy-testimonials-slider/page'
import Team from '@/components/our-team'
import Timeline from '@/components/timeline'
import Themes from '@/components/themes'
import Banner123 from '@/components/banner123'
import Takeaway from '@/components/takeaway'
import New from '@/components/ui/new'
import Bento from '@/components/ui/bentogrid'
import Bento1 from '@/components/bento2'
import New1 from '@/components/ui/new1'
import Organizers from '@/components/organizers'
import Timer3 from '@/components/timer'
import Faq from '@/components/faq'



export default function Home() {
  return (
    <>
      <Hero />
      
      <Organizers />
      <Timer3 countdownDays={30}/>
      <Features />
      <New/>
      <Themes/>
      <New1/>
      
      <Testimonials />
      
      <Timeline/>
      <Faq/>
      <Takeaway/>
      <Banner123/>
      

      
      
    </>
  )
}
