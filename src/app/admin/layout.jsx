import Link from "next/link";
import Image from "next/image";
import Session from "../ui/Session";
import { usePathname } from "next/navigation";
export default function LinksLayout({ children }) {
  const path = usePathname();
  return (
    <>
      <nav className="bg-white md:shadow-lg flex items-center rounded-none border-2 border-zinc-100 sticky z-10 top-1 mt-2 mx-1 md:rounded-full md:mx-3 place-content-between">
        <div className="flex items-center w-0 md:w-full">
          <Link href="/admin">
            <Image
              className="mx-5 my-5"
              src="/logo.png"
              width={35}
              height={35}
              alt="Picture of the author"
            />
          </Link>
          <ul className="list-none flex md:visible collapse">
            <li
              className={
                `text-lg p-3 md:visible collapse hover:bg-stone-200 rounded-2xl hover:ease-in hover:duration-200` +
                (path === "/account" ? "bg-stone-200" : "bg-none")
              }
            >
              <Link href="/admin" className="flex items-center">
                <span className="material-symbols-outlined px-1">add_link</span>
                Links
              </Link>
            </li>
            <li className="text-lg p-3 md:visible collapse hover:bg-stone-200 rounded-2xl hover:ease-in hover:duration-200">
              <Link href="/admin/appearance" className="flex items-center">
                <span className="material-symbols-outlined px-1">
                  slide_library
                </span>
                Appearance
              </Link>
            </li>
            <li className="text-lg p-3 md:visible collapse hover:bg-stone-200 rounded-2xl hover:ease-in hover:duration-200">
              <Link href="/admin/analytics" className="flex items-center">
                <span className="material-symbols-outlined px-1">
                  analytics
                </span>
                Analytics
              </Link>
            </li>
            <li className="text-lg p-3 md:visible collapse hover:bg-stone-200 rounded-2xl hover:ease-in hover:duration-200">
              <Link href="/admin/settings" className="flex items-center">
                <span className="material-symbols-outlined px-1">settings</span>
                Settings
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <button className="text-lg flex items-center py-3 px-5 bg-white border-2 border-neutral-200 rounded-full mr-3 hover:ease-in hover:duration-200 hover:bg-neutral-200">
            <span className="material-symbols-outlined pr-1 ">share</span>
            Share
          </button>
          <Session />
        </div>
      </nav>
      <div className="bg-white flex place-content-between h-14 items-center rounded-none border-2 border-zinc-100 sticky mx-1 md:hidden visible max-[536px]:hidden">
        <ul className="list-none w-full flex place-content-around">
          <li className="text-lg p-2 md:collapse visible max-[536px]:collapse hover:bg-stone-200 rounded-2xl hover:ease-in hover:duration-200">
            <Link href="/admin" className="flex items-center">
              <span className="material-symbols-outlined px-1">add_link</span>
              Links
            </Link>
          </li>
          <li className="text-lg p-2 md:collapse visible max-[536px]:collapse hover:bg-stone-200 rounded-2xl hover:ease-in hover:duration-200">
            <Link href="/admin/appearance" className="flex items-center">
              <span className="material-symbols-outlined px-1">
                slide_library
              </span>
              Appearance
            </Link>
          </li>
          <li className="text-lg p-2 md:collapse visible max-[536px]:collapse hover:bg-stone-200 rounded-2xl hover:ease-in hover:duration-200">
            <Link href="/admin/analytics" className="flex items-center">
              <span className="material-symbols-outlined px-1">analytics</span>
              Analytics
            </Link>
          </li>
          <li className="text-lg p-2 md:collapse visible max-[536px]:collapse hover:bg-stone-200 rounded-2xl hover:ease-in hover:duration-200">
            <Link href="/admin/settings" className="flex items-center">
              <span className="material-symbols-outlined px-1">settings</span>
              Settings
            </Link>
          </li>
        </ul>
      </div>
      {children}
    </>
  );
}
