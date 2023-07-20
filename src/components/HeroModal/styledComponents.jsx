import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
`;

export const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: flex-start;
  z-index: 9999;
  width: 40vw;
  height: 70vh;
  background-color: #8c877a;
  border-radius: 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
`;

export const ComicContainer = styled.div`
    display: flex;
    justify-content: center;
    border: 1px black solid;
    width: 100%;
    height: fit-content;
    margin: 0;

`
export const ComicImg = styled.img`
    width: 25%;
    height: 100%;
`
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
`
export const ComicName = styled.h1`
    font-size: 20px;
    width: 30vw;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

`
export const ComicDescription = styled.p`
    font-size: 14px;
    width: 70%;
    font-weight: bold;
`
export const CloseButton = styled.button`
    display: flex;
    margin-left: 50%;
    border-radius: 8px;
`