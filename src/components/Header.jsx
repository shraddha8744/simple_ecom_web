import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RiMoonFill } from "react-icons/ri";
import { MdOutlineWbSunny, MdOutlineShoppingBag } from "react-icons/md";
import { setdarkTheme, setLightTheme } from "../slices/productSlice";
import profile from "../assets/profile.png";

const Header = () => {
  const quanity = useSelector((state) => state.productInfo.productData);
  const userInfo = useSelector((state) => state.productInfo.userInfo);
  const toggle = useSelector((state) => state.productInfo.toggle);

  console.log(userInfo);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className={
        toggle === false
          ? "bg-zinc-900 w-full h-20 border-b-[1px] border-b-white-800 font-titleFont sticky top-0 z-50"
          : "w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50"
      }
    >
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          {/* <img
            src={darkLogo}
            alt="logodark image"
            className="h-28 mix-blend-multiply"
          /> */}
          <h1
            className={
              toggle
                ? "text-black text-3xl font-extrabold"
                : "text-white text-3xl font-extrabold"
            }
          >
            Bazaar
          </h1>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li
              className={
                toggle === false
                  ? "text-xl text-white font-semibold hover:text-orange-200 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
                  : "text-xl text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 "
              }
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={
                toggle === false
                  ? "text-xl text-white font-semibold hover:text-orange-200 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
                  : "text-xl text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 "
              }
            >
              Pages
            </li>
            <li
              className={
                toggle === false
                  ? "text-xl text-white font-semibold hover:text-orange-200 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
                  : "text-xl text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 "
              }
            >
              Shop
            </li>
            <li
              className={
                toggle === false
                  ? "text-xl text-white font-semibold hover:text-orange-200 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
                  : "text-xl text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 "
              }
            >
              Element
            </li>
            <li
              className={
                toggle === false
                  ? "text-xl text-white font-semibold hover:text-orange-200 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
                  : "text-xl text-black font-semibold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 "
              }
            >
              Blogs
            </li>
          </ul>
          {/* Replace the cart image with MdOutlineShoppingBag icon */}
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <MdOutlineShoppingBag
              size={34}
              className={toggle ? "text-gray-500 font-light" : "text-white"}
            />
            <span className="absolute top-[10px] p-2 right-[10px] left-[6px] text-yellow-500 rounded-full w-5 h-5 flex items-center justify-center text-[18px] font-extrabold">
              {quanity.length === 0 ? 0 : quanity.length}
            </span>
          </div>
          <img
            onClick={() => navigate("/login")}
            className="w-10 h-10 rounded-full"
            src={userInfo ? userInfo.image : profile}
            alt=""
          />
          {userInfo && (
            <p
              className={
                toggle
                  ? "text-base font-titleFont font-semibold underline underline-offset-2 text-black"
                  : "text-base font-titleFont font-semibold underline underline-offset-2 text-white"
              }
            >
              {userInfo.name}
            </p>
          )}

          <div className="p-2 bg-gray-200 rounded-full ml-4">
            {toggle ? (
              <RiMoonFill size={23} onClick={() => dispatch(setLightTheme())} />
            ) : (
              <MdOutlineWbSunny
                size={23}
                onClick={() => dispatch(setdarkTheme())}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
