import { useEffect, useState } from "react";

const useService = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("https://tools-manufacturer-server-smoky.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return [service, setService];
};
export default useService;
