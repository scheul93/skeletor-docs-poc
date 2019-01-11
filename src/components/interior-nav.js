import React from'react';

const InteriorNav = props => {
    return (
        <nav className="nav interior-nav">
            <ul class="nav__list interior-nav__list">
                <li class="nav__list-item interior-nav__list-item">
                    <a class="nav__link interior-nav__link" href="#sample-config">Sample Config</a>
                </li>
                <li class="nav__list-item interior-nav__list-item">
                    <a class="nav__link interior-nav__link" href="#creating-plugins">Creating Plugins</a>
                </li>
                <li class="nav__list-item interior-nav__list-item">
                    <a class="nav__link interior-nav__link" href="#using-the-cli">Using the CLI</a>
                </li>
            </ul>
        </nav>
    )
}

export default InteriorNav;