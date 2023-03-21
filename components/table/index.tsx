import React from "react";

function Table() {
  return (
    <div className="shadow-sm overflow-hidden pt-8 mb-8 border border-slate-400">
      <table className="border-collapse table-auto  w-full text-sm">
        <thead>
          <tr>
            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">
              Song
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 text-left">
              Artist
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 text-left">
              Year
            </th>
          </tr>
        </thead>
        <tbody className="bg-white ">
          <tr>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500">
              Malcolm Lockyer
            </td>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500">
              1961
            </td>
          </tr>
          <tr>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500">
              Witchy Woman
            </td>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500">
              The Eagles
            </td>
            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500">
              1972
            </td>
          </tr>
          <tr>
            <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500">
              Shining Star
            </td>
            <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500">
              Earth, Wind, and Fire
            </td>
            <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500">
              1975
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
