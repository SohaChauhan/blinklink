"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import Link from "next/link";
import "./signup.css";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

const poppins = localFont({ src: "./fonts/Poppins-Regular.woff2" });

export default function Signup() {
  const router = useRouter();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const handleSigninwithGoogle = async () => {
    await signIn("google", {
      callbackUrl: "https://blinklink-smoky.vercel.app/admin",
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    console.log(username);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === "" || email === "" || username === "") {
      setError("Please fill all the fields");
      return;
    }
    try {
      setPending(true);
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      if (response.status == 501) {
        setError("Email already exists");
        setPending(false);
        return;
      }
      if (response.status == 502) {
        setError("Username already exists");
        setPending(false);
        return;
      }
      if (!response.ok) {
        setError(response.statusText);
        setPending(false);
        return;
      }
      router.push("/login");
    } catch (error) {
      setPending(false);
      setError(error);
    }
  };
  return (
    <>
      <Suspense>
        <div className="w-fit">
          <Link href="/">
            <img
              className="m-5 w-[200px] min-w-[200px]"
              src="/logo-full.png"
              alt="BlinkLink"
            />
          </Link>
        </div>
        <section
          className={`bg-purple-600 h-[645px] lg:mx-20 mx-10 shadow-xl flex rounded-2xl ${poppins.className}`}
        >
          <div className="w-1/2 h-full lg:visible collapse rounded-l-2xl ">
            <img
              className="w-[85%] mx-auto my-5 hover:w-[90%] hover:cursor-pointer hover:ease-in-out hover:duration-300"
              src="/g-7.png"
              alt="BlinkLink"
            />
          </div>
          <div className="lg:w-1/2 w-full h-full bg-white lg:rounded-l-[50px] rounded-2xl flex flex-col items-center place-content-center">
            <form
              onSubmit={handleSubmit}
              className=" w-full h-fit flex flex-col items-center place-content-center"
            >
              <p className="text-4xl font-bold">Create Account</p>
              <p className="text-sm mb-2 mt-1">Join For Free!</p>
              <div className="form-control h-12 mt-4 mb-2 relative w-2/3">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="bg-neutral-200 rounded-2xl h-full w-full border-none outline-none focus:outline-[#4c956c] px-0 py-5 text-sm"
                />
                <label className=" absolute left-5 top-1/2 translate-y-[-55%] text-[0.85rem] pointer-events-none transition-all duration-100 ease-in">
                  Email
                </label>
              </div>
              <div className="form-control h-12 my-2 relative w-2/3">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="bg-neutral-200 rounded-2xl h-full w-full border-none outline-none focus:outline-[#4c956c] px-0 py-5 text-sm"
                />
                <label className=" absolute left-5 top-1/2 translate-y-[-55%] text-[0.85rem] pointer-events-none transition-all duration-100 ease-in">
                  Password
                </label>
              </div>
              <div className="form-control h-12 my-2 relative w-2/3">
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleUserNameChange}
                  className="bg-neutral-200 rounded-2xl h-full w-full border-none outline-none focus:outline-[#4c956c] px-0 py-5 text-sm"
                />
                <label className=" absolute left-5 top-1/2 translate-y-[-55%] text-[0.85rem] pointer-events-none transition-all duration-100 ease-in">
                  Username
                </label>
              </div>
              {error && <span className="text-sm text-red-500">{error}</span>}
              <button
                type="submit"
                disabled={pending ? true : false}
                className="bg-lime-300 w-2/3 h-12 my-4 rounded-3xl text-[0.95rem] hover:ease-in hover:duration-200 hover:bg-lime-400 disabled:bg-neutral-300"
              >
                {" "}
                {pending ? "Creating Account" : "Create Account"}
              </button>
            </form>
            <p className="text-xs">
              Already have an account?{" "}
              <span>
                <Link href="./login" className=" text-purple-600 underline">
                  LogIn
                </Link>
              </span>
            </p>

            <p className="my-4 text-neutral-600">OR</p>
            <button
              onClick={handleSigninwithGoogle}
              className="bg-white border border-neutral-200 hover:bg-neutral-200 hover:ease-in hover:duration-200 flex items-center  place-content-center w-2/3 h-12 rounded-3xl text-[0.95rem]"
            >
              <img src="/google.png" className="w-6 mr-3" />
              <p>Sign up with Google</p>
            </button>
          </div>
        </section>
      </Suspense>
    </>
  );
}
