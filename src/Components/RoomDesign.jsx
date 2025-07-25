import React from "react";
import Navbar from "./Navbar";
import PlusAndMinus from "../Reusable/PlusAndMinus";
import { useNavigate } from "react-router-dom";

const RoomDesign = () => {
  const Navigation = useNavigate();
  return (
    <>
      <Navbar />

      <div className="w-[80%] mx-auto bg-white rounded-lg pb-10">
        <div className="mt-6 w-[80%] mx-auto  px-4 py-2 rounded-lg flex flex-col gap-y-7">
          <h2 className="text-center font-bold text-xl">
            Select the rooms you’d like us to design
          </h2>

          <p className="text-center">
            To know more about this,{" "}
            <span className="text-red-600">click here</span>
          </p>

          <div className="flex flex-col gap-y-6">
            <div className="p-4 font-bold bg-[#EFFFC8] rounded-xl flex justify-between items-center">
              <p>Living Room</p>
              <PlusAndMinus />
            </div>
            <div className="p-4 font-bold bg-[#EFFFC8] rounded-xl flex justify-between items-center">
              <p>Kitchen</p>
              <PlusAndMinus />
            </div>
            <div className="p-4 font-bold bg-[#EFFFC8] rounded-xl flex justify-between items-center">
              <p>Bedroom</p>
              <PlusAndMinus />
            </div>
            <div className="p-4 font-bold bg-[#EFFFC8] rounded-xl flex justify-between items-center">
              <p>Bathroom</p>
              <PlusAndMinus />
            </div>
            <div className="p-4 font-bold bg-[#EFFFC8] rounded-xl flex justify-between items-center">
              <p>Dinning</p>
              <PlusAndMinus />
            </div>
          </div>
        </div>

        <div className="px-4 mt-5 flex justify-between py-2 text-xl">
          <button className="text-center text-gray-500 ">Back</button>
          <button
            className="text-center bg-red-900 px-4 py-2 rounded-xl text-white "
            onClick={() => Navigation("/package")}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default RoomDesign;
