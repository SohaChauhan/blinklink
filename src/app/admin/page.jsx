import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import PageModel from "../../../models/PageModel";
import { getServerSession } from "next-auth";
import connectDb from "../../../utils/connectDB";
import cloneDeep from "clone-deep";
import AddLinks from "../ui/AddLinks";
import Profile from "../ui/Profile";
import UserModel from "../../../models/UserModel";
import NavBar from "../ui/NavBar";

export default async function Admin() {
  const session = await getServerSession(authOptions);
  await connectDb();
  let page = await PageModel.findOne({ email: session?.user?.email });
  let user = await UserModel.findOne({ email: page.email });

  if (page) {
    const leanPage = cloneDeep(page.toJSON());
    leanPage._id = leanPage._id.toString();
    const leanUser = cloneDeep(user.toJSON());
    leanUser._id = leanUser._id.toString();
    const link = "https://blinklink-smoky.vercel.app/" + leanUser.username;
    // console.log("This is username: " + leanUser.username);
    return (
      <>
        <NavBar user={leanUser} />
        <section className="flex md:flex-row flex-col">
          <section className="flex h-full flex-col xl:w-1/2 md:w-2/3 w-full px-8 pt-4 border-r">
            <Profile page={leanPage} user={leanUser}></Profile>
          </section>
          <section className="flex h-full xl:flex-col xl:w-1/2 md:w-1/3 w-full md:py-4 pb-4 place-content-center">
            {leanUser.username && (
              <div className="bg-fuchsia-200 py-2 px-4 flex flex-row place-content-between h-20 rounded-2xl m-2">
                <div className="my-auto flex items-center">
                  <span className="material-symbols-outlined my-auto pr-2">
                    captive_portal
                  </span>
                  <span className="text-sm">
                    Your Linktree is live:{" "}
                    <a href={link} className="underline underline-offset-4">
                      {link}
                    </a>
                  </span>
                </div>
                <button className="my-auto mx-0 py-4 px-6">
                  <span className="material-symbols-outlined">
                    content_paste
                  </span>
                </button>
              </div>
            )}
            <AddLinks></AddLinks>
          </section>
        </section>
      </>
    );
  } else {
    return <div></div>;
  }
}
