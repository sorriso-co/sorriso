"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarItem from "./NavbarItem";
import MobileNav from "./MobileNav";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation("common");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuOpen && !menuRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
      <header className="fixed top-0 left-0 w-full py-6 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 text-xl flex items-center justify-between border-b-4 border-teal-500 bg-white shadow-md z-50">
        <div className="flex items-center">
          <Link href="/" className="font-black text-teal-700">
            <Image
              src="/images/logos/sorriso.png"
              alt="Sorriso"
              width={200}
              height={50}
              priority
              className="h-auto w-auto"
            />
          </Link>
        </div>
        <div className="flex flex-1 justify-end items-center">
          <div className="hidden lg:flex flex-1 justify-evenly items-center">
            <NavbarItem
              href="/"
              text={t("header.menu.home")}
              className="relative px-4 py-2 text-teal-700 hover:text-teal-500 hover:-translate-y-1 transition-transform duration-300"
            />
            <NavbarItem
              href="/about"
              text={t("header.menu.about")}
              submenu={[
                { href: "/about", text: t("header.menu.about_submenu.about") },
                {
                  href: "/ourteam",
                  text: t("header.menu.about_submenu.our_team"),
                },
                {
                  href: "/whymne",
                  text: t("header.menu.about_submenu.why_montenegro"),
                },
              ]}
              className="relative px-4 py-2 text-teal-700 hover:text-teal-500 hover:-translate-y-1 transition-transform duration-300"
              submenuClassName="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg"
              submenuItemClassName="block px-4 py-2 text-teal-700 hover:bg-teal-100"
            />
            <NavbarItem
              href="/services"
              text={t("header.menu.services")}
              submenu={[
                {
                  href: "/services",
                  text: t("header.menu.services_submenu.our_services"),
                },
                {
                  href: "/howitworks",
                  text: t("header.menu.services_submenu.how_it_works"),
                },
                {
                  href: "/procedures",
                  text: t("header.menu.services_submenu.treatments"),
                },
                {
                  href: "/experiences",
                  text: t("header.menu.services_submenu.experiences"),
                },
                {
                  href: "/gallery",
                  text: t("header.menu.services_submenu.gallery"),
                },
              ]}
              className="relative px-4 py-2 text-teal-700 hover:text-teal-500 hover:-translate-y-1 transition-transform duration-300"
              submenuClassName="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg"
              submenuItemClassName="block px-4 py-2 text-teal-700 hover:bg-teal-100"
            />
            <NavbarItem
              href="/clinics"
              text={t("header.menu.business")}
              submenu={[
                {
                  href: "/clinics",
                  text: t("header.menu.business_submenu.for_clinics"),
                },
                {
                  href: "/for-affiliates",
                  text: t("header.menu.business_submenu.for_affiliates"),
                },
              ]}
              className="relative px-4 py-2 text-teal-700 hover:text-teal-500 hover:-translate-y-1 transition-transform duration-300"
              submenuClassName="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg"
              submenuItemClassName="block px-4 py-2 text-teal-700 hover:bg-teal-100"
            />
            <NavbarItem
              href="/pricing"
              text={t("header.menu.pricing")}
              className="relative px-4 py-2 text-teal-700 hover:text-teal-500 hover:-translate-y-1 transition-transform duration-300"
            />
            <NavbarItem
              href="/contact"
              text={t("header.menu.contact")}
              className="relative px-4 py-2 text-teal-700 hover:text-teal-500 hover:-translate-y-1 transition-transform duration-300"
            />
          </div>
          <div className="relative lg:hidden flex items-center" ref={menuRef}>
            <button
              className="text-teal-700 focus:outline-none"
              onClick={toggleMenu}
            >
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
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
            {menuOpen && <MobileNav toggleMenu={toggleMenu} />}
          </div>
        </div>
      </header>
      <div className="mt-24"></div>
    </>
  );
};

export default Header;
