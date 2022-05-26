import React from 'react';
import ToolHouse from "../../../images/toolshouse.jpg"

const Banner = () => {
  return (
    <>
      <div className="mt-32 mb-52">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-16">
          <div className="mb-14 lg:mb-0">
            <img className="rounded" src={ToolHouse} alt="" />
          </div>
          <div className=" space-y-3 my-auto mx-7">
            <h1 className="text-4xl font-serif font-bold text-secondary text-center">
              Service Is Our Main Priority
            </h1>
            <h2 className=" text-2xl font-bold font-serif px-6">As a founder, I think this is awesome!</h2>
            <p className=" text-lg font-semibold px-6 text-justify">We are continuasly working day and night for our toolshouse. Our first priority  is our buyers satisfaction. Without them we are nothing. So where we are now today is only by their support. We can ensure you that you can be benifitted by working with us.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;