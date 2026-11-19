
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <nav className="bg-blue-600 px-8 py-4 flex justify-between items-center">

      {/* Website logo */}
      <h2 className="text-white text-2xl font-bold">
        My Portfolio
      </h2>

      {/* Navigation links */}
      <div className="flex gap-8">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300 font-bold"
              : "text-white hover:text-yellow-200"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300 font-bold"
              : "text-white hover:text-yellow-200"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300 font-bold"
              : "text-white hover:text-yellow-200"
          }
        >
          Contact
        </NavLink>

      </div>

    </nav>
  )
}

export default Navbar
