// import { userAgent } from "next/server";
"use client";
import React from "react";
import { useState } from "react";
const AddLinks = () => {
  const [link, setLink] = useState(false);
  const [header, setHeader] = useState(false);
  const [social, setSocial] = useState(false);

  function addLink() {
    if (link === true) {
      setLink(false);
    } else {
      setLink(true);
    }
    setHeader(false);
    setSocial(false);
  }
  function addLinkRemove() {
    setLink(false);
    // setLink2(true);
  }
  function addHeader() {
    if (header === true) {
      setHeader(false);
    } else {
      setHeader(true);
    }
    setLink(false);
    setSocial(false);
  }
  function addHeaderRemove() {
    setHeader(false);
    // setLink(true);
  }
  function addSocial() {
    if (social === true) {
      setSocial(false);
    } else {
      setSocial(true);
    }
    setLink(false);
    setHeader(false);
  }
  function addSocialRemove() {
    setSocial(false);
    // setLink(true);
  }
  return (
    <>
      <div className="w-full place-content-center flex mt-5">
        <button
          onClick={addLink}
          className="w-1/3 bg-purple-600 rounded-full my-1 mx-1 p-3 text-white hover:bg-purple-700 hover:ease-in hover:duration-200 max-[536px]:text-xs text-base"
        >
          Add Link
        </button>
        <button
          onClick={addHeader}
          className="w-1/3 bg-purple-600 rounded-full my-1 mx-1 p-3 text-white hover:bg-purple-700 hover:ease-in hover:duration-200  max-[536px]:text-xs text-base"
        >
          Add Header
        </button>
        <button
          onClick={addSocial}
          className="w-1/3 bg-purple-600 rounded-full my-1 mx-1 p-3 text-white hover:bg-purple-700 hover:ease-in hover:duration-200 max-[536px]:text-xs text-base"
        >
          Add Social Icon
        </button>
      </div>
      <div className="flex flex-col pr-2 w-full">
        {link && (
          <div className=" text-lg bg-white mt-8 pt-8 pb-5 xl:mx-16 md:mx-4 mx-16 px-8 rounded-xl flex flex-col shadow-md items-center">
            <p className="text-lg font-bold w-full">Enter URL</p>
            <input
              type="text"
              placeholder="Title"
              className="bg-zinc-200 mt-3 mb-2 p-3 rounded-2xl w-full outline-none focus:outline-[#4c956c] text-base"
            />
            <input
              type="text"
              placeholder="URL"
              className="bg-zinc-200 mb-3 mt-1 p-3 rounded-2xl w-full outline-none focus:outline-[#4c956c] text-base"
            />
            <button
              onClick={addLinkRemove}
              className="w-3/4 bg-lime-300 rounded-full my-1 p-3 hover:bg-lime-400 hover:ease-in hover:duration-200 text-sm  flex place-content-center items-center"
            >
              <span className="material-symbols-outlined pr-2">add</span>
              Add Link
            </button>
          </div>
        )}
        {header && (
          <div className=" text-lg bg-white mt-8 pt-8 pb-5 mx-16 px-8 rounded-xl flex flex-col shadow-md items-center">
            <p className="text-lg font-bold w-full">Enter Header</p>
            <input
              type="text"
              placeholder="Header"
              className="bg-zinc-200 mt-3 mb-2 p-3 rounded-2xl w-full outline-none focus:outline-[#4c956c] text-base"
            />
            <button
              onClick={addHeaderRemove}
              className="w-3/4 bg-lime-300 rounded-full my-1 p-3 hover:bg-lime-400 hover:ease-in hover:duration-200 text-sm  flex place-content-center items-center"
            >
              <span className="material-symbols-outlined pr-2">add</span>
              Add Header
            </button>
          </div>
        )}
        {social && (
          <div className=" text-lg bg-white mt-8 pt-8 pb-5 mx-16 px-8 rounded-xl flex flex-col shadow-md items-center">
            <p className="text-lg font-bold w-full">Enter Social Icon</p>
            <select className="bg-zinc-200 mt-3 mb-2 p-3 rounded-2xl w-full outline-none focus:outline-[#4c956c] text-base">
              <option>Instagram</option>
            </select>
            <input
              type="text"
              placeholder="URL"
              className="bg-zinc-200 mb-3 mt-1 p-3 rounded-2xl w-full outline-none focus:outline-[#4c956c] text-base"
            />
            <button
              onClick={addSocialRemove}
              className="w-3/4 bg-lime-300 rounded-full my-1 p-3 hover:bg-lime-400 hover:ease-in hover:duration-200 xl:text-sm text-xs flex place-content-center items-center"
            >
              {/* <span className="material-symbols-outlined xl:pr-2">add</span> */}
              Add Social Icon
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AddLinks;
