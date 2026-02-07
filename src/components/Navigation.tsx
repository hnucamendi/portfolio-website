import React from "react";
import {
  Nav,
  NavLink,
  MobileMenuButton,
  MobileNav,
  MobileNavLink,
} from "../styles/navigation";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

interface Props {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Navigation: React.FC<Props> = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (isMobileMenuOpen) {
        toggleMobileMenu();
      }
    }
  };

  return (
    <>
      <Nav>
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
          </NavLink>
        ))}
      </Nav>

      <MobileMenuButton onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? "✕" : "☰"}
      </MobileMenuButton>

      <MobileNav $isOpen={isMobileMenuOpen}>
        {navItems.map((item) => (
          <MobileNavLink
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
          </MobileNavLink>
        ))}
      </MobileNav>
    </>
  );
};

export default Navigation;
