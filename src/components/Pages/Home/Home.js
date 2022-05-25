import React from 'react';
import Banner from './Banner';
import Delivery from './Delivery';
import Review from './Review';
import Services from './Services';
import Summary from './Summary';

const Home = () => {
  return (
    <div  >
      <Banner />
      <Services />
      <Summary />
      <Review />
      <Delivery />
      
    </div>
  );
};

export default Home;