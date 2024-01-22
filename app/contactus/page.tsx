"use client";

import { useState } from "react";
import { submitContactUs } from "./action";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <title> Contact Us</title>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className="flex flex-col sm:flex-row pt-32 pb-12 md:pt-40 md:pb-0"
          data-aos="zoom-y-out"
        >
          {/* Page header */}
          <div className="lg:w-1/2 lg:mx-6   pb-12 md:pb-20">
            <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              Get in Touch!
            </h1>
            <br />
            <h5 className="h4 text-gray-400">Drop your mail at</h5>
            <h2 className="h4 mb-20">contact@sparkx.co.in</h2>

            <h5 className="h4 mt-8 text-gray-400">Make a call to </h5>
            <h2 className="h4">+91 80720 03967</h2>

            <br />
            <br />
          </div>

          {/* Form */}
          <div className="lg:w-1/2 lg:mx-6 pb-12 md:pb-20">
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="long-text"
                  >
                    Message
                    <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="long-text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-input w-full resize-none text-gray-800"
                    placeholder="Type your Message"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button
                    onClick={(e) => {

                      e.preventDefault();
                      // toast.success("Your message goes here");
                      submitContactUs(name, email, message);
                    }}
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
