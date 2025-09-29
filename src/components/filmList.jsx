import React, {useState, useEffect} from "react";

function FilmList(props){
    const[list, setList] = useState([]);

    const getFilms = () => {
        fetch('https://studioghibliapi-d6fc8.web.app/films')
            .then(response => response.json())
            .then(result => {
                setList(result);
            })
            .catch(error => {
                console.error('Error fetching films:', error);             
            });
    }

    useEffect(() => {
        getFilms();
    }, []);

    return (
        <ul>
            {list.map(film => (
                <li key={film.id}>{film.title}</li>
            ))}
        </ul>
    );
}




//     componentDidMount() {
//         this.getFilms();
//     }

//     render() {
//         return (
//             <ul>
//                 {this.state.list.map(film => (
//                     <li key={film.id}>{film.title}</li>
//                 ))}
//             </ul>
//         );
//     }
// }

export default FilmList;