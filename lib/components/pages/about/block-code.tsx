import { ComponentProps, ComponentPropsWithoutRef } from "react";

function Header({ ...props }: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      {...props}
      className={`text-white before:content-['$_'] lowercase ${props.className || ""}`}
    >
      {props.children}
    </h2>
  );
}

function Text({ ...props }: ComponentProps<"p">) {
  return <p {...props}>{props.children}</p>;
}

const BashBox = ({ ...props }: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={`bg-neutral-900 rounded-md px-2 py-1 text-neutral-200 font-mono leading-6 ${props.className || ""}`}
    >
      {props.children}
    </div>
  );
};

BashBox.Header = Header;
BashBox.Text = Text;
export default BashBox;
