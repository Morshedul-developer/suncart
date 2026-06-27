"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const links = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
  { name: "My Profile", link: "/my-profile" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const navLinks = user
    ? links
    : links.filter((link) => link.name !== "My Profile");

  const handleLogout = async () => {
    await authClient.signOut();
    setOpen(false);
    router.push("/");
  };

  return (
    <nav className="relative border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold text-[#6C4F00]"
        >
          SunCart
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.link}>
              <Link
                href={link.link}
                className={`relative transition duration-200
                  after:absolute after:-bottom-1 after:left-0 after:h-0.5
                  after:bg-[#FBBF24] after:transition-all after:duration-300
                  after:content-['']
                  ${
                    pathname === link.link
                      ? "text-[#6C4F00] after:w-full"
                      : "text-gray-700 hover:text-[#6C4F00] after:w-0 hover:after:w-full"
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Auth */}
        {user ? (
          <div className="hidden items-center gap-3 md:flex">
            <Avatar size="sm">
              <Avatar.Image
                src={user.image}
                alt={user.name}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>
                {user.name?.charAt(0)}
              </Avatar.Fallback>
            </Avatar>

            <Button
              variant="danger"
              size="sm"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/login"
              className="rounded-xl border border-gray-300 px-4 py-2 text-gray-700 transition hover:bg-gray-100"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-[#FBBF24] px-4 py-2 font-medium text-[#6C4F00] transition hover:bg-[#f5b70a]"
            >
              Register
            </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="space-y-4 border-t bg-white px-4 pb-4 md:hidden">
          {/* Mobile Links */}
          <div className="flex flex-col items-center gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.link}
                href={link.link}
                onClick={() => setOpen(false)}
                className={
                  pathname === link.link
                    ? "font-semibold text-[#6C4F00]"
                    : "text-gray-700"
                }
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Auth */}
          <div className="border-t pt-3">
            {user ? (
              <div className="flex items-center justify-center gap-3">
                <Avatar size="sm">
                  <Avatar.Image
                    src={user.image}
                    alt={user.name}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>
                    {user.name?.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>

                <Button
                  variant="danger"
                  size="sm"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-gray-300 px-4 py-2 text-center"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-[#FBBF24] px-4 py-2 text-center text-[#6C4F00]"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;