import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useServiceDetails from "../../hooks/useServiceDetails";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const Purchase = () => {
  const { serviceId } = useParams();
  const [user] = useAuthState(auth);
  const [disabled, setDisable] = useState(false);

  const [service, setService] = useServiceDetails(serviceId);
  const{name, description, price,img,minimum,quantity} = service;
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const order = { 
      name: name,
      price: price,
      email: user.email,
    userName: user.displayName,
      address:data.address,
      phone: data.phone,
      quantity:data.quantity
    }
   

    const url = `http://localhost:5000/order`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(order),
    }).then(() => {
      console.log(order);
      toast.success("Item Added Successfully");
      reset();
       
      });
     
  };

  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 my-12 ">
      <div className=" mx-auto my-auto">
        <img src={img} alt="" />
      </div>
      <div className="mx-auto ">
        <h1 className="text-2xl my-4 font-bold text-center">
          Tool Name : {name}
        </h1>
        <p className="text-justify mx-3 mb-2">{description}</p>

        <h4 className=" mx-3 mb-3 text-lg">
          Minimum Order Size:
          <span className="font-bold "> {minimum}</span>
        </h4>
        <h4 className=" mx-3 mb-3 text-lg">
          Total Available:
          <span className="font-bold "> {quantity}</span>
        </h4>

        <form
          className=" h-full flex flex-col mx-auto my-10  w-96 space-y-6 "
          onSubmit={handleSubmit(onSubmit)}
        >
          
         

          <input
            className="input input-bordered input-secondary w-full max-w-lg "
            placeholder="User Name"
            {...register("username", { required: true, maxLength: 50 })}
            value={user.displayName}
          />
          <input
            className="input input-bordered input-secondary w-full max-w-lg"
            placeholder="Email"
            {...register("email", { required: true, maxLength: 50 })}
            value={user?.email}
          />

          <input
            className="input input-bordered input-secondary w-full max-w-lg"
            placeholder="Address"
            type="text"
            {...register("address", { required: true, maxLength: 100 })}
          />
          <input
            className="input input-bordered input-secondary w-full max-w-lg"
            placeholder="Phone Number"
            type="text"
            {...register("phone", { required: true, maxLength: 50 })}
          />
        

          <input
            className="input input-bordered input-secondary w-full max-w-lg "
            placeholder="Quantity"
            type="number"
            {...register("quantity", {
              onChange: (e) => {
                const value = e.target.value;

                if (value > quantity) {
                  toast.error("You cannot order more than " + quantity);

                  setDisable(true);
                } else if (value < minimum) {
                  toast.error("You cannot order less than " + minimum);
                  setDisable(true);
                } else {
                  setDisable(false);
                }
              },
            })}
          />

          {service.quantity <= 0 ? (
            <input
              className="btn btn-outline text-black btn-secondary"
              type="submit"
              value="Sold Out"
              disabled={true}
            />
          ) : (
            <input
              className="btn btn-outline text-white btn-secondary"
              type="submit"
              value="Purchase"
              disabled={disabled}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default Purchase;
