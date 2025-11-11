import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 md:px-12 lg:px-24">
      {/* PAGE TITLE */}
      <h1 className="text-center text-light-green text-4xl font-bold my-12">
        About
      </h1>

      {/* SUBTITLE */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
        About Justin Barrett
      </h2>

      {/* MAIN CONTENT */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20 w-full">
        {/* TEXT SECTION */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="font-extrabold text-xl text-custom-black">
            Hey Technology Enthusiast,
          </h3>

          <p className="my-6 font-semibold text-sm text-gray-700">
            Incididunt ut labore et dolore magna aliqua. Ut enim ad ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </p>

          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </p>

          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            Incididunt ut labore et dolore magna aliqua. Ut enim ad ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/assets/about.png"
            alt="about"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
