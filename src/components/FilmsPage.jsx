import React, { useState, useEffect } from 'react';
import FilmList from './filmList';
import { filterFilmsByDirector, getListOf } from '../helpers/filmHelpers';

function FilmsPage() {
    const[searchDirector, setSearchDirector] = useState("");
    const [movieList, setMovieList] = useState("");

    //moved data fetching here from filmlist.jsx
    useEffect(() => {
        const getFIlms = () => {
            fetch('https://studioghibliapi-d6fc8.web.app/films')
            .then(response => response.json())
            .then(result => {
                setMovieList(result);
            })
            .catch(error => {
                console.error('Error fetching films:', error);             
            });
        };

        getFIlms();
    }, []);

    //getting filtered films
    const filmsByDirector = filterFilmsByDirector(movieList, searchDirector);

    //getting unique directors
    const directors = getListOf(movieList, "director");

    return (
        <div>
            <h1>Studio Ghibli Films</h1>
            
            <form>
                <div className="formGroup">
                    <label>Filter by Director:</label>
                    <select
                        value={searchDirector}
                        onChange={(e) => setSearchDirector(e.target.value)}
                    >
                        <option value="">All Directors</option>
                        {directors.map(director => (
                            <option key={director} value={director}>
                                {director}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
            <FilmList films={filmsByDirector} />
        </div>
    );
}

export default FilmsPage;