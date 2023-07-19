import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 100vw;
    /* height: 90vh; */
    margin-top: 10vh;
`
export const HeroCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${props => props.$randomHero ? "500px" : "350px"};
    height: ${props => props.$randomHero ? "500px" : "350px"};
    border-radius: 10px;
    background-color: #5c3920;
`
export const HeroStar = styled(FontAwesomeIcon)`
    right: 0;
    margin-left: 200px;
`

export const HeroImg = styled.img`
width: ${props => props.$randomHero ? "350px" : "200px"};
height: ${props => props.$randomHero ? "350px" : "200px"};
border-radius: 8px;
`
export const HeroName = styled.h1`
    font-size: 16px;
`