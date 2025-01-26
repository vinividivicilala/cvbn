import { PropsWithChildren } from "react";

const tailwindBreakpoints = ["sm", "md", "lg", "xl", "2xl"];

type Props = PropsWithChildren<{ className: string }>;

//  Validation came after spending hours trying to figure out why grid
// had multiple columns instead of 1
// Setting grid-col-1 on the grid also doesn't work

export const Grid = ({ children, className = "v-col-core" }: Props) => {
  if (process.env.NODE_ENV === "development") {
    let error = false;

    if (className && !className.includes("v-layout")) {
      if (className.includes("span-start") || className.includes("span-end")) {
        error = true;
        console.error("*-span floats around, be explicit or use v-col-*");
      }
      if (tailwindBreakpoints.some((bp) => className.includes(bp)) === false) {
        console.log(
          className,
          !tailwindBreakpoints.some((bp) => className.includes(bp))
        );
        error = true;
        console.error("MDX requires responsive modifiers or it breaks");
      }
    }
    return (
      <div className={className}>
        {error && "Broken grid below!"}
        {children}
      </div>
    );
  }

  return <div className={className}>{children}</div>;
};

export default Grid;
