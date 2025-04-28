import CompanyLogo from "../assets/CompanyLogo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 nav-container px-4">
      <div className="flex items-center">
        <img src={CompanyLogo} alt="MobiusEngine" className="h-8 md:h-10" />
      </div>
      <div className="hidden lg:flex text-white text-base font-medium nav-items space-x-8">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Plans</a>
        <a href="#">Testimonials</a>
        <a href="#">Privacy Policy</a>
        <div className="relative group">
          <button>More ▾</button>
          {/* Optional Dropdown */}
        </div>
      </div>
      <button
        className="bg-white text-[#022183] rounded-full text-sm font-semibold shadow-md hover:bg-[#022183] hover:text-[white] transition ml-6 md:ml-8"
        style={{ padding: "6px 15px" }}
      >
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
