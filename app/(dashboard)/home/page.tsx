import ApySection from "@/components/apy";
import Banner from "@/components/banner";
import Example from "@/components/omo";
import StatCard, { stats } from "@/components/stat-card";
import Table from "@/components/table";
import React from "react";

export default function Dashboard() {
  return (
    <main className="space-y-10">
      <Banner />
      {/* <Example /> */}
      <ApySection />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.text} {...stat} />
        ))}
      </div>
      <Table />
    </main>
  );
}
