import React from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ index, order, setDeleteItem }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order.name}</td>
      <td>{order.email}</td>
      <td>{order.phone}</td>
      <td>{order.quantity}</td>

      <td>${order.price}</td>
      <td>
        <td>
          {!order.paid ? (
            <label
              onClick={() => setDeleteItem(order)}
              for="my-modal"
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
          <Link to={`/dashboard/payment/${order._id}`}>
            <button className="btn btn-xs btn-success">Pay</button>
          </Link>
        )}
        {order.price && order.paid && (
          <span className="text-success">Paid</span>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
