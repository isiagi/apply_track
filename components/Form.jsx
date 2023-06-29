import Link from "next/link";
import React from "react";

function Form({ data, handleChange, handleSubmit, type, loading }) {
  const dataArray = data;
  return (
    <div>
      <h2 className="text-center my-8 text-3xl text-[#64748b]">{type} Application Track</h2>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="company"
            className="block mb-2 font-bold text-[#64748b]"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Enter Company"
            value={dataArray?.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-[#64748b] border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="position"
            className="block mb-2 font-bold text-[#64748b]"
          >
            Position
          </label>
          <input
            type="text"
            id="position"
            name="position"
            placeholder="Enter Position"
            value={dataArray?.position}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-[#64748b] border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block mb-2 font-bold text-[#64748b]">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder="Enter Company"
            value={dataArray?.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-[#64748b] border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block mb-2 font-bold text-[#64748b]"
          >
            Status
          </label>
          <input
            list="statusList"
            id="status"
            name="status"
            value={dataArray?.status}
            onChange={handleChange}
            placeholder="Clear to choose"
            autocomplete="off"
            required
            className="w-full px-4 py-2 text-[#64748b] border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
          <datalist id="statusList">
            <option value="Pending"></option>
            <option value="Short-Listed"></option>
            <option value="Interviewed"></option>
            <option value="Got Hired"></option>
          </datalist>
        </div>
        <div className="flex gap-5">
          <button type="submit" className="bg-[#08D155] text-white p-2 rounded">
            {loading ? `${type}...` : type}
          </button>
          <Link href="/">
            <button className="bg-[#f43f5e] text-white p-2 rounded">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Form;
