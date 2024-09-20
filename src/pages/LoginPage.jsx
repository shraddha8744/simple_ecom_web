import React from "react";
import google from "../assets/google.png";
import github from "../assets/github.png";
import toast, { Toaster } from "react-hot-toast";

import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../slices/productSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log("Google user signed in:", user);
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1300);
      })
      .catch((err) => {
        console.error("Error signing in with Google:", err);
      });
  };

  const handleGithubLogin = (e) => {
    e.preventDefault();
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log("GitHub user signed in:", user);
      })
      .catch((err) => {
        console.error("Error signing in with GitHub:", err);
      });
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        toast.success("User Log Out Successfully");
        dispatch(removeUser());
      })
      .catch((err) => {
        console.error("Error signing out:", err);
      });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-32">
      <Toaster />
      {/* Google Sign In and Sign Out */}
      <div className="w-full flex items-center justify-center gap-10">
        <div
          onClick={handleGoogleLogin}
          className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
          role="button"
          tabIndex={0}
        >
          <img
            src={google}
            alt="Google logo"
            className="w-8 mix-blend-multiply"
          />
          <span className="text-base text-gray-900">Sign in with Google</span>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
        >
          Sign Out
        </button>
      </div>

      {/* GitHub Sign In and Sign Out */}
      <div className="w-full flex items-center justify-center gap-10">
        <div
          onClick={handleGithubLogin}
          className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
          role="button"
          tabIndex={0}
        >
          <img
            src={github}
            alt="GitHub logo"
            className="w-8 mix-blend-multiply"
          />
          <span className="text-base text-gray-900">Sign in with GitHub</span>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
