import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../slices/productSlice";
import toast, { Toaster } from "react-hot-toast";

const ProductInfo = () => {
  const [details, setDetails] = useState({});
  const [baseQuantity, setBaseQuantity] = useState(1);
  const location = useLocation();
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.productInfo.toggle);

  const { _id, title, image, price, description } = details;
  const hanleAddToCart = () => {
    dispatch(
      addToCart({
        _id: _id,
        title: title,
        image: image,
        price: price,
        quantity: baseQuantity,
        description: description,
      })
    ) & toast.success(`${title} is added successfully!`);
  };

  useEffect(() => {
    console.log(location);
    setDetails(location.state.item);
  }, []);
  return (
    <div className={toggle ? "" : "bg-zinc-900"}>
      <Toaster />
      <div className="max-w-screen-xl mx-auto py-10 flex gap-10 ">
        <div className="relative w-2/5">
          <img src={details.image} alt="productimg" />
          <div className="absolute top-4 right-0 ">
            {details.isNew && (
              <p className="bg-black text-white font-semibold font-titleFont px-8 py-3">
                Sale
              </p>
            )}
          </div>
        </div>

        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2
              className={
                toggle
                  ? "text-4xl font-semibold"
                  : "text-4xl font-semibold text-white"
              }
            >
              {details.title}
            </h2>
            <div className="flex gap-4 items-center mt-3">
              <p
                className={
                  toggle
                    ? "line-through font-base text-gray-500"
                    : "line-through font-base text-gray-400"
                }
              >
                ${details.oldPrice}
              </p>
              <p
                className={
                  toggle
                    ? "text-2xl font-medium text-gray-900"
                    : "text-2xl font-medium text-gray-200"
                }
              >
                ${details.price}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-base">
            <div className="flex">
              <MdOutlineStar color="yellow" />
              <MdOutlineStar color="yellow" />
              <MdOutlineStar color="yellow" />
              <MdOutlineStar color="yellow" />
              <MdOutlineStar color="yellow" />
            </div>
            <p
              className={
                toggle ? "text-xs text-gray-500" : "text-xs text-gray-200"
              }
            >
              (1 Customer review)
            </p>
          </div>
          <p
            className={
              toggle
                ? "text-base text-gray-500 -mt-3"
                : "text-base text-gray-200 -mt-3"
            }
          >
            {details.description}
          </p>
          <div className="flex gap-3">
            <div
              className={
                toggle
                  ? "w-52 flex items-center justify-between text-gray-500 gap-4 border p-3"
                  : "w-52 flex items-center justify-between text-gray-200 gap-4 border p-3"
              }
            >
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  className={
                    toggle
                      ? "border px-3 hover:bg-black hover:text-white duration-300"
                      : "border px-3 hover:bg-white hover:text-black duration-300"
                  }
                  onClick={() => setBaseQuantity(baseQuantity - 1)}
                >
                  -
                </button>
                <span>{baseQuantity}</span>
                <button
                  className={
                    toggle
                      ? "border px-3 hover:bg-black hover:text-white duration-300"
                      : "border px-3 hover:bg-white hover:text-black duration-300"
                  }
                  onClick={() => setBaseQuantity(baseQuantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className={
                toggle
                  ? "bg-black text-white py-3 px-6 active:bg-gray-800 rounded duration-300"
                  : "bg-white text-black py-3 px-6 active:bg-gray-800 hover:bg-gray-800 hover:text-white rounded duration-300"
              }
              onClick={hanleAddToCart}
            >
              Add to cart
            </button>
          </div>
          <p
            className={
              toggle ? "text-base text-gray-500" : "text-base text-gray-200"
            }
          >
            Category:{" "}
            <span className="font-medium capitalize"> {details.category}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
