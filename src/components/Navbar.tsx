import React from "react";
import Link from "next/link";
import Image from "next/image";
import brand_icon from "../../public/images/brand_icon-removebg-preview.png"

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link href="/Contact" className="mr-5 hover:text-white">Contact</Link>
            <Link href="/second" className="mr-5 hover:text-white">About</Link>
            <Link href="/third" className="mr-5 hover:text-white">Home</Link>
            <Link href="/fourth" className="hover:text-white">Products</Link>
          </nav>
          <Link href="/" className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
            <Image 
            src={brand_icon} 
            alt="brand_icon"
            width={80}
            height={100}/>
            <span className="ml-3 text-xl xl:block lg:hidden">WHY KAY MART</span>
          </Link>
          
        </div>
      </header>
    </div>
  );
};

export default Navbar;
