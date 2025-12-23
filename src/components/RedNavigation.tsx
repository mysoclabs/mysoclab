import { Link, NavLink } from "react-router-dom";

export const RedNavigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="bg-black/70 backdrop-blur-xl border-b border-red-500/20">
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

          {/* RIGHT NAV LINKS */}
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

        </div>
      </div>
    </nav>
  );
};
