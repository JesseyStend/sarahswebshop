import * as React from "react";
import { twMerge } from "tailwind-merge";

interface ChevronRightProps {
  className?: string;
}

const ChevronRight: React.FunctionComponent<ChevronRightProps> = ({
  className,
}) => {
  return (
    <svg
      className={twMerge(
        className,
        "text-background fill-current stroke-foreground"
      )}
      viewBox="0 0 54 75"
    >
      <path d="M46.4877 27.7813C50.0177 30.7766 50.0177 36.2234 46.4877 39.2187L17.3525 63.9408C12.4801 68.0751 4.99999 64.6122 4.99999 58.2221L4.99999 8.77794C4.99999 2.38785 12.4801 -1.07514 17.3525 3.05923L46.4877 27.7813Z" />
    </svg>
  );
};

export default ChevronRight;
