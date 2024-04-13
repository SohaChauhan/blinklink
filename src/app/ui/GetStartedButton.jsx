"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";

const myFont = localFont({ src: "./fonts/BauhausStd-Demi.woff2" });
const poppins = localFont({ src: "./fonts/Poppins-Regular.woff2" });
export default function GetStartedButton() {
  const router = useRouter();
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = async (e) => {
    router.push(`/signup?username=${encodeURIComponent(name)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex lg:w-auto w-2/3 5 sm:mt-8 mt-5 items-center sm:flex-row flex-col place-content-between ${poppins.className}`}
    >
      <div className="flex sm:w-1/2 w-full sm:mb-0 mb-2 mt-0 min-w-fit bg-neutral-200 rounded-3xl sm:p-5 p-4 ">
        <p className="">
          <label>blinklink/</label>
        </p>
        <input
          type="text"
          placeholder="yourname"
          name="name"
          onChange={handleNameChange}
          value={name}
          className="bg-neutral-200 w-24 sm:w-36 outline-none text-stone-500"
        />
      </div>
      <div>
        <button
          type="submit"
          className=" py-4 px-7 min-w-[216.25px] bg-[#4c956c] rounded-full mx-3 hover:ease-in hover:duration-200 hover:bg-[#397051] text-white *:"
        >
          Claim your BlinkLink
        </button>
      </div>
    </form>
  );
}
