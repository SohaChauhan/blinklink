import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/register/login",
    signOut: "/links",
    signUp: "register/signup",
    newUser: "/register/signup", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  //   callbacks: {
  //     async redirect({ url, baseUrl }) {
  //       return baseUrl;
  //     },
  //   },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
