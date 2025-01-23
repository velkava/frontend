import { FC, useMemo, useState } from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";
import { APP_NAME } from "shared/constants";
import { Logo, MenuButton, MobileMenu, NavLinks } from "./components";
import { NavButton, NavLink } from "./Header.types";

const PATH_WIKI = "/wiki";
const PATH_FORUM = "/forum";
const PATH_SUPPORT = "/support";

const Header: FC = () => {
  const { t } = useTranslation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links: NavLink[] = useMemo(() => {
    return [
      {
        label: t("header.links.wiki"),
        href: PATH_WIKI,
      },
      {
        label: t("header.links.forum"),
        href: PATH_FORUM,
      },
      {
        label: t("header.links.support"),
        href: PATH_SUPPORT,
      },
    ];
  }, [t]);

  const buttons: NavButton[] = useMemo(() => {
    return [
      {
        children: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        ),
      },
      {
        children: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
            />
          </svg>
        ),
      },
      {
        children: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        ),
      },
    ];
  }, []);

  return (
    <header className="Header">
      <nav className="Header__nav" aria-label="Global">
        <div className="Header__nav-left">
          <Logo
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            alt={APP_NAME}
            href="/"
          />
        </div>

        <div className="flex lg:hidden">
          <MenuButton label={t("Open main menu")} onClick={setMobileMenuOpen} />
        </div>

        <div className="hidden lg:block">
          <NavLinks items={links} />
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:gap-x-6 lg:justify-end">
          {buttons.map((button) => (
            <button
              className="text-sm/6 font-semibold text-gray-900"
              onClick={button.onClick}
            >
              {button.children}
            </button>
          ))}
        </div>
      </nav>

      <MobileMenu
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        closeButtonProps={{
          label: t("Close menu"),
          onClick: () => setMobileMenuOpen(false),
        }}
        links={links}
        buttons={buttons}
      />
    </header>
  );
};

export default Header;
