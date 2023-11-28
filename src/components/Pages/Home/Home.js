import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import Delivery from "./Delivery";
import Review from "./Review";
import Services from "./Services";
import Summary from "./Summary";
import Upcoming from "./Upcoming";
import Loading from "../Loading/Loading";

const Home = () => {
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isLoadingServices, setIsLoadingServices] = useState(true);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);

  useEffect(() => {
    fetch("https://tools-manufacturer-server-smoky.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setIsLoadingServices(false);

        fetch("https://tools-manufacturer-server-smoky.vercel.app/review")
          .then((res) => res.json())
          .then((data) => {
            setReviews(data);
            setIsLoadingReviews(false);
          });
      });
  }, []);

  if (isLoadingServices || isLoadingReviews) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <Banner />
      <Services services={services} />
      <Upcoming />
      <Summary />
      <Review reviews={reviews} />
      <Delivery />
    </div>
  );
};

export default Home;
