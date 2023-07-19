import { createContext, useState } from "react";

export const HeroesContext = createContext({});

export const HeroesContextProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([]);
  const [randomHero, setRandomHero] = useState({});

  return (
    <HeroesContext.Provider value={{ heroes, setHeroes, randomHero, setRandomHero }}>
      {children}
    </HeroesContext.Provider>
  );
};
