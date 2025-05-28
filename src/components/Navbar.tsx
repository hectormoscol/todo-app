import { Link, useLocation } from "react-router-dom";

// Barra de navegación simple para cambiar entre vistas
export default function Navbar() {
  const { pathname } = useLocation();

  const navs = [
    { to: "/", label: "Todas" },
    { to: "/active", label: "Activas" },
    { to: "/completed", label: "Completadas" },
  ];

  return (
    <nav className="flex gap-4 mb-6 justify-center">
      {navs.map(nav => (
        <Link
          key={nav.to}
          to={nav.to}
          className={`px-4 py-2 rounded transition
            ${pathname === nav.to
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-blue-100"}
          `}
        >
          {nav.label}
        </Link>
      ))}
    </nav>
  );
}