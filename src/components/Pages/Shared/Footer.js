import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const Footer = () => {
  const navigate= useNavigate();

  const handleSubmit = (e) => { 
    e.preventDefault();
    const input = e.target.text.value;
    if (input.length <= 0) {
      toast.error("Please enter a valid email");
    }
     else {
      navigate(`/thank`);
      toast.success("Thank you for subscribing to our newsletter");
    }
    
   
  }
  return (
    <div>
      <footer class="footer  p-10 bg-teal-50	  text-base-content">
        <div className="lg:mx-auto ">
          <span class="footer-title">Services</span>
          <Link to="" class="hover:text-cyan-500	">
            Tools Management
          </Link>
          <Link to="" class="hover:text-cyan-500">
            Machines
          </Link>
          <Link to="" class="hover:text-cyan-500">
            Sells
          </Link>
          <Link to="" class="hover:text-cyan-500">
            Delivery
          </Link>
        </div>
        <div className="lg:mx-auto">
          <span class="footer-title">Company</span>
          <Link to="" class="hover:text-cyan-500">
            About us
          </Link>
          <Link to="" class="hover:text-cyan-500">
            Contact Us
          </Link>
          <Link to="" class="hover:text-cyan-500">
            Working Hours
          </Link>
          <Link to="" class="hover:text-cyan-500">
            Jobs
          </Link>
        </div>
        <div className="lg:mx-auto">
          <span class="footer-title">Legal</span>
          <Link to="" class="hover:text-cyan-500">
            Terms of use
          </Link>
          <Link to="" class="hover:text-cyan-500">
            Privacy policy
          </Link>
          <Link to="" class="hover:text-cyan-500">
            Cookie policy
          </Link>
          <Link to="" class="hover:text-cyan-500">
            Return & Refund policy
          </Link>
        </div>
        <div className="lg:mx-auto">
          <span class="footer-title">Newsletter</span>
          <form onSubmit={handleSubmit} class="form-control w-80">
            <label class="label">
              <span class="label-text">Enter your email address</span>
            </label>
            <div class="relative">
              <input
                type="text"
                name="text"
                placeholder="username@site.com"
                class="input input-bordered w-full pr-16"
              />
              <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;