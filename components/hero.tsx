import VideoThumb from "@/public/images/hero-image.png";
import Group from "@/public/images/group.png";
import ModalVideo from "@/components/modal-video";
import Timer3 from "./timer";

export default function Hero() {
  return (
    <section className="relative overflow-hidden ">
      <video
        autoPlay
        loop
        muted
        className="min-w-full min-h-full absolute object-cover"
      >
        <source
          src="https://res.cloudinary.com/duytedcdh/video/upload/v1705767665/sparkx_2024/djw3agzwomyta3ixg8il.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0  w-full bg-gray-900/70" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 content-center">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16 ">
            <h1
              className="text-4xl md:text-5xl font-extrabold leading-tighter text-white tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Tamilnadu's Most Awaited Hackathon<br></br>{" "}
              <span className="text-4xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.gradient1),theme(colors.gradient1),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.gradient2),theme(colors.gradient1),theme(colors.gradient1))] bg-[length:200%_auto] animate-gradient">
                SparkX 2024
              </span>
            </h1>
            <div className="max-w-3xl mx-auto mt-10 mb-12">
              <div className="max-w-xl mx-auto content-center">
                <div
                  className="text-white text-center mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 px-4 mt-1 mb-10  text-lg"
                  data-aos="zoom-y-out"
                >
                  <p>
                    <time dateTime="06-09-2024">06</time> &{" "}
                    <time dateTime="07-09-2024">07 September, 2024</time>
                  </p>{" "}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 6 6"
                    className="h-1.5 w-1.5 overflow-visible fill-current stroke-current hidden sm:block"
                  >
                    <path
                      d="M3 0L6 3L3 6L0 3Z"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    ></path>
                  </svg>{" "}
                  <p>Codissia, Coimbatore</p>{" "}
                </div>
              </div>

              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mb-[60px]"
                data-aos="zoom-y-out"
              >
                <div>
                  <a
                    className="btn text-white bg-gradient1  w-full sm:w-auto sm:ml-4"
                    href="/register"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
