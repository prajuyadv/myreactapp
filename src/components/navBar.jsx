import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false); // Close menu on mobile after navigation
  };

  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-semibold">Praju Kumar Yadav Patnam.dev</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 font-medium">
          <button onClick={() => handleNavigate("/about")} className="hover:underline">
            About
          </button>
          <button onClick={() => handleNavigate("/projects")} className="hover:underline">
            Projects
          </button>
          <button onClick={() => handleNavigate("/experience")} className="hover:underline">
            Experience
          </button>
          <button onClick={() => handleNavigate("/contact")} className="hover:underline">
            Contact
          </button>
        </nav>

        {/* Resume Button */}
        <a
          href="../Praju_kumar_CV.pdf"
          download
          className="hidden md:flex items-center gap-2 bg-black px-4 py-2 rounded-md text-sm hover:bg-gray-900 transition"
        >
          Resume <Download size={18} />
        </a>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-6 pb-4 space-y-3 text-sm">
          <button onClick={() => handleNavigate("/about")} className="block w-full text-left hover:underline">
            About
          </button>
          <button onClick={() => handleNavigate("/projects")} className="block w-full text-left hover:underline">
            Projects
          </button>
          <button onClick={() => handleNavigate("/experience")} className="block w-full text-left hover:underline">
            Experience
          </button>
          <button onClick={() => handleNavigate("/contact")} className="block w-full text-left hover:underline">
            Contact
          </button>
          <a
            href="../Praju_kumar_CV.pdf"
            download
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition w-max"
          >
            Resume <Download size={18} />
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
