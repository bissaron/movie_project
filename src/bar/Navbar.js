import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Import your CSS file for custom styles
import { Link } from 'react-router-dom'; // เพิ่ม import


const Navbar = () => {
  return (
    <header>
      <div className="header-left">
        <Link to="/" className="custom-logo"> {/* เปลี่ยนจาก <a> เป็น <Link> */}
          <span id="white-logo">Movie</span>
          <span id="red-logo">Watcher</span>
        </Link>
      </div>
      
      <div className="header-right">
      
        <div className="search-box">
          
          <input type="text" placeholder="ค้นหาภาพยนตร์" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <button className="login-button">
        <Link to="/login">เข้าสู่ระบบ</Link> {/* เปลี่ยน <a> เป็น <Link> */}
        </button>
        
      </div>
    </header>
  );
};

export default Navbar;
