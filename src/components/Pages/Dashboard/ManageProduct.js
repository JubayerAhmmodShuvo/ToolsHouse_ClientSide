import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ManageSingleProduct from "./ManageSingleProduct";

const ManageProduct = () => {
  const [deletingService, setDeletingService] = useState(null);

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery("services", () =>
    fetch("https://polar-sierra-20396.herokuapp.com/services", {
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
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-20 ">
        {services.map((service) => (
          <ManageSingleProduct
            service={service}
            key={service._id}
            refetch={refetch}
            setDeletingService={setDeletingService}
          ></ManageSingleProduct>
        ))}
      </div>
      {deletingService && (
        <DeleteConfirmModal
          service={deletingService}
          refetch={refetch}
          setDeletingService={setDeletingService}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageProduct;
