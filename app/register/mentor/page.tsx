'use client'

import Link from "next/link";
import { use, useState } from "react";
import { registerMentor } from "./action";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

export default function MentorDetails() {

  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [organization, setOrganization] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [techBackground, setTechBackground] = useState('')
  const [experience, setExperience] = useState('')
  const [topics, setTopics] = useState('')
  const [dateAndTime, setDateAndTime] = useState('')
  const [preference, setPreference] = useState('')
  const [hoursAvailable, setHoursAvailable] = useState('')

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <title>Mentor Details</title>
      <div className="max-w-9xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-4 text-xl font-bold text-gray-800 ">
              Personal Information
            </h2>
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your Name"
                    required
                    onChange={(e)=>setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Position <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your Position"
                    required
                    onChange={(e)=>setPosition(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Organization <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your Organization"
                    required
                    onChange={(e)=>setOrganization(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="email"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your Email"
                    required
                    onChange={(e)=>setEmail(e.target.value)}
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
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>

              <h2 className="mb-4 mt-10 text-xl font-bold text-gray-800 ">
                Expertise
              </h2>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Technical background and skills
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your Technical background and skills"
                    required
                    onChange={(e)=>setTechBackground(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Industry experience
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="number"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your Technical background and skills"
                    required
                    onChange={(e)=>setExperience(e.target.value)}
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
                    onChange={(e)=>setTopics(e.target.value)}
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
                    onChange={(e)=>setDateAndTime(e.target.value)}
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
                    onChange={(e)=>setPreference(e.target.value)}
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
                    onChange={(e)=>setHoursAvailable(e.target.value)}
                  />
                </div>
              </div>

              <div className=" -mx-3 mb-20 mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 float-right">
                <button
                  className="btn-sm text-white bg-blue-600 hover:bg-blue-700 mb-20 ml-3"
                  onClick={
                    ()=>{
                      registerMentor({name, position,organization, email,phoneNumber, techBackground, experience, topics, dateAndTime, preference, hoursAvailable})
                      toast.success('Submitted successfully')
                    }
                  }
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
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
