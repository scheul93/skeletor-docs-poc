import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby';

import Layout from '../components/layout'

const Page = ({ data }) => {
	const post = data.markdownRemark;
	return (
	<Layout shouldShowToC={true} currentPageTitle={post.frontmatter.title}>
		<div>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
        </div>
	</Layout>
	)
}
	

export default Page;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`