import { Route, Routes } from "react-router-dom";
import "./App.css";
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Pages/Shared/Navbar";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/Login/SignUp";


function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
