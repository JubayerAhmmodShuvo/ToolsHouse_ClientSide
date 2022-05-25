import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import {toast} from 'react-toastify';

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  useEffect(() => {
    if (sending && email) {
      toast("Sending...");
    }
  }, [sending, email]);
  useEffect(() => {
    if (error) {
      toast("Enter an Email address");
    }
  }, [error]);

  return (
    <div className="mx-auto w-96 py-32 mt-20 mb-52 ">
      <input
        className=" input input-bordered input-secondary w-full max-w-lg"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <br />

      <button
        className="btn btn-outline-primary my-4 w-96  "
        onClick={async () => {
          await sendPasswordResetEmail(email);
          setEmail(" ");
        }}
      >
        Reset password
      </button>
    </div>
  );
};

export default ForgotPass;