import React from 'react';
import thank from '../../../images/thank.png';

const ThankYou = () => {
  return (
    <div className="">
      <h1 className="text-3xl text-center font-bold mt-20 mb-12  ">Thank You For Your concern</h1>
      <img className="w-fit mx-auto mb-32" src={thank} alt="" />
    </div>
  );
};

export default ThankYou;