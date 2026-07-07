import React from "react";

const Footer = () => {
  const pagesLinks = [
    {
      heading: "LAYOUTS",
      links: [
        "Home Page",
        "About Page",
        "Service Page",
        "Property Page",
        "Contact Page",
        "Single Blog",
      ],
    },
    {
      heading: "ALL SECTIONS",
      links: [
        "Headers",
        "Features",
        "Attractive",
        "Testimonials",
        "Videos",
        "Footers",
      ],
    },
    {
      heading: "COMPANY",
      links: ["About", "Blog", "Pricing", "Affiliate", "Login", "Changelog"],
    },
  ];

  return (
    <>
      <footer className="bg-[#1d2636] py-8 w-full">
        <div className="max-w-7xl mx-auto py-10 flex gap-20">
          <div className="flex flex-col">
            <div>
              <img
                src="/footer/footer-logo.png"
                alt="footer-logo"
                className="h-10 cursor-pointer"
              />
              <h2 className="text-white mt-2 font-semibold text-3xl">
                Do You Need Help With Anything?
              </h2>
            </div>
            <p className=" mt-6 text-gray-400 text-lg">
              Receive updates, hot deals, tutorials, discounts sent straignt in
              your inbox every month
            </p>
            <div className="flex gap-2 mt-4 items-stretch">
              <input
                type="text"
                placeholder="Email Address..."
                className="bg-white w-full px-4 py-3 rounded-lg placeholder:text-black focus:outline-none"
              />
              <button className="bg-[#27ae60] text-sm px-4 py-3 text-white rounded-lg font-semibold cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-20">
            {pagesLinks.map((section, i) => (
              <div key={i}>
                <h3 className="text-white font-bold">{section.heading}</h3>

                <div className="mt-4 flex flex-col">
                  {section.links.map((link, i) => (
                    <span key={i} className="text-gray-400 text-lg mt-4">
                      {link}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
      <div className="h-16 bg-[#1d2636] border-t border-[#ffffff1a] flex justify-center items-center">
        <p className="text-gray-400 text-lg">
          © 2021 RentUP. Designd By GorkCoder.
        </p>
      </div>
    </>
  );
};

export default Footer;
