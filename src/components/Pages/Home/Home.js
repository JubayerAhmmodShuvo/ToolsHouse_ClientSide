import React from 'react';
import Banner from './Banner';
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
    </div>
  );
};

export default Home;