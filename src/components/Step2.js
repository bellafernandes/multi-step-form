import React from "react";
import FileUpload from "./FileUpload";
import { Provider } from "react-redux";
import { store } from "../store";


export default function Step2() {
  return (
    <div className="w-full h-full">
      {/* Title and subtitle */}
      <div className="w-1/3 mx-auto text-center mt-20">
        <h1 className="text-4xl font-bold text-zinc-700">Title</h1>
        <h2 className="text-2xl font-semibold text-zinc-500">Text</h2>
      </div>

      {/* Image Upload */}
      {/* <div className="flex justify-center items-center w-1/3 mx-auto mt-20">
        <label
          for="dropzone-file"
          className="flex flex-col justify-center items-center w-64 h-64 bg-gray-50 rounded-full border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100 dark:border-gray-600"
        >
          <div className="flex flex-col justify-center items-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="mb-3 w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div> */}
<Provider store={store}>
      <FileUpload />
      </Provider>

      {/* Personal information */}
      <div className="flex flex-col-2 gap-4 justify-center w-1/3 mx-auto mt-10">
        {/* Left Column */}
        <div>
          {/* Name input */}
          <div className="relative z-0">
            <input
              type="text"
              id="name"
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="name"
              className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Name input */}
          <div className="relative z-0">
            <input
              type="text"
              id="name"
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="name"
              className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last Name
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
