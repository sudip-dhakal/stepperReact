import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Package = () => {
  const Navigation = useNavigate();
  return (
    <>
      <Navbar />

      <div className="w-[80%] mx-auto bg-white rounded-lg pb-10">
        <div className="mt-6 w-[80%] mx-auto px-4 py-2 rounded-lg flex flex-col gap-y-7">
          {[
            "Package 1",
            "Package 2",
            "Package 3",
            "Package 4",
            "Package 5",
          ].map((pkg, index) => (
            <div
              key={index}
              className=" p-4 font-bold bg-[#EFFFC8] rounded-xl flex justify-between items-center"
            >
              <label className="flex items-center gap-x-3 cursor-pointer w-full">
                <input
                  type="radio"
                  name="package"
                  value={pkg}
                  className="w-5 h-5 accent-green-600"
                />
                {pkg}
              </label>
            </div>
          ))}
        </div>

        <div className="px-4 mt-5 flex justify-between py-2 text-xl">
          <button className="text-center text-gray-500 ">Back</button>
          <button
            className="text-center bg-red-900 px-4 py-2 rounded-xl text-white "
            onClick={() => Navigation("/getquote")}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Package;
