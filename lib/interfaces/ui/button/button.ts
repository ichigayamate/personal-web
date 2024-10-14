import type { MouseEventHandler, ReactNode } from "react";

export interface ButtonType<T = Element> {
  className?: string;
  href?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<T>;
}
