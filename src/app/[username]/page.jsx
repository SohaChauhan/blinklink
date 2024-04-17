import React from "react";
import connectDb from "../../../utils/connectDB";
import PageModel from "../../../models/PageModel";
import UserModel from "../../../models/UserModel";
import Image from "next/image";
const page = async ({ params }) => {
  const username = params.username;

  await connectDb();
  const page = await PageModel.findOne({ username });
  const user = await UserModel.findOne({ email: page.email });
  const bg_color = page.bg_color;
  return (
    <div
      className={`h-screen w-full flex flex-col items-center pt-32`}
      style={{ backgroundColor: bg_color }}
    >
      <div
        className={
          `overflow-hidden h-[128px] w-[128px] rounded-full border-4 ` +
          (bg_color === "#ffffff" || bg_color === "#FFFFFF"
            ? "border-black"
            : "border-white")
        }
      >
        <Image
          className="w-full h-full object-cover "
          src={user.image}
          alt={"avatar"}
          width={128}
          height={128}
        />
      </div>

      <p className="my-2 font-bold text-base">@{page.username}</p>
      <p className="my-2 text-sm">{page.name}</p>
      <p className="my-2 text-sm w-1/4 text-center">{page.bio}</p>
      {/* <p className="my-2">{page.links}</p> */}
      {/* <p className="my-2">{page.headers}</p> */}
    </div>
  );
};

export default page;
