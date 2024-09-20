import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteFromCart,
  incrementQuantity,
  resetCart,
} from "../slices/productSlice";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const productData = useSelector((state) => state.productInfo.productData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggle = useSelector((state) => state.productInfo.toggle);

  const handleDeleteitem = (id) => {
    dispatch(deleteFromCart({ _id: id })); // Ensure you're dispatching an object with _id
    toast.error("item deleted successfully");
  };

  return (
    <div className="w-2/3 pr-10 ">
      <Toaster />
      <div className="w-full">
        <h2
          className={
            toggle
              ? "font-titleFont text-2xl font-bold"
              : "font-titleFont text-2xl font-bold text-white"
          }
        >
          Shopping cart
        </h2>
      </div>
      <div>
        {productData.map((item) => {
          return (
            <div
              key={item._id}
              className="flex items-center justify-between gap-6 mt-6 bg-white rounded-lg"
            >
              <div className="flex items-center gap-2">
                <MdDelete
                  className={
                    toggle
                      ? "text-2xl text-red-600 cursor-pointer duration-300"
                      : "text-2xl text-black cursor-pointer duration-300"
                  }
                  onClick={() => handleDeleteitem(item._id)}
                />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-cover my-2 rounded"
                />
              </div>
              <h2 className="w-52 font-semibold">{item.title}</h2>
              <p className="w-10">${item.price}</p>
              <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
                <p className="text-sm">Quantity</p>
                <div className="flex items-center gap-4 text-sm font-semibold">
                  <button
                    className="border px-3 hover:bg-black hover:text-white duration-300"
                    onClick={() =>
                      dispatch(
                        decrementQuantity({
                          _id: item._id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                          description: item.description,
                        })
                      )
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span> {/* Use the item quantity */}
                  <button
                    className="border px-3 hover:bg-black hover:text-white duration-300"
                    onClick={() =>
                      dispatch(
                        incrementQuantity({
                          _id: item._id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                          description: item.description,
                        })
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="w-14">${item.quantity * item.price}</p>
            </div>
          );
        })}
      </div>
      {productData.length > 0 && (
        <button
          className=" w-[150px] px-3 py-2 text-white bg-red-500 hover:bg-red-600 shadow-lg rounded text-center mt-4 mx-7 "
          onClick={() => dispatch(resetCart()) & toast.error("Your is Empty")}
        >
          Reset Cart
        </button>
      )}
      {productData.length > 0 && (
        <div
          className={
            toggle
              ? "flex items-center text-gray-500 mx-7 mt-4"
              : "flex items-center text-gray-200 mx-7 mt-4"
          }
        >
          <FaArrowLeftLong
            className="mt-1 rounded-full p-2 hover:bg-gray-100 hover:text-black"
            size={36}
            onClick={() => navigate("/")}
          />
          <span
            className={
              toggle
                ? " px-2 hover:text-gray-600 hover:font-semibold duration-300"
                : " px-2 hover:text-gray-200 hover:font-semibold duration-300"
            }
          >
            go shopping
          </span>
        </div>
      )}
    </div>
  );
};

export default CartItem;
