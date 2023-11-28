import React from 'react';
import './Upcoming.css'; // Import your CSS file for custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Upcoming = ({ }) => {
  return (
    <div>
      <div className="center-content">
        <h2>เร็วๆนี้</h2>
      </div>
      <Row className="movie-cover-grid">
        <Col sm={6} md={3}>
          <div className="movie-cover">
            <div className="movie-frame">
              <img src="./123.jpg" alt="Movie 1" />
              <h3 className="movie-name">ชื่อหนัง</h3>
              <p className="movie-release">2023</p>
              <p className="movie-genre">สยองขวัญ</p>
            </div>
          </div>
        </Col>
        <Col sm={6} md={3}>
          <div className="movie-cover">
            <div className="movie-frame">
              <img src="./123.jpg" alt="Movie 1" />
              <h3 className="movie-name">ชื่อหนัง</h3>
              <p className="movie-release">2023</p>
              <p className="movie-genre">สยองขวัญ</p>
            </div>
          </div>
        </Col>
        <Col sm={6} md={3}>
          <div className="movie-cover">
            <div className="movie-frame">
              <img src="./123.jpg" alt="Movie 1" />
              <h3 className="movie-name">ชื่อหนัง</h3>
              <p className="movie-release">2023</p>
              <p className="movie-genre">สยองขวัญ</p>
            </div>
          </div>
        </Col>
        <Col sm={6} md={3}>
          <div className="movie-cover">
            <div className="movie-frame">
              <img src="./123.jpg" alt="Movie 1" />
              <h3 className="movie-name">ชื่อหนัง</h3>
              <p className="movie-release">2023</p>
              <p className="movie-genre">สยองขวัญ</p>
            </div>
          </div>
        </Col>
        <Col sm={6} md={3}>
          <div className="movie-cover">
            <div className="movie-frame">
              <img src="./123.jpg" alt="Movie 1" />
              <h3 className="movie-name">ชื่อหนัง</h3>
              <p className="movie-release">2023</p>
              <p className="movie-genre">สยองขวัญ</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Upcoming;
