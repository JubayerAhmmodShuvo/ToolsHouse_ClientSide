import { Route, Routes } from "react-router-dom";
import "./App.css";
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Pages/Shared/Navbar";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/Login/SignUp";
import ThankYou from "./components/Pages/Shared/ThankYou";
import Footer from "./components/Pages/Shared/Footer";
import NotFound from "./components/Pages/Shared/NotFound";
import RequireAuth from "./components/Pages/RequireAuth/RequireAuth";
import Purchase from "./components/Pages/Purchase/Purchase";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import Profile from "./components/Pages/Dashboard/Profile";
import MyOrder from "./components/Pages/Dashboard/MyOrder";
import AddReview from "./components/Pages/Dashboard/AddReview";
import Payment from "./components/Pages/Dashboard/Payment";
import Blogs from "./components/Pages/Blogs/Blogs";
import MyPortfolio from "./components/Pages/MyPortfolio/MyPortfolio";

import MakeAdmin from "./components/Pages/Dashboard/MakeAdmin";
import AddProduct from "./components/Pages/Dashboard/AddProduct";
import RequireAdmin from "./components/Pages/RequireAuth/RequireAdmin";
import ForgotPass from "./components/Pages/Login/ForgotPass";



function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/thank" element={<ThankYou />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/portfolio" element={<MyPortfolio />} />
          <Route path="/forgotpass" element={<ForgotPass />} />

          <Route
            path="/services/:serviceId"
            element={
              <RequireAuth>
                <Purchase />
              </RequireAuth>
            }
          />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index={"dashboard"} element={<MyOrder />} />
            <Route path="addreview" element={<AddReview />} />
            <Route path="profile" element={<Profile />} />
            <Route path="payment/:id" element={<Payment />} />
            <Route
              path="makeAdmin"
              element={
                <RequireAdmin>
                  <MakeAdmin />
                </RequireAdmin>
              }
            />
            <Route
              path="addNewProduct"
              element={
                <RequireAdmin>
                  <AddProduct />
                </RequireAdmin>
              }
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>

        <ToastContainer />
      </div>
      <div className="mx-auto">
        <Footer />
      </div>
    </>
  );
}

export default App;
