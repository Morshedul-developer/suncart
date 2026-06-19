import { Button } from "@heroui/react";
import Link from "next/link";

const NavBar = () => {
  return (
<nav className="border-b">
  <div className="max-w-7xl mx-auto flex h-16 items-center justify-between">
    <h1 className="font-bold">SunCart</h1>

    <ul className="flex gap-6">
      <li><Link href={'/'}>Home</Link></li>
      <li>Products</li>
      <li>About</li>
    </ul>
    <div>
        <ul className="flex items-center gap-4">
            <li><Button variant="outline">Login</Button></li>
            <li><Button className='bg-[#FBBF24] rounded-2xl text-[#6C4F00]'>Register</Button></li>
        </ul>
    </div>
  </div>
</nav>
  );
};

export default NavBar;
