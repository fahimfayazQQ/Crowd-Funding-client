import Image from 'next/image'
import React from 'react'
import Biznez from "../../public/assets/images/biznez.png"
import Meta from "../../public/assets/images/fb.png"
import Google from "../../public/assets/images/google.png"
import Youtube from "../../public/assets/images/yt.png"
const Login = () => {
  return (
    <div className="bg-home-color h-screen flex">
      <div className="w-full flex justify-center items-center">
        <div className="">
          <Image src={Biznez} className="m-auto" />
          <div className="text-white flex justify-center mb-3">Partners</div>
          <div className="w-9/12 flex mx-auto">
            <Image src={Meta} className="w-[5rem] mx-auto" />
            <Image src={Google} className="w-[5rem] mx-auto" />
            <Image src={Youtube} className="w-[5rem] mx-auto" />
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex justify-center items-center">
        <div
          className="bg-zinc-100 rounded-xl w-[40vh] h-[80vh] shadow-lg"
        >
          <div className="flex justify-start">
          </div>
          <div className="pt-8">
            <div className="flex flex-col items-center">
              {/* <img src={Logo} alt="" /> */}
            </div>
          </div>
          <div className="text-center my-6">
            <h1 className="text-2xl font-semibold text-black">Login</h1>
            <p className="pt-2 pb-4 text-black text-sm">
              Login to access your account
            </p>
          </div>

          <div className="m-6">
            <form className="mb-4">
              <div className="mb-6  ">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-black"
                >
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
                  <label htmlFor="password" className="text-sm text-black">
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
                <label
                  className="cursor-pointer text-black"
                  htmlFor="remember_me"
                >
                  Remember Me
                </label>
              </div>

              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full p-3 text-white font-medium bg-home-color bg-opacity-80 hover:bg-opacity-100 rounded-md focus:outline-none  "
                >
                  Log in
                </button>
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
  );
}

export default Login