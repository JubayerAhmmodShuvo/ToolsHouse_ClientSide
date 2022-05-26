import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const AddReview = () => {
  const [user, isLoading] = useAuthState(auth);
  const [disabled, setDisable] = useState(false);
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
              img: img,
              rating: data.rating
            };
           // console.log(review);
            const url = `https://polar-sierra-20396.herokuapp.com/review`;
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
    <div className="  flex flex-col mx-auto mt-14 px-4  w-96 space-y-6 ">
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
          <textarea
            type="text"
            placeholder="Your Review"
            className="input input-bordered w-full max-w-xs h-32"
            {...register("description", {
              required: {
                value: true,
                message: "Review is Required",
              
              },
            })}
          />
          <label className="label">
            {errors.review?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.review.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your rating</span>
          </label>
          <input
            type="number"
            placeholder="Your Rating"
            className="input input-bordered w-full max-w-xs"
            {...register("rating",{
              onChange: (e) => {
                const value = e.target.value;

                if (value > 5) {
                  toast.error("You cannot rate more than 5");

                  setDisable(true);
                } else if (value <1) {
                  toast.error("You cannot rate less than 1");
                  setDisable(true);
                } else {
                  setDisable(false);
                }
              },
            }, {
              required: {
                value: true,
                message: "Rating  is Required",
              },
            })}
          />
          <label className="label">
            {errors.rating?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.rating.message}
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
          value="Add Review"
          disabled={disabled}
        />
      </form>
    </div>
  );
};

export default AddReview;