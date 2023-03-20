"use client";

import { Grid, User, DollarSign, Cpu, LifeBuoy, Layers } from "react-feather";

import Link from "next/link";
import { LinkProp } from "../sidebar";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const icons = { Grid, User, DollarSign, Cpu, LifeBuoy, Layers };

const SidebarLink = ({ link }: { link: LinkProp }) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link.link) {
    isActive = true;
  }

  //   @ts-expect-error
  const Icon = icons[link.icon];
  return (
    <Link
      href={link.link}
      className={clsx(
        "w-full flex pl-4 items-center h-[48px] hover:!text-[#2624B5] transition-all ease-in-out duration-300 space-x-2 border-r-[3px] border-transparent"
      )}
      style={{
        background: isActive ? "#2624B511" : "transparent",
        borderColor: isActive ? "#2624B5" : "transparent",
        color: isActive ? "#2624B5" : "#717171",
      }}
    >
      <Icon size={16} />
      <p className={clsx("text-sm ", isActive && "font-bold text-[#2624B5]")}>
        {link.label}
      </p>
    </Link>
  );
};

export default SidebarLink;
