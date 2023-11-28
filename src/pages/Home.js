import React, { useState } from 'react';
import './Home.css'; // Import your CSS file for custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Home = ({ }) => {
  const [likedMovies, setLikedMovies] = useState([]); // เริ่มต้นด้วย array ที่ว่าง

  // สมมติว่าคุณมี state movies ที่เก็บข้อมูลของหนัง
 

  const handleLike = (movieId) => {
    if (likedMovies.includes(movieId)) {
      setLikedMovies(likedMovies.filter((id) => id !== movieId));
    } else {
      setLikedMovies([...likedMovies, movieId]);
    }
  };
  const movies = [
    { movie_id: '1', movie_name: 'หนังที่ 1', movie_image: './image/123.jpg', movie_releasedate: 2023, movie_genre: 'สยองขวัญ' },
    { movie_id: '2', movie_name: 'หนังที่ 2', movie_image: './image/123.jpg', movie_releasedate: 2023, movie_genre: 'แอ็คชัน' },
    { movie_id: '3', movie_name: 'หนังที่ 3', movie_image: './image/123.jpg', movie_releasedate: 2023, movie_genre: 'สยองขวัญ' },
    { movie_id: '4', movie_name: 'หนังที่ 4', movie_image: './image/123.jpg', movie_releasedate: 2023, movie_genre: 'แอ็คชัน' },
    { movie_id: '5', movie_name: 'หนังที่ 5', movie_image: './image/123.jpg', movie_releasedate: 2023, movie_genre: 'สยองขวัญ' },
    { movie_id: '6', movie_name: 'หนังที่ 6', movie_image: './image/123.jpg', movie_releasedate: 2023, movie_genre: 'แอ็คชัน' },
    // เพิ่มหนังต่อไปตามต้องการ
  ];

  return (
    <div>
      <div className="center-content">
        <h2>แนะนำ</h2>
      </div>
      <Row className="movie-cover-grid">
        {movies.map((movie) => (
          <Col key={movie.movie_id} sm={6} md={3}>
            <div className="movie-cover">
              <div className="movie-frame">
                <Link to={`/movie/${movie.movie_id}`}>
                  <img className="movie-image" src={movie.movie_image} alt={movie.movie_name} />
                </Link>
                <h3 className="movie-name">{movie.movie_name}</h3>
                <p className="movie-release">{movie.movie_releasedate}</p>
                <p className="movie-genre">{movie.movie_genre}</p>
                <div className="like-button-container">
                  <button
                    className={`like-button ${likedMovies.includes(movie.movie_id) ? 'liked' : ''}`}
                    onClick={() => handleLike(movie.movie_id)}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;