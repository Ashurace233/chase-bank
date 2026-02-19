import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";

const navItems = [
  { label: "Personal", href: "#" },
  { label: "Business", href: "#" },
  { label: "Commercial", href: "#" },
  { label: "About", href: "#" },
];

const ChaseNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src="/chase-logo.png" alt="Chase" className="h-8" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors flex items-center gap-1"
            >
              {item.label}
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Link
            to="/sign-in"
            className="bg-primary-foreground text-primary px-5 py-2 rounded-md text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            Sign in
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-white/10 px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 text-sm font-medium border-b border-white/10"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/sign-in"
            className="mt-3 block text-center bg-primary-foreground text-primary px-5 py-2.5 rounded-md text-sm font-semibold"
          >
            Sign in
          </Link>
        </div>
      )}
    </header>
  );
};

export default ChaseNav;
