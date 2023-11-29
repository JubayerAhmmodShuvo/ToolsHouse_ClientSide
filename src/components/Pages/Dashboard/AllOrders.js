import React from "react";
import { toast } from "react-toastify";

const AllOrders = ({ order, setDeletingOrder, index, refetch }) => {
  const handleUpdateStatus = (id) => {
    fetch(`https://tools-house-server-side-v8i5.vercel.app/order/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Order status updated successfully");
        refetch();
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order.name}</td>

      <td>{order.transactionId}</td>
      <td>{order.quantity}</td>

      <td>${order.price}</td>
      <td>
        <td>
          {!order.paid ? (
            <label
              onClick={() => setDeletingOrder(order)}
              htmlFor="delete-confirm-modal"
              class="btn btn-xs btn-error modal-button"
            >
              Cancel
            </label>
          ) : (
            <span className="text-error">Cancel</span>
          )}
        </td>
      </td>
      <td>
        {order.price && !order.paid && (
          <span className="text-error">Unpaid</span>
        )}
        {order.price && order.paid && (
          <span className="text-success">Paid</span>
        )}
      </td>
      <td>
        {order.paid && order.status !== true && (
          <button
            onClick={() => {
              handleUpdateStatus(order._id);
              //  console.log("clicking");
            }}
            className="btn btn-xs btn-secondary"
          >
            Pending
          </button>
        )}
        {order.paid && order.status === true && (
          <div className="btn  btn-success btn-xs">Shipped</div>
        )}
      </td>
    </tr>
  );
};

export default AllOrders;
