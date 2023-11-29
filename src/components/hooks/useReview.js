import { useEffect, useState } from "react";

const useReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://tools-house-server-side-v8i5.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return [reviews, setReviews];
};

export default useReview;
