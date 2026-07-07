import React from "react";

const ExploreByLocation = () => {
  const cards = [
    {
      image: "/home/explore-by-location/home-ebl1.png",
      title: "New Orleans, Louisiana",
      villa: "12 Villas",
      office: "07 Offices",
      apartment: "10 Apartments",
    },
    {
      image: "/home/explore-by-location/home-ebl2.png",
      title: "Jerrsy, United State",
      villa: "20 Villas",
      office: "04 Offices",
      apartment: "25 Apartments",
    },
    {
      image: "/home/explore-by-location/home-ebl3.png",
      title: "Liverpool, London",
      villa: "30 Villas",
      office: "12 Offices",
      apartment: "15 Apartments",
    },
    {
      image: "/home/explore-by-location/home-ebl4.png",
      title: "NewYork, United States",
      villa: "10 Villas",
      office: "05 Offices",
      apartment: "27 Apartments",
    },
    {
      image: "/home/explore-by-location/home-ebl5.png",
      title: "Montreal, Canada",
      villa: "18 Villas",
      office: "02 Offices",
      apartment: "14 Apartments",
    },
    {
      image: "/home/explore-by-location/home-ebl6.png",
      title: "California, USA",
      villa: "22 Villas",
      office: "05 Offices",
      apartment: "10 Apartments",
    },
  ];

  return (
    <section className="h-full py-14">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <h1 className="font-bold text-4xl">Explore By Location</h1>
          <p className="max-w-3xl mx-auto text-center text-lg text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              style={{ backgroundImage: `url(${card.image})` }}
              className="w-full h-60 bg-no-repeat bg-cover bg-center rounded-lg flex justify-center items-center cursor-pointer"
            >
              <div className="bg-black/30 w-[90%] h-[90%] rounded-lg flex justify-center items-center">
                <div>
                  <h2 className="text-white font-semibold text-xl text-center">
                    {card.title}
                  </h2>
                  <p className="text-gray-300 text-md mt-2 gap-4 flex">
                    <label>{card.villa}</label>
                    <label>{card.office}</label>
                    <label>{card.apartment}</label>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreByLocation;
