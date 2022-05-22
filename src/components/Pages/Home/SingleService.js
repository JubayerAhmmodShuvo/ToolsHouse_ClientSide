import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleService = ({ service }) => {
  const { _id, img, price, quantity, name, minimum, sold, description } = service;
   const navigate = useNavigate();
   const navigateToolsDetail = (id) => {
     navigate(`/services/${id}`);
   };
  return (
    <div class="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          className="w-full h-72 object-cover object-center rounded-lg"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <h3>
          Price: <span className="font-bold">${price}</span>
        </h3>
        <h3>
          Available: <span className="font-bold">{quantity}</span>
        </h3>
        <h3>
          Minimum Order: <span className="font-bold">{minimum}</span>
        </h3>
        <p className="text-justify">{description}</p>
        <div class="card-actions justify-end">
          <button
            onClick={() => navigateToolsDetail(_id)}
            class="btn btn-secondary my-2"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleService;