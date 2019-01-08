---
title: "Creating Plugins"
date: "2018-11-09"
---

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

First, run npm link in a terminal within the folder of the local plugin to create a symlink in the global node_modues/ folder.

Next, run npm link [plugin-package-name] within a project's folder to create a symlink from the globally-installed plugin to the node_modules/ of the project.

Your local plugin should now be installed to the project and can be added to the task configuration.

_Note: the above two steps must be repeated to reflect any changes made to the local plugin's source code._