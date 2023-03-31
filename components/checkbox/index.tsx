"use client";
import React from "react";
import { motion } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default function CustomRadio({
  isOnDisplay = false,
  onToggle,
}: {
  isOnDisplay?: boolean;
  onToggle?: () => void;
}) {
  const [display, setDisplay] = React.useState(isOnDisplay);
  const onDisplayToggle = () => setDisplay((prev) => !prev);
  return (
    <motion.div
      className="flex w-10 h-[24px] rounded-[12px] p-1 cursor-pointer transition-all ease-in duration-300 border"
      style={{
        justifyContent: `${display ? "flex-end" : "flex-start"}`,
        background: `${display ? "#E5EDF5" : "white"}`,
        borderColor: `${display ? "#2624B5" : "#F0F0F1"}`,
      }}
      transition={spring}
      onClick={onToggle ?? onDisplayToggle}
    >
      <motion.div
        className="h-full w-4 rounded-full"
        style={{
          background: `${display ? "#2624B5" : "#DEDFE0"}`,
        }}
        layout
        transition={spring}
      />
    </motion.div>
  );
}
