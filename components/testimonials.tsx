import Link from "next/link";

export default function Testimonials() {
  return (
    <section className="relative">
      <div className="mt-20 md-20 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section header */}

          <div className="py-12 mt-1 mb-10">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center mb-5">
              <h2 className="h2 mb-4">Official Tech Partner</h2>
              <p className="text-xl text-gray-600" data-aos="zoom-y-out">
                Empowering Innovation, Enabling Progress: Our Trusted Official
                Tech Partner.
              </p>
            </div>
            <Link href="https://www.innovationgeeks.in/">
              <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl mt-10 mb-[110px]">
                <div className="flex flex-wrap justify-center  align-center">
                  <div className="flex justify-center col-span-1 p-8 border rounded-xl">
                    <img className="max-h-12" src="/ig.png" alt="logo" />
                  </div>
                </div>
              </div>
            </Link>

            <div className="max-w-3xl mx-auto text-center mb-5">
              <h2 className="h2 mb-4">Seed Funding Partner</h2>
              <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              Empowering Growth, Cultivating Success: Our Trusted Seed Funding Partner

              </p>
            </div>
            <Link href="https://enlightenvc.online/">
              <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl mt-10 mb-[110px]">
                <div className="flex flex-wrap justify-center  align-center">
                  <div className="flex justify-center col-span-1 p-8 border rounded-xl">
                    <img className="max-h-[130px]" src="/eaf.jpg" alt="logo" />
                  </div>
                </div>
              </div>
            </Link>

            <div className="max-w-3xl mx-auto text-center mt-3 mb-5">
              <h2 className="h2 mb-4">Our Sponsors</h2>
              <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              Elevate Your Vision with the Support of Our Valued Sponsors
              </p>
            </div>

            <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl py-14">
              <div className="grid grid-cols-2 gap-0.5 md:grid-cols-6">
                <div className="flex justify-center col-span-1 p-8 border rounded-xl">
                  <img className="max-h-12" src="/ippopay.jpg" alt="logo" />
                </div>
                <div className="flex justify-center col-span-1 p-8 border rounded-xl">
                  <img className="max-h-12" src="/kissflow.png" alt="logo" />
                </div>
                <div className="flex justify-center col-span-1 p-8 border rounded-xl">
                  <img className="max-h-12" src="/tamil.png" alt="logo" />
                </div>
                <div className="flex justify-center col-span-1 p-8 border rounded-xl">
                  <img className="max-h-12" src="/zoho.jpg" alt="logo" />
                </div>
                <div className="flex justify-center col-span-1 p-8 border rounded-xl">
                  <img
                    className="max-h-12"
                    src="https://res.cloudinary.com/duytedcdh/image/upload/v1705768378/sparkx_2024/laxwxwzaoi99cndoar5g.jpg"
                    alt="logo"
                  />
                </div>
                <div className="flex justify-center col-span-1 p-8 border rounded-xl">
                  <img className="max-h-12" src="/vivriti.jpg" alt="logo" />
                </div>
                <div className="flex justify-center col-span-1 p-8 border rounded-xl">
                  <img className="max-h-12" src="/flintobox.jpg" alt="logo" />
                </div>
                <div className="flex justify-center col-span-1 p-8 border rounded-xl">
                  <img className="max-h-12" src="/AWS.jpg" alt="logo" />
                </div>
                <div className="flex justify-center col-span-1 p-8 border rounded-xl">
                  <img className="max-h-12" src="/cartlane.jpg" alt="logo" />
                </div>
                <div className="flex justify-center col-span-1 p-8 border rounded-xl">
                  <img className="max-h-12" src="/happyhand.jpg" alt="logo" />
                </div>
                <div className="flex justify-center col-span-1 p-8 border rounded-xl">
                  <img className="max-h-12" src="/guvi.jpg" alt="logo" />
                </div>
                <div className="flex justify-center col-span-1 p-8 border rounded-xl">
                  <img className="max-h-12" src="/grinntech.jpg" alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
