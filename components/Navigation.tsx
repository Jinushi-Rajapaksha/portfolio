"use client";
import { Code, Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/lib/theme-context";
import { useState, useEffect } from "react";

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigationItems = [
    { href: "/", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#education", label: "Education", id: "education" },
    { href: "#certifications", label: "Certifications", id: "certifications" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Get all sections
      const sections = navigationItems
        .map((item) => item.id)
        .filter((id) => id !== "home");
      const scrollPosition = window.scrollY + 100; // Offset for header

      // Check if we're at the top (home section)
      if (window.scrollY < 200) {
        setActiveSection("home");
        return;
      }

      // Find current active section
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    e.preventDefault();

    if (href === "/") {
      // Scroll to top for home
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
    } else {
      // Scroll to section
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80; // Account for sticky header
        const elementPosition = element.offsetTop - headerOffset;
        window.scrollTo({ top: elementPosition, behavior: "smooth" });
        setActiveSection(id);
      }
    }

    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  const NavLink = ({
    item,
    isMobile = false,
  }: {
    item: (typeof navigationItems)[0];
    isMobile?: boolean;
  }) => {
    const isActive = activeSection === item.id;
    const isHome = item.id === "home";

    const baseClasses = isMobile
      ? "block font-medium text-lg py-2 px-4 rounded-lg transition-all duration-200 hover:bg-accent/50"
      : "font-medium text-base lg:text-md transition-all duration-200 hover:scale-105 relative group";

    const activeClasses = isActive
      ? isHome
        ? "text-blue-400 hover:text-blue-300"
        : "text-blue-400 hover:text-blue-300"
      : "hover:text-foreground/80";

    return (
      <Link
        href={item.href}
        className={`${baseClasses} ${activeClasses}`}
        onClick={(e) => handleNavClick(e, item.href, item.id)}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-lg"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-18 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group"
            onClick={(e) => handleNavClick(e, "/", "home")}
          >
            <Code className="h-7 w-7 lg:h-8 lg:w-8 transition-transform group-hover:scale-110" />
            <span className="font-bold text-lg lg:text-xl">Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <nav className="flex items-center space-x-10">
              {navigationItems.map((item) => (
                <NavLink key={item.id} item={item} />
              ))}
            </nav>

            {/* Theme Toggle - Desktop */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg hover:bg-accent transition-all duration-200 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 lg:h-6 lg:w-6" />
              ) : (
                <Moon className="h-5 w-5 lg:h-6 lg:w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Theme Toggle - Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-accent transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-4 border-t border-border/50">
            {navigationItems.map((item) => (
              <NavLink key={`mobile-${item.id}`} item={item} isMobile />
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
}
