import clsx from "clsx";
import React from "react";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("max-w-full overflow-x-auto", className)}>
      {children}
    </div>
  );
}

export default Container;
