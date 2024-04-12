import connectDb from "../../../../utils/connectDB";
import UserModel from "../../../../models/UserModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  // dbconnection

  try {
    await connectDb();
    const { email, username } = await req.json();

    const user = await UserModel.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "error" }, { status: 404 });
    }
    await UserModel.findOneAndUpdate({ email }, { username });
    return NextResponse.json(
      { message: "update successfull" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
