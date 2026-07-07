import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const PropertyListedcards = () => {
  const cards = [
    {
      image: "/home/recent-property-listed/home-rpl1.png",
      saletage: "For Rent",
      title: "Red Carpet Real Estate",
      address: "210 Zirak Road, Canada",
      price: "$3,700",
      sqft: "/sqft",
      name: "Apartment",
    },
    {
      image: "/home/recent-property-listed/home-rpl2.png",
      saletage: "For Sale",
      title: "Fairmount Properties",
      address: "5698 Zirak Road, NewYork",
      price: "$9,750",
      sqft: "/sqft",
      name: "Condos",
    },
    {
      image: "/home/recent-property-listed/home-rpl3.png",
      saletage: "For Rent",
      title: "The Real Estate Corner",
      address: "5624 Mooker Market, USA",
      price: "$5,860",
      sqft: "/sqft",
      name: "Offices",
    },
    {
      image: "/home/recent-property-listed/home-rpl4.png",
      saletage: "For Sale",
      title: "Herringbone Realty",
      address: "5621 Liverpool, London",
      price: "$7,540",
      sqft: "/sqft",
      name: "Homes & Villas",
    },
    {
      image: "/home/recent-property-listed/home-rpl5.png",
      saletage: "For Rent",
      title: "Brick Lane Realty",
      address: "210 Montreal Road, Canada",
      price: "$4,850",
      sqft: "/sqft",
      name: "Commercial",
    },
    {
      image: "/home/recent-property-listed/home-rpl6.png",
      saletage: "For Sale",
      title: "Banyon Tree Realty",
      address: "210 Zirak Road, Canada",
      price: "$2,742",
      sqft: "/sqft",
      name: "Apartment",
    },
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <span
                className={`inline-block px-3 py-1 text-xs font-semibold rounded ${
                  card.saletage === "For Sale"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {card.saletage}
              </span>

              <h2 className="text-lg font-semibold mt-4">{card.title}</h2>

              <div className="flex items-center gap-2 text-gray-500">
                <FaMapMarkerAlt />
                <p>{card.address}</p>
              </div>

              <div className="flex justify-between items-center mt-6 pt-4 border-t">
                <div className="">
                  <span className="text-xl px-6 py-3 rounded-3xl text-white font-bold bg-[#27ae60] text-center">
                    {card.price}
                  </span>
                  <span className="text-gray-500 ml-1 text-md">
                    {card.sqft}
                  </span>
                </div>

                <span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded">
                  {card.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyListedcards;
