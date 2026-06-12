import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const RedNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="bg-black/70 backdrop-blur-xl border-b-2 border-red-500/35">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">

          {/* LEFT BRAND */}
          <Link to="/" className="flex items-center gap-1">
            <span className="text-xl font-bold text-red-500">
              MySoc
            </span>
            <span className="text-xl font-bold text-white">
              Labs
            </span>
          </Link>

          {/* RIGHT NAV LINKS (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `
                  transition-colors duration-200
                  ${
                    isActive
                      ? "text-red-500"
                      : "text-gray-300 hover:text-white"
                  }
                  `
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-white hover:text-red-500 transition-colors p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>

      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-md transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer Mobile Navigation */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[280px] max-w-[85vw] bg-slate-950/98 backdrop-blur-lg border-l border-red-500/20 z-50 p-6 flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0 opacity-100 visible pointer-events-auto' : 'translate-x-full opacity-0 invisible pointer-events-none'}`}
      >
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="flex items-center gap-1" onClick={() => setIsOpen(false)}>
            <span className="text-xl font-bold text-red-500">MySoc</span>
            <span className="text-xl font-bold text-white">Labs</span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-red-500 transition-colors p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col space-y-4 text-base">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `py-2 border-b border-white/5 transition-colors duration-200 ${isActive ? "text-red-500" : "text-gray-300 hover:text-white"}`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
