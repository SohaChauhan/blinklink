"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Session from "../ui/Session";

const NavBar = ({ user }) => {
  return (
    <>
      <nav className="bg-white shadow-lg flex items-center border-2 border-zinc-100 sticky z-10 top-1 mt-2 rounded-full mx-3 place-content-between">
        <div className="flex items-center w-full">
          <Link href="/admin">
            <Image
              className="mx-5 my-5"
              src="/logo.png"
              width={35}
              height={35}
              alt="Picture of the author"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <Session user={user} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
