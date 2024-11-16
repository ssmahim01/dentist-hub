import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center min-h-20 text-white mb-4 px-6 bg-purple-500">
      <div className="navbar-start block md:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-56 space-y-4 p-4 shadow text-gray-700 font-bold"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/treatments">
              Treatments
            </NavLink>
            <NavLink to="/myAppointments">
              My Appointments
            </NavLink>
            <NavLink to="/profile">
              Profile
            </NavLink>
          </ul>
        </div>
      </div>
      <h2 className="md:text-2xl text-sm font-bold uppercase">Dentist Hub</h2>
      
      <div className="hidden md:flex font-bold">
          <NavLink to="/">Home</NavLink>
          <NavLink className="ml-4" to="/treatments">
            Treatments
          </NavLink>
          <NavLink className="ml-4" to="/myAppointments">
            My Appointments
          </NavLink>
          <NavLink className="ml-4" to="/profile">
            Profile
          </NavLink>
        </div>
        
        <div>
          <button className="btn btn-accent px-5 font-bold text-white">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
  );
};

export default Navbar;
