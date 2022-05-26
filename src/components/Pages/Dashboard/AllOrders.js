import React from 'react';


const AllOrders = ({ order, setDeletingOrder, index }) => {
  const handleUpdateStatus = id => {
 
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
        {order.price && order.paid && (
          <button
            onClick={() => {
              handleUpdateStatus(order._id);
              console.log("clicking");
         }}   className="btn btn-xs btn-secondary">Pending</button>
        )}
      </td>
    </tr>
  );
};

export default AllOrders;