import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import Modal from './Modal';
import OrderRow from './OrderRow';

 const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [order, setOrders] = useState([]);
    const [deleteItem, setDeleteItem] = useState(null);
    const [reload, setReload] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                  authorization: `Bearer ${localStorage.getItem("accessToken")}`
                   
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json();
                })
                .then(data => {
                    setOrders(data);
                  if (!reload) {
                    setReload(true);
                    return <Loading />;
                   }
                })
        }
    }, [navigate, user, reload])


    return (
      <div>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                 <th></th>
                 <th>Name</th>
                 <th>Email</th>
                 <th>Phone Number</th>
                 <th>Quantity</th>
                 <th>Price</th>
                 <th>Cancel</th>
                 <th> Status</th>
              </tr>
              
            </thead>
            <tbody>
              {order.map((order, index) => (
                <OrderRow
                  order={order}
                  key={order._id}
                  index={index}
                  setDeleteItem={setDeleteItem}
                ></OrderRow>
              ))}
            </tbody>
          </table>
        </div>
        {deleteItem && (
          <Modal
            setDeleteItem={setDeleteItem}
            deleteItem={deleteItem}
            setReload={setReload}
          ></Modal>
        )}
      </div>
    );
};


export default MyOrder;