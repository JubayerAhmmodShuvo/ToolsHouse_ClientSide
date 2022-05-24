import React from 'react';

const SingleReview = ({ review }) => {
  const { name, img, _id,rating,description } = review;

  return (
    <div >
      
      <div class="card w-96 h-full bg-base-100 shadow-xl">
        <div class="avatar">
          <div class="w-40 mx-auto mt-12 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="d" />
          </div>
        </div>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <h3 className="text-lg">
            Rating: <span className="font-bold text-secondary" >{rating}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;