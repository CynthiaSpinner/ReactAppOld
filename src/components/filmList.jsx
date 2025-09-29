import React from "react";

class FilmList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    getFilms = () => {
        fetch('https://studioghibliapi-d6fc8.web.app/films')
            .then(response => response.json())
            .then(result => {
                this.setState({
                    list: result
                });
            })
            .catch(error => {
                console.error('Error fetching films:', error);
            });
    }

    componentDidMount() {
        this.getFilms();
    }

    render() {
        return (
            <ul>
                {this.state.list.map(film => (
                    <li key={film.id}>{film.title}</li>
                ))}
            </ul>
        );
    }
}

export default FilmList;