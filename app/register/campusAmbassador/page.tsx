'use client'

import Link from "next/link";
import React, { useState } from "react";
import { registerAmbassador } from "./action";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

export default function MentorDetails() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [clgName, setClgName] = useState('')
  const [yearOfStudy, setYearOfStudy] = useState('')
  const [courseName, setCourseName] = useState('')
  const [clgCity, setClgCity] = useState('')
  const [interest, setInterest] = useState('')
  const [skillExp, setSkillExp] = useState('')
  const [keyTopic, setKeyTopic] = useState('')
  const [dateAndTime, setDateAndTime] = useState('')
  const [preference, setPreference] = useState('')
  const [hoursAvailable, setHoursAvailable] = useState('')
  const [photoLink, setPhotoLink] = useState('')

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
        <title>
          CampusAmbassador Details
        </title>
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
                    Email Address <span className="text-red-600">*</span>
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
                    onChange={(e)=>setClgName(e.target.value)}
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
                    onChange={(e)=>setYearOfStudy(e.target.value)}
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
                    onChange={(e)=>setCourseName(e.target.value)}
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
                    onChange={(e)=>setClgCity(e.target.value)}
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
                    onChange={(e)=>setInterest(e.target.value)}
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
                    onChange={(e)=>setSkillExp(e.target.value)}
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
                    onChange={(e)=>setKeyTopic(e.target.value)}
                  />
                </div>
              </div>

              <h2 className="mb-4 mt-10 text-xl font-bold text-gray-800 ">
              Ambassador Motivation
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


              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Photo
                    <span className="text-red-600">*</span>
                  </label>
                  <span className="text-gray-600">
                    <p className="text-xs">Upload the picture in google drive, provide public access and share the link here</p>
                  </span>
                  <input
                    id="name"
                    type="link"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your google drive link of your profile picture"
                    required
                    onChange={(e)=>setPhotoLink(e.target.value)}
                  />
                </div>
              </div>


              <div className=" -mx-3 mb-20 mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 float-right">
              <Link href="/register" className="btn-sm text-white bg-gradient1  ml-3 w-50 mb-20">
                  <span>Back</span>
                </Link>
                <button
                  // href=""
                  onClick={
                    ()=>{
                      registerAmbassador({name, email, phoneNumber, clgName, yearOfStudy, courseName, clgCity, interest, skillExp, keyTopic, dateAndTime, preference, hoursAvailable, photoLink})
                      toast.success('Submitted successfully!')
                    }
                  }
                  className="btn-sm text-white bg-gradient1 mb-20 ml-3 "
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
