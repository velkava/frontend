import { MouseEventHandler, ReactNode } from "react";

export interface NavLink {
  href: string;
  label: string;
}

export interface NavButton {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  startIcon?: string;
  endIcon?: string;
}
