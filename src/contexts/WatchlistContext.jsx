import React, { createContext, useContext, useState } from 'react';

const WatchlistContext = createContext();

export function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (film) => {
    setWatchlist(prev => {
      if (prev.find(item => item.id === film.id)) {
        return prev;
      }
      return [...prev, film];
    });
  };

  const removeFromWatchlist = (filmId) => {
    setWatchlist(prev => prev.filter(item => item.id !== filmId));
  };

  const isInWatchlist = (filmId) => {
    return watchlist.some(item => item.id === filmId);
  };

  return (
    <WatchlistContext.Provider value={{
      watchlist,
      addToWatchlist,
      removeFromWatchlist,
      isInWatchlist
    }}>
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
}
