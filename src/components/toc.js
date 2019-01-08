import React from 'react';
import { Link } from 'gatsby'

import './toc.css';

const config = [
    {
        header: "Documentation",
        basePath: '/documentation',
        subLinks: [
            {title: "Getting Started", link: "/getting-started"},
            // {title: "Configuring Tasks", link: "/configuring-tasks"},
            {title: "Sample Skeletor Config", link: "/skeletor-config"},
            {title: "Creating Plugins", link: "/creating-plugins"},
            {title: "Using the CLI", link: "/cli"}
        ]
    },
    {
        header: "Ecosystem",
        basePath: '/ecosystem',
        subLinks: [
            {title: "Nuts & Bolts", link: "/nuts-and-bolts"},
            {title: "Plugins", link: "/plugins"},
            {title: "Developer Tools", link: "/developer-tools"}
        ]
    }
]

const TableOfContents = props => {
    function renderLinks(section) {
        return section.subLinks.map((link, index) => (
            <li className={props.currentPageTitle === link.title ? "toc__list-item toc__list-item--active" : "toc__list-item"} key={index}>
                <Link to={section.basePath + link.link} className="toc__link">{link.title}</Link>
            </li>
        ))
    }

    return (
        <aside className="table-of-contents">
            {config.map(section => {
                return (
                    <ul className="toc__list" key={section.header}>
                        <li className="toc__list-item toc__list-header">{section.header}</li>
                        {renderLinks(section)}
                    </ul>
                )
            })}
        </aside>
    )
}
  

export default TableOfContents;
  