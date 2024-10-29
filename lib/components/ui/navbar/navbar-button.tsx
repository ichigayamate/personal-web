"use client";

import { Button as HButton } from "@headlessui/react";
import type { ButtonType } from "@interfaces/ui/button/button";

export const NAVBAR_BUTTON_CLASSNAME =
  "inline-block px-2 py-1 text-white bg-white/0 hover:bg-white/10 active:bg-white/25 data-[active]:bg-white/25 data-[open]:bg-white/25 transition-colors rounded-md";

export default function NavbarButton({
  href,
  children,
  className,
  onClick,
}: Readonly<ButtonType>) {
  const classNameString = `${NAVBAR_BUTTON_CLASSNAME} ${className || ""}`;
  return href ? (
    <HButton as="a" className={classNameString} href={href} onClick={onClick}>
      {children}
    </HButton>
  ) : (
    <HButton as="button" className={classNameString} onClick={onClick}>
      {children}
    </HButton>
  );
}
