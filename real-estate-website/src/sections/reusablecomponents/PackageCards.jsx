import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const PackageCards = () => {
  const cards = [
    {
      category: "Basic",
      price: "29",
      limit: "per user, per month",
      icon: <FaCheck />,
      button: "Start Basic",
      features: [
        { text: "99.5% Uptime Guarantee", available: true },
        { text: "120GB CDN Bandwidth", available: true },
        { text: "5GB Cloud Storage", available: true },
        { text: "Personal Help Support", available: false },
        { text: "Enterprise SLA", available: false },
      ],
    },
    {
      category: "Standard",
      price: "49",
      limit: "per user, per month",
      icon: <FaCheck />,
      button: "Start Standard",
      value: "Best Value",
      features: [
        { text: "99.5% Uptime Guarantee", available: true },
        { text: "150GB CDN Bandwidth", available: true },
        { text: "10GB Cloud Storage", available: true },
        { text: "Personal Help Support", available: true },
        { text: "Enterprise SLA", available: false },
      ],
    },
    {
      category: "Platinum",
      price: "79",
      limit: "2 user, per month",
      icon: <FaCheck />,
      button: "Start Platinum",
      features: [
        { text: "100% Uptime Guarantee", available: true },
        { text: "200GB CDN Bandwidth", available: true },
        { text: "20GB Cloud Storage", available: true },
        { text: "Personal Help Support", available: true },
        { text: "Enterprise SLA", available: true },
      ],
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 mt-16 items-start">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`bg-white shadow-2xl rounded-xl p-8 w-full max-w-sm hover:-translate-y-2 transition duration-300 ${
            card.value ? "h-[750px] -mt-[40px]" : "h-[680px]"
          }`}
        >
          {card.value && (
            <div className="flex justify-center mb-6">
              <span className="bg-[#FF6922] text-white px-8 py-4 rounded-full font-semibold">
                {card.value}
              </span>
            </div>
          )}
          <h3 className="text-2xl font-bold">{card.category}</h3>

          <div className="mt-4">
            <div>
              <span className="text-4xl font-semibold">$</span>
              <span className="text-7xl font-bold">{card.price}</span>
            </div>
            <p className="text-gray-500 mt-4 text-lg">{card.limit}</p>
          </div>

          <ul className="mt-6">
            {card.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-5 text-lg mb-6">
                <span
                  className={`p-2 rounded-full ${
                    feature.available
                      ? "bg-[#E5F5EC] text-[#27AE60]"
                      : "bg-[#FDEAEA] text-[#FF5A5F]"
                  }`}
                >
                  {feature.available ? <FaCheck /> : <FaTimes />}
                </span>

                <span>{feature.text}</span>
              </li>
            ))}
          </ul>

          <button
            className={`mt-8 rounded-4xl px-22 py-4 font-semibold cursor-pointer text-xl transition ${card.value ? "bg-[#27AE60] text-white" : "bg-white text-[#27AE60] border-4 border-[#E5F5EC]"}`}
          >
            {card.button}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PackageCards;
