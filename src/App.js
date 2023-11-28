import React, { useState } from 'react';
import './App.css'; // Import your CSS file for custom styles
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navbar from './bar/Navbar';
import Filter from './bar/Filterbar';
import Home from './pages/Home';
import NowPlaying from './pages/Nowplaying';
import Upcoming from './pages/Upcoming';
import Favourite from './pages/Favourite';
import Login from './pages/Login';
import Register from './pages/Register';
import MovieDetail from './pages/Moviedetail'; // ตัวอย่างชื่อไฟล์ MovieDetail




const App = () => {
  const [movies, setMovies] = useState([
    {
      movie_id: '1',
      movie_name: 'หนังที่ 1',
      movie_releasedate: 2023,
      movie_image: '/image/123.jpg',
      movie_plot: 'เนื้อเรื่องของหนังที่ 333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333',
      movie_trailer: 'https://www.youtube.com/watch?v=ตัวอย่าง',
      movie_genre: 'สยองขวัญ',
      movie_score: 8.5,
      movie_status: 'nowplaying',
    },
    {
      movie_id: '2',
      movie_name: 'หนังที่ 2',
      movie_releasedate: 2023,
      movie_image: '/image/123.jpg',
      movie_plot: 'เนื้อเรื่องของหนังที่ 1',
      movie_trailer: 'https://www.youtube.com/watch?v=ตัวอย่าง',
      movie_genre: 'สยองขวัญ',
      movie_score: 8.5,
      movie_status: 'nowplaying',
    },
    // เพิ่มข้อมูลหนังต่อไปตามต้องการ
  ]);
  
  return (
    <Router>
      <div>
        <Navbar />
        <Filter />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/nowplaying" element={<NowPlaying />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />



        </Routes>
      </div>
    </Router>
  );
};
export default App;