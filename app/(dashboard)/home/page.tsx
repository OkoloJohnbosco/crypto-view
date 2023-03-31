import ApySection from "@/components/apy";
import Banner from "@/components/banner";
import Example from "@/components/omo";
import StatCard, { stats } from "@/components/stat-card";
import SupplyTable from "@/components/table";
import BorrowTable from "@/components/table/borrow";
import SuppliedTable from "@/components/table/supplied";
import React from "react";

export default function Dashboard() {
  return (
    <main className="space-y-10 pb-20">
      <Banner />
      {/* <Example /> */}
      <ApySection />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.text} {...stat} />
        ))}
      </div>
      <div className="grid grid-col-1 lg:grid-cols-2 gap-5">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="uppercase font-bold text-sm text-gray-800">
              Supplied
            </h3>
            <SuppliedTable />
          </div>
          <div className="space-y-2">
            <h3 className="uppercase font-bold text-sm text-gray-800">
              Supply MARKET
            </h3>
            <SupplyTable />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="uppercase font-bold text-sm text-gray-800">
            borrow MARKET
          </h3>
          <BorrowTable />
        </div>
      </div>
    </main>
  );
}
