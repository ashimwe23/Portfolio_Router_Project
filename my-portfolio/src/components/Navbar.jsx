import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 px-8 py-4 flex justify-between items-center">
      <h2 className="text-white text-2xl font-bold">
        My Portfolio
      </h2>

      <div className="flex gap-8">
        <NavLink to="/" className="text-white">Home</NavLink>
        <NavLink to="/about" className="text-white">About</NavLink>
        <NavLink to="/contact" className="text-white">Contact</NavLink>
        <NavLink to="/projects" className="text-white">Projects</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;