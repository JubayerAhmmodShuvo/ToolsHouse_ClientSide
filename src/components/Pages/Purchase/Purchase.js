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
  const { name, description, price, img, minimum, quantity } = service;
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const amount = parseFloat(data.quantity) * parseFloat(price);
    const total = parseFloat(amount).toFixed(2);
    const order = {
      name: name,
      price: total,
      email: user.email,
      userName: user.displayName,
      address: data.address,
      phone: data.phone,
      quantity: data.quantity,
    };

    const url = `https://tools-manufacturer-server-smoky.vercel.app/order`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(order),
    }).then(() => {
      toast.success(
        "Item Added Successfully. Go to Dashboard for the payment."
      );
      reset();
    });
  };

  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 my-12 ">
      <div className=" mx-auto ">
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
        <h4 className=" mx-3 mb-3 text-lg">
          Per Unit Price:
          <span className="font-bold "> {price}</span>
        </h4>
        <img className="mt-6 w-96" src={img} alt="" />
      </div>
      <div className="w-96 mx-auto ">
        <div className="card card-compact w-96 py-10 bg-base-100 shadow-xl">
          <h1 className="text-3xl font-bold text-center">
            Fill The Form To Purchase
          </h1>
          <form
            className="  flex flex-col mx-auto my-10  w-72 space-y-6 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="input input-bordered input-secondary w-72 max-w-lg "
              placeholder="User Name"
              {...register("username", { required: true, maxLength: 50 })}
              value={user?.displayName}
            />
            <input
              className="input input-bordered input-secondary w-72 max-w-lg"
              placeholder="Email"
              {...register("email", { required: true, maxLength: 50 })}
              value={user?.email}
            />

            <input
              className="input input-bordered input-secondary w-72 max-w-lg"
              placeholder="Address"
              type="text"
              {...register("address", { required: true, maxLength: 100 })}
            />
            <input
              className="input input-bordered input-secondary w-72 max-w-lg"
              placeholder="Phone Number"
              type="text"
              {...register("phone", { required: true, maxLength: 50 })}
            />

            <input
              className="input input-bordered input-secondary w-72 max-w-lg "
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
                className="btn btn-outline w-72 text-white btn-secondary"
                type="submit"
                value="Purchase"
                disabled={disabled}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
