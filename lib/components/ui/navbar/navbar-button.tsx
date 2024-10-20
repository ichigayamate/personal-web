"use client";

import { Button as HButton } from "@headlessui/react";
import type { ButtonType } from "@interfaces/ui/button/button";

export default function NavbarButton({
  href,
  children,
  className,
  onClick,
}: Readonly<ButtonType>) {
  const classNameString = `p-2 bg-white/0 hover:bg-white/10 active:bg-white/25 transition-colors rounded-md ${className}`;
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
