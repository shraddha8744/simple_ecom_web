import React from "react";
import ProductCart from "./ProductCart";
import { useSelector } from "react-redux";

const Product = ({ products }) => {
  const toggle = useSelector((state) => state.productInfo.toggle);

  // Check if products is undefined or null
  if (!products) {
    return <div>Loading...</div>; // or any loading indicator
  }

  return (
    <div className={toggle ? "py-10" : "py-10 bg-zinc-900"}>
      <div className="flex flex-col items-center gap-4">
        <h1
          className={
            toggle
              ? "text-2xl bg-black text-white py-2 w-80 text-center"
              : "text-2xl bg-white text-black py-2 w-80 text-center font-semibold"
          }
        >
          Shopping Everyday
        </h1>
        <span
          className={toggle ? "w-20 h-[3px] bg-black" : "w-20 h-[3px] bg-white"}
        ></span>

        <p
          className={
            toggle
              ? "max-w-[700px] text-gray-600 text-center"
              : "max-w-[700px] text-gray-200 text-center"
          }
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quam,
          tenetur voluptatum maxime repellat, iure accusamus laborum reiciendis
          sapiente labore soluta eum voluptatem veritatis sequi commodi
          blanditiis exercitationem sint tempora.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {products.length === 0
          ? "Loading..."
          : products.map((item, i) => {
              return <ProductCart productData={item} key={i} />;
            })}
      </div>
    </div>
  );
};

export default Product;
