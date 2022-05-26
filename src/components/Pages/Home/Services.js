import React from 'react';
import { Link } from 'react-router-dom';
import useService from '../../hooks/useService';
import SingleService from './SingleService';

const Services = () => {
  const [service, setService]= useService();
  return (
    <div className=" mb-20">
      <h1 className="text-4xl font-semibold italic text-center my-8  ">
        <span className="border-b-2 p-2 font-serif border-emerald-700 text-emerald-700">
          Services We Provide
        </span>
      </h1>
      <div className="mt-12  lg:mt-24 grid lg:grid-cols-3 gap-10 md:grid-cols-2 lg:mx-14  mb-2 ">
        {service.map((service) => (
          <SingleService key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;