import connectDb from "../../../../utils/connectDB";
import UserModel from "../../../../models/UserModel";
import PageModel from "../../../../models/PageModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDb();
    const { email, username, bio, bgcolor, image } = await req.json();

    const user = await UserModel.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "error" },
        { status: 404, statusText: "Some error occured. Try Again." }
      );
    }
    const user1 = await UserModel.findOne({ username });
    if (user1 && user.username != user1.username) {
      return NextResponse.json(
        { message: "Username already exists" },
        { status: 500, statusText: "Username already exists" }
      );
    }
    await UserModel.findOneAndUpdate({ email }, { username, image });
    await PageModel.findOneAndUpdate(
      { email },
      { username, bio, bg_color: bgcolor }
    );
    return NextResponse.json(
      { message: "update successfull" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500, statusText: error.message }
    );
  }
}
