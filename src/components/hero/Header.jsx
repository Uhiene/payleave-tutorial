import { useState } from "react";
import logo from "../../assets/logo2.svg";
import menubar from "../../assets/bars3Icon.svg";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  return (
    <div className="fixed bg-[#424242] flex justify-between items-center w-full p-5 md:px-20">
      <div className="flex gap-3">
        <img src={logo} alt="" className="w-fit" />
        <h1 className="text-white text-3xl font-semibold">PayLeave</h1>
      </div>

      <div className="flex md:hidden">
        <DropdownSidebar />
      </div>

      <nav className="hidden md:flex ">
          <ul className="flex items-center gap-5 text-white text-xl">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#mission">Mission</a>
            </li>
          </ul>
        </nav>

      <div className="hidden md:flex gap-5">
        <button className="p-2 px-4 font-medium text-xl rounded-md text-white bg-[#FF7F00] transition-transform duration-300 hover:-translate-y-1">
          Join waiting List
        </button>
        <button className="p-2 px-4 font-medium text-xl rounded-md bg-white text-[#141414]  transition-transform duration-300 hover:-translate-y-1">
          Become a merchant
        </button>
      </div>
    </div>
  );
};

function DropdownSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleDropdown} className="relative">
        {!isOpen ? (
          <img src={menubar} alt="menu bar" className="w-6" />
        ) : (
          <FaTimes className="text-white hover:text-red-500 text-2xl " />
        )}
      </div>
      {isOpen && (
        <nav className="absolute bg-[#141414] w-full right-0 text-[#bbbaba] text-md h-96 text-center p-4 mt-4">
          <ul className="space-y-4">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#mission">Mission</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Header;
