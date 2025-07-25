import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const SelectBhk = () => {
  const Navigate=useNavigate();
  const [selectBhk, setSelectBhk] = useState(false);
  return (
    <>
      <Navbar />
      <div className="w-[80%] mx-auto bg-white rounded-lg pb-10">
        <div className="mt-6 w-[80%] mx-auto  px-4 py-2 rounded-lg flex flex-col gap-y-7">
          <h2 className="text-center font-semibold text-xl">
            Select your BHK type
          </h2>
          <p className="text-center">
            To know more about this,{" "}
            <span className="text-red">Click here</span>{" "}
          </p>

          <div className="text-center flex justify-center align-center flex-col gap-y-6">
            <div className="flex items-center gap-x-4 bg-[#EFFFC8] px-4 py-2 rounded-xl text-xl  ">
              <input type="radio" id="onebhk" name="onebhk" />
              <label htmlFor="onebhk">1 BHK</label>
            </div>
            <div className="flex items-center gap-x-4 bg-[#EFFFC8] px-4 py-2 rounded-xl text-xl  ">
              <input type="radio" id="onebhk" name="onebhk" />
              <label htmlFor="onebhk">2 BHK</label>
            </div>
            <div className="flex items-center gap-x-4 bg-[#EFFFC8] px-4 py-2 rounded-xl text-xl  ">
              <input type="radio" id="onebhk" name="onebhk" />
              <label htmlFor="onebhk">3 BHK</label>
            </div>
            <div className="flex items-center gap-x-4 bg-[#EFFFC8] px-4 py-2 rounded-xl text-xl  ">
              <input type="radio" id="onebhk" name="onebhk" />
              <label htmlFor="onebhk">4 BHK</label>
            </div>
            <div className="flex items-center gap-x-4 bg-[#EFFFC8] px-4 py-2 rounded-xl text-xl  ">
              <input type="radio" id="onebhk" name="onebhk" />
              <label htmlFor="onebhk">5 BHK +</label>
            </div>
          </div>
         
        </div>
         <div className="flex justify-between  px-6 mt-5">
            <button className="text-gray-500 px-4 py-2 text-xl cursor-pointer ">Back</button>
            <button className="text-white bg-red-900 rounded-xl px-8 text-xl py-2 cursor-pointer" onClick={()=>Navigate('/roomdesign')}>
              Next
            </button>
          </div>
      </div>
    </>
  );
};

export default SelectBhk;
