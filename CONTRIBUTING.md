Contributing to @arcgis/cli
=================================

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

 1. [Getting Involved](#getting-involved)
 2. [Reporting Bugs](#reporting-bugs)
 3. [Contributing Code](#contributing-code)

## Getting Involved

Third-party patches are absolutely essential on our quest to create the best maps app with the ArcGIS API for JavaScript.
However, they're not the only way to get involved with the development of `@arcgis/cli`.
You can help the project tremendously by discovering and [reporting bugs](#reporting-bugs),
[improving documentation](#improving-documentation),
helping others with [GitHub issues](https://github.com/Esri/arcgis-js-cli/issues),
tweeting to [@ArcGISJSAPI](https://twitter.com/ArcGISJSAPI),
and spreading the word about mapps-app-javascript and the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/) among your colleagues and friends.

## Reporting Bugs

Before reporting a bug on the project's [issues page](https://github.com/Esri/arcgis-js-cli/issues),
first make sure that your issue is caused by `@arcgis/cli`, not your application code.
Second, search through the reported issues for your issue,
and if it's already reported, just add any additional details in the comments.

Also, please only report issues related to the `@arcgis/cli`.
If your issue is related to the ArcGIS API for JavaScript, please contact [Esri Tech Support](https://support.esri.com/contact-tech-support) or ask the Esri community on [GeoNet](https://geonet.esri.com/community/developers/web-developers/arcgis-api-for-javascript).

After you made sure that you've found a new `@arcgis/cli` bug,
please use the provided issue template when creating your issue.

## Contributing Code

### Setting up your dev environment
Please read the instructions provided in the [readme](https://github.com/Esri/arcgis-js-cli/blob/master/README.md) to set up your development environment.

#### Fork the repo
If you haven't already, go to https://github.com/Esri/arcgis-js-cli and click the [Fork](https://github.com/Esri/arcgis-js-cli/fork) button.

#### Clone the repo
Clone the repo and run `npm install`.

* _NOTE FOR WINDOWS USERS_ - You will need to install the [Windows-Build-Tools](https://github.com/felixrieseberg/windows-build-tools) to compile npm modules for this project. `npm install --global --production windows-build-tools`

* `npm link` - will build and add the `arcgis`  command to your npm global packages.

You can then start testing any updates you have made to the `arcgis` command line tool.

This library is written using [`flow`](https://flow.org/) for static typing in JavaScript and uses [`jest`](https://facebook.github.io/jest/) for testing.

Please make sure all tests are passing and/or new tests added when submitting pull requests.

#### Configure remotes
Move into the directory the cloning process just created (should be arcgis-js-cli), then make sure your local git knows about all the remotes and branches.
```
$ cd arcgis-js-cli
# Changes the active directory in the prompt to the newly cloned "arcgis-js-cli" directory
$ git remote add upstream https://github.com/Esri/arcgis-js-cli.git
# Assigns the original repository to a remote called "upstream"
$ git fetch upstream
# Pulls in changes not present in your local repository, without modifying your files
```
