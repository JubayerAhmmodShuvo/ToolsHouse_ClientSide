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
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const url = `http://localhost:5000/order`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...data }),
    }).then(() => {
      toast.success("Item Added Successfully");
      reset();
       
      });
     
  };

  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 my-12 ">
      <div className=" mx-auto mt-20">
        <img src={service.img} alt="" />
      </div>
      <div className="mx-auto ">
        <h1 className="text-2xl my-4 font-bold text-center">
          Tool Name : {service.name}
        </h1>
        <p className="text-justify mx-3 mb-2">{service.description}</p>

        <h4 className=" mx-3 mb-3 text-lg">
          Minimum Order Size: <span className="font-bold ">{service.minimum}</span>
        </h4> 
        <h4 className=" mx-3 mb-3 text-lg">
          Total Available:
          <span className="font-bold ">{service.quantity}</span>
        </h4>

        <form
          className=" h-screen flex flex-col mx-auto my-10  w-96 space-y-6 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="border-2 border-sky-700 rounded p-2"
            placeholder="Tools Name"
            {...register("tools")}
            value={service.name}
            
          />

          <input
            className="border-2 border-sky-700 rounded p-2 "
            placeholder="User Name"
            {...register("username", { required: true, maxLength: 50 })}
            value={user.displayName}
            
          />
          <input
            className="border-2 border-sky-700 rounded p-2 "
            placeholder="Email"
            {...register("email", { required: true, maxLength: 50 })}
            value={user?.email}
            readOnly
          />

          <input
            className="border-2 border-sky-700 rounded p-2"
            placeholder="Address"
          type="text"
            {...register("address", { required: true, maxLength: 100 })}
          />
          <input
            className="border-2 border-sky-700 rounded p-2"
            placeholder="Phone Number"
          type="text"
            {...register("phone", { required: true, maxLength: 50 })}
          />
          <input
            className="border-2 border-sky-700 rounded p-2 "
            placeholder="price"
            {...register("price")}
            value={service.price}
           
          />

          <input
            className="border-2 border-sky-700 rounded p-2 "
            placeholder="Quantity"
            type="number"
            {...register("quantity", {
              onChange: (e) => {
                const value = e.target.value;

                if (value > service.quantity) {
                  toast.error("You cannot order more than " + service.quantity);

                  setDisable(true);
                } else if (value < service.minimum) {
                  toast.error("You cannot order less than " + service.minimum);
                  setDisable(true);
                } else {
                  setDisable(false);
                }
              },
            })}
          />

          <input
            className="btn btn-outline-primary"
            type="submit"
            value="Purchase"
            disabled={disabled}
          />
        </form>
      </div>
    </div>
  );
};

export default Purchase;
