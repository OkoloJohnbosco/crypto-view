import React from "react";
import {
  ChevronUpDownIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

function BorrowTable() {
  return (
    <div className="p-2 bg-white mb-8 rounded">
      <table className="border-collapse table-auto  w-full text-sm rounded-full border-spacing-0 gap-5">
        <thead>
          <tr className="bg-[#FAFAFC] py-2">
            <th className="font-bold p-4 pl-8 rounded-tl-lg rounded-bl-lg text-slate-700 text-left">
              <div className="flex items-end gap-1">
                Asset
                <ChevronUpDownIcon
                  className="h-4 w-4 font-bold"
                  fontWeight="bold"
                />
              </div>
            </th>
            <th className="font-bold p-4 text-slate-700  text-left">
              <div className="flex items-end gap-1">
                APY
                <ChevronUpDownIcon
                  className="h-4 w-4 font-bold"
                  fontWeight="bold"
                />
              </div>
            </th>
            <th className="font-bold p-4 text-slate-700 text-left rounded-tr-lg rounded-br-lg">
              <div className="flex items-end gap-1">
                Wallet
                <ChevronUpDownIcon
                  className="h-4 w-4 font-bold"
                  fontWeight="bold"
                />
              </div>
            </th>
            <th className="font-bold p-4 text-slate-700 text-left rounded-tr-lg rounded-br-lg">
              <div className="flex items-end gap-1">
                Colleteral
                <ChevronUpDownIcon
                  className="h-4 w-4 font-bold"
                  fontWeight="bold"
                />
              </div>
            </th>
            <th className="font-bold p-4 text-slate-700 text-left rounded-tr-lg rounded-br-lg">
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
            <td className="p-4 pl-8 text-slate-700">TRX</td>
            <td className="p-4 text-slate-700">4.65%</td>
            <td className="p-4 text-slate-700">1961</td>
            <td className="p-4 text-slate-700">1961</td>
            <td className="p-4 text-slate-700 flex justify-center">
              <EllipsisVerticalIcon className="h-5 w-5" />
            </td>
          </tr>
          <tr>
            <td className="p-4 pl-8 text-slate-700">TRX</td>
            <td className="p-4 text-slate-700">4.65%</td>
            <td className="p-4 text-slate-700">1972</td>
            <td className="p-4 text-slate-700">1961</td>
            <td className="p-4 text-slate-700 flex justify-center">
              <EllipsisVerticalIcon className="h-5 w-5" />
            </td>
          </tr>
          <tr>
            <td className="p-4 pl-8 text-slate-700">TRX</td>
            <td className="p-4 text-slate-700">4.65%</td>
            <td className="p-4 text-slate-700">1972</td>
            <td className="p-4 text-slate-700">1975</td>
            <td className="p-4 text-slate-700 flex justify-center">
              <EllipsisVerticalIcon className="h-5 w-5" />
            </td>
          </tr>
          <tr>
            <td className="p-4 pl-8 text-slate-700">TRX</td>
            <td className="p-4 text-slate-700">4.65%</td>
            <td className="p-4 text-slate-700">1961</td>
            <td className="p-4 text-slate-700">1961</td>
            <td className="p-4 text-slate-700 flex justify-center">
              <EllipsisVerticalIcon className="h-5 w-5" />
            </td>
          </tr>
          <tr>
            <td className="p-4 pl-8 text-slate-700">TRX</td>
            <td className="p-4 text-slate-700">4.65%</td>
            <td className="p-4 text-slate-700">1972</td>
            <td className="p-4 text-slate-700">1961</td>
            <td className="p-4 text-slate-700 flex justify-center">
              <EllipsisVerticalIcon className="h-5 w-5" />
            </td>
          </tr>
          <tr>
            <td className="p-4 pl-8 text-slate-700">TRX</td>
            <td className="p-4 text-slate-700">4.65%</td>
            <td className="p-4 text-slate-700">1972</td>
            <td className="p-4 text-slate-700">1975</td>
            <td className="p-4 text-slate-700 flex justify-center">
              <EllipsisVerticalIcon className="h-5 w-5" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BorrowTable;
