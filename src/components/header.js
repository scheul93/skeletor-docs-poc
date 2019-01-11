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
			</h1>
			<nav className="nav primary-nav primary-nav--desktop">
				<ul className="nav__list primary-nav__list">
					<li className="nav__list-item primary-nav__list-item">
						<Link to="/documentation/getting-started" className="nav__link primary-nav__link">Documentation</Link>
					</li>
					<li className="nav__list-item primary-nav__list-item">
						<Link to="/ecosystem/nuts-and-bolts" className="nav__link primary-nav__link">Ecosystem</Link>
					</li>
				</ul>
			</nav>
			<nav className="nav primary-nav primary-nav--mobile">
				<ul className="nav__list primary-nav__list">
					<li className="nav__list-item primary-nav__list-item">
						<Link to="/documentation/overview" className="nav__link primary-nav__link">Documentation</Link>
					</li>
					<li className="nav__list-item primary-nav__list-item">
						<Link to="/ecosystem/overview" className="nav__link primary-nav__link">Ecosystem</Link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
)

export default Header
