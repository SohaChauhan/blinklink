"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
const Logout_button = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await signOut({ callbackUrl: "https://blinklink-smoky.vercel.app/login" });

    router.replace("/login");
    console.log("Logged Out");
  };
  return (
    <button
      onClick={handleLogout}
      className=" flex items-center py-3 px-5 w-full rounded-xl mr-3 hover:ease-in hover:duration-200 hover:bg-neutral-200"
    >
      Logout
    </button>
  );
};

export default Logout_button;
