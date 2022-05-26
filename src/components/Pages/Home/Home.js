import React from 'react';
import Banner from './Banner';
import Delivery from './Delivery';
import Review from './Review';
import Services from './Services';
import Summary from './Summary';
import Upcoming from './Upcoming';

const Home = () => {
  return (
    <div  >
      
      <Banner />
      <Services />
      <Upcoming />
      <Summary />
      <Review />
      <Delivery />
      
    </div>
  );
};

export default Home;