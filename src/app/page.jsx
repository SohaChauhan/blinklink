import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

const myFont = localFont({ src: "./fonts/BauhausStd-Demi.woff2" });
const poppins = localFont({ src: "./fonts/Poppins-Regular.woff2" });
export default function Home() {
  return (
    <>
      <nav
        className={`flex rounded-xl items-center mx-3 place-content-between`}
      >
        <Link href="/">
          <img
            className="m-5 min-w-[250px] w-[250px] "
            src="/logo-full.png"
            alt="BlinkLink"
          />
        </Link>
        <div className={`sm:flex hidden ${poppins.className}`}>
          <button
            className={`${poppins.className} text-base sm:flex items-center py-3 w-28 place-content-around sm:visible hidden bg-white border border-neutral-600 rounded-full mr-3 hover:ease-in hover:duration-200 hover:bg-lime-300 text-black`}
          >
            <Link href="/login">LogIn</Link>
          </button>
          <button className="text-base sm:flex items-center py-3 w-28 place-content-around sm:visible hidden bg-white border border-neutral-600 rounded-full mr-3 hover:ease-in hover:duration-200 hover:bg-lime-300">
            <Link href="/signup">SignUp</Link>
          </button>
        </div>
      </nav>
      <div className="rounded-[60px] h-[650px] mx-6 flex bg-purple-600 shadow-[0px_1px_25px_10px_rgba(0,0,0,0.15)]">
        <div className="lg:visible collapse rounded-l-2xl h-full lg:w-5/12">
          <img
            className="w-10/12 mx-auto  my-32 hover:w-[86%] hover:cursor-pointer hover:ease-in-out hover:duration-300"
            src="/g-1.png"
            alt="BlinkLink"
          />
        </div>
        <div className="rounded-[50px]  lg:w-7/12 flex flex-col items-center place-content-center w-full bg-white">
          <div className="w-8/12">
            <p
              className={`font-extrabold sm:text-7xl text-6xl ${myFont.className}`}
            >
              Discover, connect, explore. All in one single link in the bio.
            </p>
            <button
              className={`${poppins.className} py-4 px-7 bg-[#4c956c] rounded-full mx-3 mt-5 w-1/3 min-w-fit hover:ease-in hover:duration-200 hover:bg-[#397051] text-white`}
            >
              <Link href="/signup">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
      <section className="h-[780px] mt-10 flex items-center ">
        <div className=" rounded-[60px] h-[650px] mx-6 flex bg-[#4c956c] w-full shadow-[0px_1px_25px_10px_rgba(0,0,0,0.15)]">
          <div className="rounded-[50px] lg:w-7/12 w-full flex flex-col items-center place-content-center bg-white">
            <div className="w-8/12">
              <p
                className={`font-extrabold sm:text-7xl text-6xl ${myFont.className}`}
              >
                Create and Customize in minutes
              </p>
              <p className={`sm:text-base text-sm mt-3 ${poppins.className}`}>
                Connect your TikTok, Instagram, Twitter, website, store, videos,
                music, podcast, events and more. It all comes together in a link
                in bio landing page designed to convert.
              </p>
              <button
                className={`${poppins.className} py-4 px-7 bg-lime-300 rounded-full mx-3 mt-5 w-1/3 min-w-fit hover:ease-in hover:duration-200 hover:bg-lime-400 text-black`}
              >
                <Link href="/signup">Get Started</Link>
              </button>
            </div>
          </div>
          <div className="lg:visible collapse rounded-r-2xl lg:w-5/12 ">
            <img
              className="w-[95%] mx-auto my-4 hover:w-[100%] hover:cursor-pointer hover:ease-in-out hover:duration-300"
              src="/g-3.png"
              alt="BlinkLink"
            />
          </div>
        </div>
      </section>
      <section className="h-[780px] flex items-center ">
        <div className=" rounded-[60px] h-[650px]  mx-6 flex bg-lime-300 w-full shadow-[0px_1px_25px_10px_rgba(0,0,0,0.15)]">
          <div className="lg:visible collapse rounded-l-2xl lg:w-5/12 ">
            <img
              className="w-10/12 mx-auto my-16 hover:w-[86%] hover:cursor-pointer hover:ease-in-out hover:duration-300"
              src="/g-2.png"
              alt="BlinkLink"
            />
          </div>
          <div className="rounded-[50px] h-full lg:w-7/12 w-full flex flex-col items-center place-content-center bg-white">
            <div className="w-8/12 ">
              <p
                className={`font-extrabold sm:text-7xl text-6xl ${myFont.className}`}
              >
                Instagram, TikTok, Twitter- share from your bios
              </p>
              <p className={`sm:text-base text-sm mt-3 ${poppins.className}`}>
                Add your personalized URL to all the platforms and places you
                find your audience. Then use your QR code to drive your offline
                traffic online.
              </p>
              <button
                className={`${poppins.className} py-4 px-7 bg-purple-600 rounded-full mx-3 mt-5 w-1/3 min-w-fit hover:ease-in hover:duration-200 hover:bg-purple-700 text-white`}
              >
                <Link href="/signup">Get Started</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex h-[780px] items-center bg-purple-600 ">
        <div className=" rounded-[60px] h-[650px] mx-6 flex items-center place-content-center bg-white w-full shadow-inset">
          <div className="rounded-l-2xl h-full w-1/3 lg:visible collapse">
            <img
              className="w-[80%] mx-auto my-28 hover:w-[85%] hover:cursor-pointer hover:ease-in-out hover:duration-300"
              src="/g-5.png"
              alt="BlinkLink"
            />
          </div>
          <div className=" h-full lg:w-1/3 w-2/3 flex flex-col place-content-center">
            <p
              className={`font-extrabold sm:text-7xl text-6xl ${myFont.className}`}
            >
              Analyze and Learn your audience
            </p>
            <p className={`sm:text-base text-sm mt-6 ${poppins.className}`}>
              Track your engagement over time, monitor revenue and learn what’s
              converting your audience. Make informed updates on the fly to keep
              them coming back.
            </p>
            <button
              className={`${poppins.className} py-4 px-7 bg-[#4c956c] rounded-full mx-3 mt-5 w-2/5 min-w-fit hover:ease-in hover:duration-200 hover:bg-[#397051] text-white`}
            >
              <Link href="/signup">Get Started</Link>
            </button>
          </div>
          <div className="rounded-r-2xl h-full w-1/3 lg:visible collapse">
            <img
              className="w-[95%] mx-auto my-20 hover:w-[100%] hover:cursor-pointer hover:ease-in-out hover:duration-300"
              src="/g-4.png"
              alt="BlinkLink"
            />
          </div>
        </div>
      </section>
      <section className="h-[780px] flex items-center ">
        <div className=" rounded-[60px] h-[650px] mx-6 flex bg-[#4c956c] w-full shadow-[0px_1px_25px_10px_rgba(0,0,0,0.15)]">
          <div className="rounded-[50px] h-full lg:w-7/12 w-full flex flex-col items-center place-content-center ">
            <div className="w-8/12">
              <p
                className={`font-extrabold sm:text-7xl text-6xl ${myFont.className}`}
              >
                <span className=" text-white">
                  Minimal time,
                  <br />
                  No cost
                </span>
              </p>
              <p
                className={`sm:text-md text-base mt-3 text-white ${poppins.className}`}
              >
                Creating your BlinkLink - think of it as a one page miniwebsite
                - takes seconds and costs nothing.
              </p>
              <ul
                className={`list-disc ml-8 sm:text-base text-sm text-white ${poppins.className}`}
              >
                <li>Choose your own theme & design.</li>
                <li>Add your (unlimited) links.</li>
                <li>Insert your Linktree</li>
                <li>
                  link In your Instagram bio. Start sharing and start getting
                  paid!
                </li>
              </ul>
              <button
                className={`${poppins.className} py-4 px-7 bg-white rounded-full mx-3 mt-5 w-1/3 min-w-fit hover:ease-in hover:duration-200 hover:bg-neutral-200 text-black`}
              >
                <Link href="/signup">Get Started</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className=" h-fit w-full flex flex-col place-content-between bg-purple-600 text-white ">
        <div className="w-full h-fit">
          <Image
            className="mx-5 my-5"
            src="/logo-full-white.png"
            width={250}
            height={35}
            alt="Picture of the author"
          />
        </div>
        <div className={`w-full h-fit mx-8 ${poppins.className}`}>
          <p className="text-base">© 2024 BlinkLink</p>
          <p className="text-base">Terms and Privacy</p>
        </div>
        <div
          className={`flex place-content-between items-end mb-8 ${poppins.className}`}
        >
          <p className=" text-md mx-8">
            Get you own personalized BlinkLink page now.
            <button className="sm:hidden visible text-md min-w-fit flex items-center py-3 px-7 bg-lime-300 text-black rounded-full mt-4 ml-0 hover:ease-in hover:duration-200 hover:bg-lime-400">
              <Link href="/signup">Get Started</Link>
            </button>
          </p>
          <button className="sm:visible collapse text-md min-w-fit flex items-center py-3 px-7 bg-lime-300 text-black rounded-full mr-3 hover:ease-in hover:duration-200 hover:bg-lime-400">
            <Link href="/signup">Get Started</Link>
          </button>
        </div>
      </footer>
    </>
  );
}
