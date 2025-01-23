import { Dialog, DialogPanel } from "@headlessui/react";
import { FC } from "react";
import { MobileMenuProps } from "./MobileMenu.types";
import { Logo } from "../Logo";
import { APP_NAME } from "shared/constants";
import { NavLink } from "react-router";

const MobileMenu: FC<MobileMenuProps> = ({
  closeButtonProps,
  open,
  onClose,
  links,
  buttons,
}) => {
  return (
    <Dialog open={open} onClose={onClose} className="lg:hidden">
      <div className="fixed inset-0 z-10"></div>

      <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Logo
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            alt={APP_NAME}
            href="/"
          />

          <button
            type="button"
            onClick={closeButtonProps.onClick}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">{closeButtonProps.label}</span>

            <svg
              className="size-6"
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {links &&
                links.map((link) => (
                  <NavLink
                    key={link.label + link.href}
                    to={link.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {link.label}
                  </NavLink>
                ))}
            </div>

            <div className="py-6 flex gap-6">
              {buttons &&
                buttons.map((button) => (
                  <button className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    {button.children}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default MobileMenu;
