"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
// import PageModel from "../../../models/PageModel";
const Profile = ({ page, user }) => {
  const { data: session } = useSession();
  const [change, setChange] = useState(false);
  const [username, setUsername] = useState(page.username);
  const [changeusername, setChangeusername] = useState(false);
  const [bio, setBio] = useState(page.bio);
  const [changebio, setChangebio] = useState(false);
  const [bgcolor, setBgcolor] = useState(page.bg_color);
  const [changebgcolor, setChangebgcolor] = useState(false);
  const [fontcolor, setFontcolor] = useState(page.font_color);
  const [changefontcolor, setChangefontcolor] = useState(false);
  const [buttonbgcolor, setButtonbgcolor] = useState(page.button_color);
  const [changebuttonbgcolor, setChangebuttonbgcolor] = useState(false);
  const [buttonfontcolor, setButtonfontcolor] = useState(
    page.button_font_color
  );
  const [changebuttonfontcolor, setChangebuttonfontcolor] = useState(false);
  const [avatarbordercolor, setAvatarbordercolor] = useState(
    page.avatar_border_color
  );
  const [changeavatarbordercolor, setChangeavatarbordercolor] = useState(false);
  const [changeImage, setChangeImage] = useState(false);
  const [error, setError] = useState("");
  const email = page.email;
  const [file, setFile] = useState();
  const [image, setImage] = useState(user.image);
  async function submitProfileDetails(e) {
    e.preventDefault();
    if (username === "") {
      setError("Please choose a valid username");
      return;
    }
    try {
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          username,
          bio,
          bgcolor,
          fontcolor,
          buttonbgcolor,
          buttonfontcolor,
          avatarbordercolor,
          image,
        }),
      });
      if (response.status == 501) {
        setError("USername already exists.");
      }
      if (!response.ok) {
        setError(response.statusText);
        setChange(true);
        return;
      }
      setError("");
      setChange(false);
      // router.push("/login");
    } catch (error) {
      setChange(true);
      setError(error);
    }
  }

  function changeUsername(e) {
    setChange(true);
    setChangeusername(true);
    setUsername(e.target.value);
  }
  function changeBio(e) {
    setChange(true);
    setChangebio(true);
    setBio(e.target.value);
  }

  function changeBgcolor(e) {
    setChange(true);
    setChangebgcolor(true);
    setBgcolor(e.target.value);
  }
  function changeFontcolor(e) {
    setChange(true);
    setChangefontcolor(true);
    setFontcolor(e.target.value);
  }
  function changeButtonbgcolor(e) {
    setChange(true);
    setChangebuttonbgcolor(true);
    setButtonbgcolor(e.target.value);
  }
  function changeButtonfontcolor(e) {
    setChange(true);
    setChangebuttonfontcolor(true);
    setButtonfontcolor(e.target.value);
  }
  function changeAvatarbordercolor(e) {
    setChange(true);
    setChangeavatarbordercolor(true);
    setAvatarbordercolor(e.target.value);
  }
  function uploadImage() {
    // setChange(true);
    setChangeImage(true);
  }
  // let file;
  function handleChange(ev) {
    console.log(ev.target.files?.[0]);
    setFile(ev.target.files?.[0]);
    // console.log(file);
  }
  // function handleChangeImage(ev) {
  //   setChangeImage(false);
  //   console.log(ev.target);
  // }
  async function handleChangeImage() {
    setChangeImage(false);
    const imageFile = file;
    console.log(imageFile);
    if (imageFile) {
      const data = new FormData();
      data.set("file", imageFile);
      console.log(data);
      fetch("/api/upload", {
        method: "POST",
        body: data,
      }).then((response) => {
        response
          .json()
          .then((link) => {
            // console.log(link);
            setImage(link);
          })
          .then(setChange(true));
      });
    }
  }

  return (
    <>
      {session && (
        <div className="w-full">
          <p className="text-xl m-2">Profile</p>
          <div className="bg-white py-8 px-0 rounded-xl shadow-xl w-full">
            <div className="h-[60px] relative md:mx-20 mx-3 mb-5">
              <input
                type="text"
                name="username"
                value={username}
                onChange={changeUsername}
                className=" px-4 pt-5 pb-2 bg-neutral-100 rounded-2xl h-full w-full border-none outline-none focus:outline-lime-400 text-sm"
              />
              <label className=" text-gray-600 absolute left-4 top-1/2 translate-y-[-110%] text-sm pointer-events-none transition-all duration-100 ease-in">
                username
              </label>
            </div>
            <div className=" h-24 relative md:mx-20 mx-3 mb-5">
              <textarea
                name="bio"
                value={bio}
                onChange={changeBio}
                className=" px-4 pt-8 pb-1 bg-neutral-100 rounded-2xl h-full w-full border-none outline-none focus:outline-lime-400 text-sm"
              />
              <label className=" text-gray-600 absolute left-4 top-1/3 translate-y-[-110%] text-sm pointer-events-none transition-all duration-100 ease-in">
                Bio
              </label>
            </div>
            <div className="flex place-content-around mx-5 mb-5">
              <div className="overflow-hidden h-[100px] w-[100px] rounded-full ">
                <Image
                  className="w-full h-full object-cover"
                  src={image}
                  alt={"avatar"}
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col place-content-around w-1/2">
                <button
                  onClick={uploadImage}
                  className="bg-[#4c956c] text-white rounded-full p-3 hover:bg-[#397051] hover:ease-in hover:duration-200 text-sm"
                >
                  Change Avatar
                </button>
                {changeImage && (
                  <div className="rounded absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[26%] h-48 p-4 shadow-2xl bg-white z-50 text-sm flex flex-col items-center place-content-center">
                    <p className=" text-center px-4 text-base">
                      Browse the files to select an image:
                    </p>
                    <input
                      type="file"
                      onChange={handleChange}
                      className="px-2 py-3 my-2 bg-neutral-100 hover:bg-neutral-200 rounded-xl w-full"
                    />
                    <div className="flex items-center place-content-evenly w-full">
                      <button
                        onClick={handleChangeImage}
                        className="px-2 py-3 bg-[#4c956c] hover:bg-[#397051] rounded-xl w-1/3 text-white"
                      >
                        Upload
                      </button>
                      <button
                        onClick={() => setChangeImage(!changeImage)}
                        className="px-2 py-3 my-2 bg-neutral-100 hover:bg-neutral-200 rounded-xl w-1/3"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => {
                    setChange(true);
                    setImage("/default-profile-image.png");
                  }}
                  className=" bg-neutral-100 text-black rounded-full p-3 hover:bg-neutral-200 hover:ease-in hover:duration-200 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>

            <div className="flex justify-around md:mx-5 mt-5">
              <div className=" flex justify-center items-center">
                <input
                  type="color"
                  name="bgcolor"
                  value={bgcolor}
                  onChange={changeBgcolor}
                  className="p-1 h-[60px] w-[60px] bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none "
                />
              </div>
              <div className="h-[60px] relative md:w-1/2 w-3/5">
                <input
                  type="text"
                  value={bgcolor}
                  onChange={changeBgcolor}
                  className=" px-4 pt-5 pb-2 bg-neutral-100 rounded-2xl h-full w-full border-none outline-none focus:outline-lime-400 text-sm"
                />
                <label className=" text-gray-600 absolute left-4 top-1/2 translate-y-[-110%] text-sm pointer-events-none transition-all duration-100 ease-in">
                  background color
                </label>
              </div>
            </div>
            <div className="flex justify-around md:mx-5 mt-5">
              <div className="flex justify-center items-center">
                <input
                  type="color"
                  name="fontcolor"
                  value={fontcolor}
                  onChange={changeFontcolor}
                  className="p-1 h-[60px] w-[60px] bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none "
                />
              </div>
              <div className="h-[60px] relative md:w-1/2 w-3/5">
                <input
                  type="text"
                  value={fontcolor}
                  onChange={changeFontcolor}
                  className=" px-4 pt-5 pb-2 bg-neutral-100 rounded-2xl h-full w-full border-none outline-none focus:outline-lime-400 text-sm"
                />
                <label className=" text-gray-600 absolute left-4 top-1/2 translate-y-[-110%] text-sm pointer-events-none transition-all duration-100 ease-in">
                  font color
                </label>
              </div>
            </div>
            <div className="flex justify-around md:mx-5 mt-5">
              <div className="flex justify-center items-center">
                <input
                  type="color"
                  name="buttonbgcolor"
                  value={buttonbgcolor}
                  onChange={changeButtonbgcolor}
                  className="p-1 h-[60px] w-[60px] bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none "
                />
              </div>
              <div className="h-[60px] relative md:w-1/2 w-3/5">
                <input
                  type="text"
                  value={buttonbgcolor}
                  onChange={changeButtonbgcolor}
                  className=" px-4 pt-5 pb-2 bg-neutral-100 rounded-2xl h-full w-full border-none outline-none focus:outline-lime-400 text-sm"
                />
                <label className=" text-gray-600 absolute left-4 top-1/2 translate-y-[-110%] text-sm pointer-events-none transition-all duration-100 ease-in">
                  button background color
                </label>
              </div>
            </div>
            <div className="flex justify-around md:mx-5 mt-5">
              <div className="flex justify-center items-center">
                <input
                  type="color"
                  name="buttonfontcolor"
                  value={buttonfontcolor}
                  onChange={changeButtonfontcolor}
                  className="p-1 h-[60px] w-[60px] bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none "
                />
              </div>
              <div className="h-[60px] relative md:w-1/2 w-3/5">
                <input
                  type="text"
                  value={buttonfontcolor}
                  onChange={changeButtonfontcolor}
                  className=" px-4 pt-5 pb-2 bg-neutral-100 rounded-2xl h-full w-full border-none outline-none focus:outline-lime-400 text-sm"
                />
                <label className=" text-gray-600 absolute left-4 top-1/2 translate-y-[-110%] text-sm pointer-events-none transition-all duration-100 ease-in">
                  button font color
                </label>
              </div>
            </div>
            <div className="flex justify-around md:mx-5 mt-5">
              <div className="flex justify-center items-center">
                <input
                  type="color"
                  name="avatarbordercolor"
                  value={avatarbordercolor}
                  onChange={changeAvatarbordercolor}
                  className="p-1 h-[60px] w-[60px] bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none "
                />
              </div>
              <div className="h-[60px] relative md:w-1/2 w-3/5">
                <input
                  type="text"
                  value={avatarbordercolor}
                  onChange={changeAvatarbordercolor}
                  className=" px-4 pt-5 pb-2 bg-neutral-100 rounded-2xl h-full w-full border-none outline-none focus:outline-lime-400 text-sm"
                />
                <label className=" text-gray-600 absolute left-4 top-1/2 translate-y-[-110%] text-sm pointer-events-none transition-all duration-100 ease-in">
                  Avatar border color
                </label>
              </div>
            </div>
            {error && (
              <p className="text-sm w-full text-red-500 text-center mt-5">
                {error}
              </p>
            )}

            <div className=" text-center mt-5">
              <button
                onClick={submitProfileDetails}
                disabled={change ? false : true}
                className=" bg-lime-300 text-black rounded-full p-3 hover:bg-lime-400 hover:ease-in hover:duration-200 text-sm w-1/4 disabled:bg-neutral-300"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
