import React, { useContext, useEffect, useState } from "react";
import { getRandomHeroes } from "../../../api/fetchData";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { HeroesContext } from "../../context/heroesContext";

import {
  CardsContainer,
  HeroCard,
  HeroImg,
  HeroName,
  HeroStar,
} from "./styledComponents";
import HeroModal from "../../components/HeroModal/HeroModal";

const Home = () => {
  const { randomHero, setRandomHero, heroes, setHeroes } =
    useContext(HeroesContext);
  const [heroId, setHeroId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (id) => {
    setHeroId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchHeroes = async () => {
    try {
      const data = await getRandomHeroes();
      setRandomHero(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  if (heroes?.length > 0) {
    return (
      <CardsContainer>
        {heroes
          ?.filter(
            (hero) =>
              hero.thumbnail.path !==
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
          )
          .map((hero, index) => (
            <HeroCard key={index} >
              <HeroStar icon={faStar} />
              <HeroImg
                onClick={() => openModal(hero.id)}
                src={hero.thumbnail.path + "." + hero.thumbnail.extension}
                alt="Hero Image"
              />
              <HeroName>{hero.name}</HeroName>
            </HeroCard>
          ))}
        {isModalOpen && <HeroModal heroId={heroId} closeModal={closeModal} />}
      </CardsContainer>
    );
  }
  return (
    
    <CardsContainer>
      {console.log(randomHero)}
      <HeroCard $randomHero={randomHero}>
        <HeroStar icon={faStar} />
        <HeroImg
          onClick={() => openModal(randomHero.id)}
          $randomHero={randomHero}
          src={
            randomHero.thumbnail
              ? randomHero.thumbnail.path + "." + randomHero.thumbnail.extension
              : "asd"
          }
          alt="Hero Image"
        />
        <HeroName>{randomHero.name ? randomHero.name : "qpqp"}</HeroName>
      </HeroCard>
      {isModalOpen && <HeroModal heroId={heroId} closeModal={closeModal} />}
    </CardsContainer>
  );
};

export default Home;
