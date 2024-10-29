import { ComponentPropsWithoutRef } from "react";

export default function Container(
  props: Readonly<ComponentPropsWithoutRef<"div">>,
) {
  return (
    <div
      {...props}
      className={`flex justify-center w-full px-4 ${props.className || ""}`}
    >
      <div className="w-full max-w-[80rem]">{props.children}</div>
    </div>
  );
}
