import erewhonlogo from '../assets/erewhonlogo.webp'
import { CgProfile } from "react-icons/cg";
import { CiSearch, CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="bg-[#212121] text-[#ffff] py-8 px-10">
      <div className="flex items-center justify-between w-full max-w-8xl mx-auto">
        
        {/* left section - links */}
        <div className="flex font-extralight text-[15px] space-x-6">
          <a href="#" className="hover:text-gray-300">Shop</a>
          <a href="#" className="hover:text-gray-300">About</a>
        </div>

        {/* middle section - logo */}
        <div className="flex justify-center">
          <img src={erewhonlogo} alt="EREWHON" className="w-[50%]" />
        </div>

        {/* right section - icons */}
        <div className="flex items-center space-x-4">
          <CgProfile className="w-5 h-5 cursor-pointer hover:opacity-80" />
          <CiSearch className="w-5 h-5 cursor-pointer hover:opacity-80" />
          <CiShoppingCart className="w-5 h-5 cursor-pointer hover:opacity-80" />
        </div>

      </div>
    </nav>
  )
}

export default Navbar;


