

"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import RequestServicePage from "./ServiceRequestPage";
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaGoogle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [openDialog, setOpenDialog] = useState(false); // State to manage dialog open/close

  const timeoutRef = useRef(null); // ✅ store timeout

  const handleMouseEnter = (menu) => {
    clearTimeout(timeoutRef.current); // ✅ clear previous timeout
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 200); // 200ms delay
  };

  const menuItems = {
    Services: [
      "It Services",
      "Fields Service",
      "Home Appliances",
      "Consultancy Services",
      "Other Services",
    ],

    About: [""],
    Carrier: [""],

    Contact: [""],
  };

  const pathMap = {
    About: "/about",
    Carrier: "/features",
    Contact: "/contact",
  };

  // Open the dialog
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  // Close the dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      {/* <header className="bg-[#FFFFF] text-[#000] text-[16px] shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="w-14 object-contain rounded-lg"
            />
          </Link>
          <nav className="md:hidden flex space-x-8 relative">
            <div
              className="relative"

            >
              <div
                className="relative"

              >
                <div
                  // href="#"
                  onClick={handleOpenDialog} // Open the dialog when clicked
                className="block cursor-pointer bg-[#2080db] p-2 text-white hover:bg-white hover:text-[#2080db] transition-colors border duration-200 rounded-md font-bold"
                  
                  // className="block cursor-pointer text-[#000] hover:text-[#2080db] transition-colors duration-200 rounded-md font-bold"
                >
                  Request for Service
                </div>
              </div>
            </div>
          </nav>
           
          <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <CloseIcon sx={{ color: "white" }} />
            ) : (
              <MenuIcon sx={{ color: "white" }} />
            )}
          </div>

         
          <nav className="hidden md:flex space-x-8 relative">
            {Object.entries(menuItems).map(([menu, items]) => {
              const isDirectLink = items.length === 1 && items[0] === "";
              return (
                <div
                  key={menu}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(menu)}
                  onMouseLeave={handleMouseLeave}
                >
                  {isDirectLink ? (
                    <Link
                      href={pathMap[menu] || "#"}
                         className="block text-[#000] text-[16px] font-bold relative transition-all duration-500 hover:text-[#2080db]
    after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-full after:scale-x-0 after:origin-center
    after:h-[2px] after:bg-[#2080db] after:transition-transform after:duration-500 hover:after:scale-x-100"
                      // className="block text-[#000] text-[16px] hover:text-[#2080db] transition-colors duration-200 rounded-md font-bold"
                    >
                      {menu}1
                    </Link>
                  ) : (
                    <>
                      <button className="block text-[#000] text-[16px] font-bold relative transition-all duration-500 hover:text-[#2080db]
    after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-full after:scale-x-0 after:origin-center
    after:h-[2px] after:bg-[#2080db] after:transition-transform after:duration-500 hover:after:scale-x-100">
                        {menu}
                      </button>

                      {openMenu === menu && (
                        <div className="absolute left-0 mt-2 w-52 bg-white text-black rounded-md shadow-lg z-20">
                          <ul className="py-2 grid grid-cols-1  gap-2">
                            {items.map((item, index) => (
                              <li key={index}>
                                <Link
                                  href="#"
                                  className="block px-4 py-1 text-[#000] text-[16px]  hover:bg-primary hover:rounded-md hover:text-white"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
            <div
              className="relative"

            >
              <div
                // href="#"
                onClick={handleOpenDialog} // Open the dialog when clicked
                className="block cursor-pointer bg-[#2080db] p-2 text-white hover:bg-white hover:text-[#2080db] transition-colors border duration-200 rounded-md font-bold"
              >
                Request for Service
              </div>
            </div>
          </nav>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-primary border-t text-white px-6 py-4 space-y-2">
            {Object.entries(menuItems).map(([menu, items]) => {
              const isDirectLink = items.length === 1 && items[0] === "";
              return (
                <div key={menu}>
                  {isDirectLink ? (
                    <Link
                      href={pathMap[menu] || "#"}
                      className="block font-semibold text-white hover:text-secondary text-base"
                    >
                      {menu}
                    </Link>
                  ) : (
                    <>
                      <p className="font-semibold text-white text-base mb-1">{menu}</p>
                      <ul className="pl-2 text-sm grid grid-cols-2 gap-2">
                        {items.map((item, index) => (
                          <li key={index}>
                            <Link href="#" className="block hover:text-secondary">
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </header> */}
      <header className="bg-[#FFFFFF] text-[#000] text-[16px] shadow-md sticky top-0 z-50">
        <div className="  px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="Neosys Logo"
              width={80}
              height={80}
              className="w-16 object-contain rounded-lg shadow-md"
            />
          </Link>

          {/* Center: Nav Menu */}
          <nav className="hidden md:flex flex-1 justify-center space-x-8 relative">
            {Object.entries(menuItems).map(([menu, items]) => {
              const isDirectLink = items.length === 1 && items[0] === "";
              return (
                <div
                  key={menu}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(menu)}
                  onMouseLeave={handleMouseLeave}
                >
                  {isDirectLink ? (
                    <Link
                      href={pathMap[menu] || "#"}
                      className="block text-[#000] text-[16px] font-bold relative transition-all duration-500 hover:text-[#2080db]
                  after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-full after:scale-x-0 after:origin-center
                  after:h-[2px] after:bg-[#2080db] after:transition-transform after:duration-500 hover:after:scale-x-100"
                    >
                      {menu}
                    </Link>
                  ) : (
                    <>
                      <button className="block text-[#000] text-[16px] font-bold relative transition-all duration-500 hover:text-[#2080db]
                  after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-full after:scale-x-0 after:origin-center
                  after:h-[2px] after:bg-[#2080db] after:transition-transform after:duration-500 hover:after:scale-x-100">
                        {menu}
                      </button>
                      {openMenu === menu && (
                        <div className="absolute left-0 mt-2 w-52 bg-white text-black rounded-md shadow-lg z-20">
                          <ul className="py-2 grid grid-cols-1 gap-2">
                            {items.map((item, index) => (
                              <li key={index}>
                                <Link
                                  href="#"
                                  className="block px-4 py-1 text-[#000] text-[16px] hover:bg-primary hover:rounded-md hover:text-white"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right: Request Button */}
          <div className="hidden md:block">
            <div
              onClick={handleOpenDialog}
              className="cursor-pointer bg-[#2080db] p-2 px-4 text-white hover:bg-white hover:text-[#2080db] border transition-colors duration-300 rounded-md font-bold"
            >
              Request for Service
            </div>
          </div>

          {/* Mobile Toggle Icon */}
          <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <CloseIcon sx={{ color: "black" }} />
            ) : (
              <MenuIcon sx={{ color: "black" }} />
            )}
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary border-t text-white px-6 py-4 space-y-2">
            {Object.entries(menuItems).map(([menu, items]) => {
              const isDirectLink = items.length === 1 && items[0] === "";
              return (
                <div key={menu}>
                  {isDirectLink ? (
                    <Link
                      href={pathMap[menu] || "#"}
                      className="block font-semibold text-white hover:text-secondary text-base"
                    >
                      {menu}
                    </Link>
                  ) : (
                    <>
                      <p className="font-semibold text-white text-base mb-1">{menu}</p>
                      <ul className="pl-2 text-sm grid grid-cols-2 gap-2">
                        {items.map((item, index) => (
                          <li key={index}>
                            <Link href="#" className="block hover:text-secondary">
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1 bg-gray-50  ">{children}</main>

      {/* Service Request Dialog */}
      <div className=" ">
        <Dialog open={openDialog} onClose={handleCloseDialog}>

          <DialogContent>
            <RequestServicePage />
          </DialogContent>
          <DialogActions>

          </DialogActions>
        </Dialog>
      </div>
      {/* Footer */}
      {/* <footer className="bg-primary text-gray-300 py-2 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between items-center text-center md:text-left">
          <div className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="Saas Techify Logo"
              width={80}
              height={80}
              className="w-16 object-contain rounded-lg shadow-md"
            />
          </div>
          <div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Saas Techify — All rights reserved.
            </p>
            <p className="text-xs mt-1">Empowering digital transformation.</p>
          </div>
        </div>
      </footer> */}
      <footer className="bg-[#fff] text-black py-10  ">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/Logo.png"
                alt="Neosys Logo"
                width={80}
                height={80}
                className="w-16 object-contain rounded-lg shadow-md"
              />
            </div>
            <div className="border border-black p-4 rounded-md mt-10 text-black  ">
              <p className="mb-2 font-semibold">National Hotline</p>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-black text-lg" />
                <span>+91 95086 63653</span>
              </div>
            </div>
          </div>

          {/* Office Addresses */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Offices</h2>
            <p className="mb-2">
              <strong>Corporate Office:</strong><br />
              Block B Sector 62,<br />Noida-201301
            </p>

            <p className="mb-2 font-semibold">Quick Response</p>
            <p className="mb-2">Service Team: <a href="mailto:services@neosysinfosystems.com" className="text-blue-600"> services@neosysinfosystems.com</a></p>

          </div>

          {/* New Services Column */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Our Services</h2>
            <ul className="space-y-2">
              <li><Link href="#">IT Services</Link></li>
              <li><Link href="#">Field Service</Link></li>
              <li><Link href="#">Home Appliances</Link></li>
              <li><Link href="#">Consultancy Services</Link></li>
              <li><Link href="#">Other Services</Link></li>
            </ul>
          </div>

          {/* Company Pages */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/career">Career</Link></li>
              <li><Link href="/contact">Contact</Link></li>

              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
          <div className="flex justify-center space-x-6 mb-4 text-xl">
            <FaYoutube className="hover:text-red-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-600 cursor-pointer" />
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-600 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
            <FaGoogle className="hover:text-green-500 cursor-pointer" />
          </div>
          <div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Saas Techify — All rights reserved.
            </p>
            <p className="text-xs mt-1">Empowering digital transformation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
