"use client";

import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

function TableBody({ data, handleDelete, handleEdit }) {
  // console.log(data);
  return (
    <>
      {data &&
        data.map((res) => (
          <tbody key={res._id}>
            <tr>
              <td className="border border-slate-300">{res.company}</td>
              <td className="border border-slate-300">{res.position}</td>
              <td className="border border-slate-300">{res.date}</td>
              <td className="border border-slate-300">{res.status}</td>
              <td className="border border-slate-300">
                <div className="flex">
                  <div className="group relative" onClick={() => handleEdit(res._id)}>
                    <FiEdit />
                    <span
                      class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 "
                    >
                      Edit
                    </span>
                  </div>
                  <div className="group relative" onClick={() => handleDelete(res._id)}>
                    <MdDeleteOutline />
                    <span
                      class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 "
                    >
                      Delete
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
    </>
  );
}

export default TableBody;
