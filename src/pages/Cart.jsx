import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import water from "../assets/water.png";
import CartItem from "../components/CartItem";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState("");
  const [payNow, setPayNow] = useState(false);
  const productData = useSelector((state) => state.productInfo.productData);
  const userInfo = useSelector((state) => state.productInfo.userInfo);
  const navigate = useNavigate();
  const toggle = useSelector((state) => state.productInfo.toggle);

  // Your Stripe public key
  const stripeKey =
    "pk_test_51PI1cuSIJwLCl1QAas1w9TywlAQ2VxyIr8lw497tjVfVS2SvcSYRf1T8s0bL6iOEp0XmQ9RkbDiM1eXltYS6XFYR001inUDyEQ";

  const handleCheckOut = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to check out");
    }
  };

  // const handleToken = (token) => {
  //   // Here you can call your backend to handle payment
  //   toast.success("Payment Successful!");
  //   console.log("Payment Success:", token);
  //   // Navigate to success page or perform further actions
  // };

  useEffect(() => {
    let price = 0;
    productData.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotalPrice(price.toFixed());
  }, [productData]);

  return productData.length === 0 ? (
    <div className=" flex flex-col justify-center items-center">
      <Toaster />
      <img src={water} alt="Empty cart illustration" className="w-full mb-20" />
      <h1 className="text-center text-2xl text-orange-500 font-bold">
        Your Cart is Empty. Please go back to shopping and add products.
      </h1>
      <div className="flex items-center text-gray-500 my-6">
        <FaArrowLeftLong
          className="rounded-full p-2 hover:bg-gray-100 cursor-pointer"
          size={36}
          onClick={() => navigate("/")}
        />
        <span className="px-2 hover:text-gray-600 hover:font-semibold duration-300">
          Go shopping
        </span>
      </div>
    </div>
  ) : (
    <div className={toggle ? "" : "bg-zinc-900"}>
      {" "}
      <div className="max-w-screen-xl mx-auto py-10 flex flex-col lg:flex-row gap-8">
        <Toaster />

        <CartItem />

        <div
          className={
            toggle
              ? "lg:w-1/3 bg-[#fafafa] py-6 px-4 shadow-md rounded-lg "
              : "lg:w-1/3 bg-white py-6 px-4 shadow-md rounded-lg "
          }
        >
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart Totals</h2>
            <p className="flex items-center justify-between text-base">
              Subtotal
              <span className="font-bold text-lg">${totalPrice}</span>
            </p>
            <p className="flex items-center justify-between text-base">
              Shipping
              <span className="text-sm">Calculated at checkout</span>
            </p>
          </div>
          <p className="font-semibold flex justify-between mt-6 text-xl">
            Total <span className="font-bold">${totalPrice}</span>
          </p>
          <button
            className="w-full py-3 bg-black text-white mt-5 shadow-lg rounded hover:bg-gray-800 transition-all duration-300"
            onClick={handleCheckOut}
          >
            Proceed to checkout
          </button>
          {payNow && (
            <div className="mt-5">
              <StripeCheckout
                stripeKey={stripeKey}
                // token={handleToken}
                amount={totalPrice * 100} // Amount in cents
                name="ecom"
                description={`Your total is $${totalPrice}`}
                email={userInfo.email}
              >
                <button className="w-full py-3 bg-blue-500 text-white shadow-lg rounded hover:bg-blue-600 transition-all duration-300">
                  Pay with Stripe
                </button>
              </StripeCheckout>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
