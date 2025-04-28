import CompanyLogo from "../assets/CompanyLogo.png";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-4 nav-container px-4 relative">
      {/* Logo */}
      <div className="flex items-center">
        <img src={CompanyLogo} alt="MobiusEngine" className="h-8 md:h-10" />
      </div>
      
      {/* Mobile Controls */}
      <div className="flex items-center gap-4 lg:hidden">
        {/* Mobile Menu Button */}
        <button 
          className="text-white z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <button
          className="bg-white text-[#022183] rounded-full text-sm font-semibold shadow-md hover:bg-[#022183] hover:text-[white] transition whitespace-nowrap"
          style={{ padding: "8px 16px" }}
        >
          Get Started
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex text-white text-base font-medium nav-items space-x-8">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Plans</a>
        <a href="#">Testimonials</a>
        <a href="#">Privacy Policy</a>
        <div className="relative group">
          <button>More ▾</button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-[#022183] z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6 p-8 pt-20">
          <a href="#" className="text-white text-xl font-medium">Home</a>
          <a href="#" className="text-white text-xl font-medium">About Us</a>
          <a href="#" className="text-white text-xl font-medium">Plans</a>
          <a href="#" className="text-white text-xl font-medium">Testimonials</a>
          <a href="#" className="text-white text-xl font-medium">Privacy Policy</a>
          <div className="relative group">
            <button className="text-white text-xl font-medium">More ▾</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
