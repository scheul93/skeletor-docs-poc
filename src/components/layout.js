import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import TableOfContents from './toc';
import Footer from './footer';
import InteriorNav from './interior-nav';

const Layout = ({ children, shouldShowToC, currentPageTitle }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<>
				<Helmet
					title={data.site.siteMetadata.title}
					meta={[
						{ name: 'description', content: 'Sample' },
						{ name: 'keywords', content: 'sample, something' },
					]}
				>
					<html lang="en" />
				</Helmet>
				<Header siteTitle={data.site.siteMetadata.title} />
				<main className="main-content">
					{shouldShowToC ? <TableOfContents currentPageTitle={currentPageTitle} /> : null }
					<InteriorNav />
					<section className={shouldShowToC ? 'content' : 'content content--full-width'}>
						{children}
					</section> 
				</main>
				<Footer></Footer>
			</>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
