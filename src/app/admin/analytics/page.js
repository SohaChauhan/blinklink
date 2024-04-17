import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import connectDb from "../../../../utils/connectDB";
import cloneDeep from "clone-deep";
import PageModel from "../../../../models/PageModel";
import UserModel from "../../../../models/UserModel";
import NavBar from "../../ui/NavBar";
export default async function Analytics() {
  const session = await getServerSession(authOptions);
  await connectDb();
  let page = await PageModel.findOne({ email: session?.user?.email });
  let user = await UserModel.findOne({ email: page.email });
  if (page) {
    const leanPage = cloneDeep(page.toJSON());
    leanPage._id = leanPage._id.toString();
    const leanUser = cloneDeep(user.toJSON());
    leanUser._id = leanUser._id.toString();
    return (
      <>
        <NavBar user={leanUser} />
        {/* <section className="flex md:flex-row flex-col">
          <section className="flex h-full flex-col xl:w-1/2 md:w-2/3 w-full px-8 pt-4 border-r">
            <Profile page={leanPage} user={leanUser}></Profile>
          </section>
          <section className="flex h-full xl:flex-col xl:w-1/2 md:w-1/3 w-full md:py-4 pb-4 place-content-center">
            <AddLinks></AddLinks>
          </section>
        </section> */}
      </>
    );
  } else {
    return <div></div>;
  }
}
