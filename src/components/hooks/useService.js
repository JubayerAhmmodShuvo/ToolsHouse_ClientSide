import { useEffect, useState } from "react";

const useService =()=>{
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return [service, setService];
}
export default useService;