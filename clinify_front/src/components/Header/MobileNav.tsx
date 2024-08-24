import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface MobileNavProps {
  toggleMenu: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ toggleMenu }) => {
  const { t } = useTranslation("common");
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const handleSubmenuToggle = (submenu: string) => {
    if (activeSubmenu === submenu) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(submenu);
    }
  };

  return (
    <div className="fixed inset-y-0 right-0 w-64 bg-teal-500 z-50 transition-transform duration-300 ease-in-out transform translate-x-0 lg:hidden flex flex-col items-start justify-start shadow-lg">
      <div className="sticky top-0 w-full z-50 bg-teal-500 shadow-lg">
        <div className="flex justify-between items-center w-full px-4 py-3 border-b border-teal-700">
          <span className="text-2xl font-semibold text-white">
            {t("header.mobile_nav.menu")}
          </span>
          <button className="text-white" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <Link
        href="/"
        className="block px-4 py-2 text-lg text-white hover:bg-teal-600 w-full"
        onClick={toggleMenu}
      >
        {t("header.menu.home")}
      </Link>
      <div className="w-full">
        <div
          className="flex items-center justify-between w-full px-4 py-2 text-lg text-white cursor-pointer hover:bg-teal-600"
          onClick={() => handleSubmenuToggle("about")}
        >
          {t("header.menu.about")}
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        {activeSubmenu === "about" && (
          <div className="pl-6">
            <Link
              href="/about"
              className="block px-4 py-2 text-lg text-white hover:bg-teal-600"
              onClick={toggleMenu}
            >
              {t("header.menu.about_submenu.about")}
            </Link>
            <Link
              href="/ourteam"
              className="block px-4 py-2 text-lg text-white hover:bg-teal-600"
              onClick={toggleMenu}
            >
              {t("header.menu.about_submenu.our_team")}
            </Link>
            <Link
              href="/whymne"
              className="block px-4 py-2 text-lg text-white hover:bg-teal-600"
              onClick={toggleMenu}
            >
              {t("header.menu.about_submenu.why_montenegro")}
            </Link>
          </div>
        )}
      </div>
      <div className="w-full">
        <div
          className="flex items-center justify-between w-full px-4 py-2 text-lg text-white cursor-pointer hover:bg-teal-600"
          onClick={() => handleSubmenuToggle("services")}
        >
          {t("header.menu.services")}
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        {activeSubmenu === "services" && (
          <div className="pl-6">
            <Link
              href="/services"
              className="block px-4 py-2 text-lg text-white hover:bg-teal-600"
              onClick={toggleMenu}
            >
              {t("header.menu.services_submenu.our_services")}
            </Link>
            <Link
              href="/howitworks"
              className="block px-4 py-2 text-lg text-white hover:bg-teal-600"
              onClick={toggleMenu}
            >
              {t("header.menu.services_submenu.how_it_works")}
            </Link>
            <Link
              href="/procedures"
              className="block px-4 py-2 text-lg text-white hover:bg-teal-600"
              onClick={toggleMenu}
            >
              {t("header.menu.services_submenu.treatments")}
            </Link>
            <Link
              href="/experiences"
              className="block px-4 py-2 text-lg text-white hover:bg-teal-600"
              onClick={toggleMenu}
            >
              {t("header.menu.services_submenu.experiences")}
            </Link>
            <Link
              href="/gallery"
              className="block px-4 py-2 text-lg text-white hover:bg-teal-600"
              onClick={toggleMenu}
            >
              {t("header.menu.services_submenu.gallery")}
            </Link>
          </div>
        )}
      </div>
      <div className="w-full">
        <div
          className="flex items-center justify-between w-full px-4 py-2 text-lg text-white cursor-pointer hover:bg-teal-600"
          onClick={() => handleSubmenuToggle("business")}
        >
          {t("header.menu.business")}
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        {activeSubmenu === "business" && (
          <div className="pl-6">
            <Link
              href="/clinics"
              className="block px-4 py-2 text-lg text-white hover:bg-teal-600"
              onClick={toggleMenu}
            >
              {t("header.menu.business_submenu.for_clinics")}
            </Link>
            <Link
              href="/for-affiliates"
              className="block px-4 py-2 text-lg text-white hover:bg-teal-600"
              onClick={toggleMenu}
            >
              {t("header.menu.business_submenu.for_affiliates")}
            </Link>
          </div>
        )}
      </div>
      <Link
        href="/pricing"
        className="block px-4 py-2 text-lg text-white hover:bg-teal-600 w-full"
        onClick={toggleMenu}
      >
        {t("header.menu.pricing")}
      </Link>
      <Link
        href="/contact"
        className="block px-4 py-2 text-lg text-white hover:bg-teal-600 w-full"
        onClick={toggleMenu}
      >
        {t("header.menu.contact")}
      </Link>
    </div>
  );
};

export default MobileNav;
