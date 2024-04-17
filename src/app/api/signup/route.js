// import { unique } from "next/dist/build/utils";
import PageModel from "../../../../models/PageModel";
import UserModel from "../../../../models/UserModel";
import connectDb from "../../../../utils/connectDB";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDb();
    const { username, email, password } = await req.json();
    const user = await UserModel.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 500, statusText: "Email already exists" }
      );
    }
    const user1 = await UserModel.findOne({ username });
    if (user1) {
      return NextResponse.json(
        { message: "Username already exists" },
        { status: 500, statusText: "Username already exists" }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await UserModel.create({ username, email, password: hashedPassword });
    await PageModel.create({ username, email });
    return NextResponse.json({ message: "register success" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: 500, statusText: error }
    );
  }
}
