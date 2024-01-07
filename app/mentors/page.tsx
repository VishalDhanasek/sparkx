import Faq from "@/components/faq";
import Link from "next/link";

export const metadata = {
  title: "Mentors",
};

export default function Mentors() {
  const faqs = [
    {
      title: "Who can register as a mentor?",
      text: "We welcome applications from technology professionals, subject matter experts, designers, engineers and others with at least five years of industry experience who are passionate about innovation. Strong communication skills are valued as mentors guide students through questions and advice.",
      active: true,
    },
    {
      title: "What is the expected time commitment?",
      text: "We anticipate mentors commit to 8-10 hours across the 2-month hackathon timeline. This would involve an initial kick-off, multiple touchpoint sessions with an assigned student team and concluding with the final project demos.",
      active: false,
    },
    {
      title: "How are mentors matched to student teams?",
      text: "Students outline their areas of interest and skills when applying. Mentors also indicate their expertise domains in the application. Our program committee strategically matches mentors to teams based on mutual areas to enable practical guidance aligned with mentor strengths.",
      active: false,
    },
    {
      title: "What format do the mentorship sessions take?",
      text: "Teams can meet their assigned mentors virtually over video calls or in person if attending onsite for parts of the hackathon. Specific touchpoints like the kick-off and finals are in-person events. Additional check-ins can be organised either way based on mentor location and availability.",
      active: false,
    },
    {
      title: "Are travel expenses covered for mentors?",
      text: "We do not sponsor flight and accommodation for out-of-town mentors to attend the in-person portions of the hackathon; travel allowance is outlined to mentors who may need sponsorship before applying.",
      active: false,
    },
  ];
  return (
    <section>
      <section className="overflow-hidden  pt-20 pb-12  " data-aos="zoom-y-out">
        <div className="w-full px-4 lg:w-full xl:w-full">
          <div className="mt-10 mx-10 lg:mt-0">
            <h2 className="h2 mb-9 mt-2 text-center " data-aos="zoom-y-out">
              Mentors
            </h2>

            <div className="max-w-3xl mt-6 mx-auto my-2  pb-1 md:pb-1">
              <p className="text-xl text-gray-600 text-center">
                Mentors are critical in guiding, advising, and supporting
                student teams throughout the hackathon. We welcome experts from
                diverse backgrounds to share their knowledge and perspectives.
              </p>

              <h4 className="h4 mb-9 my-4 lg:mx-4 " data-aos="zoom-y-out">
                Potential mentors include:
              </h4>

              <ul className="list-disc  text-xl lg:mx-4">
                <li className="p-2 lg:mx-6 ">
                  <b>Industry professionals :</b> To provide insights into
                  real-world problems and user needs and evaluate ideas.
                </li>
                <li className="p-2 lg:mx-6 ">
                  <b>Technologists :</b> To advise on feasibility, architecture,
                  and tools for developing projects.
                </li>
                <li className="p-2 lg:mx-6 ">
                  <b>Designers :</b> To provide guidance on UI/UX, product
                  design thinking and customer experience.
                </li>
                <li className="p-2 lg:mx-6 ">
                  <b>Entrepreneurs :</b> To guide business models,
                  product-market fit, and pitching.
                </li>
                <li className="p-2 lg:mx-6 ">
                  <b>Domain experts :</b> To share knowledge on specific
                  industries and nuances.
                </li>
                <li className="p-2 lg:mx-6 ">
                  <b>Recruiters :</b> To provide career coaching and hiring
                  insights.
                </li>
              </ul>
            </div>

            <div className="max-w-3xl mt-6 mx-auto text-center pb-1 md:pb-1">
              <p className="text-xl text-gray-600">
                Mentors would interact with teams during ideation, check in on
                progress, provide feedback, and help prepare final pitches.
                Mentoring is an opportunity to scout promising talent, give
                back, and be inspired by youth innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden  pt-20 pb-12 " data-aos="zoom-y-out">
        <div className="w-full px-4 lg:w-full xl:w-full">
          <div className="mt-10 mx-10 lg:mt-0">
            <h2 className="h2 mb-9 mt-2 text-center " data-aos="zoom-y-out">
              Mentors Responsibilities
            </h2>

            <div className="max-w-3xl mt-6 mx-auto my-2  pb-1 md:pb-1">
              <p className="text-xl text-gray-600 text-center">
                Mentors should offer guidance to help steer the student teams'
                projects and approaches rather than explicitly directing the
                students or making design decisions. They can make technical
                recommendations based on their expertise and experience.
                However, students should drive the goals, innovation, and
                building of prototypes
              </p>

              <h4 className="h4 mb-9 my-4 lg:mx-4 " data-aos="zoom-y-out">
                Spending allotted time in mentorship sessions
              </h4>

              <ul className="list-disc  text-xl lg:mx-4">
                <li className="p-2 lg:mx-6 ">
                  Mentors commit to spending a defined number of hours with
                  assigned student teams
                </li>
                <li className="p-2 lg:mx-6 ">
                  During the sessions, mentors assess students progress and the
                  next steps. They highlight potential issues, offer feedback,
                  and provide their perspective
                </li>
              </ul>

              <h4 className="h4 mb-9 my-4 lg:mx-4 " data-aos="zoom-y-out">
                Asking questions and validating assumptions
              </h4>

              <ul className="list-disc  text-xl lg:mx-4">
                <li className="p-2 lg:mx-6 ">
                  Mentors are crucial in asking constructive questions about
                  students' problem statements, proposed solutions, designs,
                  etc.
                </li>
                <li className="p-2 lg:mx-6 ">
                  This allows students to validate assumptions, test ideas,
                  consider edge cases, and improve.
                </li>
                <li className="p-2 lg:mx-6 ">
                  Asking the right questions facilitates learning over just
                  providing advice
                </li>
              </ul>
            </div>

            <div className="max-w-3xl mt-6 mx-auto text-center pb-1 md:pb-1">
              <h4 className="h4 mb-9 my-4 lg:mx-4 " data-aos="zoom-y-out">
                Connecting teams to subject matter experts
              </h4>
              <p className="text-xl text-gray-600">
                Mentors utilise their professional networks to connect students
                to domain experts who can further guide projects. These experts
                specialising in relevant areas act as additional mentorship
                resources.
              </p>
            </div>

            <div className="max-w-3xl mt-6 mx-auto text-center pb-1 md:pb-1">
              <h4 className="h4 mb-9 my-4 lg:mx-4 " data-aos="zoom-y-out">
                Following hackathon contribution guidelines
              </h4>
              <p className="text-xl text-gray-600">
                While mentors advise teams, there are limits set by hackathons
                regarding direct contributions. Mentors cannot build significant
                prototype code/functionality themselves. The solutions must
                ultimately be student-driven innovation with guidance, not
                over-involvement from mentors.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center my-10">
          <Link
            href="/register/mentor"
            className="btn-sm text-white bg-gradient1 ml-3"
          >
            <span>Register as Mentor</span>
            <svg
              className="w-3 h-3 fill-current text-white shrink-0 ml-2 -mr-1"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                fillRule="nonzero"
              />
            </svg>
          </Link>
        </div>

        <Faq faqs={faqs} />
      </section>
    </section>
  );
}
