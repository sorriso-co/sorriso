// import React, { useState } from "react";
// import Link from "next/link";

// interface NavbarItemProps {
//   href: string;
//   text: string;
//   submenu?: { href: string; text: string }[];
//   onClick?: () => void;
//   className?: string;
//   submenuClassName?: string;
//   submenuItemClassName?: string;
// }

// const NavbarItem: React.FC<NavbarItemProps> = ({
//   href,
//   text,
//   submenu,
//   onClick,
//   className,
//   submenuClassName,
//   submenuItemClassName,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleMouseEnter = () => {
//     setIsOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsOpen(false);
//   };

//   const handleClick = () => {
//     if (onClick) {
//       onClick();
//     }
//   };

//   return (
//     <div
//       className={`relative block ${className}`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       onClick={handleClick}
//     >
//       <Link href={href} className="flex items-center py-4">
//         {text}
//         {submenu && (
//           <svg
//             className="w-4 h-4 ml-1"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M19 9l-7 7-7-7"
//             ></path>
//           </svg>
//         )}
//       </Link>
//       {submenu && isOpen && (
//         <div className={submenuClassName}>
//           {submenu.map((item) => (
//             <Link key={item.href} href={item.href}>
//               <div className={submenuItemClassName}>{item.text}</div>
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default NavbarItem;
import React, { useState } from "react";
import Link from "next/link";

interface NavbarItemProps {
  href: string;
  text: string;
  submenu?: { href: string; text: string }[];
  onClick?: () => void;
  className?: string;
  submenuClassName?: string;
  submenuItemClassName?: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  href,
  text,
  submenu,
  onClick,
  className,
  submenuClassName,
  submenuItemClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`relative block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <Link href={href} className="flex items-center py-4">
        {text}
        {submenu && (
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
        )}
      </Link>
      {submenu && isOpen && (
        <div className={submenuClassName}>
          {submenu.map((item) => (
            <Link key={item.href} href={item.href}>
              <div className={submenuItemClassName}>{item.text}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarItem;
