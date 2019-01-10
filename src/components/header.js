import React from 'react';
import { Link } from 'gatsby';
import Image from './image';

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__content">
      <h1 className="home-link">
        <a href="/">
          <Image />
        </a>
        {/* <Link to="/" className="home-link__link">{siteTitle}</Link> */}
      </h1>
      <nav className="primary-nav">
        <ul className="primary-nav__list">
          <li className="primary-nav__list-item">
            <Link to="/documentation/getting-started" className="primary-nav__link">Getting Started</Link>
          </li>
          <li className="primary-nav__list-item">
            <Link to="/ecosystem/plugins" className="primary-nav__link">Plugins</Link>
          </li>
          <li className="primary-nav__list-item">
            <Link to="/documentation/getting-started" className="primary-nav__link">Documentation</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
