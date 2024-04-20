import connectDb from "../../../../utils/connectDB";
import UserModel from "../../../../models/UserModel";
import PageModel from "../../../../models/PageModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDb();
    const { email } = await req.json();

    const user = await UserModel.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "error" },
        { status: 404, statusText: "Some error occured. Try Again." }
      );
    }
    await UserModel.findOneAndDelete({ email });
    await PageModel.findOneAndDelete({ email });
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
