"use client";

import { FcGoogle } from "react-icons/fc";

import React from "react";
import Link from "next/link";
// import { signIn, useSession } from "next-auth/react";

const Login = () => (
  <div className="container relative m-auto px-6 py-20 text-gray-500 sm:px-5 md:px-0 xl:px-40 bg-gradient-to-r from-pink-300 to-purple-50 ">
    <div className="sm-auto m-auto md:8/12 lg:w-9/12 xl:w-10/12">
      <div className="rounded-xl bg-white shadow-xl py-20">
        <div className="p-6 sm:p-4">
          <div className="flex flex-col items-center justify-center mt-3 font-bold text-tertiary-light text-2xl">
            One touch to your health
          </div>
          <div className="flex flex-col items-center justify-center"></div>
          <div className="mt-14 grid space-y-4">
            <button
              type="button"
              className="group h-16 rounded-full border-2 border-gray-300 px-6 transition duration-300 hover:border-lightred focus:bg-yellow-100 active:bg-pink-50"
              //onClick={() => signIn("google", { callbackUrl: "/practice" })}
            >
              <div className="relative flex items-center justify-center space-x-4">
                <FcGoogle className=" w-auto h-auto ml-3 text-4xl cursor-pointer" />
                <span className="block w-auto text-sm font-semibold tracking-wide text-gray-700 transition duration-300 group-hover:text-blue-300 sm:text-base">
                  Continue with Google
                </span>
              </div>
            </button>
            <div className="mt-10 space-y-4 text-center text-gray-600 sm:-mb-8">
              <p className="text-sm">
                By proceeding, you agree to our{" "}
                <Link href="/tos.txt" target="_blank">
                  Terms of Use
                </Link>{" "}
                and our{" "}
                <Link href="/privacy.txt" target="_blank">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// export default Login;

const LoginPage = () => {
  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between"></div>

        <Login />
      </div>
    </section>
  );
};

export default LoginPage;
//export default Auth;
