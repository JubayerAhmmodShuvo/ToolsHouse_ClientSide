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
          <Route
            path="/services/:serviceId"
            element={
              <RequireAuth>
                <Purchase />
              </RequireAuth>
            }
          />

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
