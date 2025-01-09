import React from "react";
import { NavLink } from "react-router-dom";

const Navcom = ({ style }) => {
  return (
    <div>
      <ul className={`hidden md:flex ${style} items-start font-medium`}>
        <NavLink onClick={() => window.scrollTo(0, 0)} to="/">
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink onClick={() => window.scrollTo(0, 0)} to="/doctors">
          <li className="py-1">Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink onClick={() => window.scrollTo(0, 0)} to="/about">
          <li className="py-1">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink onClick={() => window.scrollTo(0, 0)} to="/contact">
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink
          onClick={() => window.scrollTo(0, 0)}
          to="https://prescripto-proz1.vercel.app/"
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security for external links
        >
          <li className="py-1">Admin</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
    </div>
  );
};

export default Navcom;
