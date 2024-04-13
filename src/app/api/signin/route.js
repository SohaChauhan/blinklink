import { Error } from "mongoose";
import UserModel from "../../../../models/UserModel";
import connectDb from "../../../../utils/connectDB";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  // dbconnection

  try {
    await connectDb();
    const { name, email, password } = await req.json();
    // console.log(username);
    const user = await UserModel.findOne({ email });
    // console.log(user);
    if (user) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 500 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await UserModel.create({ name, email, password: hashedPassword });
    return NextResponse.json({ message: "register success" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
