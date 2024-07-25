// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { brainwave } from "../../assets"; // index file is automatically detected by vs code
// import { navigationn } from "../../constants";
// import Button from "../../components/Button";
// import MenuSvg from "../../assets/svg/MenuSvg";
// import { HamburgerMenu } from "../../components/design/Header";
// import { useEffect, useState } from "react";
// import { enablePageScroll, disablePageScroll } from "scroll-lock";

// const Header = () => {
//   // to reach any part of 2 page import useLocation from react-router-dom
//   const location = useLocation(); // Step 1 to use useLocation
//   const [currentPath, setCurrentPath] = useState(location.pathname);
//   const Navigate = useNavigate();

//   useEffect(() => {
//     setCurrentPath(location.pathname);
//   }, [location.pathname]);

//   const [openNavigation, toggleOpenNavigation] = useState(false);

//   const handleNavState = () => {
//     if (openNavigation) {
//       enablePageScroll();
//     } else {
//       disablePageScroll();
//     }
//     toggleOpenNavigation(!openNavigation);
//   };

//   const handleClick = (url) => {
//     toggleOpenNavigation(false);
//     Navigate(url);
//     if (openNavigation) {
//       enablePageScroll();
//     }
//   };

//   return (
//     <div className=" fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
//       <div className=" flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
//         <a>
//           <img src={brainwave} width={190} height={40} alt="Brainwave" />
//         </a>
//         {/* Navigator */}
//         <nav
//           className={`${
//             openNavigation ? "flex" : "hidden"
//           } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
//         >
//           <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
//             {navigationn.map((item) => (
//               <Link
//                 key={item.id}
//                 to={item.url}
//                 onClick={() => {
//                   handleClick(item.url);
//                 }}
//                 className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
//                   item.onlyMobile ? "lg:hidden" : ""
//                 } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
//                   item.url === currentPath
//                     ? "z-2 lg:text-n-1"
//                     : "lg:text-n-1/50"
//                 } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
//               >
//                 {item.title}
//               </Link>
//             ))}
//           </div>

//           <HamburgerMenu />
//         </nav>

//         {/* Sign up */}
//         <Link
//           to="#signup"
//           className=" button hidden text-n-1/50 transition-colors hover:text-n-1 lg:block "
//         >
//           New account
//         </Link>
//         <Button className="hidden lg:flex" href="#login">
//           sign in
//         </Button>

//         <Button
//           className="ml-auto lg:hidden"
//           px="px-3"
//           onClick={handleNavState}
//         >
//           <MenuSvg openNavigation={openNavigation} />
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Header;

import { brainwave } from "../../assets"; // index file is automatically detected by vs code
import Button from "../../components/Button";
import MenuSvg from "../../assets/svg/MenuSvg";
import { HamburgerMenu } from "../../components/design/Header";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState } from "react";
import { navigationn } from "../../constants";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigationn.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
