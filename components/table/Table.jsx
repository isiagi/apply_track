import React from "react";
import TableBody from "./TableBody";

function Table({ data, handleDelete, handleEdit, submitting }) {
  return (
    <>
      <table class="md:table-fixed table-auto w-full bg-white border-collapse border border-slate-400 text-stone-700 p-8">
        <caption class="caption-top">Recently Sent Job Applications</caption>
        <thead>
          <tr>
            <th className="border border-slate-300 text-[#08D1C7]">Company</th>
            <th className="border border-slate-300 text-[#08D1C7]">Postion</th>
            <th className="border border-slate-300 text-[#08D1C7]">Date of Applying</th>
            <th className="border border-slate-300 text-[#08D1C7]">Status</th>
            <th className="border border-slate-300 text-[#08D1C7]">Edit / Delete</th>
          </tr>
        </thead>
        {submitting ? (
          <h2>Loading</h2>
        ) : (
          <TableBody
            data={data}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        )}
      </table>
    </>
  );
}

export default Table;
