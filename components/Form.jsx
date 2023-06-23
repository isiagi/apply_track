import Link from "next/link";
import React from "react";

function Form() {
  return (
    <div>
      <h2>Create Application Track</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="company"
            className="block mb-2 font-bold text-gray-700"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            value={"mmmm"}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="company"
            className="block mb-2 font-bold text-gray-700"
          >
            Position
          </label>
          <input
            type="text"
            id="company"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="company"
            className="block mb-2 font-bold text-gray-700"
          >
            Date
          </label>
          <input
            type="text"
            id="company"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="company"
            className="block mb-2 font-bold text-gray-700"
          >
            Status
          </label>
          <input
            type="text"
            id="company"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="flex gap-5">
          <button type="submit" className="bg-[#8BD649] text-white p-2 rounded">
            Submit
          </button>
          <Link href="/">
            <button className="bg-[#f87171] text-white p-2 rounded">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Form;
