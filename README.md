# @arcgis/cli

[![npm version][npm-img]][npm-url]
[![build status][travis-img]][travis-url]
[![apache licensed](https://img.shields.io/badge/license-Apache%202.0-orange.svg?style=flat-square)](https://raw.githubusercontent.com/Esri/arcgis-js-cli/master/LICENSE)

[npm-img]: https://img.shields.io/npm/v/@arcgis/cli.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@arcgis/cli
[travis-img]: https://img.shields.io/travis/Esri/arcgis-js-cli/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/Esri/arcgis-js-cli

This CLI will allow you to quickly scaffold various applications for the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/).

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
```

## Quick Start

> default template webpack application
```sh
arcgis create jsapi-app
```

> rollup template application
```sh
arcgis create jsapi-rollup-app -t rollup
```

> template application using CDN
```sh
arcgis create jsapi-cdn --cdn
```

## Sample Apps

* [ArcGIS Basic App](https://jsapi-basic-416.surge.sh/)


## Features


Create a new application

```sh
$ arcgis create <name> [dest]

Create a new application.

Options:
  --version   Show version number                                                        [boolean]
  --name, -n  directory and package name for the new app
  --dest      Directory to create the application in                                     [default: <name>]
  --type, -t  A project template           [choices: "jsapi". "rollup"] [default: "jsapi"]
  --cdn       Project template using JSAPI CDN (outputs a rollup app with CDN)           [default: false]
  -h, --help  Show help                                                                  [boolean]

```

Initialize a new application in current directory

```sh
$ arcgis init [type]

Initialize a new application in current directory

Options:
  --version   Show version number                                                        [boolean]
  --type, -t  A project template           [choices: "jsapi". "rollup"]                  [default: "jsapi"]
  --cdn       Project template using JSAPI CDN (only valid with default or calcite)      [default: false]
  -h, --help  Show help                                                                  [boolean]
```

Create a new widget

```sh
$ arcgis widget <name> [type]

Create a new Widget.

Options:
  --version   Show version number                                      [boolean]
  --name, -n  Name of new widget
  --type, -t  A widget template            [choices: "jsapi", "exb"] [default: "jsapi"]
  -h, --help  Show help                                                [boolean]
```

### Experience Builder Widgets

The CLI can be used to scaffold custom widgets for the [ArcGIS Experience Builder Developer Edition](https://www.esri.com/en-us/arcgis/products/arcgis-experience-builder/overview).

You will want to run the CLI in the extracted root directory of your Experience Builder installation.

```sh
arcgis widget my-widget -t exb
```

This will install your widget in the Experience Builder folder structure as follows.

```
<Experience-Builder-Installation>\client\your-extensions\widgets\MyWidget\
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
Copyright 2020 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's [LICENSE](./LICENSE) file
