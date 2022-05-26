import React, { useEffect, useState } from 'react';

const useServiceDetails = (serviceId) => {
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `https://polar-sierra-20396.herokuapp.com/services/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return [service, setService];
};

export default useServiceDetails;