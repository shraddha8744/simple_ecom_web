import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../slices/productSlice";
import toast, { Toaster } from "react-hot-toast";

const ProductCart = ({ productData }) => {
  const toggle = useSelector((state) => state.productInfo.toggle);

  const { image, title, price, oldPrice, category, description } = productData;
  const dispatch = useDispatch();
  const hanleAddToCart = () => {
    dispatch(
      addToCart({
        _id: productData._id,
        title: title,
        image: image,
        price: price,
        quantity: 1,
        description: description,
      })
    ) & toast.success(`${title} is added successfully!`);
  };

  const navigate = useNavigate("");

  const _id = title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split("  ").join("");
  };
  const rootId = idString(_id);

  const handleDetails = () => {
    navigate(`/products/${rootId}`, {
      state: {
        item: productData,
      },
    });
  };
  return (
    <div className="group relative">
      <Toaster />
      <div
        className="w-full h-96 cursor-pointer overflow-hidden"
        onClick={handleDetails}
      >
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4 ">
        <div className="flex justify-between items-center">
          <div>
            <h2
              className={
                toggle
                  ? "font-titleFont text-base font-bold"
                  : "font-titleFont text-base font-bold text-white"
              }
            >
              {title.substring(0, 15)}
            </h2>
          </div>
          <div className="flex justify-end gap-2 overflow-hidden w-28 text-sm relative">
            <div className="flex gap-2 ">
              <p
                className={
                  toggle
                    ? "line-through text-gray-400"
                    : "line-through text-gray-300"
                }
              >
                ${oldPrice}
              </p>
              <p
                className={
                  toggle ? "font-semibold" : "font-semibold text-white "
                }
              >
                ${price}
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className={toggle ? "text-black" : "text-white"}>{category}</p>
          <button
            onClick={hanleAddToCart}
            className={
              toggle
                ? "w-full py-2 text-center text-white hover:bg-gray-800 bg-black rounded mt-3"
                : "w-full py-2 text-center text-black hover:bg-gray-900 bg-white rounded mt-3 hover:text-white"
            }
          >
            Add to cart
          </button>
        </div>
        <div className="absolute top-4 right-0 ">
          {productData.isNew && (
            <p className="bg-black text-white font-semibold font-titleFont px-6 py-1 ">
              Sale
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
