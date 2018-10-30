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

## Features


Create a new application

```sh
$ arcgis create <name> [dest]

Create a new application.

Options:
  --version   Show version number                                      [boolean]
  --name, -n  directory and package name for the new app
  --dest      Directory to create the application in           [default: <name>]
  --type, -t  A project template           [choices: "jsapi"] [default: "jsapi"]
  -h, --help  Show help                                                [boolean]

```

Initialize a new application in current directory

```sh
$ arcgis init [type]

Initialize a new application in current directory

Options:
  --version   Show version number                                      [boolean]
  --type, -t  A project template           [choices: "jsapi"] [default: "jsapi"]
  -h, --help  Show help                                                [boolean]
```

Create a new widget

```sh
$ arcgis widget <name> [type]

Create a new Widget.

Options:
  --version   Show version number                                      [boolean]
  --name, -n  Name of new widget
  --type, -t  A widget template            [choices: "jsapi"] [default: "jsapi"]
  -h, --help  Show help                                                [boolean]
```

## Template Application

The template application is written in TypeScript and utilizes the [`@arcgis/webpack-plugin`](https://github.com/Esri/arcgis-webpack-plugin).

You can develop, test, and build the application using various commands.

Run the application in development mode with a local development server.
```sh
npm start
```

Run the unit tests for the application
```sh
npm test
```

Build the application for deployment.
```sh
npm run build
```

Run a production build of the application, but serve it up locally to see how the built app will behave.
```sh
npm run serve
```

Use `npm run serve` to full test that Service Workers are working correctly with `webpack-dev-server` self signed certificates. Refer to [this article](https://deanhume.com/testing-service-workers-locally-with-self-signed-certificates/) on how to run Chrome with proper flags enabled for development purposes.

## Issues
Find a bug or want to request a new feature enhancement?  Let us know by submitting an issue.

## Contributing
Anyone and everyone is welcome to [contribute](CONTRIBUTING.md). We do accept pull requests.

1. Get involved
2. Report issues
3. Contribute code
4. Improve documentation

## Licensing
Copyright 2018 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's [LICENSE](./LICENSE) file
