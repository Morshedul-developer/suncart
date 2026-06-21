"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "My Profile",
    link: "/my-profile",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleLogout= async() => {
    await authClient.signOut();
  }

  return (
    <nav className="border-b bg-white relative">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <h1 className="font-bold text-[#6C4F00] text-3xl">SunCart</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.link}
                className="relative text-gray-700 hover:text-[#6C4F00] transition duration-200
  after:content-[''] after:absolute after:left-0 after:-bottom-1
  after:h-0.5 after:w-0 after:bg-[#FBBF24]
  after:transition-all after:duration-300
  hover:after:w-full"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth Buttons (Desktop) */}
        {user ? (
          <div className="flex gap-2.5 items-center">
            <Avatar size="sm">
              <Avatar.Image
                alt="John Doe"
                src={user?.image}
                referrerPolicy="no-referrer"
                
              />
              <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>
            <Button onClick={handleLogout} size="sm" variant="danger">Logout</Button>
          </div>
        ) : (
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
        )}

        {/* Mobile Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-white border-t">
          <div className="flex flex-col items-center gap-3">
            <Link onClick={() => setOpen(false)} href="/">
              Home
            </Link>
            <Link onClick={() => setOpen(false)} href="/products">
              Products
            </Link>
            <Link onClick={() => setOpen(false)} href="/my-profile">
              My Profile
            </Link>
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
