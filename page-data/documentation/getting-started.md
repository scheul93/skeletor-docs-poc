---
title: "Getting Started"
date: "2018-11-09"
---

Skeletor and Skeletor plugins are installed and managed via [npm](https://www.npmjs.com/), the Node.js package manager. 

## Installing the CLI
In order to run Skeletor from the command line, you will want to install the [Skeletor CLI](https://www.npmjs.com/package/@deg-skeletor/cli) globally via NPM:

<pre>npm install -g @deg-skeletor/cli</pre>

_You may need to prefix this command with `sudo` (Mac OS, *nix, etc.) or run your command shell as Administrator (Windows)._

Installing the CLI globally will allow you to run skel commands from any directory.

## Working with an existing Skeletor project
If the project already contains a `package.json` and a `skeletor.config.js`, you can being using Skeletor by:
1. Navigate to the root directory of the project.
2. Install any project dependencies with `npm install`.
3. Run a build with `skel` or `skel build`.

## Starting a new Skeletor project
### Manual configuration
Skeletor Core is just a task delegator. To make it useful, it needs:

*Plugins*. A typical Skeletor plugin does one thing and one thing well. That one thing could be anything. There are already plugins for file copying, PostCSS, Pattern Lab, Express, Rollup and more. [Take a look](/ecosystem/plugins).

Plugins can be installed by listing them as [devDependencies](https://docs.npmjs.com/files/package.json#devdependencies) in your project's `package.json` file. Any plugins listed here will be installed to the project during an `npm install`.

*Configuration*. Once plugins have been installed, Skeletor needs a configuration object (stored in a `skeletor.config.js` file by default) to tell it what tasks and subtasks to run, and how those tasks should work.

A Skeletor configuration object consists of an array of `tasks`. A `task` consists of either `plugins` or `subTasks`. A `subTask` is itself a `task` with its own plugins or `subTask` properties.

//TODO: put in a sample configuration

### Automatic configuration via Skeletor Wizard
Yes, there is an auto-config generator called [Skeletor Wizard](https://github.com/deg-skeletor/skeletor-wizard) that is in active development. Yes, it kind of works already. No, we would not recommend using it in production quite yet. Sorry, Charlie.