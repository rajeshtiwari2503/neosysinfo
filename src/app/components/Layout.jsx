 

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

// export default function Layout({ children }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openMenu, setOpenMenu] = useState(null);
//   let timeout;
//   const handleMouseEnter = (menu) => {
//     clearTimeout(timeout);
//     setOpenMenu(menu);
//   };
//   const handleMouseLeave = () => {
//     timeout = setTimeout(() => {
//       setOpenMenu(null);
//     }, 200); // 200ms delay
//   };

//   const menuItems = {
//     Services: [
//       "ERP",
//       "CRM",
//       "Automotive CRM Solution",
//       "Real Estate Management",
//       "Human Capital Management",
//       "Restaurant Billing Solution",
//     ],
//     Technologies: [
//       "MERN Stack",
//       "ASP.NET",
//       "Java",
//       "AWS",
//       "DevOps",
//       "Microservices",
//       "Python",
//       "Django",
//       "Node.js",
//       "Docker",
//       "Kubernetes",
//       "React",
//       "Angular",
//       "Vue.js",
//       "Cloud Computing",
//       "SQL/NoSQL Databases",
//       "GraphQL",
//       "TypeScript",
//       "Spring Boot",
//     ],
//     About: [""],
//     Features: [""],
//     Pricing: [""],
//     Contact: [""],
    
//   };

//   const pathMap = {
//     About: "/about",
//     Features: "/features",
//     Pricing: "/pricing",
//     Contact: "/contact",

//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Header */}
//       <header className="bg-primary text-white shadow-md sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
//           <Link href="/" className="flex items-center gap-2">
//             <Image
//               src="/Logo.png"
//               alt="Logo"
//               width={80}
//               height={80}
//               className="w-16 object-contain rounded-lg"
//             />
//           </Link>
//           <nav className="md:hidden flex space-x-8 relative">
//           <div
                 
//                  className="relative"
//                  onMouseEnter={() => handleMouseEnter( )}
//                  onMouseLeave={handleMouseLeave}
//                >
                 
//                    <Link
//                      href={ "/service" || "#"}
//                      className="block text-white hover:text-[#0082ff] transition-colors duration-200    rounded-md font-medium"
//                    >
//                     Request for Service
//                    </Link>
                   
                 
//                </div>
//           </nav>
//           {/* Mobile toggle */}
//           <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? (
//               <CloseIcon sx={{ color: "white" }} />
//             ) : (
//               <MenuIcon sx={{ color: "white" }} />
//             )}
//           </div>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex space-x-8 relative">
//             {Object.entries(menuItems).map(([menu, items]) => {
//               const isDirectLink = items.length === 1 && items[0] === "";
//               return (
//                 <div
//                   key={menu}
//                   className="relative"
//                   onMouseEnter={() => handleMouseEnter(menu)}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   {isDirectLink ? (
//                     <Link
//                       href={pathMap[menu] || "#"}
//                       className="block text-white hover:text-[#0082ff] transition-colors duration-200    rounded-md font-medium"
//                     >
//                       {menu}
//                     </Link>
                    
//                   ) : (
//                     <>
//                       <button className="hover:text-[#0082ff]  transition-colors duration-200  font-medium">
//                         {menu}
//                       </button>

//                       {openMenu === menu && (
//                         <div className="absolute left-0 mt-2 w-72 bg-white text-black rounded-md shadow-lg z-20">
//                           <ul className="py-2 grid grid-cols-1 md:grid-cols-2   gap-2">
//                             {items.map((item, index) => (
//                               <li key={index} >
//                                 <Link
//                                   href="#"
//                                   className="block px-4 py-1 text-sm hover:bg-primary hover:rounded-md hover:text-white"
//                                 >
//                                   {item}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       )}
//                     </>
//                   )}
//                 </div>
//               );
//             })}
//              <div
                 
//                   className="relative"
//                   onMouseEnter={() => handleMouseEnter( )}
//                   onMouseLeave={handleMouseLeave}
//                 >
                  
