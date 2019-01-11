# <a name="getting-started">Getting Started</a>
Skeletor and Skeletor plugins are installed and managed via [npm](https://www.npmjs.com/), the Node.js package manager. 

## Installing the CLI
In order to run Skeletor from the command line, you will want to install the [Skeletor CLI](https://www.npmjs.com/package/@deg-skeletor/cli) globally via NPM:

``` bash
npm install -g @deg-skeletor/cli
```

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

See [Sample Skeletor Config](./skeletor-config) for an example.

### Automatic configuration via Skeletor Wizard
Yes, there is an auto-config generator called [Skeletor Wizard](https://github.com/deg-skeletor/skeletor-wizard) that is in active development. Yes, it kind of works already. No, we would not recommend using it in production quite yet. Sorry, Charlie.

<a href="#getting-started" class="btt-link">Back to top</a>

---

# <a name="sample-config">Sample Skeletor Config</a>

<a href="#getting-started" class="btt-link">Back to top</a>

Here is an example Skeletor configuration (the contents of the `skeletor.config.js` file). Below, we will walk through in more detail what this configuration means.

```javascript
module.exports = {
	tasks: [
		{
			name: 'build',
			subTasks: [
				{
                    name: 'css', 
                    plugins: [
                        {
                            name: '@deg-skeletor/plugin-postcss',
                            config: {
                                //Plugin-specific config
                            }
                        }
                    ]
                },
                {
                    name: 'patterns', 
                    plugins: [
                        {
                            name: '@deg-skeletor/plugin-patternlab',
                            config: {
                                //Plugin-specific config
                            }
                        }
                    ]
                },
                {
                    name: 'js', 
                    plugins: [
                        {
                            name: '@deg-skeletor/plugin-rollup',
                            config: {
                                //Plugin-specific config
                            }
                        }
                    ]
                },
                {
                    name: 'static-assets', 
                    plugins: [
                        {
                            name: '@deg-skeletor/plugin-copy',
                            config: {
                                //Plugin-specific config
                            }
                        }
                    ]
                }
			]
		},
		{
			name: 'serve',
            plugins: [
                {
                    name: '@deg-skeletor/plugin-copy',
                    config: {
                        //Plugin-specific config
                    }
                }
            ]
		},
		{
			name: 'watch',
			subTasks: [
				{
                    name: '@deg-skeletor/plugin-watch',
                    config: {
                        //Plugin-specific config
                    }
                }
			]
		}

	]
}
```

## Setting up a Skeletor Config
A Skeletor configuration file should export an object that has a `tasks` property. Each task object should have a name and that will be the command name that Skeletor cli runs. Each task will also have a list of subtasks. These subtasks represent a Skeletor plugin with a specific function.

```javascript
// skeletor.config.js
module.exports = {
	tasks: [
        {
            name: 'task-1',
            subTasks: []
        }, {
            name: 'task-2',
            subTasks: []
        },
        .
        .
        .
    ]
};
```
With this configuration, plus Skeletor cli, you could type `skel task-1` to run all the subTasks defined.

### A SubTask Configuration
Each subtask is defined with a name property which is the plugin name. Each subtask also has a config property that contains whatever configuration items the specific plugin needs.

```javascript
//Subtask Object
{
    name: 'static-assets', 
    plugins: [
        {
            name: '@deg-skeletor/plugin-name',
            config: {
                //Plugin-specific config
            }
        }
    ]
}
```

## Directory Structure
Sometimes, a project will have two tasks that are similar but not identical. In this example we will call those tasks `build` and `export`. The `build` task processes JS, CSS and pattern files for development. The `export` task processes JS, CSS, and markup for a production environment. This task includes extra subtasks or alternative configurations.

It is recommended to group configurations for common subtasks together to reduce the number of repeated lines. 

Your directory structure could look like this:
```
/export
/skeletor
    /build
        css.config.js
        js.config.js
        patterns.config.js
    /export
        css.config.js
        js.config.js
        patterns.config.js
    css-common.js
    js-common.js
    patterns-common.js
/source
package.json
skeletor.config.js
```

In this situation, `skeletor/build/css.config.js` and `skeletor/export/css.config.js` would both use `skeletor/css-common.js` and define any extra configurations for that task.

<a href="#getting-started" class="btt-link">Back to top</a>

---

# <a name="creating-plugins">Creating Plugins</a>

<a href="#getting-started" class="btt-link">Back to top</a>

Skeletor supports custom plugins to help you customize your build system needs. 

Before you create a brand new plugin, checkout the ones that are [currently available](../ecosystem/plugins).

## How to Create a Skeletor Plugin

The Skeletor ecosystem has a [sample plugin project](https://github.com/deg-skeletor/skeletor-plugin) that can be used as a foundation for your new plugin.

1. Clone the Skeletor sample plugin onto your machine.
2. Run `npm install` to set up tools needed for testing and linting.
3. Build your plugin! The biggest requirement is that your plugin expose a simple API with a `run` method.
4. Push your plugin. Make sure that your plugin has unit tests, thorough documentation, and can be installed by others.

## Testing Plugin during Development
To install a Skeletor plugin that is currently under development on your local machine, you will need to make use of npm's ability to symlink a local package folder.

First, run `npm link` in a terminal within the folder of the local plugin to create a symlink in the global node_modues/ folder.

Next, run `npm link [plugin-package-name]` within a project's folder to create a symlink from the globally-installed plugin to the node_modules/ of the project.

Your local plugin should now be installed to the project and can be added to the task configuration.

_Note: the above two steps must be repeated to reflect any changes made to the local plugin's source code._

<a href="#getting-started" class="btt-link">Back to top</a>

---

# <a name="using-the-cli">Using the CLI</a>

<a href="#getting-started" class="btt-link">Back to top</a>

## Installing the CLI
In order to run Skeletor from the command line, you will want to install the [Skeletor CLI](https://www.npmjs.com/package/@deg-skeletor/cli) globally via NPM:

```bash
npm install -g @deg-skeletor/cli
```

_You may need to prefix this command with `sudo` (Mac OS, *nix, etc.) or run your command shell as Administrator (Windows)._

Installing the CLI globally will allow you to run skel commands from any directory.


## Skel Commands
Once a [project has been set up](#project-setup), you can use the following syntax in the command line to control Skeletor:

```bash
skel
```
Typing `skel` with no arguments will run the project's configured `build` task, and all of its configured subtasks. Subtasks will often be language-specific, such as `html`, `css` or `js`.

```bash
skel [taskName]
```
Typing `skel [taskName]` will run the specified task, as well as all of its configured subtasks. Available tasks will vary based on project configuration, but could include `build`, `serve`, `watch` or `export`.

```bash
skel [taskName] --only [subtaskA,subtaskB]
```
Typing `skel [taskName]` with the `--only` flag will only run the specified subtasks configured for the given task. For example, `skel export --only html,css` would only export HTML and CSS files, but would not export JavaScript files, even if this is a configured subtask of the `export` task.

```bash
skel [taskName] --except [subtaskA,subtaskB]
```
Typing `skel [taskName]` with the `--except` flag will run all configured subtasks, except for the specified subtask. For example, `skel build --except css` would build HTML and JavaScript files (assuming those are the configured subtasks of the `build` task), but would not build CSS files, even if this is a configured subtask.

<a href="#getting-started" class="btt-link">Back to top</a>