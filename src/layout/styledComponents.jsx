import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const NavContainer = styled.div`
  display : flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 5vh;
  position: fixed;
  top: 0;
  background-color: white;
  
`
export const StyledLogo = styled.img`
  width: 100px;
  height: 40px;
  margin-left: 2vw;
`
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: black;
    margin-right: 2vw;
    width: 25px;
    height: 25px;
`