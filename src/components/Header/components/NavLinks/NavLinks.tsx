import { FC } from "react";
import "./NavLinks.css";
import { NavLink, NavLinkRenderProps } from "react-router";
import { NavLinksProps } from "./NavLinks.types";
import classNames from "classnames";

const NavLinks: FC<NavLinksProps> = ({ items }) => {
  const navLinkClassName = classNames(
    "Header__NavLinks-item",
    ({ isActive }: NavLinkRenderProps) => (isActive ? "active" : "")
  );

  return (
    <div className="Header__NavLinks">
      {items &&
        items.map((link) => (
          <NavLink
            key={link.label + link.href}
            to={link.href}
            className={navLinkClassName}
          >
            {link.label}
          </NavLink>
        ))}
    </div>
  );
};

export default NavLinks;
