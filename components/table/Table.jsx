import React from "react";
import TableBody from "./TableBody";

function Table({data, handleDelete, handleEdit}) {
  return (
    <>
      <table class="md:table-fixed table-auto w-full bg-white border-collapse border border-slate-400 text-stone-700">
        <caption class="caption-top">Recently Sent Job Applications</caption>
        <thead>
          <tr>
            <th className="border border-slate-300">Company</th>
            <th className="border border-slate-300">Postion</th>
            <th className="border border-slate-300">Date of Applying</th>
            <th className="border border-slate-300">Status</th>
            <th className="border border-slate-300">Actions</th>
          </tr>
        </thead>
        <TableBody data={data} handleDelete={handleDelete} handleEdit={handleEdit} />
      </table>
    </>
  );
}

export default Table;
