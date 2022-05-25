import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
   const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label htmlFor="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {user && !admin && (
            <>
              <li>
                <Link to="/dashboard">My Order</Link>
             
                <Link to="/dashboard/addreview">Add Review</Link>
              </li>
            </>
          )}
          {admin && (
            <>
              <li>
                <Link to="/dashboard/addNewProduct">Add New Product</Link>
              
                <Link to="/dashboard/makeAdmin">Make Admin</Link>
              </li>
            </>
          )}

          <li>
            <Link to="/dashboard/profile">My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;