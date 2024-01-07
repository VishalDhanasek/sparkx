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
  ];
  return (
    <>
      <Hero />

      <Organizers />
      <Timer3 countdownDays={54} />
      <Features />
      <New/>
      <Themes/>
      <New1/>

      <Testimonials />

      <Timeline/>
      <Faq faqs={faqs} />
      <Takeaway/>
      <Banner123/>




    </>
  )
}
