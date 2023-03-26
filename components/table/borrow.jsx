import React from "react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

function BorrowTable() {
  return (
    <div className="shadow-sm overflow-hidden p-4 bg-white mb-8 rounded">
      <table className="border-collapse table-auto  w-full text-sm rounded-full border-spacing-0 gap-5">
        <thead>
          <tr className="bg-[#FAFAFC] py-2">
            <th className="font-bold p-4 pl-8 rounded-tl-lg rounded-bl-lg text-slate-500 text-left">
              <div className="flex items-end gap-1">
                Asset
                <ChevronUpDownIcon
                  className="h-4 w-4 font-bold"
                  fontWeight="bold"
                />
              </div>
            </th>
            <th className="font-bold p-4  text-slate-500  text-left">
              <div className="flex items-end gap-1">
                APY
                <ChevronUpDownIcon
                  className="h-4 w-4 font-bold"
                  fontWeight="bold"
                />
              </div>
            </th>
            <th className="font-bold p-4 pr-8  text-slate-500 text-left rounded-tr-lg rounded-br-lg">
              <div className="flex items-end gap-1">
                Wallet
                <ChevronUpDownIcon
                  className="h-4 w-4 font-bold"
                  fontWeight="bold"
                />
              </div>
            </th>
            <th className="font-bold p-4 pr-8  text-slate-500 text-left rounded-tr-lg rounded-br-lg">
              <div className="flex items-end gap-1">
                Colleteral
                <ChevronUpDownIcon
                  className="h-4 w-4 font-bold"
                  fontWeight="bold"
                />
              </div>
            </th>
            <th className="font-bold p-4 pr-8  text-slate-500 text-left rounded-tr-lg rounded-br-lg">
              <div className="flex items-end gap-1">
                Action
                <ChevronUpDownIcon
                  className="h-4 w-4 font-bold"
                  fontWeight="bold"
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr>
            <td className="p-4 pl-8 text-slate-500">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="p-4 text-slate-500">Malcolm Lockyer</td>
            <td className="p-4 text-slate-500">1961</td>
            <td className="p-4 text-slate-500">1961</td>
            <td className="p-4 pr-8 text-slate-500">1961</td>
          </tr>
          <tr>
            <td className="p-4 pl-8 text-slate-500">Witchy Woman</td>
            <td className="p-4 text-slate-500">The Eagles</td>
            <td className="p-4 text-slate-500">1972</td>
            <td className="p-4 text-slate-500">1961</td>
            <td className="p-4 pr-8 text-slate-500">1972</td>
          </tr>
          <tr>
            <td className="p-4 pl-8 text-slate-500">Shining Star</td>
            <td className="p-4 text-slate-500">Earth, Wind, and Fire</td>
            <td className="p-4 text-slate-500">1972</td>
            <td className="p-4 text-slate-500">1975</td>
            <td className="p-4 pr-8 text-slate-500">1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BorrowTable;
