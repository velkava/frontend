import { FC } from "react";
import "./Logo.css";
import { LogoProps } from "./Logo.types";

const Logo: FC<LogoProps> = ({ alt, href, src }) => {
  return (
    <a href={href} className="Header__Logo">
      <span className="Header__Logo-alt">{alt}</span>
      <img className="Header__Logo-image" src={src} alt={alt} />
    </a>
  );
};

export default Logo;
