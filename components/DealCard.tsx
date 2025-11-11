import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  offer: string;
  title: string;
}

const DealCard = ({ image, offer, title }: Props) => {
  return (
    <div className=" m-4 rounded-md  cursor-pointer p-4 md:p-0   shadow-xl">
      <div className="relative w-[280px] h-[220px] md:w-[350px] md:h-[250px] mb-12 flex items-center justify-center">
        <Image
          src={image}
          alt="post"
          fill
          className="object-contain rounded-lg"
        />
      </div>
      <div className="p-6 pb-12">
        <h1 className="text-light-green uppercase tracking-wider text-md font-bold text-center">
          {offer}
        </h1>
        <h1 className="text-custom-black font-extrabold text-lg my-4 text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default DealCard;
