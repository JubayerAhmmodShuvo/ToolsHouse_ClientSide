import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../hooks/useServiceDetails';

const Purchase = () => {
  const { serviceId } = useParams();
  const [service, setService] = useServiceDetails(serviceId);
  return (
    <div>
      
      <img src={ service.img} alt="" />
    </div>
  );
};

export default Purchase;