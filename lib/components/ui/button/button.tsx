"use client";

import { Button as HButton } from "@headlessui/react";
import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  className?: string;
  href?: string;
  children?: ReactNode;
  onClick?:
    | MouseEventHandler<HTMLButtonElement>
    | MouseEventHandler<HTMLAnchorElement>;
};

export default function Button({
  href,
  children,
  className,
  onClick,
}: Readonly<ButtonProps>) {
  const classNameString = `group rounded-md bg-black/10 hover:bg-black/25 active:bg-black/35 dark:bg-white/10 dark:hover:bg-white/25 dark:active:bg-white/35 px-2 py-1 transition-colors ${className}`;
  return href ? (
    <HButton
      as="a"
      className={classNameString}
      href={href}
      onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
    >
      {children}
    </HButton>
  ) : (
    <HButton
      as="button"
      className={classNameString}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
    >
      {children}
    </HButton>
  );
}