//                     <Link
//                       href={ "/service" || "#"}
//                       className="block text-white hover:text-[#0082ff] transition-colors duration-200    rounded-md font-medium"
//                     >
//                      Request for Service
//                     </Link>
                    
                  
//                 </div>
//           </nav>
        
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden bg-primary border-t text-white px-6 py-4 space-y-2">
//             {Object.entries(menuItems).map(([menu, items]) => {
//               const isDirectLink = items.length === 1 && items[0] === "";
//               return (
//                 <div key={menu}>
//                   {isDirectLink ? (
//                     <Link
//                       href={pathMap[menu] || "#"}
//                       className="block font-semibold text-white hover:text-secondary text-base  "
//                     >
//                       {menu}
//                     </Link>
//                   ) : (
//                     <>
//                       <p className="font-semibold text-white text-base mb-1">{menu}</p>
//                       <ul className="pl-2 text-sm grid grid-cols-2 gap-2">
//                         {items.map((item, index) => (
//                           <li key={index}>
//                             <Link href="#" className="block hover:text-secondary">
//                               {item}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         )}

//       </header>

//       {/* Main */}
//       <main className="flex-1 bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
//         {children}
//       </main>

//       {/* Footer */}
//       <footer className="bg-primary text-gray-300 py-2 mt-auto">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between items-center text-center md:text-left">
//           <div className="flex items-center gap-2  ">
//             <Image
//               src="/Logo.png"
//               alt="Saas Techify Logo"
//               width={80}
//               height={80}
//               className="w-16 object-contain rounded-lg shadow-md"
//             />
//           </div>
//           <div>
//             <p className="text-sm">
//               &copy; {new Date().getFullYear()} Saas Techify — All rights reserved.
//             </p>
//             <p className="text-xs mt-1">Empowering digital transformation.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

 "use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import RequestServicePage from "./ServiceRequestPage";

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
      "ERP",
      "CRM",
      "Automotive CRM Solution",
      "Real Estate Management",
      "Human Capital Management",
      "Restaurant Billing Solution",
    ],
    Technologies: [
      "MERN Stack",
      "ASP.NET",
      "Java",
      "AWS",
      "DevOps",
      "Microservices",
      "Python",
      "Django",
      "Node.js",
      "Docker",
      "Kubernetes",
      "React",
      "Angular",
      "Vue.js",
      "Cloud Computing",
      "SQL/NoSQL Databases",
      "GraphQL",
      "TypeScript",
      "Spring Boot",
    ],
    About: [""],
    Features: [""],
    Pricing: [""],
    Contact: [""],
  };

  const pathMap = {
    About: "/about",
    Features: "/features",
    Pricing: "/pricing",
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
      <header className="bg-primary text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="w-16 object-contain rounded-lg"
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
                className="block cursor-pointer text-white hover:text-[#0082ff] transition-colors duration-200 rounded-md font-medium"
              >
                Request for Service
              </div>
            </div>
            </div>
          </nav>
          {/* Mobile toggle */}
          <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <CloseIcon sx={{ color: "white" }} />
            ) : (
              <MenuIcon sx={{ color: "white" }} />
            )}
          </div>

          {/* Desktop Nav */}
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
                      className="block text-white hover:text-[#0082ff] transition-colors duration-200 rounded-md font-medium"
                    >
                      {menu}
                    </Link>
                  ) : (
                    <>
                      <button className="hover:text-[#0082ff] transition-colors duration-200 font-medium">
                        {menu}
                      </button>

                      {openMenu === menu && (
                        <div className="absolute left-0 mt-2 w-72 bg-white text-black rounded-md shadow-lg z-20">
                          <ul className="py-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                            {items.map((item, index) => (
                              <li key={index}>
                                <Link
                                  href="#"
                                  className="block px-4 py-1 text-sm hover:bg-primary hover:rounded-md hover:text-white"
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
                className="block cursor-pointer text-white hover:text-[#0082ff] transition-colors duration-200 rounded-md font-medium"
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
      </header>

      {/* Main */}
      <main className="flex-1 bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">{children}</main>

      {/* Service Request Dialog */}
      <div className=" ">
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        
        <DialogContent>
           <RequestServicePage  />
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </Dialog>
      </div>
      {/* Footer */}
      <footer className="bg-primary text-gray-300 py-2 mt-auto">
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
      </footer>
    </div>
  );
}
