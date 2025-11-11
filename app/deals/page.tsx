import DealCard from "@/components/DealCard";
import { deals } from "@/data";
import React from "react";

const DealsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* HEADING */}
      <h1 className="text-center text-light-green text-4xl font-bold my-14 p-4">
        Deals
      </h1>

      {/* DEAL CARDS */}
      <section className="w-full flex justify-center">
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
            gap-8 md:gap-12
            max-w-6xl
            place-items-center
          "
        >
          {deals.map((item) => (
            <DealCard
              key={item.id}
              image={item.image}
              offer={item.offer}
              title={item.title}
            />
          ))}
        </div>
      </section>

      {/* VIEW ALL BUTTON */}
      <div className="flex justify-center mt-12 mb-16 w-full">
        <button className="bg-light-green text-white uppercase text-xs p-3 px-10 rounded-md hover:bg-green-600 transition-all duration-300 cursor-pointer">
          View All Deals
        </button>
      </div>
    </div>
  );
};

export default DealsPage;
