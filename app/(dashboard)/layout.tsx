import "../globals.css";
import { Barlow } from "next/font/google";
import Sidebar from "@/components/sidebar";

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
          <section>{children}</section>
        </main>
      </body>
    </html>
  );
}
