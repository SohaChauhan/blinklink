// import { userAgent } from "next/server";
"use client";
import React from "react";
import { useState } from "react";
import { GripVertical } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faPinterest,
  faSnapchat,
  faSpotify,
  faTelegram,
  faThreads,
  faWhatsapp,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { ReactSortable } from "react-sortablejs";

import { faEnvelope, faTrashCan } from "@fortawesome/free-regular-svg-icons";

const AddLinks = ({ page }) => {
  const email = page.email;
  const [link, setLink] = useState(false);
  const [header, setHeader] = useState(false);
  const [social, setSocial] = useState(false);
  const [links, setLinks] = useState(page.links);
  const [socialLinks, setSocialLinks] = useState(page.buttons);
  const [linkTitle, setLinkTitle] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [headerTitle, setHeaderTitle] = useState("");
  const [change, setChange] = useState(false);
  const [error, setError] = useState("");

  async function addLink() {
    setChange(true);
    setLinks((prev) => {
      return [
        ...prev,
        {
          key: Date.now().toString(),
          title: "",
          url: "",
          type: "link",
        },
      ];
    });
    console.log(links);
  }

  async function addHeader() {
    setChange(true);
    setLinks((prev) => {
      return [
        ...prev,
        {
          key: Date.now().toString(),
          title: "",
          type: "header",
        },
      ];
    });
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
  function onChange(e) {
    setSocialLinks((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.key === e.target.name
      );
      return prev.map((item, index) => {
        if (index === existingIndex) {
          return {
            ...item,
            URL: e.target.value,
          };
        } else {
          return {
            ...item,
          };
        }
      });
    });
  }
  async function addSocialRemove() {
    console.log(socialLinks);
    try {
      const response = await fetch("/api/socials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          socialLinks,
        }),
      });
      if (!response.ok) {
        setError(response.statusText);
        return;
      }
      setError("");
    } catch (error) {
      setError(error);
    }
    setSocial(false);
  }
  function removeLink(linkKeyToRemove) {
    setChange(true);

    setLinks((prevLinks) =>
      [...prevLinks].filter((link) => link.key !== linkKeyToRemove)
    );
  }
  function handleLinkChange(keyOfLinkToChange, prop, ev) {
    setChange(true);

    setLinks((prev) => {
      const newLinks = [...prev];
      newLinks.forEach((link) => {
        if (link.key === keyOfLinkToChange) {
          link[prop] = ev.target.value;
        }
      });
      return [...prev];
    });
  }

  async function saveLinks() {
    try {
      const response = await fetch("/api/links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          links,
        }),
      });
      if (!response.ok) {
        setError(response.statusText);
        return;
      }
      setError("");
      setChange(false);
    } catch (error) {
      setError(error);
    }
  }
  return (
    <>
      <div className="w-full place-content-center flex mt-5 md:flex-row flex-col justify-center items-center">
        <button
          onClick={addLink}
          className="md:w-1/3 w-1/2 bg-purple-600 rounded-full my-1 mx-1 p-3 text-white hover:bg-purple-700 hover:ease-in hover:duration-200 max-[536px]:text-xs text-base"
        >
          Add Link
        </button>
        <button
          onClick={addHeader}
          className="md:w-1/3 w-1/2 bg-purple-600 rounded-full my-1 mx-1 p-3 text-white hover:bg-purple-700 hover:ease-in hover:duration-200  max-[536px]:text-xs text-base"
        >
          Add Header
        </button>
        <button
          onClick={addSocial}
          className="md:w-1/3  w-1/2 bg-purple-600 rounded-full my-1 mx-1 p-3 text-white hover:bg-purple-700 hover:ease-in hover:duration-200 max-[536px]:text-xs text-base"
        >
          Add Social Icon
        </button>
      </div>
      <div className="flex flex-col items-center pr-2 w-full">
        {link && (
          <div className=" text-lg bg-white mt-8 pt-8 pb-5 xl:mx-16 md:mx-4 mx-16 px-8 rounded-xl flex flex-col shadow-md items-center">
            <p className="text-lg font-bold w-full">Enter URL</p>
            <input
              type="text"
              placeholder="Title"
              value={linkTitle}
              onChange={(e) => {
                setLinkTitle(e.target.value);
              }}
              className="bg-zinc-200 mt-3 mb-2 p-3 rounded-2xl w-full outline-none focus:outline-[#4c956c] text-base"
            />
            <input
              type="url"
              placeholder="URL"
              value={linkUrl}
              onChange={(e) => {
                setLinkUrl(e.target.value);
              }}
              className="bg-zinc-200 mb-3 mt-1 p-3 rounded-2xl w-full outline-none focus:outline-[#4c956c] text-base"
            />
            {error && <span className="text-sm text-red-500">{error}</span>}
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
              value={headerTitle}
              onChange={(e) => {
                setHeaderTitle(e.target.value);
              }}
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
          <div className="text-sm bg-white mt-8 pt-8 pb-5 mx-16 px-8 rounded-xl flex flex-col shadow-md items-center w-full">
            <p className="text-lg font-bold w-full">Enter Social Icon</p>

            <div className="flex place-content-between w-full items-center">
              <p className="px-2 flex items-center">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-7 h-7 pr-2 text-neutral-700"
                />
                Instagram
              </p>
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                onChange={onChange}
                value={socialLinks[0].URL}
                className="px-3 bg-zinc-200 mb-3 mt-1 p-3 rounded-2xl w-2/3  outline-none focus:outline-[#4c956c] "
              />
            </div>
            <div className="flex place-content-between w-full items-center">
              <p className="px-2 flex items-center">
                <FontAwesomeIcon
                  icon={faThreads}
                  className="w-7 h-7 pr-2 text-neutral-700"
                />
                Threads
              </p>
              <input
                type="text"
                placeholder="Threads URL"
                name="threads"
                value={socialLinks[1].URL}
                onChange={onChange}
                className="px-3 bg-zinc-200 mb-3 mt-1 p-3 rounded-2xl w-2/3 outline-none focus:outline-[#4c956c] "
              />
            </div>
            <div className="flex place-content-between w-full items-center">
              <p className="px-2 flex items-center">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="w-7 h-7 pr-2 text-neutral-700"
                />
                Facebook
              </p>
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                onChange={onChange}
                value={socialLinks[2].URL}
                className="px-3 bg-zinc-200 mb-3 mt-1 p-3 rounded-2xl w-2/3 outline-none focus:outline-[#4c956c] "
              />
            </div>
            <div className="flex place-content-between w-full items-center">
              <p className="px-2 flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-7 h-7 pr-2 text-neutral-700"
                />
                Email
              </p>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={socialLinks[3].URL}
                onChange={onChange}
                className="px-3 bg-zinc-200 mb-3 mt-1 p-3 rounded-2xl w-2/3 outline-none focus:outline-[#4c956c] "
              />
            </div>
            <div className="flex place-content-between w-full items-center">
              <p className="px-2 flex items-center">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="w-7 h-7 pr-2 text-neutral-700"
                />
                YouTube
              </p>
              <input
                type="text"
                placeholder="Youtube URL"
                value={socialLinks[4].URL}
                name="youtube"
                onChange={onChange}
                className="px-3 bg-zinc-200 mb-3 mt-1 p-3 rounded-2xl w-2/3 outline-none focus:outline-[#4c956c] "
              />
            </div>
            <div className="flex place-content-between w-full items-center">
              <p className="px-2 flex items-center">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="w-7 h-7 pr-2 text-neutral-700"
                />
                X (formerly Twitter)
              </p>
              <input
                type="text"
                placeholder="X URL"
                name="X"
                value={socialLinks[5].URL}
                onChange={onChange}
                className="px-3 bg-zinc-200 mb-3 mt-1 p-3 rounded-2xl w-2/3 outline-none focus:outline-[#4c956c] "
              />
            </div>
            <div className="flex place-content-between w-full items-center">
              <p className="px-2 flex items-center">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="w-7 h-7 pr-2 text-neutral-700"
                />
                WhatsApp
              </p>
              <input
                type="text"
                placeholder="WhatsApp URL"
                name="whatsapp"
                value={socialLinks[6].URL}
                onChange={onChange}
                className="px-3 bg-zinc-200 mb-3 mt-1 p-3 rounded-2xl w-2/3 outline-none focus:outline-[#4c956c]"
              />
            </div>
            <div className="flex place-content-between w-full items-center">
              <p className="px-2 flex items-center">
                <FontAwesomeIcon
                  icon={faSnapchat}
                  className="w-7 h-7 pr-2 text-neutral-700"
                />
                Snapchat
              </p>
              <input
                type="text"
                placeholder="Snapchat URL"
                name="snapchat"
                value={socialLinks[7].URL}
                onChange={onChange}
                className="px-3 bg-zinc-200 mb-3 mt-1 p-3 rounded-2xl w-2/3 outline-none focus:outline-[#4c956c]"
              />
            </div>
            <div className="flex place-content-between w-full items-center">
              <p className="px-2 flex items-center">
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="w-7 h-7 pr-2 text-neutral-700"
                />
                Discord
              </p>
              <input
                type="text"
                placeholder="Discord URL"
                value={socialLinks[8].URL}
                name="discord"
                onChange={onChange}
                className="px-3 bg-zinc-200 mb-3 mt-1 p-3 rounded-2xl w-2/3 outline-none focus:outline-[#4c956c]"
              />
            </div>
            <div className="flex place-content-between w-full items-center">
              <p className="px-2 flex items-center">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-7 h-7 pr-2 text-neutral-700"
                />
                GitHub
              </p>
              <input
                type="text"
                placeholder="GitHub URL"
                name="github"
                onChange={onChange}
                value={socialLinks[9].URL}
                className="px-3 bg-zinc-200 mb-3 mt-1 p-3 rounded-2xl w-2/3 outline-none focus:outline-[#4c956c]"
              />
            </div>
            <div className="flex place-content-between w-full items-center">
              <p className="px-2 flex items-center">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-7 h-7 pr-2 text-neutral-700"
                />
                LinkedIn
              </p>
              <input
                type="text"
                placeholder="LinkedIn URL"
                name="linkedin"
                onChange={onChange}
                value={socialLinks[10].URL}
                className="px-3 bg-zinc-200 mb-3 mt-1 p-3 rounded-2xl w-2/3 outline-none focus:outline-[#4c956c]"
              />
            </div>
            <div className="flex place-content-between w-full items-center">
              <p className="px-2 flex items-center">
                <FontAwesomeIcon
                  icon={faPinterest}
                  className="w-7 h-7 pr-2 text-neutral-700"
                />
                Pinterest
              </p>
              <input
                type="text"
                placeholder="Pinterest URL"
                value={socialLinks[11].URL}
                name="pinterest"
                onChange={onChange}
                className="px-3 bg-zinc-200 mb-3 mt-1 p-3 rounded-2xl w-2/3 outline-none focus:outline-[#4c956c] "
              />
            </div>
            <div className="flex place-content-between w-full items-center">
              <p className="px-2 flex items-center">
                <FontAwesomeIcon
                  icon={faSpotify}
                  className="w-7 h-7 pr-2 text-neutral-700"
                />
                Spotify
              </p>
              <input
                type="text"
                placeholder="Spotify URL"
                name="spotify"
                value={socialLinks[12].URL}
                onChange={onChange}
                className="px-3 bg-zinc-200 mb-3 mt-1 p-3 rounded-2xl w-2/3 outline-none focus:outline-[#4c956c] "
              />
            </div>
            <div className="flex place-content-between w-full items-center">
              <p className="px-2 flex items-center">
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="w-7 h-7 pr-2 text-neutral-700"
                />
                Telegram
              </p>
              <input
                type="text"
                placeholder="Telegram URL"
                value={socialLinks[13].URL}
                name="telegram"
                onChange={onChange}
                className=" bg-zinc-200 mb-3 mt-1 p-3 rounded-2xl w-2/3 outline-none focus:outline-[#4c956c]"
              />
            </div>
            <button
              onClick={addSocialRemove}
              className="w-3/4 bg-lime-300 rounded-full my-1 p-3 hover:bg-lime-400 hover:ease-in hover:duration-200 xl:text-sm text-xs flex place-content-center items-center"
            >
              {/* <span className="material-symbols-outlined xl:pr-2">add</span> */}
              Save Social Icons
            </button>
          </div>
        )}
        <div className="mt-5 md:w-11/12 w-full m-auto p-2">
          <ReactSortable
            handle={".handle"}
            list={links}
            setList={setLinks}
            onEnd={() => setChange(true)}
          >
            {links.map((link) => (
              <div
                key={link.key}
                // className="mt-8 flex flex-col place-content-center"
                className="py-7 px-5 my-4 bg-white flex rounded-2xl shadow-lg items-center"
              >
                <div className="handle">
                  {/* <FontAwesomeIcon
                    className="text-neural-600 mr-2 cursor-ns-resize"
                    icon={faEllipsis}
                  /> */}
                  <GripVertical className="cursor-pointer"></GripVertical>
                </div>

                <div
                  // className="bg-white"
                  className="flex flex-col w-11/12 place-content-center px-4 h-full"
                >
                  <div>
                    <input
                      value={link.title}
                      onChange={(e) => handleLinkChange(link.key, "title", e)}
                      type="text"
                      placeholder="title"
                      className="bg-transparent outline-none placeholder:text-black w-full"
                    />
                  </div>
                  {link.type === "link" && (
                    <div>
                      <input
                        value={link.url}
                        onChange={(ev) => handleLinkChange(link.key, "url", ev)}
                        type="text"
                        placeholder="url"
                        className="bg-transparent outline-none placeholder:text-black w-full"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <div>
                    <button onClick={() => removeLink(link.key)} type="button">
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="text-neutral-700 h-5"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </ReactSortable>
        </div>
        <button
          onClick={saveLinks}
          disabled={change ? false : true}
          className="disabled:bg-neutral-300 xl:w-1/4 w-1/2 bg-lime-300 rounded-full my-1 mx-1 p-3 hover:bg-lime-400 hover:ease-in hover:duration-200 flex place-content-center items-center"
        >
          Save Links
        </button>
      </div>
    </>
  );
};

export default AddLinks;
