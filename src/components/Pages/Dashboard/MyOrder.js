import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyOrder = () => {
  const [order, setOrder] = useState([]);
  const [user, isLoading] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      const url = `http://localhost:5000/order?email=${user.email}`;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setOrder(data);
        });
  }
  }, [user]);


  return (
    <div>
      <h1>{order.length}</h1>
    </div>
  );
};

export default MyOrder;