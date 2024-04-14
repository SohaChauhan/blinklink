"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Account() {
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [change, setChange] = useState(false);
  const [popup, setPopup] = useState(false);
  const onNameChange = (e) => {
    setChange(true);
    setName(e.target.value);
  };
  const handleNameChange = async (e) => {
    e.preventDefault();
    if (name === "") {
      return;
    }
    try {
      const response = await fetch("/api/account_details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: session.user.email, name: name }),
      });
      if (!response.ok) {
        return;
      }
      setChange(false);
      setPopup(true);
    } catch (error) {}
  };
  const router = useRouter();
  const handleLogout = async () => {
    await signOut({ callbackUrl: "https://blinklink-smoky.vercel.app/login" });

    router.replace("/login");
    console.log("Logged Out");
  };
  return (
    <>
      {session && (
        <div className="w-full flex items-center place-content-center mt-20 flex-col">
          <p className="text-3xl">My Account</p>
          <div className="w-2/5 py-3">
            <p>Basic Information</p>
            <div className="bg-white px-5 py-3 shadow-sm rounded-lg my-2">
              <div className="pb-2">
                <label className="py-3">Name:</label>
                <input
                  className="p-2 ml-2 w-2/3 border-none outline-none bg-neutral-50"
                  value={change ? name : session.user.name}
                  onChange={onNameChange}
                ></input>
              </div>
              <hr />
              <div className="py-2">
                <label className="py-3">Email:</label>
                <input
                  className="p-2 w-2/3 ml-2"
                  value={session.user.email}
                  disabled
                ></input>
                <p className="text-xs text-neutral-700 pb-2">
                  Email cannot be changed. It will be the same email with which
                  you logged in.
                </p>
              </div>
              <button
                onClick={handleNameChange}
                className="p-3  bg-lime-300 hover:bg-lime-400  rounded-xl disabled:bg-neutral-100 disabled:text-neutral-500"
                disabled={change ? false : true}
              >
                Save Changes
              </button>
            </div>
            {popup && (
              <div className="rounded absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[26%] h-48 p-4 shadow-2xl bg-white z-50 text-sm flex flex-col items-center place-content-center">
                <p className=" text-center px-4 text-base">
                  Changes will be reflected after you logout and login again to
                  your account.
                </p>
                <div className="flex items-center place-content-evenly pt-8 w-full">
                  <button
                    onClick={handleLogout}
                    className="px-2 py-3 bg-red-500 hover:bg-red-600 rounded-xl w-1/3 text-white"
                  >
                    Logout
                  </button>
                  <button
                    onClick={() => setPopup(!popup)}
                    className="px-2 py-3 bg-neutral-100 hover:bg-neutral-200 rounded-xl w-1/3"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
