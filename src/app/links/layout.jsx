import Image from "next/image";
import "./globals.css";
import Link from "next/link";
export default function LinksLayout({ children }) {
  return (
    <>
      <nav className="bg-white md:shadow-lg flex items-center rounded-none border-2 border-zinc-100 sticky z-10 top-1 mt-2 mx-1 md:rounded-full md:mx-3 place-content-between">
        <div className="flex items-center w-0 md:w-full">
          <Link href="/links">
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
              className={`text-lg p-3 md:visible collapse hover:bg-stone-200 rounded-2xl hover:ease-in hover:duration-200`}
            >
              <Link href="/links" className="flex items-center">
                <span className="material-symbols-outlined px-1">add_link</span>
                Links
              </Link>
            </li>
            <li className="text-lg p-3 md:visible collapse hover:bg-stone-200 rounded-2xl hover:ease-in hover:duration-200">
              <Link href="/links/appearance" className="flex items-center">
                <span className="material-symbols-outlined px-1">
                  slide_library
                </span>
                Appearance
              </Link>
            </li>
            <li className="text-lg p-3 md:visible collapse hover:bg-stone-200 rounded-2xl hover:ease-in hover:duration-200">
              <Link href="/links/analytics" className="flex items-center">
                <span className="material-symbols-outlined px-1">
                  analytics
                </span>
                Analytics
              </Link>
            </li>
            <li className="text-lg p-3 md:visible collapse hover:bg-stone-200 rounded-2xl hover:ease-in hover:duration-200">
              <Link href="/links/settings" className="flex items-center">
                <span className="material-symbols-outlined px-1">settings</span>
                Settings
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <button className="text-lg flex items-center py-3 px-5 bg-white border-2 border-neutral-200 rounded-full mr-3 hover:ease-in hover:duration-200 hover:bg-neutral-200">
            <span className="material-symbols-outlined pr-1 ">share</span>
            Share
          </button>
          <button className="text-lg flex items-center py-3 px-5 bg-white border-2 border-neutral-200 rounded-full mr-3 hover:ease-in hover:duration-200 hover:bg-neutral-200">
            <Link href="/">LogOut</Link>
          </button>
        </div>
      </nav>
      <div className="bg-white flex place-content-between h-14 items-center rounded-none border-2 border-zinc-100 sticky mx-1 md:hidden visible max-[536px]:hidden">
        <ul className="list-none w-full flex place-content-around">
          <li className="text-lg p-2 md:collapse visible max-[536px]:collapse hover:bg-stone-200 rounded-2xl hover:ease-in hover:duration-200">
            <Link href="/links" className="flex items-center">
              <span className="material-symbols-outlined px-1">add_link</span>
              Links
            </Link>
          </li>
          <li className="text-lg p-2 md:collapse visible max-[536px]:collapse hover:bg-stone-200 rounded-2xl hover:ease-in hover:duration-200">
            <Link href="/links/appearance" className="flex items-center">
              <span className="material-symbols-outlined px-1">
                slide_library
              </span>
              Appearance
            </Link>
          </li>
          <li className="text-lg p-2 md:collapse visible max-[536px]:collapse hover:bg-stone-200 rounded-2xl hover:ease-in hover:duration-200">
            <Link href="/links/analytics" className="flex items-center">
              <span className="material-symbols-outlined px-1">analytics</span>
              Analytics
            </Link>
          </li>
          <li className="text-lg p-2 md:collapse visible max-[536px]:collapse hover:bg-stone-200 rounded-2xl hover:ease-in hover:duration-200">
            <Link href="/links/settings" className="flex items-center">
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
