---
title: "Using the CLI"
date: "2018-11-09"
---
## Installing the CLI
In order to run Skeletor from the command line, you will want to install the [Skeletor CLI](https://www.npmjs.com/package/@deg-skeletor/cli) globally via NPM:

```shell
npm install -g @deg-skeletor/cli
```

_You may need to prefix this command with `sudo` (Mac OS, *nix, etc.) or run your command shell as Administrator (Windows)._

Installing the CLI globally will allow you to run skel commands from any directory.


## Skel Commands
Once a [project has been set up](#project-setup), you can use the following syntax in the command line to control Skeletor:

```shell
skel
```
Typing `skel` with no arguments will run the project's configured `build` task, and all of its configured subtasks. Subtasks will often be language-specific, such as `html`, `css` or `js`.

```shell
skel [taskName]
```
Typing `skel [taskName]` will run the specified task, as well as all of its configured subtasks. Available tasks will vary based on project configuration, but could include `build`, `serve`, `watch` or `export`.

```shell
skel [taskName] --only [subtaskA,subtaskB]
```
Typing `skel [taskName]` with the `--only` flag will only run the specified subtasks configured for the given task. For example, `skel export --only html,css` would only export HTML and CSS files, but would not export JavaScript files, even if this is a configured subtask of the `export` task.

```shell
skel [taskName] --except [subtaskA,subtaskB]
```
Typing `skel [taskName]` with the `--except` flag will run all configured subtasks, except for the specified subtask. For example, `skel build --except css` would build HTML and JavaScript files (assuming those are the configured subtasks of the `build` task), but would not build CSS files, even if this is a configured subtask.