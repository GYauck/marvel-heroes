const heroesUrl = `https://gateway.marvel.com:443/v1/public/characters?limit=90&apikey=${import.meta.env.VITE_PUBLIC_KEY}&ts=${import.meta.env.VITE_TS}&hash=${import.meta.env.VITE_HASH}`;
const comicsUrl = `https://gateway.marvel.com:443/v1/public/comics?apikey=${import.meta.env.VITE_PUBLIC_KEY}&ts=${import.meta.env.VITE_TS}&hash=${import.meta.env.VITE_HASH}`;

export const getRandomHeroes = async () => {
    try {
      const res = await fetch(heroesUrl);
      const data = await res.json();
      const heroesArr = await data.data.results;
      let randomHero = heroesArr[Math.floor(Math.random() * heroesArr.length)]
      for (let i = 0; randomHero.thumbnail.path == "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"; i++) {
        randomHero = heroesArr[Math.floor(Math.random() * heroesArr.length)]
      }
      return randomHero
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