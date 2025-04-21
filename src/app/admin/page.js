import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import PageModel from "../../../models/PageModel";
import { getServerSession } from "next-auth";
import connectDb from "../../../utils/connectDB";
import cloneDeep from "clone-deep";
import AddLinks from "../ui/AddLinks";
import Profile from "../ui/Profile";
import UserModel from "../../../models/UserModel";
import NavBar from "../ui/NavBar";
import { Link } from "lucide-react";

export default async function Admin() {
  const session = await getServerSession(authOptions);
  await connectDb();
  let page = await PageModel.findOne({ email: session?.user?.email });
  let user = await UserModel.findOne({ email: page.email });
  console.log(typeof user);

  if (page) {
    const leanPage = cloneDeep(page.toJSON());
    leanPage._id = leanPage._id.toString();
    const leanUser = cloneDeep(user.toJSON());
    leanUser._id = leanUser._id.toString();
    const link = "https://blinklink-smoky.vercel.app/" + leanUser.username;
    return (
      <>
        <NavBar user={leanUser} />
        <section className="flex xl:flex-row flex-col">
          <section className="flex h-full flex-col xl:w-1/2 w-full md:px-8 px-3 pt-4 pb-10 border-r">
            <Profile page={leanPage} user={leanUser}></Profile>
          </section>
          <section className="flex h-full flex-col xl:w-1/2 w-full md:py-4 pb-4 place-content-center px-5">
            {leanUser.username && (
              <div className="bg-blue-100 py-2 px-4 flex flex-row place-content-between h-20 rounded-2xl m-2">
                <div className="my-auto flex items-center">
                  <Link className="m-2"></Link>
                  <span className="text-sm">
                    Your Linktree is live:{" "}
                    <a href={link} className="underline underline-offset-4">
                      {link}
                    </a>
                  </span>
                </div>
              </div>
            )}
            <AddLinks page={leanPage}></AddLinks>
          </section>
        </section>
      </>
    );
  } else {
    return <div></div>;
  }
}
