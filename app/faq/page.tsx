export const metadata = {
    title: 'Events',
    description: 'Page description',
  }
  
 import Faq from "@/components/faq"
 import Header1 from "@/components/ui/header1";


  
  export default function FAQ() {
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
      <section className="relative">
        <Header1/>


        <div className="max-w-6xl mx-auto px-4 sm:px-6">

            

        <Faq faqs={faqs} />

       
          
  
          </div>
          

          

          
        
        

      </section>
    )
  }
  