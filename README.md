# Skeletor Documentation Site (POC)

This project uses [Gatsby.js](https://www.gatsbyjs.org/) to generate the documentation site for [Skeletor](https://github.com/deg-skeletor).

## 🚀 Quick start

1.  **Install the Gatsby CLI.**

    The Gatsby CLI helps you create new sites using Gatsby starters (like this one!)

    ```sh
    # install the Gatsby CLI globally
    npm install -g gatsby-cli
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-default-starter/
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!
    
    *Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*
    
    Open the the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!
    
## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── yarn.lock

  1.  **`/node_modules`**: The directory where all of the modules of code that your project depends on (npm packages) are automatically installed.  
  
  2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser), like your site header, or a page template. “Src” is a convention for “source code”.
  
  3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.
  
  4.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.
  
  5.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).
  
  6.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
  
  7.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.
  
  8.  **`LICENSE`**: This project is licensed under the MIT license.
  
  9.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. (You won’t change this file directly).
  
  10.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
  
  11.  **`README.md`**: A text file containing useful reference information about your project.
  

## How it Works

Every page of the site is defined in the `page-data` directory as a markdown file. The subdirectory + file name help create the url for the site. For example the file `page-data/documentation/cli.md` with have the url `domain.com/documentation/cli`.

On build, the `gatsby-node.js` file defines how pages are created. It uses graphql and some Gatsby plugins to pull data from those markdown files. It then takes that data and passes it to a template component as props. The template component will translate the markdown to html and display it.

## Still TODO

- Figure out how to dynamically generate a table of contents from the `page-data` directory
- Spell-check documentation
- Figure out how to get list of Skeletor plugins from API (either NPM registry or github apis)