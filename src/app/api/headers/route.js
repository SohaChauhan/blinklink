import connectDb from "../../../../utils/connectDB";
import PageModel from "../../../../models/PageModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDb();
    const { email, headers } = await req.json();
    const user = await PageModel.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "error" },
        { status: 404, statusText: "Some error occured. Try Again." }
      );
    }
    await PageModel.findOneAndUpdate({ email }, { headers });
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
