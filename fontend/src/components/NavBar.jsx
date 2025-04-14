import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import Images from "../components/Images";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Button } from "antd";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  

  return (
    <div className="relative w-full h-16 md:h-20 flex items-center justify-between px-4">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-4 font-bold text-2xl">
        <Images src="logo.png" alt="minhdunglogo" w={32} h={32} />
        <span>
          Luat<span className="text-orange-400 italic font-serif">Tn</span>
        </span>
      </Link>

      {/* MENU Mobile */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl z-50 relative"
          onClick={() => setOpen(!open)}
        >
          {open ? <AiTwotoneCloseCircle /> : <FaBars />}
        </div>

        {/* MOBILE LINK LIST */}
        <div
          className={`fixed top-0 right-0 w-full h-screen bg-white flex flex-col gap-8 font-medium text-lg items-center justify-center transition-all duration-300 z-40 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Link to="/">Trang Chủ</Link>
          <Link to="/">Tra Cứu</Link>
          <Link to="/store">Cửa Hàng</Link>
          <Link to="/contact">Tư Vấn</Link>

          <SignedOut>
            <Link to="/login">
              <button className="py-3 px-4 rounded-3xl bg-blue-700 text-white">
                Login 🫁
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {/* MENU DESKTOP */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Trang Chủ</Link>
        <Link to="/">Tra Cứu</Link>
        <Link to="/store">Cửa Hàng</Link>
        <Link to="/contact">Tư Vấn</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-1 px-4 rounded-3xl bg-blue-700 text-white">
              Đăng Nhập 🫁
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default NavBar;
