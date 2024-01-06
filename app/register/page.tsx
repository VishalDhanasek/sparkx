import Link from "next/link";

export default function Register() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center ">
            <h1 className="h1">Welcome to SparkX 2024 Registration</h1>
          </div>
        </div>

        <div className="flex items-center my-6">

        {/* <div className="flex-wrap -mx-3 mb-10"> */}
          <div className="flex-item w-1/2 px-3 mx-auto">
            <h2 className="h2 m-4 lg:px-24 text-xl text-center items-center space-x-3 rtl:space-x-reverse">
              <span className="text-center">Register as participant</span>
            </h2>
            <Link
              href="/register/participants/"
              className="btn-sm text-white bg-gradient1 hover:bg-gradient1 w-full"
            >
              <span>Start Registration</span>
            </Link>
          </div>

          <div className=" flex-item w-1/2 px-3 mx-auto">
            <h2 className="h2 m-4 lg:px-24 text-xl text-center items-center space-x-3 rtl:space-x-reverse">
              <span>Register as Mentor</span>
            </h2>
            <Link
              href="/register/mentor"
              className="btn-sm text-white bg-gradient1 hover:bg-gradient1 w-full"
            >
              <span>Start Registration</span>
            </Link>
          </div>
        {/* </div> */}

          <div
            className="border-t border-gray-300 grow mr-3"
            aria-hidden="true"
          ></div>
        </div>


      </div>
    </section>
  );
}
