import React from "react";
import Image from "next/image";
import Link from "next/link";
import Biznez from "../../public/assets/images/biznez.png";
import Meta from "../../public/assets/images/fb.png";
import Google from "../../public/assets/images/google.png";
import Youtube from "../../public/assets/images/yt.png";

const UserSignup = () => {
  return (
    <div className="bg-admin-color h-auto lg:h-screen py-20 lg:px-20">
      <div className="flex flex-col lg:flex-row lg:h-[85vh] lg:border lg:p-5 rounded-2xl">
        <div className="w-full lg:bg-admin-secondary-color flex justify-center items-center rounded-tl-2xl rounded-bl-2xl">
          <div className="">
            <Image src={Biznez} alt="img" className="m-auto" />
            <div className="text-white flex justify-center mb-3">Partners</div>
            <div className="w-9/12 flex mx-auto">
              <Image src={Meta} alt="img" className="w-[5rem] mx-auto" />
              <Image src={Google} alt="img" className="w-[5rem] mx-auto" />
              <Image src={Youtube} alt="img" className="w-[5rem] mx-auto" />
            </div>
          </div>
        </div>
        <div className="w-full lg:bg-admin-secondary-color flex justify-center items-center  rounded-tr-2xl rounded-br-2xl">
          <div className="rounded-xl w-[40vh] text-white">
            <div className="flex justify-start"></div>
            <div className="pt-8">
              <div className="flex flex-col items-center">
                {/* <img src={Logo} alt="" /> */}
              </div>
            </div>
            <div className="text-center my-6">
              <h1 className="text-2xl font-semibold ">Signup</h1>
              <p className="pt-2 pb-4  text-sm">
                Signup to create your account
              </p>
            </div>

            <div className="m-6">
              <form className="mb-4">
                <div className="mb-6  ">
                  <label htmlFor="email" className="block mb-2 text-sm ">
                    Email
                  </label>
                  <input
                    // type="password"
                    size="large"
                    name="email"
                    id="email"
                    // value={data.email}
                    placeholder="Enter your username"
                    className="w-full px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-brand-color"
                    // onChange={userData}
                    required
                  />
                  {/* <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter Your Username"
                className="w-full px-3 py-2 placeholder-gray-600 border bg-gray-100 rounded-md focus:outline-none focus:border-brand-color"
                required
              /> */}
                </div>
                <div className="mb-4  ">
                  {/* Forgot password */}
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm ">
                      Password
                    </label>
                    <label
                      className="text-xs text-gray-400 focus:outline-none hover:text-indigo-500"
                      // onClick={ForgotPasswordModal}
                    >
                      Forgot password?
                    </label>

                    {/*                 <ForgotPassword
                  visibility={tooglePasswordForget}
                  oncancel={(cancel) => setTooglePasswordForget(cancel)}
                  emaildata ={data.email} 
                /> */}
                  </div>
                  <input
                    // type="password"
                    size="large"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    // value={data.password}
                    className="w-full px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-brand-color"
                    // onChange={userData}
                    required
                  />
                </div>

                <div className="mb-6   flex items-center">
                  <input
                    className="cursor-pointer mr-2"
                    type="checkbox"
                    name="remember me"
                    id="remember_me"
                    defaultValue="off"
                    /* onChange={handleRememberMe} */
                  />
                  <label className="cursor-pointer " htmlFor="remember_me">
                    Remember Me
                  </label>
                </div>

                <div className="mb-6">
                  <Link href={"../user"}>
                    <button
                      type="submit"
                      className="w-full p-3 text-white font-medium bg-home-color bg-opacity-80 hover:bg-opacity-100 rounded-md focus:outline-none  "
                    >
                      Sign up
                    </button>
                  </Link>
                </div>
                <div>
                  Already have an account?
                  <Link href={"../user-login"}>
                    <span className="pl-2 underline text-sky-600">
                      Login here
                    </span>
                  </Link>
                </div>

                {/* <p className="text-sm text-center text-gray-400">
                Don't have an account yet?
                <Link to="/join" className="font-semibold ml-1.5">
                  Sign up
                </Link>
              </p> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
