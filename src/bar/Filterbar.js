// Filter.js
import React from 'react';
import './Filterbar.css';
const Filter = () => {
    
  return (
    <div className="category-box">
        <div className="category-buttons">
            <button className="category-button">
                <a href="/">Popular</a>
            </button>
            <button className="category-button">
                <a href="/nowPlaying">Now Playing</a>
            </button>
            <button className="category-button">
                <a href="/upcoming">Upcoming</a>
            </button>
            <button className="category-button">
                <a href="/favourite">Favourite</a>
            </button>
        </div>
    </div>
  );
};

export default Filter;
