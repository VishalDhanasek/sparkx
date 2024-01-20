import Link from "next/link";
import React from "react";


export const metadata = {
  title: "Mentor Details",
};

export default function MentorDetails() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-9xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-4 text-xl font-bold text-gray-800 ">
              Personal Information:
            </h2>
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your Name"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="email"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your Email"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="phone"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your Phone Number"
                    required
                  />
                </div>
              </div>

              <h2 className="mb-4 text-xl font-bold text-gray-800 ">
                University/College Details:
              </h2>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    University/College Name{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your University/College name"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Year of study <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="number"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your year of study"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Course Name/Program <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your Course Name/Program"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    University/College City
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your University/College City"
                    required
                  />
                </div>
              </div>

              <h2 className="mb-4 text-xl font-bold text-gray-800 ">
                Ambassador Motivation:
              </h2>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Why are you interested in becoming a Campus Ambassador
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full text-gray-800"
                    placeholder="Give an detailed answer here"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    What skills and experiences do you bring to this role
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full text-gray-800"
                    placeholder="Give an detailed answer here"
                    required
                  />
                </div>
              </div>

              <h2 className="mb-4 mt-10 text-xl font-bold text-gray-800 ">
                Mentorship Topics
              </h2>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Key topics comfortable mentoring students on
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your Key topics comfortable mentoring students on"
                    required
                  />
                </div>
              </div>

              <h2 className="mb-4 mt-10 text-xl font-bold text-gray-800 ">
                Availability
              </h2>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Days/times available for mentorship sessions
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your Days/times available for mentorship sessions"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    In-person or virtual preference
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your In-person or virtual preference"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Expected number of hours available
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your Expected number of hours available"
                    required
                  />
                </div>
              </div>


              <div className=" -mx-3 mb-20 mt-10 grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 float-right">
                <Link
                  href="#"
                  className="btn-sm text-white bg-blue-600 hover:bg-blue-700 mb-20 ml-3 "
                >
                  <span>Register</span>
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
