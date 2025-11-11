import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      {/* HEADINGS */}
      <h1 className="text-center text-light-green text-4xl font-bold my-8">
        Contact
      </h1>
      <h1 className="text-center text-4xl font-extrabold">
        Want to get in touch?
      </h1>
      <h2 className="text-center my-6 font-extrabold text-lg text-gray-600">
        Use this contact form below. We typically reply within 24 hours.
      </h2>

      {/* CONTACT FORM */}
      <div className="bg-gray-100 w-full md:w-[60%] lg:w-[50%] flex flex-col items-center p-8 md:p-12 rounded-md shadow-md">
        <label htmlFor="name" className="text-sm self-start md:self-start">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          className="ring-1 ring-gray-400 p-2 rounded-md w-full my-2 placeholder:text-xs"
        />

        <label htmlFor="email" className="text-sm mt-4 self-start">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          className="ring-1 ring-gray-400 p-2 rounded-md w-full my-2 placeholder:text-xs"
        />

        <label htmlFor="message" className="text-sm mt-4 self-start">
          Message
        </label>
        <textarea
          name="message"
          rows={8}
          placeholder="Enter Message"
          className="ring-1 ring-gray-400 p-2 rounded-md w-full my-2 placeholder:text-xs"
        ></textarea>

        <button className="bg-light-green text-white text-xs p-3 px-9 mt-4 rounded-md cursor-pointer hover:bg-green-600 transition-all duration-300">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
