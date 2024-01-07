import Testimonials from "@/components/testimonials";
import Link from "next/link";

export const metadata = {
  title: "Partners",
};

export default function Partners() {
  return (
    <section>
      <section className="overflow-hidden  pt-20 pb-12  " data-aos="zoom-y-out">
        <div className="w-full px-4 lg:w-full xl:w-full">
          <div className="mt-10 mx-10 lg:mt-0">
            <h2 className="h2 mb-9 mt-2 text-center " data-aos="zoom-y-out">
              Partner
            </h2>

            <div className="max-w-3xl mt-6 mx-auto my-2  pb-1 md:pb-1">
              <p className="text-xl text-gray-600 text-center">
                SparkX 2024 brings together partners across academia,
                corporations, government, startups, incubators, and technology
                providers. We cultivate a diverse ecosystem united by a shared
                goal - empowering the next generation of innovators. SparkX
                2024, you can access and recruit the brightest young minds,
                propose real-world challenges for hackers to develop impactful
                solutions, provide mentors and judges to support participants,
                incentivise youth through branded prizes and grants, host
                workshops to showcase your organisation’s innovative work, gain
                exceptional visibility through speaking opportunities, expo
                booths and media coverage, and network with fellow industry
                leaders committed to empowering the next generation and driving
                change. Join our diverse ecosystem united across academia,
                corporate, government and more to cultivate talent and ideas
                that will build the future.
              </p>
            </div>

            <h2 className="h2 mb-9 mt-8 text-center " data-aos="zoom-y-out">
              Details on sponsor partners
            </h2>

            <Testimonials />

          </div>
        </div>
      </section>
    </section>
  );
}
