import React from "react";
import EmailField from "./form/EmailField";
import PasswordField from "./form/PasswordField";

export default function Step1() {
  return (
    <div className="w-full h-full">
      <div className="w-1/3 mx-auto text-center mt-20">
        <h1 className="text-4xl font-bold text-zinc-700">Title</h1>
        <h2 className="text-2xl font-semibold text-zinc-500">Text</h2>
      </div>

      <EmailField />
      <PasswordField />

      {/*<form>

        Email input 
        <div class="relative z-0 w-1/3 mx-auto mt-20">
          <input
            type="email"
            id="email"
            className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="email"
            className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>

         Password input 
        <div class="relative z-0 w-1/3 mx-auto mt-20">
          <input
            type="password"
            id="password"
            className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="password"
            className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
      </form>*/}
    </div>
  );
}
