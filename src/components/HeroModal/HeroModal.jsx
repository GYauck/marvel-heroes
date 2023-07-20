import React, { useEffect, useState } from "react";

import {
  CloseButton,
  ComicContainer,
  ComicDescription,
  ComicImg,
  ComicName,
  ModalContainer,
  Overlay,
  TextContainer,
} from "./styledComponents";


const HeroModal = ({ heroId, closeModal }) => {
  const [comics, setComics] = useState([]);

  const getComics = async () => {
    try {
      const comicUrl = `https://gateway.marvel.com:443/v1/public/characters/${heroId}/comics?orderBy=onsaleDate&limit=10&apikey=${
        import.meta.env.VITE_PUBLIC_KEY
      }&ts=${import.meta.env.VITE_TS}&hash=${import.meta.env.VITE_HASH}`;
      const res = await fetch(comicUrl);
      const data = await res.json();
      setComics(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComics();
  }, []);

  return (
    <Overlay>
      <ModalContainer>
        {console.log(comics)}
        <CloseButton onClick={closeModal}>Close X</CloseButton>
        {comics?.map((comic, index) => (
          <ComicContainer key={index}>
            <ComicImg
              src={comic.thumbnail.path + "." + comic.thumbnail.extension}
              alt=""
            />
            <TextContainer>
              <ComicName>{comic.title}</ComicName>
              <ComicDescription>
                {comic.description
                  ? comic.description?.slice(0, 300) + "......"
                  : "No information was found"}
              </ComicDescription>
            </TextContainer>
          </ComicContainer>
        ))}
      </ModalContainer>
    </Overlay>
  );
};

export default HeroModal;
