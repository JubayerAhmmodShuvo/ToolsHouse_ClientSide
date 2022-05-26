import React from "react";

const ManageSingleProduct = ({ service, setDeletingService }) => {
  const { name, img, description, price, quantity, minimum } = service;
  return (
    <div class="card card-compact w-full  bg-base-100 shadow-xl">
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
        <div class="card-actions justify-center my-3">
          <label
            onClick={() => setDeletingService(service)}
            htmlFor="delete-confirm-modal"
            className="btn w-full  btn-error"
          >
            Delete
          </label>
        </div>
      </div>
    </div>
  );
};

export default ManageSingleProduct;
