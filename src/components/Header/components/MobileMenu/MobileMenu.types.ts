import { NavButton, NavLink } from "components/Header";
import { MouseEventHandler } from "react";

export type MobileMenuLink = NavLink;

export type MobileMenuButton = NavButton;

export interface CloseButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  label: string;
}

export interface MobileMenuProps {
  open: boolean;
  onClose: (arg0: boolean) => void;
  closeButtonProps: CloseButtonProps;
  links?: MobileMenuLink[];
  buttons?: MobileMenuButton[];
}
