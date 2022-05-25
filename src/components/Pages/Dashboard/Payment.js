import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  "pk_test_51L19ySKe1LLW52cFE9o9C78rEzRvdAWMyAS0tv19tltfYOttTqu8hrq6omO45AR8a6HFNtwgL97EBgnDLfxEu4eb00yPerVbIy"
);



const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/order/${id}`;
    const { data: order, isLoading } = useQuery(["order", id], () =>
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
           authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
    );

    if (isLoading) {
      return <Loading></Loading>;
    }
  
  return (
    <div className="grid lg:grid-cols-2 gap-12 mt-32 h-52">
      <div class="card w-50 h-full  bg-base-100 shadow-xl  ">
        <div class="card-body ">
          <p className="text-success font-bold mx-auto">Hello, {order.userName}</p>
          <h2 class="card-title mx-auto ">
            Please Pay for
            <span className="text-secondary  ">{order.name}</span>
          </h2>

          <p className="font-bold text-center">
            
            Total Amount: ${order.price }
          </p>
        </div>
      </div>
       <div class="card flex-shrink-0 w-50  shadow-2xl bg-base-100 ">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div> 
    </div>
  );
};

export default Payment;