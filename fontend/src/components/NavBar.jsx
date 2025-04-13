import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import Images from "../components/Images";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-4 font-bold text-2xl">
        <Images src="logo.png" alt="minhdunglogo" w={32} h={32} />
        <span>LawNgan</span>
      </Link>
      {/* MENU Mobile*/}
      <div className="md:hidden">
        <div className="cursor-pointer text-4xl" onClick={() => setOpen(!open)}>
          {open ? <AiTwotoneCloseCircle /> : <FaBars />}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen flex flex-col gap-8 font-medium text-lg items-center justify-center absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/">Laws</Link>
          <Link to="/">Store</Link>
          <Link to="/">About</Link>

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
      {/* MENU DESTOP*/}
      {/* MENU DESKTOP */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        {/* Links */}
        <Link to="/">Home</Link>
        <Link to="/">Laws</Link>
        <Link to="/">Store</Link>
        <Link to="/">About</Link>

        {/* Auth */}
        <SignedOut>
          <Link to="/login">
            <button className="py-1 px-4 rounded-3xl bg-blue-700 text-white">
              Login 🫁
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
