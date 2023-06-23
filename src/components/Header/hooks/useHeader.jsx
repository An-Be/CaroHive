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
        setNavbarTransparent(false);
      } else {
        setNavbarTransparent(true);
      }
    }, [location.pathname]);

    return {
        navBarTransparentClass
    };
}