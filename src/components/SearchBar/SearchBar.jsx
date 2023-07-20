import React, { useContext, useState } from 'react'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { StyledMagnifyingGlass } from './styledComponents';
import { HeroesContext } from '../../context/heroesContext';
import { InputField } from './styledComponents';
import { StyledForm } from './styledComponents';
import { Button } from './styledComponents';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const { heroes, setHeroes } = useContext(HeroesContext);
    const [query, setQuery] = useState("");
    const navigate = useNavigate()

    const searchData = async (e) => {
        e.preventDefault()
        try {
            const heroesUrl = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&limit=90&apikey=${import.meta.env.VITE_PUBLIC_KEY}&ts=${import.meta.env.VITE_TS}&hash=${import.meta.env.VITE_HASH}`;
            const res = await fetch(heroesUrl)
            const data = await res.json()
            setHeroes(data.data.results)
            setQuery("")
        } catch (error) {
            console.log(error)
        }
    };

    const changeQuery = (e) => {
        setQuery(e.target.value)
    }

    const clickHandler = () => {
        navigate("/");
      };

  return (
    
    <StyledForm onSubmit={searchData}>
        <StyledMagnifyingGlass icon={faMagnifyingGlass}/>
        <InputField type="search" name="query" value={query} onChange={changeQuery} placeholder="Type Here..." />
        <Button onClick={clickHandler}> Search</Button>
    </StyledForm>
  )
}

export default SearchBar