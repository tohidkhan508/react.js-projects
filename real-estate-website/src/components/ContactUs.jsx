import React from "react";

const ContactUs = () => {
  return (
    <section className="w-full bg-[#27ae60] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Do You Have Questions?
          </h1>
          <p className="text-white mt-2">
            We'll help you to grow your career and growth.
          </p>
        </div>

        <button className="bg-white text-lg px-14 py-5 border-[#27ae601f] border-6 rounded-4xl text-[#27ae60] shadow-md hover:shadow-lg transition cursor-pointer">
          Contact Us Today
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
