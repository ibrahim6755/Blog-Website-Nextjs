import DealCard from "@/components/DealCard";
import LatestPostCard from "@/components/LatestPostCard";
import PostCard from "@/components/PostCard";
import { deals, featured, latestPosts, popularPosts } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      {/* HERO SECTION */}
      <section
        className="my-14 p-8 text-white rounded-2xl w-full max-w-7xl mx-auto"
        style={{ backgroundImage: "url('/assets/bg1.png')" }}
      >
        {/* HEADINGS */}
        <h2 className="font-bold my-6">What I Do?</h2>
        <h1 className="text-2xl md:text-4xl font-extrabold md:w-[70%] leading-snug">
          I explain and teach technology, solve tech problems and help you make
          gadget buying decisions.
        </h1>

        {/* SUBSCRIBE */}
        <h1 className="uppercase mt-24 font-extrabold text-xl">
          Subscribe to Our Newsletter
        </h1>

        {/* INPUT & SUBSCRIBERS */}
        <div className="my-8 flex flex-col md:flex-row items-start justify-between gap-8">
          {/* INPUT */}
          <div className="flex flex-col items-start md:flex-row  md:items-center gap-4">
            <input
              type="text"
              name="email"
              className="p-3 text-sm bg-white text-custom-black placeholder:text-gray-400 placeholder:text-sm w-[300px] md:w-[350px] rounded-md"
              placeholder="Email address"
            />
            <button className="bg-light-green text-white text-xs p-3 px-9 rounded-md cursor-pointer hover:bg-green-600 transition-all duration-300">
              SUBMIT
            </button>
          </div>

          {/* SUBSCRIBERS COUNT */}
          <div className="flex justify-end md:items-end flex-col my-4 md:my-0 text-right">
            <span className="text-light-green font-extrabold text-4xl">
              125,000
            </span>
            <h1 className="uppercase mt-2 font-extrabold text-lg md:text-xl">
              Join the List of Subscribers
            </h1>
          </div>
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="hidden md:flex flex-col items-center justify-center bg-white rounded-md w-full max-w-5xl py-10 overflow-hidden">
        <h1 className="text-center text-md uppercase font-bold text-light-green mb-6">
          Proudly featured on:
        </h1>

        {/* LOGO CAROUSEL */}
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-12 carousel cursor-pointer ">
            {/* Duplicate the array twice for infinite effect */}
            {[...featured, ...featured].map((feature, index) => (
              <div
                key={index}
                className={`flex items-center justify-center px-6 ${
                  [1, 3, 5].includes(index % featured.length)
                    ? "border-x border-gray-300"
                    : ""
                }`}
              >
                <div className="relative w-[140px] h-[60px] grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={feature.image}
                    alt="image"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR POSTS */}
      <section className="w-full max-w-6xl mx-auto mt-16">
        <h1 className="text-center text-light-green text-4xl font-bold my-14 p-4">
          Popular Posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
          {popularPosts.map((item) => (
            <PostCard
              key={item.id}
              image={item.image}
              category={item.category}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/* DEALS */}
      <section className="w-full max-w-6xl mx-auto mt-16">
        <h1 className="text-center text-light-green text-4xl font-bold my-14 p-4">
          Deals
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {deals.map((item) => (
            <DealCard
              key={item.id}
              image={item.image}
              offer={item.offer}
              title={item.title}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10 mb-16">
          <button className="bg-light-green text-white uppercase text-xs p-3 px-10 rounded-md hover:bg-green-600 transition-all duration-300">
            View All Deals
          </button>
        </div>
      </section>

      {/* LATEST POSTS */}
      <section className="w-full max-w-6xl mx-auto mt-16 mb-24">
        <h1 className="text-center text-light-green text-4xl font-bold my-14 p-4">
          Latest Posts
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {latestPosts.map((item) => (
            <LatestPostCard
              key={item.id}
              image={item.image}
              category={item.category}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
