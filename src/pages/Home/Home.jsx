import React, { useEffect, useState } from "react";
import { getHeroes } from "../../../api/fetchData";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import {
  CardsContainer,
  HeroCard,
  HeroImg,
  HeroName,
  HeroStar,
} from "./styledComponents";

const Home = () => {
  const [heroes, setHeroes] = useState([]);

  const fetchHeroes = async () => {
    try {
      const data = await getHeroes();
      setHeroes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  return (
    <CardsContainer>
      {console.log(heroes)}
      {heroes
        .filter(
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
};

export default Home;
