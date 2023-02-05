import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { FaSearchDollar } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { logo } from '../../assets/file';
import '../../styles/navbar.scss';

const Navbar = (props) => {
  const { title, handleSearch, search } = props;
  const [toggleNav, setToggleNav] = useState(true);
  const handleClick = () => {
    setToggleNav((prev) => !prev);
  };

  return (
    <nav className="nav-bar">
      <div className="navbar-container container">
        <div className="nav-logo">
          <NavLink className="nav-link" to="/">
            <img src={logo} alt="app-logo" />
            <span>
              {title}
            </span>
          </NavLink>
        </div>
        <div className="nav-icons-list">
          <BsCurrencyBitcoin className="icon" />
          <FiSettings className="icon" />
          <FaSearchDollar className="icon" onClick={() => handleClick()} role="presentation" />
        </div>
        <div className={toggleNav ? 'searchBox' : 'searchBox hide-search'}>
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            value={search}
          />
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  handleSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default Navbar;
