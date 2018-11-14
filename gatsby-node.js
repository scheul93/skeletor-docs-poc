/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `page-data` })
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
      }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
        const pageTemplate = path.resolve('src/templates/page.js');
        graphql(
            `{

                allMarkdownRemark {
                    edges {
                        node {
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
            `
        ).then(result => {           
            if (result.errors) {
                reject(result.errors);
            }
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: pageTemplate,
                    context: {
                        slug: node.fields.slug
                    }
                })
            })
            resolve();
        })
    })
}