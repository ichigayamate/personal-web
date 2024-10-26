import { ComponentPropsWithoutRef } from "react";

export default function Container(
  props: Readonly<ComponentPropsWithoutRef<"div">>,
) {
  return (
    <div {...props} className={`flex justify-center ${props.className || ""}`}>
      <div className="max-w-[80rem]">{props.children}</div>
    </div>
  );
}
