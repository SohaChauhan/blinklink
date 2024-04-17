import UserModel from "../../../../../models/UserModel";
import connectDb from "../../../../../utils/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { signIn, signOut } from "next-auth/react";
import GoogleProvider from "next-auth/providers/google";
import PageModel from "../../../../../models/PageModel";

async function login(credentials) {
  try {
    await connectDb();
    const user = await UserModel.findOne({ email: credentials.email });
    const isCorrect = await bcrypt.compare(credentials.password, user.password);

    if (!isCorrect) throw new Error("wrong credentials");
    return user;
  } catch (er) {
    throw new Error("failed to login");
  }
}

async function createUserIfNotExists(token) {
  await connectDb();
  let user = await UserModel.findOne({ email: token.email });
  let page = await PageModel.findOne({ email: token.email });

  if (!user) {
    user = await new UserModel({
      email: token.email,
      username: token.username,
      name: token.name,
      image: token.picture,
    }).save();
    page = await new PageModel({
      username: token.username,
      email: token.email,
      name: token.name,
    }).save();
  }
  if (user) {
    if (user.name != "") {
      token.name = user.name;
    } else {
      await UserModel.findOneAndUpdate(
        { email: token.email },
        { name: token.name }
      );
      await PageModel.findOneAndUpdate(
        { email: token.email },
        { name: token.name }
      );
    }
    if (user.image === "/default-profile-image.png") {
      await UserModel.findOneAndUpdate(
        { email: token.email },
        { image: token.picture }
      );
    } else {
      token.picture = user.image;
    }
    if (user.username != "") {
      token.username = user.username;
    }
  }

  // return user;
}

export const authOptions = {
  pages: {
    signIn: "/login",
    signOut: "/admin",
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          console.log("this is user = ", user);
          return user;
        } catch (errors) {
          console.log("fail to login = ", errors.message);
          throw new Error("failed to login");
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      httpOptions: {
        timeout: 100000,
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // console.log(token);
        // console.log(user);
        token.id = user._id;
        token.email = user.email;
        token.username = user.username;
        token.name = user.name;
        token.picture = user.image;
        // console.log(user);
        await createUserIfNotExists(token);
        console.log("this is token", token);
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.username = token.username;
        // console.log("this is session", session);
      }

      return session;
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
