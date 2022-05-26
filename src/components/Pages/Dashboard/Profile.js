import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Profile = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  

  const onSubmit = (data) => {
    const profileInfo = {
      email: user.email,
      name: user.displayName,
      education: data.education,
      city: data.city,
      number: data.number,
      profile: data.profile,
    };
    console.log(profileInfo);
    const email = user?.email;
    if (email) {
      fetch(`http://localhost:5000/userprofile/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(profileInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Profile updated successfully");
          reset();
        });
    }
  };
  return (
    <div className="flex h-auto justify-center my-2">
      <div class="card w-96 lg:w-1/2 bg-base-100 shadow-xl">
        <div class="card-body">
          <h1 className="text-3xl text-center text-secondary font-bold font-serif">
            My Profile Form
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                value={user?.displayName}
                disabled
                {...register("name")}
                type="text"
                placeholder="Your Name"
                class="input input-bordered input-secondary w-full max-w-lg"
              />
              <label class="label"></label>
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                value={user?.email}
                disabled
                {...register("email")}
                type="text"
                placeholder="Your Email"
                class="input input-bordered input-secondary w-full max-w-lg"
              />
              <label class="label"></label>
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Education</span>
              </label>
              <input
                {...register("education", {
                  required: {
                    value: true,
                    message: "Education is required",
                  },
                })}
                type="text"
                placeholder="Your Education"
                class="input input-bordered input-secondary w-full max-w-lg"
              />
              <label class="label">
                {errors.education?.type === "required" && (
                  <p>{errors.education.message}</p>
                )}
              </label>
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">City</span>
              </label>
              <input
                {...register("city", {
                  required: {
                    value: true,
                    message: "City is required",
                  },
                })}
                type="text"
                placeholder="Your City"
                class="input input-bordered input-secondary w-full max-w-lg"
              />
              <label class="label">
                {errors.city?.type === "required" && (
                  <p>{errors.city.message}</p>
                )}
              </label>
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Phone Number</span>
              </label>
              <input
                {...register("number", {
                  required: {
                    value: true,
                    message: "Number is required",
                  },
                })}
                type="text"
                placeholder="Your number"
                class="input input-bordered input-secondary w-full max-w-lg"
              />
              <label class="label">
                {errors.number?.type === "required" && (
                  <p>{errors.number.message}</p>
                )}
              </label>
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Linked in profile link</span>
              </label>
              <input
                {...register("profile", {
                  required: {
                    value: true,
                    message: "Linked in profile link is required",
                  },
                })}
                type="text"
                placeholder="Linked in profile link"
                class="input input-bordered input-secondary w-full max-w-lg"
              />
              <label class="label">
                {errors.profile?.type === "required" && (
                  <p>{errors.profile.message}</p>
                )}
              </label>
            </div>

            <input
              className="btn btn-secondary w-full"
              type="submit"
              value="add/update infromation"
            />
          </form>
        </div>
      </div>
    </div>
  );
};


export default Profile;