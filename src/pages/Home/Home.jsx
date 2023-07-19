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

const Home = () => {
  const { randomHero, setRandomHero, heroes, setHeroes } =
    useContext(HeroesContext);

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
            <HeroCard key={index}>
              <HeroStar icon={faStar} />
              <HeroImg
                src={hero.thumbnail.path + "." + hero.thumbnail.extension}
                alt="Hero Image"
              />
              <HeroName>{hero.name}</HeroName>
            </HeroCard>
          ))}
      </CardsContainer>
    );
  }
  return (
    <CardsContainer>
      <HeroCard $randomHero={randomHero}>
        <HeroStar icon={faStar} />
        <HeroImg $randomHero={randomHero} src={randomHero.thumbnail? randomHero.thumbnail.path +"." +randomHero.thumbnail.extension : "asd"} alt="Hero Image"/>
        <HeroName>{randomHero.name ? randomHero.name : "qpqp"}</HeroName>
      </HeroCard>
    </CardsContainer>
  );
};

export default Home;
