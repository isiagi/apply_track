"use client";

import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

function TableBody({ data, handleDelete, handleEdit }) {
  // console.log(data);
  return (
    <>
      {data ? (
        data.map((res) => (
          <tbody key={res._id} className="p-7">
            <tr>
              <td className="border border-slate-300 text-[#64748b] text-center">{res.company}</td>
              <td className="border border-slate-300 text-center">
                <p className="bg-[#ecfdf5] text-[#10b981] rounded">{res.position}</p>
              </td>
              <td className="border border-slate-300 text-[#64748b] text-center">{res.date}</td>
              <td className="border border-slate-300 text-[#64748b] text-center">{res.status}</td>
              <td className="border border-slate-300">
                <div className="flex justify-evenly">
                  <div
                    className="flex justify-center items-center bg-[#ecfdf5] h-8 w-8 rounded-full cursor-pointer"
                    onClick={() => handleEdit(res._id)}
                  >
                    <FiEdit className="text-[#10b981]" />
                  </div>
                  <div
                    className="flex justify-center items-center bg-[#fff1f2] h-8 w-8 rounded-full cursor-pointer"
                    onClick={() => handleDelete(res._id)}
                  >
                    <MdDeleteOutline className="text-[#f43f5e]" />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        ))
      ) : (
        <h2>Loading Table...</h2>
      )}
    </>
  );
}

export default TableBody;
