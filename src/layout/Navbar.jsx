import React from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import marvelLogo from "../assets/marvel.png";

import {
  LogoContainer,
  NavContainer,
  StyledFontAwesomeIcon,
  StyledLogo,
} from "./styledComponents";
import SearchBar from "../components/SearchBar/SearchBar";

const Navbar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <StyledLogo src={marvelLogo} alt="Marvel Logo" />
        <SearchBar/>
      </LogoContainer>
      <StyledFontAwesomeIcon icon={faStar} />
    </NavContainer>
  );
};

export default Navbar;
