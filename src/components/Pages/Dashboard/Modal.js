import React from "react";
import { toast } from "react-toastify";

const Modal = ({ deleteItem, setDeleteItem, setReload }) => {
  const { _id, name } = deleteItem;
  const handleDeleteBtn = () => {
    fetch(`https://tools-house-server-side-v8i5.vercel.app/order/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`${name} has been deleted`);

          setDeleteItem(null);
          setReload(false);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure to cancel order of{" "}
            <span className="text-secondary">{name}</span> ?
          </h3>
          <p class="py-4">
            Once you delete, It will remove this item permanently. So be
            Careful!
          </p>
          <div class="modal-action">
            <label
              onClick={() => handleDeleteBtn()}
              class="btn btn-xs btn-error"
            >
              Delete
            </label>
            <label for="my-modal" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
