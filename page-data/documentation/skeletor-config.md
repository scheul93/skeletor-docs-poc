---
title: "Sample Skeletor Config"
date: "2018-11-09"
---

Here is an example Skeletor configuration (the contents of the `skeletor.config.js` file). Below, we will walk through in more detail what this configuration means.

```
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

```
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

```
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