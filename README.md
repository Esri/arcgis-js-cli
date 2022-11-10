# @arcgis/cli

[![npm version][npm-img]][npm-url]
[![build status][travis-img]][travis-url]
[![apache licensed](https://img.shields.io/badge/license-Apache%202.0-orange.svg?style=flat-square)](https://raw.githubusercontent.com/Esri/arcgis-js-cli/master/LICENSE)

[npm-img]: https://img.shields.io/npm/v/@arcgis/cli.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@arcgis/cli
[travis-img]: https://img.shields.io/travis/Esri/arcgis-js-cli/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/Esri/arcgis-js-cli

This CLI will allow you to quickly scaffold various applications for the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/).

> NOTE: It is highly recommended that you use [Vite](https://vitejs.dev/) directly to build your apps. We also provide a number of [application samples](https://github.com/Esri/jsapi-resources/tree/master/esm-samples) that you can use. The 4.25 release of this CLI will most likely be the last release. There are other tools already suited for using existing repositories for applications, such as [degit](https://github.com/Rich-Harris/degit).

## 4.25 Breaking Changes

There is no longer a webpack template provided for this CLI. The only application template uses [Vite](https://vitejs.dev/). You can find webpack application sample [here](https://github.com/Esri/jsapi-resources/tree/master/esm-samples/webpack).

## Usage

### Prerequisites

You will need node v8+.

* _NOTE FOR WINDOWS USERS_ - You may need to install the [Windows-Build-Tools](https://github.com/felixrieseberg/windows-build-tools) to compile npm modules for this project. `npm install --global --production windows-build-tools`

### Installation

From NPM

`npm install -g @arcgis/cli`

In a terminal, run: 

`arcgis --help`

This will output the following: 

```sh
Usage: arcgis <name> [dest] -t <type>

Commands:
  arcgis create <name> [dest]  Create a new application.
  arcgis init [type]           Initialize a new application in current directory
  arcgis widget <name> [type]  Create a new Widget.
  arcgis styles <subcommand>   Run commands to work with a custom CSS
                               theme
```

## Quick Start

> template application
```sh
arcgis create jsapi-app
```

## Sample Apps

* [ArcGIS Basic App](https://jsapi-basic-416.surge.sh/)


## Features


### Create a new application

```sh
$ arcgis create <name> [dest]

Create a new application.

Options:
  --version   Show version number                                                        [boolean]
  --name, -n  directory and package name for the new app
  --dest      Directory to create the application in                                     [default: <name>]
  --type, -t  A project template           [choices: "jsapi"] [default: "jsapi"]
  -h, --help  Show help                                                                  [boolean]

```

### Initialize a new application in current directory

```sh
$ arcgis init [type]

Initialize a new application in current directory

Options:
  --version   Show version number                                                        [boolean]
  --type, -t  A project template           [choices: "jsapi"]                  [default: "jsapi"]
  -h, --help  Show help                                                                  [boolean]
```

### Create a new widget

You can scaffold a standalone widget for use in your application. Widgets are saved into a `tmp` folder.

```sh
$ arcgis widget <name> [type]

Create a new Widget.

Options:
  --version   Show version number                                      [boolean]
  --name, -n  Name of new widget
  --type, -t  A widget template            [choices: "jsapi", "exb"] [default: "jsapi"]
  -h, --help  Show help                                                [boolean]
```

#### Experience Builder Widgets

The CLI can be used to scaffold custom widgets for the [ArcGIS Experience Builder Developer Edition](https://www.esri.com/en-us/arcgis/products/arcgis-experience-builder/overview).

You will want to run the CLI in the extracted root directory of your Experience Builder installation.

```sh
arcgis widget my-widget -t exb
```

This will install your widget in the Experience Builder folder structure as follows.

```
<Experience-Builder-Installation>\client\your-extensions\widgets\MyWidget\
```
      
### Author a custom theme

Create a new CSS theme.

```sh
$ arcgis styles <subcommand>

Run subcommands to work with a custom CSS theme

Commands:
  arcgis styles create [theme]   Create a custom theme
  arcgis styles preview [theme]  Launch theme-preview test page
  arcgis styles eject [theme]    Eject a built theme ready for deployment
  arcgis styles list             List existing themes in the current project
  arcgis styles clean            Removes any local scaffolding. This should be
                                 used when no more theme authoring is to be done
                                 in the working directory.
  arcgis styles scaffold         Sets up project scaffolding. This is done
                                 automatically when creating a theme for the
                                 first time.
```

#### Create a new theme

```sh
$ arcgis styles create [theme]

Create a custom theme

Positionals:
  theme  the name of the theme to create   [string] [default: "my-custom-theme"]

Options:
      --version            Show version number                             [boolean]
      -e, --with-examples  when specified, the created theme will include examples
                           from the API                                    [boolean]
      -b, --with-base      when specified, the created theme will include base files
                           for local overrides (advanced)                  [boolean]
      -f, --force          overwrites a theme if it already exists         [boolean]
      -h, --help           Show help                                       [boolean]
```

#### Preview a theme

```sh
$ arcgis styles preview [theme]

Launch theme-preview test page

Positionals:
  theme  the name of the theme to preview (this is only needed if there is more
         than one theme in the workspace)  [string] [default: "my-custom-theme"]

Options:
      --version      Show version number                                   [boolean]
      -p, --port     port to use for the preview page                       [number]
      -h, --help     Show help                                             [boolean]
```
                     
#### Eject a theme 

```sh
$ arcgis styles eject [theme]

Eject a built theme ready for deployment

Positionals:
  theme  the name of the theme to eject (this is only needed if there is more
         than one theme in the workspace)  [string] [default: "my-custom-theme"]

Options:
      --version      Show version number                                   [boolean]
      -h, --help     Show help                                             [boolean]
```

#### List themes

```sh
$ arcgis styles list

List existing themes in the current project

Options:
      --version      Show version number                                   [boolean]
      -h, --help     Show help                                             [boolean]
```

#### Clean themes workspace

```sh
$ arcgis styles clean

Removes any local scaffolding. This should be used when no more theme authoring
is to be done in the working directory.

Options:
      --version      Show version number                                   [boolean]
      -f, --force    required to clean any local scaffolding used by this utility
                                                                           [boolean]
      -h, --help     Show help                                             [boolean]
```

#### Scaffold styling workspace

```sh
$ arcgis styles scaffold

Sets up project scaffolding. This is done automatically when creating a theme
for the first time.

Options:
      --version      Show version number                                   [boolean]
      -f, --force    forces creation of project scaffolding                [boolean]
      -h, --help     Show help                                             [boolean]
```

## Issues
Find a bug or want to request a new feature enhancement?  Let us know by submitting an issue.

## Contributing
Anyone and everyone is welcome to [contribute](CONTRIBUTING.md). We do accept pull requests.

1. Get involved
2. Report issues
3. Contribute code
4. Improve documentation

## Licensing
Copyright 2022 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's [LICENSE](./LICENSE) file
