import React from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import marvelLogo from "../assets/marvel.png";

import {
  NavContainer,
  StyledFontAwesomeIcon,
  StyledLogo,
} from "./styledComponents";

const Navbar = () => {
  return (
    <NavContainer>
      <StyledLogo src={marvelLogo} alt="Marvel Logo" />
      <StyledFontAwesomeIcon icon={faStar} />
    </NavContainer>
  );
};

export default Navbar;
