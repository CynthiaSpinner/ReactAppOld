import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { WatchlistProvider, useWatchlist } from './WatchlistContext';

// Test component that uses the watchlist context
const TestComponent = () => {
  const { watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  
  const testFilm = { id: '1', title: 'Test Movie', director: 'Test Director', rt_score: '95' };

  return (
    <div>
      <div data-testid="watchlist-count">{watchlist.length}</div>
      <button 
        data-testid="add-button" 
        onClick={() => addToWatchlist(testFilm)}
      >
        Add Movie
      </button>
      <button 
        data-testid="remove-button" 
        onClick={() => removeFromWatchlist('1')}
      >
        Remove Movie
      </button>
      <div data-testid="is-in-watchlist">{isInWatchlist('1') ? 'true' : 'false'}</div>
    </div>
  );
};

describe('WatchlistContext', () => {
  test('provides initial empty watchlist', () => {
    render(
      <WatchlistProvider>
        <TestComponent />
      </WatchlistProvider>
    );

    expect(screen.getByTestId('watchlist-count')).toHaveTextContent('0');
    expect(screen.getByTestId('is-in-watchlist')).toHaveTextContent('false');
  });

  test('adds movie to watchlist', () => {
    render(
      <WatchlistProvider>
        <TestComponent />
      </WatchlistProvider>
    );

    fireEvent.click(screen.getByTestId('add-button'));
    
    expect(screen.getByTestId('watchlist-count')).toHaveTextContent('1');
    expect(screen.getByTestId('is-in-watchlist')).toHaveTextContent('true');
  });

  test('prevents duplicate movies in watchlist', () => {
    render(
      <WatchlistProvider>
        <TestComponent />
      </WatchlistProvider>
    );

    // Add movie twice
    fireEvent.click(screen.getByTestId('add-button'));
    fireEvent.click(screen.getByTestId('add-button'));
    
    expect(screen.getByTestId('watchlist-count')).toHaveTextContent('1');
  });

  test('removes movie from watchlist', () => {
    render(
      <WatchlistProvider>
        <TestComponent />
      </WatchlistProvider>
    );

    // Add movie first
    fireEvent.click(screen.getByTestId('add-button'));
    expect(screen.getByTestId('watchlist-count')).toHaveTextContent('1');

    // Remove movie
    fireEvent.click(screen.getByTestId('remove-button'));
    expect(screen.getByTestId('watchlist-count')).toHaveTextContent('0');
    expect(screen.getByTestId('is-in-watchlist')).toHaveTextContent('false');
  });
});
