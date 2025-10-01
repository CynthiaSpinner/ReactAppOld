// imports react and required components
import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useWatchlist } from '../../../contexts/WatchlistContext';
import '../../../styles/filmCard.css';

// film card component that displays individual film information
function FilmCard({ film, showAddButton = false, variant = 'default' }) {
  // gets watchlist functions from context
  const { addToWatchlist, isInWatchlist } = useWatchlist();
  
  // handles adding film to watchlist with event prevention
  const handleAddToWatchlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToWatchlist(film);
  };

  // checks if film is already in watchlist
  const isInWatchlistFlag = isInWatchlist(film.id);

  return (
    <Card className={`film-card film-card--${variant} modern-card`} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="film-card__image-container">
        <img 
          src={film.image} 
          alt={`${film.title} poster`}
          className="film-card__image"
        />
        <div className="film-card__overlay">
          <Badge className="film-card__score badge-modern">
            {film.rt_score}%
          </Badge>
          {showAddButton && (
            <Button
              variant={isInWatchlistFlag ? "success" : "primary"}
              size="sm"
              className="film-card__add-btn btn-modern"
              onClick={handleAddToWatchlist}
              disabled={isInWatchlistFlag}
            >
              {isInWatchlistFlag ? '✓ Added' : '+ Add'}
            </Button>
          )}
        </div>
      </div>
      
      <Card.Body className="film-card__body" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
        <Card.Title className="film-card__title">
          <Link to={`/film/${film.id}`} className="film-card__link">
            {film.title}
          </Link>
        </Card.Title>
        
        <Card.Text className="film-card__details">
          <div className="film-card__director">
            <i className="film-card__icon">🎬</i>
            {film.director}
          </div>
          <div className="film-card__year">
            <i className="film-card__icon">📅</i>
            {film.release_date}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FilmCard;
