// imports react and required components
import React from 'react';
import { MainLayout } from '../components';
import { Card, Button, Badge, Container, Row, Col } from 'react-bootstrap';
import { useWatchlist } from '../contexts/WatchlistContext';
import { Link } from 'react-router-dom';

// home page component that displays user's watchlist
function HomePage() {
  // gets watchlist state and remove function from context
  const { watchlist, removeFromWatchlist } = useWatchlist();
  
  return (
    <MainLayout>
      <Container fluid className="px-0">
        {/* hero section with gradient background */}
        <div className="text-center mb-5 py-5" style={{
          background: 'var(--gradient-secondary)',
          color: 'white',
          borderRadius: 'var(--radius-lg)',
          margin: '0 15px'
        }}>
          <h1 className="display-4 fw-bold mb-3 slide-up">My Movie Watchlist</h1>
          <p className="lead mb-0 slide-up" style={{ animationDelay: '0.2s' }}>
            Keep track of your favorite Studio Ghibli films
          </p>
        </div>

        {/* main content area */}
        <div className="px-3">
          {/* renders empty state if no films in watchlist */}
          {watchlist.length === 0 ? (
            <Card className="modern-card text-center py-5">
              <Card.Body>
                <div className="mb-4">
                  <i className="display-1" style={{ color: 'var(--react-blue)' }}>🎬</i>
                </div>
                <h3 className="mb-3" style={{ color: 'var(--tc-primary)' }}>
                  Your watchlist is empty
                </h3>
                <p className="text-muted mb-4">
                  Start building your collection by adding movies from the Films page!
                </p>
                <Button 
                  as={Link} 
                  to="/films" 
                  className="btn-modern"
                  size="lg"
                >
                  <i className="me-2">🔍</i>Browse Films
                </Button>
              </Card.Body>
            </Card>
          ) : (
            <>
              {/* Stats Card */}
              <Card className="modern-card mb-4">
                <Card.Body className="text-center">
                  <Row className="align-items-center">
                    <Col md={8}>
                      <h4 className="mb-1" style={{ color: 'var(--tc-primary)' }}>
                        {watchlist.length} movie{watchlist.length !== 1 ? 's' : ''} in your watchlist
                      </h4>
                      <p className="text-muted mb-0">
                        Keep track of your favorite Studio Ghibli films
                      </p>
                    </Col>
                    <Col md={4} className="text-md-end">
                      <Button 
                        as={Link} 
                        to="/films" 
                        variant="outline-primary"
                        className="btn-modern"
                      >
                        <i className="me-2">➕</i>Add More
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              {/* Watchlist Items */}
              <Row className="g-4">
                {watchlist.map((film, index) => (
                  <Col key={film.id} xs={12} md={6} lg={4}>
                    <div 
                      className="fade-in" 
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Card className="modern-card h-100">
                        <div 
                          className="position-relative"
                          style={{ 
                            height: '240px', 
                            background: 'linear-gradient(135deg, var(--react-blue-ultra-light) 0%, var(--neutral-100) 100%)',
                            overflow: 'hidden',
                            borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0'
                          }}
                        >
                          <img 
                            src={film.image} 
                            alt={`${film.title} poster`}
                            style={{ 
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'center top'
                            }}
                          />
                          <Badge 
                            className="position-absolute top-0 end-0 m-2 badge-modern"
                            style={{ fontSize: '0.8rem' }}
                          >
                            {film.rt_score}%
                          </Badge>
                        </div>
                        <Card.Body className="d-flex flex-column">
                          <Card.Title className="h5 mb-2">
                            <Link 
                              to={`/film/${film.id}`} 
                              className="text-decoration-none"
                              style={{ color: 'var(--tc-primary)' }}
                            >
                              {film.title}
                            </Link>
                          </Card.Title>
                          <Card.Text className="text-muted mb-3 flex-grow-1">
                            <i className="me-1">🎬</i>Directed by {film.director}
                            <br />
                            <i className="me-1">📅</i>Released in {film.release_date}
                          </Card.Text>
                          <Button 
                            variant="outline-danger" 
                            size="sm"
                            onClick={() => removeFromWatchlist(film.id)}
                            className="btn-modern"
                            style={{ 
                              background: 'var(--gradient-accent)',
                              border: 'none',
                              color: 'white'
                            }}
                          >
                            <i className="me-1">🗑️</i>Remove
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                ))}
              </Row>
            </>
          )}
        </div>
      </Container>
    </MainLayout>
  );
}

export default HomePage;