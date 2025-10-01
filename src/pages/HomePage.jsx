import React from 'react';
import { MainLayout } from '../components';
import { Card, ListGroup, ListGroupItem, Button, Badge } from 'react-bootstrap';
import { useWatchlist } from '../contexts/WatchlistContext';
import { Link } from 'react-router-dom';

function HomePage() {
  const { watchlist, removeFromWatchlist } = useWatchlist();
  
  return (
    <MainLayout>
      <Card>
        <Card.Header>
          <h1 className="mb-0">My Movie Watchlist</h1>
        </Card.Header>
        <Card.Body>
          <p className="text-muted">
            {watchlist.length === 0 
              ? "Your watchlist is empty. Add movies from the Films page!" 
              : `${watchlist.length} movie${watchlist.length !== 1 ? 's' : ''} in your watchlist`
            }
          </p>
          
          {watchlist.length > 0 && (
            <ListGroup>
              {watchlist.map((film) => (
                <ListGroupItem key={film.id} className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link to={`/film/${film.id}`} className="text-decoration-none">
                      <strong>{film.title}</strong>
                    </Link>
                    <br />
                    <small className="text-muted">Directed by {film.director}</small>
                  </div>
                  <div>
                    <Badge bg="secondary" className="me-2">
                      {film.rt_score}%
                    </Badge>
                    <Button 
                      variant="outline-danger" 
                      size="sm"
                      onClick={() => removeFromWatchlist(film.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Card.Body>
      </Card>
    </MainLayout>
  );
}

export default HomePage;