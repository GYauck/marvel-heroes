const heroesUrl = `https://gateway.marvel.com:443/v1/public/characters?limit=99&apikey=${import.meta.env.VITE_PUBLIC_KEY}&ts=${import.meta.env.VITE_TS}&hash=${import.meta.env.VITE_HASH}`;
const comicsUrl = `https://gateway.marvel.com:443/v1/public/comics?apikey=${import.meta.env.VITE_PUBLIC_KEY}&ts=${import.meta.env.VITE_TS}&hash=${import.meta.env.VITE_HASH}`;

export const getHeroes = async () => {
    try {
      const res = await fetch(heroesUrl);
      const data = await res.json();
      const heroesArr = await data.data.results;
      return heroesArr
    } catch (error) {
      console.log(error);
    }
  };
  export const getComics = async () => {
    try {
      const res = await fetch(comicsUrl);
      const data = await res.json();
      const comicsArr = await data.data.results;
      return comicsArr
    } catch (error) {
      console.log(error);
    }
  };