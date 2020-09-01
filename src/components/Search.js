import React, { useState } from 'react';
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        //do something with input.... come back and fix
        history.push('/search');
    }

    return (
        <form className="search">
            <div className="search__input" aria-label="Busqueda">
                <SearchIcon className="search__inputIcon"/>
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon arial-label="Busqueda por voz"/>
            </div>
            {!hideButtons ? (
                <div className="search__buttons">
                    <Button type="submit" onClick={search} variant="outlined">Buscar con Google</Button>
                    <Button variant="outlined">Me siento con suerte</Button>
                </div>
            ):(
                <div className="search__buttons">
                    <Button className="search__buttonsHidden" type="submit" onClick={search} variant="outlined">Buscar con Google</Button>
                    <Button className="search__buttonsHidden" variant="outlined">Me siento con suerte</Button>
                </div>
            )}
        </form>
    )
}

export default Search;
