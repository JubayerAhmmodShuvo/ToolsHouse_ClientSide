import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const AddReview = () => {
  const [user,isLoading] = useAuthState(auth);
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
          //console.log(result);
          if (result.success) {
            const img = result.data.url;
            const review = {
              name: data.name,
             description: data.description,
              img: img
            };
           // console.log(review);
            const url = `http://localhost:5000/review`;
            fetch(url, {
              method: "POST",
              headers: {
                "content-type": "application/json",
               
              },
              body: JSON.stringify(review),
            })
              .then((res) => res.json())
              .then((inserted) => {
                if (inserted.insertedId) {
                  toast.success("Review added successfully");
                  reset();
                } else {
                  toast.error("Failed to add the review");
                }
              });
          }
        });
    };

    if (isLoading) {
      return <Loading></Loading>;
    }





  return (
    <div className=" flex flex-col mx-auto my-10  w-96 space-y-6 ">
      <h2 className="text-2xl">Add Your Review</h2>
      <form onSubmit={handleSubmit(onSubmit)} c>
        <div className="form-control w-full max-w-xs ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
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
          <label className="label">
            <span className="label-text">Your Review</span>
          </label>
          <input
            type="text"
            placeholder="Your Review"
            className="input input-bordered w-full max-w-xs"
            {...register("description", {
              required: {
                value: true,
                message: "Review is Required",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your rating</span>
          </label>
          <input
            type="text"
            placeholder="Your Review"
            className="input input-bordered w-full max-w-xs"
            {...register("description", {
              required: {
                value: true,
                message: "Review is Required",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Picture</span>
          </label>
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
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn w-full max-w-xs text-white"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddReview;