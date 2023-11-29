import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import AllOrders from "./AllOrders";
import DeleteOrder from "./DeleteOrder";

const ManageAllOrder = () => {
  const [deletingOrder, setDeletingOrder] = useState(null);

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("services", () =>
    fetch("https://tools-house-server-side-v8i5.vercel.app/orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Transaction Id</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Cancel</th>
              <th>Payment Status</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <AllOrders
                order={order}
                key={order._id}
                index={index}
                refetch={refetch}
                setDeletingOrder={setDeletingOrder}
              ></AllOrders>
            ))}
          </tbody>
        </table>
      </div>
      {deletingOrder && (
        <DeleteOrder
          deletingOrder={deletingOrder}
          refetch={refetch}
          setDeletingOrder={setDeletingOrder}
        ></DeleteOrder>
      )}
    </div>
  );
};

export default ManageAllOrder;
