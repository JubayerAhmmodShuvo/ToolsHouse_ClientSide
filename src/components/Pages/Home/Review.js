import React, { useState, useEffect } from "react";
import SingleReview from "./SingleReview";


const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://tools-manufacturer-server-smoky.vercel.app/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-32  ">
      <h1 className="text-3xl font-bold my-20 text-center text-secondary">
        Our Happy Clients
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {reviews.map((review) => (
          <SingleReview key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Review;
