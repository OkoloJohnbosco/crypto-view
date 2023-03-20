"use client";
import useAxios from "@/hooks/useAxios";
import React from "react";

export default function Home() {
  const { data, error, isLoading, mutateAsync } = useAxios();

  const makeRequestForShalom = () => {
    const body = {
      collection_address: { street_address: "92 Landros Mare Street" },
      delivery_address: { street_address: "5 Mountjoy Street" },
      items: [{ qty: 3, vendor: "erreer", unit_price: 42, unit_weight_kg: 2 }],
    };

    const options = {
      url: "https://api.sandbox.bobgo.co.za/v2/rates-at-checkout",
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: "Bearer 607cdd7584a0474a98af798c8e3f6ca1",
      },
      body,
    };

    mutateAsync(options).then((res) => {
      console.log(data);
    });
  };
  return (
    <main className="h-screen flex flex-col w-full items-center justify-center">
      <button
        className="px-4 py-3 bg-teal-800 text-white rounded-md focus:ring-2"
        onClick={makeRequestForShalom}
      >
        Make Api Call
      </button>
      {isLoading && <p>Loading.....</p>}
      {error && <p>Request Failed</p>}
      {data && <p>Request passed</p>}
    </main>
  );
}
