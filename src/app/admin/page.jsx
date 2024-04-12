export default async function Links() {
  return (
    <section className="flex h-full md:flex-row flex-col ">
      <section className=" md:h-full md:w-7/12 h-fit w-full ml-2 block border-r border-neutral-300 ">
        <div className="bg-lime-300 py-2 px-4 flex flex-row place-content-between h-24 xl:h-20 rounded-2xl m-2">
          <div className="my-auto flex items-center">
            <span className="material-symbols-outlined my-auto pr-2">
              captive_portal
            </span>
            <span>
              Your Linktree is live:{" "}
              <a
                href="https://linktr.ee/soha_1911"
                className="underline underline-offset-4"
              >
                linktr.ee/soha_1911
              </a>
            </span>
          </div>
          <button className="my-auto mx-0 py-4 px-6">
            <span className="material-symbols-outlined">content_paste</span>
          </button>
        </div>
        <div className="flex flex-col pr-2">
          <div className=" text-xl bg-white mt-8 pt-8 pb-5 mx-16 px-8 rounded-xl flex flex-col shadow-md">
            <p className="text-2xl font-bold ">Enter URL</p>
            <input
              type="text"
              placeholder="URL"
              className="bg-zinc-200 my-4 p-3 rounded-2xl w-full outline-none focus:outline-violet-400"
            />
            <button className="w-full bg-purple-600 rounded-full my-2 p-3 text-white hover:bg-purple-700 hover:ease-in hover:duration-200">
              Add Link
            </button>
          </div>
          <button className="px-5 py-3 w-fit ml-16 mt-7 bg-white border-2 border-zinc-200 rounded-2xl hover:bg-zinc-200 hover:ease-in hover:duration-200">
            Add Header
          </button>
        </div>
      </section>
      <section className=" md:h-full md:w-5/12 h-fit w-full mr-2 block"></section>
    </section>
  );
}
