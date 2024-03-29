import React, { useEffect, useState } from "react";

const useServiceDetails = (serviceId) => {
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `https://tools-house-server-side-v8i5.vercel.app/services/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return [service, setService];
};

export default useServiceDetails;
