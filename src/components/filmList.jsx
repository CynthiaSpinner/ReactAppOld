import React from "react";

function FilmList({ films = [] }) {    
    return (
        <ul>
            {films.map(film => (
                <li key={film.id}>{film.title}</li>
            ))}
        </ul>
    );
}

export default FilmList;