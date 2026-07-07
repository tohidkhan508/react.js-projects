import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  FaCircleCheck,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const cards = [
  {
    title: "50 Listings",
    image: "/home/our-featured-agents/home-ofa1.jpg",
    address: "Liverpool, Canada",
    name: "Sargam S. Singh",
  },
  {
    title: "70 Listings",
    image: "/home/our-featured-agents/home-ofa2.jpg",
    address: "Montreal, Canada",
    name: "Harijeet M. Siller",
  },
  {
    title: "80 Listings",
    image: "/home/our-featured-agents/home-ofa3.jpg",
    address: "Denver, USA",
    name: "Anna K. Young",
  },
  {
    title: "51 Listings",
    image: "/home/our-featured-agents/home-ofa4.jpg",
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
  },
  {
    title: "42 Listings",
    image: "/home/our-featured-agents/home-ofa5.jpg",
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
  },
  {
    title: "38 Listings",
    image: "/home/our-featured-agents/home-ofa5.jpg",
    address: "Montreal, USA",
    name: "Adam K. Jollio",
  },
];

const OurFeaturedAgents = () => {
  return (
    <section className="w-full bg-[#F7F9FC] py-14">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">Our Featured Agents</h1>
          <p className="text-lg mt-2 text-gray-500 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              {/* Listing Badge */}
              <span className="inline-block bg-orange-500 px-6 py-3 text-sm text-white font-semibold rounded-full">
                {card.title}
              </span>

              {/* Profile */}
              <div className="flex flex-col items-center mt-8">
                <div className="relative border-[6px] border-[#edf0f5] rounded-full p-2">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="h-24 w-24 rounded-full object-cover cursor-pointer"
                  />

                  <span className="absolute bottom-1 right-1 text-blue-500 text-lg bg-white rounded-full">
                    <FaCircleCheck />
                  </span>
                </div>

                {/* Address */}
                <div className="flex items-center gap-2 mt-4 text-gray-500">
                  <FaMapMarkerAlt />
                  <p>{card.address}</p>
                </div>

                {/* Name */}
                <h3 className="font-semibold text-xl mt-2 text-center">
                  {card.name}
                </h3>

                {/* Social Icons */}
                <div className="flex gap-3 mt-4">
                  <button className="bg-[#F4F5F7] h-10 w-10 flex items-center justify-center rounded-full hover:bg-orange-500 hover:text-white  cursor-pointer">
                    <FaFacebookF />
                  </button>

                  <button className="bg-[#F4F5F7] h-10 w-10 flex items-center justify-center rounded-full hover:bg-orange-500 hover:text-white  cursor-pointer">
                    <FaLinkedin />
                  </button>

                  <button className="bg-[#F4F5F7] h-10 w-10 flex items-center justify-center rounded-full hover:bg-orange-500 hover:text-white  cursor-pointer">
                    <FaTwitter />
                  </button>

                  <button className="bg-[#F4F5F7] h-10 w-10 flex items-center justify-center rounded-full hover:bg-orange-500 hover:text-white  cursor-pointer">
                    <FaInstagram />
                  </button>
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center w-full mt-6 gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#27ae60] rounded-lg text-white font-semibold hover:bg-[#219653] transition cursor-pointer">
                    <CiMail className="text-2xl" />
                    Message
                  </button>

                  <button className="h-12 w-12 flex items-center justify-center bg-black text-white rounded-lg hover:bg-orange-500 transition cursor-pointer">
                    <BiSolidPhoneCall className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFeaturedAgents;
