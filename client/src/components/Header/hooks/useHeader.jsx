import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
export const useHeader = () => {
    const location = useLocation();

    const [navbarTransparent, setNavbarTransparent] = useState(false);

    const handleStylingOfNavbar = (navbarTransparent) => {
      return navbarTransparent ? "transparent" : "notTransparent";
    };

    const navBarTransparentClass = handleStylingOfNavbar(navbarTransparent);
  
    useEffect(() => {
      if (location.pathname !== "/home") {
        console.log("hi");
        setNavbarTransparent(false);
      } else {
        setNavbarTransparent(true);
      }
      console.log(location.pathname);
    }, [location.pathname]);

    return {
        navBarTransparentClass
    };
}