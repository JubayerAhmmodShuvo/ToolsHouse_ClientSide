import { useEffect, useState } from "react";

const useService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://tools-house-server-side-v8i5.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return [services, setServices];
};

export default useService;
