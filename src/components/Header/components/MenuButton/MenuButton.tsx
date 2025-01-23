import { FC } from "react";
import "./MenuButton.css";
import { MenuButtonProps } from "./MenuButton.types";

const MenuButton: FC<MenuButtonProps> = ({ onClick, label }) => {
  return (
    <button
      type="button"
      onClick={() => onClick(true)}
      className="Header__MenuButton"
    >
      <span className="Header__MenuButton-label">{label}</span>

      <svg
        className="Header__MenuButton-icon"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
};

export default MenuButton;
