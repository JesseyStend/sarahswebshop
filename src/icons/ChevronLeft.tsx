import * as React from "react";
import { useState, useEffect, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ChevronLeftProps {
  className?: string;
}

const ChevronLeft: React.FunctionComponent<ChevronLeftProps> = ({
  className,
}) => {
  return (
    <svg
      className={twMerge(className, "text-background fill-current stroke-text")}
      viewBox="0 0 54 75"
    >
      <path d="M7.18883 39.5999C3.42347 36.4049 3.42347 30.5951 7.18883 27.4001L36.324 2.67798C41.5212 -1.73201 49.5 1.96183 49.5 8.77791L49.5 58.2221C49.5 65.0381 41.5212 68.732 36.324 64.322L7.18883 39.5999Z" />
    </svg>
  );
};

export default ChevronLeft;
