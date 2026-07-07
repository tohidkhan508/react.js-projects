import React from "react";

const Form = () => {
  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.15)]">
        <form className=" px-10 py-6">
          <h3 className="font-semibold">Fillup The Form</h3>
          <div className="flex justify-between gap-2 mt-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 px-2 py-1 rounded-sm placeholder:text-black focus:outline-none"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full border border-gray-300 px-2 py-1 rounded-sm placeholder:text-black focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 px-2 py-1 rounded-sm placeholder:text-black focus:outline-none mt-6"
          />
          <textarea className="w-full border border-gray-300 px-2 py-1 rounded-sm placeholder:text-black focus:outline-none mt-6 h-52"></textarea>
          <button className="mt-4 px-4 py-2 rounded-lg text-white font-semibold bg-[#27AE60] cursor-pointer">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
