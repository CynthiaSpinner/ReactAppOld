import React, { useState, useEffect } from 'react';
import { filterFilmsByDirector, getListOf, getFilmStats } from '../helpers/filmHelpers';
import { Form, Row, Col, Card, Container, Alert } from 'react-bootstrap';
import { MainLayout, Loader, FilmCard } from '../components';

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
            <Container fluid className="px-0">
                {/* Hero Section */}
                <div className="text-center mb-5 py-5" style={{
                    background: 'var(--gradient-primary)',
                    color: 'white',
                    borderRadius: 'var(--radius-lg)',
                    margin: '0 15px'
                }}>
                    <h1 className="display-4 fw-bold mb-3 slide-up">Studio Ghibli Films</h1>
                    <p className="lead mb-0 slide-up" style={{ animationDelay: '0.2s' }}>
                        Discover the magical world of Studio Ghibli
                    </p>
                </div>

                {/* Filter Section */}
                <div className="mb-4 px-3">
                    <Card className="modern-card">
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="searchDirector">
                                    <Form.Label className="fw-semibold mb-3">
                                        <i className="me-2">🎬</i>Filter by Director
                                    </Form.Label>
                                    <Form.Select
                                        value={searchDirector}
                                        onChange={(e) => setSearchDirector(e.target.value)}
                                        className="form-select-lg"
                                        style={{ borderColor: 'var(--react-blue)' }}
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
                        </Card.Body>
                    </Card>
                </div>

                {/* Stats Section */}
                <div className="mb-5 px-3">
                    <Row className="g-3">
                        <Col md={4}>
                            <Card className="modern-card text-center h-100">
                                <Card.Body className="d-flex flex-column justify-content-center">
                                    <div className="mb-2">
                                        <i className="display-6" style={{ color: 'var(--react-blue)' }}>🎬</i>
                                    </div>
                                    <h3 className="fw-bold mb-1" style={{ color: 'var(--tc-primary)' }}>{total}</h3>
                                    <small className="text-muted">Total Films</small>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="modern-card text-center h-100">
                                <Card.Body className="d-flex flex-column justify-content-center">
                                    <div className="mb-2">
                                        <i className="display-6" style={{ color: 'var(--tc-accent)' }}>⭐</i>
                                    </div>
                                    <h3 className="fw-bold mb-1" style={{ color: 'var(--tc-primary)' }}>{avg_score.toFixed(1)}</h3>
                                    <small className="text-muted">Average Rating</small>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="modern-card text-center h-100">
                                <Card.Body className="d-flex flex-column justify-content-center">
                                    <div className="mb-2">
                                        <i className="display-6" style={{ color: 'var(--react-blue-dark)' }}>📅</i>
                                    </div>
                                    <h3 className="fw-bold mb-1" style={{ color: 'var(--tc-primary)' }}>{latest}</h3>
                                    <small className="text-muted">Latest Release</small>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

                {/* Films Grid */}
                <div className="px-3">
                    {filmsByDirector.length === 0 ? (
                        <Alert variant="info" className="text-center">
                            <i className="display-6 mb-3 d-block">🔍</i>
                            <h4>No films found</h4>
                            <p className="mb-0">Try selecting a different director or check back later.</p>
                        </Alert>
                    ) : (
                        <Row className="g-4">
                            {filmsByDirector.map((film, index) => (
                                <Col key={film.id} xs={12} sm={6} md={4} lg={3}>
                                    <div 
                                        className="fade-in" 
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <FilmCard 
                                            film={film} 
                                            showAddButton={true}
                                            variant={index < 3 ? 'featured' : 'default'}
                                        />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    )}
                </div>
            </Container>
        </MainLayout>
    );
}

export default FilmsPage;