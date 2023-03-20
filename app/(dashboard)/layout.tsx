import "../globals.css";
import { Barlow } from "next/font/google";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata = {
  title: "Crypto view",
  description: "Website designed my Johnbosco ft Einstein",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <main className="min-h-screen flex  w-full bg-[#FAFAFC]">
          <Sidebar />
          <section className="flex-1 w-full">
            <Navbar />
            <div className="px-4">{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
}
