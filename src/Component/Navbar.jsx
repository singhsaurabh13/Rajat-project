// import React from "react";
// import logo from '../assets/Logo.png';
// import { Link } from "react-router-dom";

// function Navbar() {
//   const menu = [
//     { name: "Epoxy Floor Coating", link: "/floorcoating" },
//     { name: "Epoxy Crack filler", link: "/crackfiller" },
//     { name: "Epoxy Granite Resin", link: "/granite" },
//     { name: "Epoxy Grouting Resin", link: "/grounting" },
//     { name: "Epoxy Italian Marble Resin", link: "/italian" },
//     { name: "Epoxy Lamination Resin", link: "/lamination" },
//     { name: "Epoxy Art Resin", link: "/artresign" },
//     { name: "Epoxy White Paste", link: "/whitepaste" },
//   ];

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex items-center ">
//         {/* Logo */}
//         <div className="text-white font-bold px-36 text-xl">
//           <img src={logo} alt="Logo" className="h-16 inline" />
//         </div>

//         {/* Links */}  
//         <ul className="flex space-x-6 text-white">
//           <li>
//             <a href="/" className="hover:text-gray-400">
//               Home
//             </a>
//           </li>

//           {/* Catalogue Dropdown */}
//           <li className="relative group">
//             <button className="hover:text-gray-400">Catalogue</button>
//             {/* Dropdown */}
//             <ul className="absolute hidden group-hover:block bg-gray-800 rounded-md shadow-lg w-48 z-50">
//               {menu.map((item, index) => (
//                 <li key={index}>
//                   <a
//                     href={item.link}
//                     className="block px-4 py-2 text-sm hover:bg-gray-600 text-white"
//                   >
//                     {item.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </li>

//           {/* About Us */}
//           <li>
//             <a href="/about" className="hover:text-gray-400">
//               About Us
//             </a>
//           </li>

//           {/* MB Advanced Material - No Dropdown */}
//           <li className="menu">
//             <a href="/advancedmaterial" className="hover:text-gray-400">
//                Advanced Material
//             </a>
        
            
//             <ul className="submenu pt-3 text-center ">
//               <li className="submenu-show bg-gray-800 cursor-pointer py-2">By Process
//                 <ul className="deepsubmenu h-[100px] bg-gray-800">
//                   <Link to='/coatingprocess' className="deepmenu-show bg-gray-800">Coating and Adhesive Material Process
//                     <ul className="deepmenu-show-menu bg-gray-800">
//                       <li className="py-2"><Link to='/brush'>Brush</Link></li>
//                       <li  className="py-2"><Link to='/spary'>Spary</Link></li>
//                       <li  className="py-2"><Link to='/roller'>Roller</Link></li>
                    
//                     </ul>
//                   </Link>
//                   <li className="deepmenu-show cursor-pointer py-2">Electrical Material Process
//                   <ul className="deepmenu-show-menu bg-gray-800">
//                       <li className="py-2"><Link to='/'>Automatic Pressure Gelation</Link></li>
//                       <li  className="py-2"><Link>Casting</Link></li>
//                       <li  className="py-2"><Link>Conventional vacuum casting</Link></li>
//                       <li  className="py-2"><Link>Encapsulation</Link></li>
//                       <li  className="py-2"><Link>Impregnation</Link></li>
//                       <li  className="py-2"><Link>Potting</Link></li>
//                       <li  className="py-2"><Link>Vacuum pressure impregnation</Link></li>
                    
//                     </ul>
//                   </li>

                 
                  
//                 </ul>
//               </li>
//               <li className="submenu-show bg-gray-800 pb-2 cursor-pointer py-2">By Product
//               <ul className="deepsubmenu bg-gray-800">
//                   <li className="py-2"> <Link to='/coatingmaterial'> Coating and Adhesive Material</Link></li>
//                   <ul className="deepmenu-show-menu bg-gray-800">
//                     <li className="py-2"><Link to='/'>Hello</Link></li>
//                     <li className="py-2"><Link to='/'>Hello</Link></li>
//                     <li className="py-2"><Link to='/'>Hello</Link></li>
//                   </ul>
//                   <li className="py-2"> <Link to='/electricmaterial'> Electrical Material</Link></li>
                
//                 </ul>
//               </li>
//               {/* <li className="submenu-show">Menu 3
//               <ul className="deepsubmenu">
//                   <li>deep menu 1</li>
//                   <li>deep menu 2</li>
//                   <li>deep menu 3</li>
//                 </ul>
//               </li> */}
//             </ul>
//           </li>

//           {/* Contact Us */}
//           <li>
//             <a href="/contact" className="hover:text-gray-400"> 
//               Contact Us
//             </a>
//           </li>

//           {/* Shop */}
//           <li>
//             <Link to="/shop" className="hover:text-gray-400">
//               Shop
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/Logo.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menu = [
    { name: "Home", link: "/" },
    { name: "Epoxy Floor Coating", link: "/floorcoating" },
    { name: "Epoxy Crack filler", link: "/crackfiller" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
    { name: "Shop", link: "/shop" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeMobileMenu}>
          <img src={logo} alt="Logo" className="h-10" />
        </Link>

        {/* Hamburger or Close Icon */}
        <button 
          className="text-white lg:hidden focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            // Close Icon
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          )}
        </button>

        {/* Menu Links */}
        <ul className={`lg:flex lg:items-center lg:space-x-6 text-white absolute lg:static z-50
          bg-gray-800 lg:bg-transparent w-full lg:w-auto transition-transform transform ${isMobileMenuOpen ? 'translate-y-0 top-[72px] left-0' : '-translate-y-full '} lg:translate-y-0 p-4 lg:p-0 space-y-4 lg:space-y-0`}>
          {menu.map((item, index) => (
            <li key={index}>
              <Link 
                to={item.link} 
                className="block px-4 py-2 hover:text-gray-400"
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
