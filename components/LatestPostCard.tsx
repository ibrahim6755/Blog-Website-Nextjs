import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  category: string;
  title: string;
  description: string;
}

const LatestPostCard = ({ image, category, title, description }: Props) => {
  return (
    <div className="bg-white m-4 rounded-md overflow-hidden cursor-pointer shadow-2xl">
      <div className="relative w-[350px] h-[250px] mb-12 flex items-center justify-center group">
        <Image
          src={image}
          alt="post"
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="p-6 pb-12">
        <span className="text-light-green uppercase tracking-wider text-xs font-bold">
          {category}
        </span>
        <h1 className="text-custom-black font-extrabold text-lg my-4">
          {title}
        </h1>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default LatestPostCard;
