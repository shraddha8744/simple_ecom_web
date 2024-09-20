import React from "react";
import { Link } from "react-router-dom";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcDiscover,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 border border-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="font-bold text-lg mb-4">bazaar</h2>
          <p>&copy; bazaar.com</p>
          <div className="flex space-x-4 mt-4">
            <FaCcVisa size={24} />
            <FaCcMastercard size={24} />
            <FaCcPaypal size={24} />
            <FaCcDiscover size={24} />
          </div>
          <div className="flex space-x-4 mt-4">
            <Link to="#">
              <i className="fab fa-github"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4">locate us</h2>
          <p>MBD,Ruwi, Muscat-Oman</p>
          <p>Mobile: 00968 97859628</p>
          <p>Phone: 00968 24769221</p>
          <p>e-mail: bazaar@gmail.com</p>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4">profile</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/account" className="hover:underline">
                my account
              </Link>
            </li>
            <li>
              <Link to="/checkout" className="hover:underline">
                checkout
              </Link>
            </li>
            <li>
              <Link to="/order-tracking" className="hover:underline">
                order tracking
              </Link>
            </li>
            <li>
              <Link to="/help-support" className="hover:underline">
                help & support
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4">Newsletter</h2>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="e-mail"
              className="mb-2 p-2 rounded-md text-black"
            />
            <button
              type="submit"
              className="bg-white text-black py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
