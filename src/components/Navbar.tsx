import React from "react";
import Link from "next/link";
import Image from "next/image";
import brand_icon from "../../public/images/brand_icon-removebg-preview.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="hidden md:flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link href="/" className="mr-5 hover:text-white">
              Home
            </Link>
            <Link href="/About" className="mr-5 hover:text-white">
              About
            </Link>
            
            <Link href="/Contact" className="mr-5 hover:text-white">
              Contact
            </Link>
            

            <Link href="/Product" className="hover:text-white">
              Product
            </Link>
          </nav>
          <Link
            href="/"
            className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <Image src={brand_icon} alt="brand_icon" width={80} height={100} />
            <span className="ml-3 text-xl xl:block lg:hidden">
              WHY KAY MART
            </span>
          </Link>
        </div>
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="white"
                className="ml-[22rem]"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                
                <SheetDescription>
                  <nav className="space-y-4 text-center text-[#F2AE66] text-lg`">
                    <Link href="/" className="block">
                      Home
                    </Link>
                    <Link href="/About" className="block">
                    About
                    </Link>
                    <Link href="/Contact" className="block">
                    Contact
                    </Link>
                    <Link href="/Product" className="block">
                    Product
                    </Link>
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

      </header>
    </div>
  );
};

export default Navbar;
