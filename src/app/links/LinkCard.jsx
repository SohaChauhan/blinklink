import Link from "next/link";
export default function Card({ text_underlined, text, desc,background_color,underlined_color,button_color,button_hover_color,text_color,Right }) {
  return (
    <section className="h-screen min-h-fit flex items-center">
      <div className={`rounded-[60px] h-5/6 mx-6 flex bg-${background_color} w-full shadow-[0px_1px_25px_10px_rgba(0,0,0,0.15)]`} >
      {Right && <div className="lg:visible collapse rounded-l-2xl h-full w-5/12 "></div>}
        <div className="rounded-[50px] h-full lg:w-7/12 w-full flex flex-col items-center place-content-center bg-white">
          <div className="w-8/12">
            <p className="font-extrabold sm:text-7xl text-6xl ">
              <span className={`text-lined-${underlined_color}`}>{text_underlined}</span>{" "}
              {text}
            </p>
            <p className="sm:text-lg text-base mt-3">{desc}</p>
            <button className={`text-lg py-4 px-7 bg-${button_color} rounded-full mx-3 mt-5 w-1/3 min-w-fit hover:ease-in hover:duration-200 hover:bg-${button_hover_color} text-${text_color}`}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}