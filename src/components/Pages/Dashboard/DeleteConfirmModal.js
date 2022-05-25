import React from 'react';
import {toast} from "react-toastify";

const DeleteConfirmModal = ({ service, setDeletingService, refetch }) => {
  const { name,_id} = service;
   const handleDelete = () => {
     fetch(`http://localhost:5000/services/${_id}`, {
       method: "DELETE",
       headers: {
         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
       },
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         if (data.deletedCount) {
           toast.success(` ${name} is deleted.`);
         setDeletingService(null);
           refetch();
         }
       });
   };
  
  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg ">
            Are you sure you want to delete <span className="text">{name} </span>
            ?
          </h3>
          <p className="py-4">
            After deleting it will also delete from the database and homepage.
          </p>
          <div className="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn btn-xs btn-error"
            >
              Delete
            </button>
            <label htmlFor="delete-confirm-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;