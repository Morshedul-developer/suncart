"use client";

import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b bg-white relative">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <h1 className="font-bold text-[#6C4F00] text-3xl">
          SunCart
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link className="nav-link" href="/">Home</Link>
          </li>
          <li>
            <Link className="nav-link" href="/products">Products</Link>
          </li>
          <li>
            <Link className="nav-link" href="/my-profile">My Profile</Link>
          </li>
        </ul>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-4 py-2 rounded-xl bg-[#FBBF24] text-[#6C4F00] font-medium hover:bg-[#f5b70a] hover:shadow-md transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-white border-t">

          <div className="flex flex-col items-center gap-3">
            <Link onClick={() => setOpen(false)} href="/">Home</Link>
            <Link onClick={() => setOpen(false)} href="/products">Products</Link>
            <Link onClick={() => setOpen(false)} href="/my-profile">My Profile</Link>
          </div>

          <div className="flex flex-col gap-3 pt-3 border-t">
            <Link
              onClick={() => setOpen(false)}
              href="/login"
              className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 text-center"
            >
              Login
            </Link>

            <Link
              onClick={() => setOpen(false)}
              href="/register"
              className="px-4 py-2 rounded-xl bg-[#FBBF24] text-[#6C4F00] text-center"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;