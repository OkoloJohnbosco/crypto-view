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
        "w-full flex pl-4 items-center h-[48px] bg-transparent text-[#717171] hover:text-[#2624B5] transition-all ease-in-out duration-200 space-x-2 border-r-[3px] border-transparent",
        isActive && "bg-[#2624B511] border-[#2624B5] text-[#2624B5]"
      )}
    >
      <Icon size={16} />
      <p className={clsx("text-sm", isActive && "font-bold text-[#2624B5]")}>
        {link.label}
      </p>
    </Link>
  );
};

export default SidebarLink;
