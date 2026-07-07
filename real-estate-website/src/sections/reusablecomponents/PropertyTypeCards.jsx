import React from "react";

const cards = [
  {
    image: "/home/featured-property-types/home-fpt1.png",
    title: "Family House",
    subtitle: "122 Property",
  },
  {
    image: "/home/featured-property-types/home-fpt2.png",
    title: "House & Villa",
    subtitle: "155 Property",
  },
  {
    image: "/home/featured-property-types/home-fpt3.png",
    title: "Apartment",
    subtitle: "300 Property",
  },
  {
    image: "/home/featured-property-types/home-fpt4.png",
    title: "Office & Studio",
    subtitle: "80 Property",
  },
  {
    image: "/home/featured-property-types/home-fpt5.png",
    title: "Villa & Condo",
    subtitle: "120 Property",
  },
];

const PropertyTypeCards = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-14">
      {cards.map((card, i) => (
        <div
          key={i}
          className="w-60 h-52 bg-white rounded-lg shadow-[0_0_25px_rgba(112,121,138,0.18)] px-16 py-10 cursor-pointer flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
        >
          <img
            src={card.image}
            alt={card.title}
            className="h-16 object-cover"
          />
          <span className="mt-4 font-semibold text-md">{card.title}</span>
          <span className="text-md">{card.subtitle}</span>
        </div>
      ))}
    </div>
  );
};

export default PropertyTypeCards;
