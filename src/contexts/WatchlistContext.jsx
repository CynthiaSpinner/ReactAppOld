// imports react context api and hooks for global state management
import React, { createContext, useContext, useState } from 'react';

// creates a react context object for sharing watchlist state across components
// context solves the "prop drilling" problem by allowing data to be passed through
// the component tree without having to pass props down manually at every level
const WatchlistContext = createContext();

// provider component that wraps the app and provides watchlist state to all children
// this is a higher-order component that uses the context provider pattern
export function WatchlistProvider({ children }) {
  // react hook for managing component state - returns current state and setter function
  // useState hook replaces this.state and this.setState from class components
  const [watchlist, setWatchlist] = useState([]);

  // function to add a film to the watchlist with duplicate prevention
  // uses functional update pattern to ensure we have the latest state
  const addToWatchlist = (film) => {
    setWatchlist(prev => {
      // checks if film already exists in watchlist to prevent duplicates
      if (prev.find(item => item.id === film.id)) {
        return prev; // returns unchanged state if film already exists
      }
      // uses spread operator to create new array with existing films plus new film
      // this follows react's immutability principle for state updates
      return [...prev, film];
    });
  };

  // function to remove a film from the watchlist by filtering out the film id
  // uses array filter method to create new array without the specified film
  const removeFromWatchlist = (filmId) => {
    setWatchlist(prev => prev.filter(item => item.id !== filmId));
  };

  // function to check if a film is already in the watchlist
  // uses array some method to return boolean if film exists
  const isInWatchlist = (filmId) => {
    return watchlist.some(item => item.id === filmId);
  };

  // context provider component that makes state and functions available to children
  // the value prop contains all the data and functions that child components can access
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

// custom hook for accessing watchlist context in any component
// this is a react pattern that encapsulates context logic and provides error handling
export function useWatchlist() {
  // useContext hook accesses the nearest context provider value
  const context = useContext(WatchlistContext);
  // throws error if hook is used outside of provider - prevents runtime errors
  if (!context) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
}
