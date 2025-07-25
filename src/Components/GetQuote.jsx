import React from "react";
import Navbar from "./Navbar";

const GetQuote = () => {
  return (
    <>
      <Navbar />

      <div className="w-[80%] mx-auto bg-white rounded-lg pb-10">
        <div className="mt-6 w-[50%] mx-auto  px-4 py-2 rounded-lg flex flex-col gap-y-7">
          <h2 className="mt-6 text-center font-bold text-xl text-black">
            Your estimate is almost ready
          </h2>
          <div className="flex flex-col gap-y-5">
            <input
              type="text"
              className="border border-solid h-10 px-4 py-2 border-gray-300"
              placeholder="Name"
            />
            <input
              type="text"
              className="border border-solid h-10 px-4 py-2 border-gray-300"
              placeholder="Email Id"
            />
            <input
              type="text"
              className="border mt-4 border-solid h-10 px-4 py-2 border-gray-300"
              placeholder="Phone Number"
            />
            <div className="flex mt-[-1rem] gap-x-3 justify-center items-center flex-row-reverse">
              <label htmlFor="check" className="font-semibold">
                Send me regular messages on whatsapp
              </label>
              <input type="checkbox" />
            </div>
            <input
              type="text"
              className="border mt-4 border-solid h-10 px-4 py-2 border-gray-300"
              placeholder=" Property Name"
            />
           
          </div>
        </div>

        <div className="px-4 mt-5 flex justify-between py-2 text-xl">
          <button className="text-center text-gray-500 ">Back</button>
          <button
            className="text-center bg-red-900 px-4 py-2 rounded-xl text-white "
            onClick={() => Navigation("/")}
          >
            Sumbit
          </button>
        </div>
      </div>
    </>
  );
};

export default GetQuote;
