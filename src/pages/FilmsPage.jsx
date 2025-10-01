import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { filterFilmsByDirector, getListOf, getFilmStats } from '../helpers/filmHelpers';
import { Form, Row, Col, Card, Badge, ListGroup, ListGroupItem } from 'react-bootstrap';
import { MainLayout, Loader } from '../components';

function FilmsPage() {
    const [searchDirector, setSearchDirector] = useState("");
    const [movieList, setMovieList] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    //moved data fetching here from filmlist.jsx
    useEffect(() => {
        const getFilms = () => {
            fetch('https://studioghibliapi-d6fc8.web.app/films')
            .then(response => response.json())
            .then(result => {
                setMovieList(result);
                setIsLoaded(true);
            })
            .catch(error => {
                console.error('Error fetching films:', error);
                setIsLoaded(true);             
            });
        };

        getFilms();
    }, []);

    if (!isLoaded) {
        return (
            <MainLayout className="text-center">
                <Loader size={40} />
            </MainLayout>
        );
    }

    //getting filtered films
    const filmsByDirector = filterFilmsByDirector(movieList, searchDirector);

    //getting unique directors
    const directors = getListOf(movieList, "director");

    const stats = getFilmStats(filmsByDirector);
    const { avg_score, total, latest } = stats;

    return (
        <MainLayout>
            <div className="">
                <h1>Studio Ghibli Films</h1>
            
                <Form>
                    <Form.Group className="mb-3" controlId="searchDirector">
                        <Form.Label>Filter by Director:</Form.Label>
                        <Form.Select
                            value={searchDirector}
                            onChange={(e) => setSearchDirector(e.target.value)}
                        >
                            <option value="">All Directors</option>
                            {directors.map(director => (
                                <option key={director} value={director}>
                                    {director}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Form>

                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <div className="d-flex justify-content-between">
                                    <small># Of Films</small>
                                    <Badge bg="dark">{total}</Badge>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <div className="d-flex justify-content-between">
                                    <small>Average Rating</small>
                                    <Badge bg="dark">{avg_score.toFixed(2)}</Badge>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <div className="d-flex justify-content-between">
                                   <small>Latest Film</small>
                                    <Badge bg="dark">{latest}</Badge>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                <ListGroup>
                    {filmsByDirector.map(film => (
                        <ListGroupItem key={film.id} action>
                            <Link to={`/film/${film.id}`} className="text-decoration-none">
                                {film.title}
                            </Link>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </div>
        </MainLayout>
    );
}

export default FilmsPage;