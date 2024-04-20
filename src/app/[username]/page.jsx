import React from "react";
import connectDb from "../../../utils/connectDB";
import PageModel from "../../../models/PageModel";
import UserModel from "../../../models/UserModel";
import Image from "next/image";
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
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
export const buttonsIcons = {
  email: faEnvelope,
  instagram: faInstagram,
  facebook: faFacebook,
  discord: faDiscord,
  youtube: faYoutube,
  whatsapp: faWhatsapp,
  github: faGithub,
  telegram: faTelegram,
  linkedin: faLinkedin,
  pinterest: faPinterest,
  snapchat: faSnapchat,
  spotify: faSpotify,
  threads: faThreads,
  X: faXTwitter,
};
const page = async ({ params }) => {
  const username = params.username;

  await connectDb();

  const page = await PageModel.findOne({ username });
  const user = await UserModel.findOne({ email: page.email });
  const bg_color = page.bg_color;
  const button_color = page.button_color;
  const button_font_color = page.button_font_color;
  const font_color = page.font_color;
  const avatar_border_color = page.avatar_border_color;
  return (
    <>
      <div
        className={`h-screen w-full flex flex-col items-center pt-16`}
        style={{ backgroundColor: bg_color, color: font_color }}
      >
        <div
          className={`overflow-hidden h-[128px] w-[128px] rounded-full border-4 `}
          style={{ borderColor: avatar_border_color }}
        >
          <Image
            className="w-full h-full object-cover"
            src={user.image}
            alt={"avatar"}
            width={128}
            height={128}
          />
        </div>

        <p className="my-2 font-bold text-base ">@{page.username}</p>
        <p className="mb-5 text-sm w-1/4 text-center ">{page.bio}</p>
        <div className="flex mb-3">
          {page.buttons.map(
            (button) =>
              button.URL != "" && (
                <button className="w-fit h-fit mx-1" key={button.label}>
                  <a href={button.URL}>
                    <FontAwesomeIcon
                      icon={buttonsIcons[button.label]}
                      className="w-9 h-9 pr-2"
                      style={{ color: font_color }}
                    />
                    {/* {button.icons} */}
                  </a>
                </button>
              )
          )}
        </div>
        {page.links.map((link) => (
          <div className="w-full flex items-center place-content-center">
            {link.type === "link" && (
              <a
                href={link.url}
                className="w-[45%] h-[57px] rounded-full mt-2 flex items-center place-content-center"
                style={{
                  backgroundColor: button_color,
                  color: button_font_color,
                }}
              >
                <button className="w-full">{link.title}</button>
              </a>
            )}
            {link.type === "header" && (
              <p className="mt-2 text-lg">{link.title}</p>
            )}
          </div>
        ))}
        <a
          href="https://blinklink-smoky.vercel.app"
          className="bg-white text-black flex w-1/5 h-12 rounded-full bottom-5 absolute items-center place-content-center"
        >
          <button className="flex ">
            <img
              src="/logo-removebg-preview.png"
              alt="blinklink"
              className="h-6 pr-3"
            />

            <p>Create your own BlinkLink</p>
          </button>
        </a>
      </div>
    </>
  );
};

export default page;
