// MovieDetail.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Moviedetail.css'; // Import CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  console.log('Movies:', movies);
  const movie = movies.find((m) => m.movie_id === id);
  console.log('Movie:', movie);

  const [likedMovies, setLikedMovies] = useState([]); // เริ่มต้นด้วย array ที่ว่าง
  const handleLike = (movieId) => {
    if (likedMovies.includes(movieId)) {
      setLikedMovies(likedMovies.filter((id) => id !== movieId));
    } else {
      setLikedMovies([...likedMovies, movieId]);
    }
  };
  if (!movie) {
    return <div>ไม่พบหนังที่คุณค้นหา</div>;
  }

  


  return (
    
    <div className="movie-detail-container">
      <img className="movie-image" src={movie.movie_image} alt={movie.movie_name} />
      <div className="movie-detail-content">
        <p>ชื่อหนัง: {movie.movie_name}</p>
        <p>วันที่เข้าฉาย: {movie.movie_releasedate}</p>
        <p>เรื่องย่อ: {movie.movie_plot}</p>
        <p>ตัวอย่าง: {movie.movie_trailer}</p>
        <p>หมวดหมู่: {movie.movie_genre}</p>
        <p>เรตติ้ง: {movie.movie_score}</p>
        <p>สถานะ: {movie.movie_status}</p>
        <button
                  className={`like-button ${likedMovies.includes(movie.movie_id) ? 'liked' : ''}`}
                  onClick={() => handleLike(movie.movie_id)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
      </div>
    </div>
  );
};

export default MovieDetail;
