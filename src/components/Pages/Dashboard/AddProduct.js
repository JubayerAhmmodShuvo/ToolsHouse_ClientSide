import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [user, isLoading] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imageStorageKey = "ce420c168ceb0ffd8be68a8a07ae5f93";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const service = {
            name: data.name,
            description: data.description,
            img: img,
            price: data.price,
            minimum: data.minimum,
            quantity: data.quantity,
          };

          const url = `https://tools-two-gold.vercel.app/services`;
          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(service),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Product added successfully");
                reset();
                navigate("/");
              } else {
                toast.error("Failed to add the product");
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="  flex flex-col mx-auto mt-6 px-4  w-96 space-y-6 ">
      <h2 className="text-2xl mx-auto">Add New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} c>
        <div className="form-control w-full max-w-xs ">
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered input-secondary w-full max-w-lg"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <input
            className="input input-bordered input-secondary w-full max-w-lg"
            placeholder="Price"
            type="text"
            {...register("price", { required: true, maxLength: 50 })}
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            className="input input-bordered input-secondary w-full max-w-lg"
            placeholder="Quantity"
            type="number"
            {...register("quantity", { required: true, maxLength: 50 })}
          />
          <label className="label">
            {errors.quantity?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.quantity.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            className="input input-bordered input-secondary w-full max-w-lg"
            placeholder="Minimum Quantity"
            type="number"
            {...register("minimum", { required: true, maxLength: 50 })}
          />
          <label className="label">
            {errors.minimum?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.minimum.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <textarea
            type="text"
            placeholder="Tools Description"
            className="input input-bordered  h-32  input-secondary w-full max-w-lg"
            {...register("description", {
              required: {
                value: true,
                message: "Description is Required",
              },
            })}
          />
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <input
            type="file"
            className="input input-bordered w-full max-w-xs p-1"
            {...register("image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn w-full max-w-xs text-white"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
