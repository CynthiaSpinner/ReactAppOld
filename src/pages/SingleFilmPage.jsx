// imports react hooks and required components
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MainLayout, Loader } from '../components';
import { useWatchlist } from '../contexts/WatchlistContext';
import { Button, Alert, Card, Container, Row, Col, Badge } from 'react-bootstrap';

// single film page component that displays detailed film information
function SingleFilmPage() {
    // state for storing individual film data
    const [item, setItem] = useState({});
    // state for tracking loading status
    const [isLoaded, setIsLoaded] = useState(false);
    // gets film id from url parameters
    const { id } = useParams();
    // gets watchlist functions from context
    const { addToWatchlist, isInWatchlist } = useWatchlist();

    useEffect(() => {
        fetch(`https://studioghibliapi-d6fc8.web.app/films/${id}`)
            .then(response => response.json())
            .then(result => {
                setItem(result);
                setIsLoaded(true);
            })
            .catch(error => {
                console.error('Error fetching film:', error);
                setIsLoaded(true);
            });
    }, [id]);

    const handleAddToWatchlist = () => {
        addToWatchlist(item);
    };

    if(!isLoaded) {
        return (
            <MainLayout className="text-center">
                <Loader size={40} />
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <Container fluid className="px-0">
                {/* Back Button */}
                <div className="px-3 mb-4">
                    <Button 
                        as={Link} 
                        to="/films" 
                        variant="outline-primary"
                        className="btn-modern"
                    >
                        <i className="me-2">←</i>Back to Films
                    </Button>
                </div>

                {/* Film Details */}
                <div className="px-3">
                    <Card className="modern-card">
                        <Row className="g-0">
                            <Col md={5}>
                                <div 
                                    className="position-relative"
                                    style={{ 
                                        height: '550px', 
                                        background: 'linear-gradient(135deg, var(--react-blue-ultra-light) 0%, var(--neutral-100) 100%)',
                                        borderRadius: 'var(--radius-lg) 0 0 var(--radius-lg)',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <img
                                        src={`${item.image}`}
                                        alt={`${item.title} Poster`}
                                        style={{ 
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center top'
                                        }}
                                    />
                                    <Badge 
                                        className="position-absolute top-0 end-0 m-3 badge-modern"
                                        style={{ fontSize: '1.1rem', padding: '8px 16px' }}
                                    >
                                        {item.rt_score}%
                                    </Badge>
                                </div>
                            </Col>
                            <Col md={7}>
                                <Card.Body className="p-4 h-100 d-flex flex-column">
                                    <div className="mb-4">
                                        <h1 className="display-5 fw-bold mb-3" style={{ color: 'var(--tc-primary)' }}>
                                            {item.title}
                                        </h1>
                                        
                                        <div className="mb-3">
                                            <p className="h5 mb-2">
                                                <i className="me-2" style={{ color: 'var(--react-blue)' }}>🎬</i>
                                                Directed by <strong>{item.director}</strong>
                                            </p>
                                            <p className="h6 text-muted mb-2">
                                                <i className="me-2" style={{ color: 'var(--tc-accent)' }}>🎭</i>
                                                Produced by {item.producer}
                                            </p>
                                            <p className="h6 text-muted">
                                                <i className="me-2" style={{ color: 'var(--react-blue-dark)' }}>📅</i>
                                                Released in <strong>{item.release_date}</strong>
                                            </p>
                                        </div>

                                        <div className="mb-4">
                                            <p className="lead">
                                                This film garnered a <Badge className="badge-modern ms-1 me-1" style={{ fontSize: '1rem' }}>
                                                    {item.rt_score}%
                                                </Badge> aggregate score on{" "}
                                                <a
                                                    href="https://www.rottentomatoes.com/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-decoration-none"
                                                    style={{ color: 'var(--react-blue)' }}
                                                >
                                                    Rotten Tomatoes
                                                </a>
                                                .
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        {isInWatchlist(item.id) ? (
                                            <Alert variant="success" className="d-flex align-items-center">
                                                <i className="me-2">✅</i>
                                                <strong>Added to your watchlist!</strong>
                                            </Alert>
                                        ) : (
                                            <Button 
                                                variant="primary" 
                                                onClick={handleAddToWatchlist}
                                                className="btn-modern"
                                                size="lg"
                                            >
                                                <i className="me-2">➕</i>Add to Watchlist
                                            </Button>
                                        )}
                                    </div>

                                    <div className="mt-auto">
                                        <h3 className="h4 mb-3" style={{ color: 'var(--tc-primary)' }}>
                                            <i className="me-2">📖</i>Description
                                        </h3>
                                        <p className="lead" style={{ lineHeight: '1.7' }}>
                                            {item.description}
                                        </p>
                                    </div>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </Container>
        </MainLayout>
    );
}

export default SingleFilmPage;