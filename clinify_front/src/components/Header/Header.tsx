"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarItem from "./NavbarItem";
import MobileNav from "./MobileNav";
import { useTranslation } from "react-i18next";
import { FiPhoneCall } from "react-icons/fi"; // Import phone icon from react-icons

const Header: React.FC = () => {
  const { t } = useTranslation("common");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle scroll effect to change background and text color when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      {/* Overlay when mobile menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full py-4 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 text-lg flex items-center justify-between z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg text-teal-700"
            : "bg-transparent text-green-900"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="font-black">
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

        {/* Menu Links (for larger screens) */}
        <div className="flex flex-1 justify-end items-center">
          <div className="hidden lg:flex flex-1 justify-evenly items-center">
            <NavbarItem
              href="/about"
              text={t("header.menu.about")}
              className="relative px-4 py-2 hover:text-teal-400 hover:scale-105 transition-all duration-300"
              submenuClassName="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg"
              submenuItemClassName="block px-4 py-2 text-teal-700 hover:bg-teal-100"
            />
            <NavbarItem
              href="/services"
              text={t("header.menu.services")}
              className="relative px-4 py-2 hover:text-teal-400 hover:scale-105 transition-all duration-300"
              submenuClassName="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg"
              submenuItemClassName="block px-4 py-2 text-teal-700 hover:bg-teal-100"
            />
            <NavbarItem
              href="/pricing"
              text={t("header.menu.pricing")}
              className="relative px-4 py-2 hover:text-teal-400 hover:scale-105 transition-all duration-300"
            />
            <NavbarItem
              href="/contact"
              text={t("header.menu.contact")}
              className="relative px-4 py-2 hover:text-teal-400 hover:scale-105 transition-all duration-300"
            />
          </div>

          {/* Phone Number (visible only on large screens) */}
          <div className="hidden lg:flex flex-col items-start text-teal-700">
            <div className="flex items-center">
              <FiPhoneCall className="w-6 h-6 mr-2" />
              <span className="font-semibold">{t("header.phone.number")}</span>
            </div>
            <span className="text-sm text-gray-600 -ml-1">
              {t("header.phone.availability")}
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="relative lg:hidden flex items-center" ref={menuRef}>
            <button
              className="text-current focus:outline-none"
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

      {/* Spacing for fixed header */}
      <div className="mt-24"></div>
    </>
  );
};

export default Header;

// added comment just to trigger the push,
// all
