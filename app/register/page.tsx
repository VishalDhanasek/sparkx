import Header1 from "@/components/ui/header1";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <Header1 />
      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-8xl mx-auto px-6 mx-auto">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center ">
              <h1 className="h1">Welcome to SparkX 2024 Registration</h1>
            </div>
          </div>
        </div>

        <div className="container p-4 m-4 flex flex-col md:flex-row gap-4 truncate">
          <div className="border-2 border-grey-500 w-full px-2 pb-2">
            <img
              className="p-8"
              src="https://img.freepik.com/free-vector/team-goals-concept-illustration_114360-5175.jpg"
              alt="participant"
            />
            <h2 className="h2 text-xl text-center item-center font-bold mb-4 rtl:space-x-reverse">
            <span className="text-center">Register as participant</span>
            </h2>
            <Link
              href="/register/participants/"
              className="btn-sm text-white bg-gradient1 hover:bg-gradient1 item-center  w-full px-6 ">
              Start Registration
            </Link>
          </div>

          <div className="border-2 border-grey-500 w-full px-2 pb-2">
            <img
              className="p-8"
              src="https://img.freepik.com/free-vector/helping-partner-concept-illustration_114360-8584.jpg"
              width={1380}
              height={720}
              alt="Mentor"
            />
            <h2 className="h2 text-xl text-center item-center font-bold mb-4 rtl:space-x-reverse">
            <span>Register as Mentor</span>
            </h2>
            <Link
              href="/register/mentor"
              className="btn-sm text-white bg-gradient1 hover:bg-gradient1 item-center  w-full px-6  ">
              Start Registration
            </Link>
          </div>

          <div className="border-2 border-grey-500 w-full px-2 pb-2">
            <img
              className="p-8"
              src="https://img.freepik.com/free-vector/ambassador-concept-illustration_114360-7557.jpg"
              alt="Campus Ambassador"
            />
            <h2 className="h2 text-xl  text-center item-center font-bold mb-4 rtl:space-x-reverse">
            <span>Register as Campus Ambassador</span>
            </h2>
            <Link
              href="/register/campusAmbassador"
              className="btn-sm text-white bg-gradient1 hover:bg-gradient1 item-center  w-full px-6 ">
              Start Registration
            </Link>
          </div>


        </div>

        <div className="border-t-4 border-grey-600 mb-20 ">

        </div>
      </section>
    </>
  );
}
