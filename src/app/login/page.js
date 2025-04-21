"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import "./login.css";
import localFont from "next/font/local";
import logo from "/public/logo-full.png";
import g6 from "/public/g-6.png";
import glogo from "/public/google.png";
const poppins = localFont({ src: "./fonts/Poppins-Regular.woff2" });
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSigninwithGoogle = async () => {
    await signIn("google", {
      callbackUrl: "http://blinklink-smoky.vercel.app/admin",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === "" || email === "") {
      setError("Please fill the email and password");
      return;
    }
    try {
      setPending(true);
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("invalid credentials");
        setPending(false);
        return;
      }

      router.push("/admin");
    } catch (error) {
      setPending(false);
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-fit">
        <Link href="/">
          <Image
            className="m-5 w-[200px] min-w-[200px]"
            src={logo}
            alt="BlinkLink"
          />
        </Link>
      </div>
      <section
        className={`bg-[#4c956c] h-[645px] lg:mx-20 sm:mx-5 mx-3 shadow-xl flex rounded-2xl ${poppins.className}`}
      >
        {/* <div className="w-1/2 h-full lg:visible collapse rounded-l-2xl "></div> */}

        <div className="lg:w-1/2 w-full h-full bg-white lg:rounded-r-[50px] rounded-2xl flex flex-col items-center place-content-center">
          <form
            method="post"
            onSubmit={handleSubmit}
            className=" w-full h-fit flex flex-col items-center place-content-center"
          >
            <p className="text-4xl font-bold">Welcome Back</p>
            <p className="text-sm mb-2 mt-1">Log in your account</p>
            <div className="form-control h-12 mt-4 mb-2 relative w-2/3">
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="bg-neutral-200 rounded-2xl h-full w-full border-none outline-none focus:outline-lime-400 px-0 py-5 text-sm"
              />
              <label className="absolute left-5 top-1/2 translate-y-[-55%] text-[0.85rem] pointer-events-none transition-all duration-100 ease-in">
                Email
              </label>
            </div>
            <div className="form-control h-12 my-2 relative w-2/3">
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="bg-neutral-200 rounded-2xl h-full w-full border-none outline-none focus:outline-lime-400 px-0 py-5 text-sm"
              />
              <label className=" absolute left-5 top-1/2 translate-y-[-55%] text-[0.85rem] pointer-events-none transition-all duration-100 ease-in">
                Password
              </label>
            </div>
            {error && <span className="text-sm text-red-500">{error}</span>}
            <button
              disabled={pending ? true : false}
              className="bg-purple-600 w-2/3 h-12 my-4 rounded-3xl text-[0.95rem] hover:ease-in hover:duration-200 hover:bg-purple-700 text-white disabled:bg-neutral-300"
              type="submit"
            >
              {pending ? "Logging in" : "Log in"}
            </button>
          </form>
          <p className="text-xs">
            Don&apos;t have an account?{" "}
            <span>
              <Link
                href="/signup"
                className=" text-[#4c956c] text-bold underline"
              >
                SignUp
              </Link>
            </span>
          </p>

          <p className="my-4 text-neutral-600">OR</p>
          <button
            onClick={handleSigninwithGoogle}
            className="bg-white border border-neutral-200 hover:bg-neutral-200 hover:ease-in hover:duration-200 flex items-center  place-content-center w-2/3 h-12 rounded-3xl text-[0.95rem]"
          >
            <Image src={glogo} alt="google" className="w-6 mr-3" />
            <p>Log in with Google</p>
          </button>
        </div>
        <div className="lg:w-1/2 lg:flex lg:items-center hidden w-full h-full">
          <Image
            className="lg:w-[85%] h-fit mx-auto my-9 hover:w-[90%] hover:cursor-pointer hover:ease-in-out hover:duration-300"
            src={g6}
            alt="BlinkLink"
          />
        </div>
      </section>
    </>
  );
}
