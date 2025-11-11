import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 md:p-16 rounded-2xl m-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/bg1.png')" }}
    >
      {/* LEFT SECTION — SOCIALS */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="font-bold text-2xl text-white mb-4">Follow Us</h1>
        <p className="mb-8 text-white text-sm md:w-[80%]">
          Stay connected with us through social platforms for the latest updates
          and insights.
        </p>

        <div className="flex items-center gap-6">
          {[
            {
              icon: <Facebook className="w-5 h-5 text-white" />,
              label: "Facebook",
            },
            {
              icon: <Twitter className="w-5 h-5 text-white" />,
              label: "Twitter",
            },
            {
              icon: <Instagram className="w-5 h-5 text-white" />,
              label: "Instagram",
            },
          ].map((social, i) => (
            <div
              key={i}
              className="bg-light-green hover:bg-green-600 transition-all duration-300 p-3 rounded-full flex items-center justify-center cursor-pointer"
              aria-label={social.label}
            >
              {social.icon}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SECTION — NEWSLETTER */}
      <div className="flex flex-col items-center md:items-start text-center md:text-start  ">
        <div className=" mb-4">
          <h1 className="font-bold text-xl md:text-2xl text-white mb-4">
            Subscribe to Our Newsletter
          </h1>
          <p className="text-white text-sm md:w-[80%]">
            Get the latest tech news, reviews, and guides delivered straight to
            your inbox.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full md:w-auto">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="p-3 text-sm bg-white text-custom-black placeholder:text-gray-400 placeholder:text-sm w-[280px] md:w-[300px] rounded-md focus:outline-none focus:ring-2 focus:ring-light-green"
          />
          <button className="bg-light-green text-white text-xs p-3 px-9 rounded-md cursor-pointer hover:bg-green-600 transition-all duration-300">
            SUBMIT
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
