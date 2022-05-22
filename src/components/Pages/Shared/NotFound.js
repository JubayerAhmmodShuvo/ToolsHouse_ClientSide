import React from 'react';
import error from '../../../images/notfound.jpg'

const NotFound = () => {
  return (
    <div className="grid mx-auto lg:my-16 my-40 ">
      <img className=" " src={error} alt="" />
    </div>
  );
};

export default NotFound;