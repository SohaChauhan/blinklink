"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logout_button from "./Logout_button";
const Session = ({ user }) => {
  const [showPopover, setShowPopover] = useState(false);
  return (
    <>
      {user && (
        <div className="mr-4 flex items-center">
          <button
            className=" w-[53px] h-[53px] rounded-full active:border-2 active:border-[#4c956c] focus:border-2 focus:border-[#397051] flex items-center place-content-center"
            onClick={() => setShowPopover(!showPopover)}
          >
            <div className="overflow-hidden h-[45px] w-[45px] rounded-full ">
              <Image
                src={user.image}
                alt={"avatar"}
                className="w-full h-full object-cover"
                width={45}
                height={45}
              />
            </div>
          </button>
          {showPopover && (
            <div className=" bg-white absolute right-0 top-[77px] shadow-xl rounded-2xl p-3 text-sm border w-2/12">
              <button className=" flex items-center py-3 px-5 w-full rounded-xl mr-3 hover:ease-in hover:duration-200 hover:bg-neutral-200">
                <Link href="/admin/account">My Account</Link>
              </button>
              <Logout_button />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Session;
