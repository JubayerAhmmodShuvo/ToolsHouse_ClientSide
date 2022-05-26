import React from 'react';
import revenue from "../../../images/revenue.png"
import review from "../../../images/review.png"
import customer from "../../../images/customer.png"
import tools from "../../../images//tools.png"

const Summary = () => {
  return (
    <div className="my-48">
      <div className=" ">
        <p className=" text-2xl font-semibold mb-4 font-serif   text-center ">
          WE WORK HARD, WE PLAY HARD
        </p>
        <h1 className="text-center text-4xl font-bold  font-serif text-emerald-600  mb-16 ">
          OUR USER EXPECTATIONS
        </h1>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 my-20">
        <div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-36" src={revenue} alt="" />
            <h1 className="text-5xl font-extrabold text-center italic text-emerald-500   ">
              120M
            </h1>
            <p className="font-bold p-2 text-lg mt-6 text-teal-500">
              Annul Revenue
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-36" src={customer} alt="" />
            <h1 className="text-5xl font-extrabold text-center italic text-emerald-500  ">
              120+
            </h1>
            <p className="font-bold p-2 text-lg mt-6 text-teal-500	">
              Happy Clients
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-36" src={review} alt="" />
            <h1 className="text-5xl font-extrabold text-center italic text-emerald-500  ">
              33k+
            </h1>
            <p className="font-bold p-2 text-lg mt-6 text-teal-500">
              Total Review
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-36" src={tools} alt="" />
            <h1 className="text-5xl font-extrabold text-center  italic  text-emerald-500">
              50+
            </h1>
            <p className="font-bold p-2 text-lg mt-6 text-teal-500">Tools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;