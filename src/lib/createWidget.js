/*
  Copyright 2018 Esri
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

// @flow
import path from "path";
import fse from "fs-extra";
import chalk from "chalk";
import pkgDir from "pkg-dir";
import camelCase from "lodash.camelcase";
import startCase from "lodash.startcase";

import { compose, map, replace, toLower } from "ramda";

import cleanDirectories from "./cleanDirectories";
import copyUpdateFiles from "./copyUpdateFiles";
import readDirR from "./readDirR";

// Experience Builder
const BASIC = "templates/basic/widget";
const EXB = "templates/exb/widget";

const normalize: string => string = compose(
  replace(/\s/g, ""),
  startCase,
  camelCase
);

const createWidget = async ({ argv }: any) => {
  let pkg = null;

  try {
    pkg = JSON.parse(
      await fse.readFile(path.resolve(process.cwd(), "package.json"))
    );
    if (
      !pkg ||
      (pkg && pkg.arcgis.type !== "jsapi" && pkg.arcgis.type !== "exb")
    ) {
      console.info(
        chalk.red.bold(
          "The `widget` command can only be used in a `jsapi` type app scaffolded with 'arcgis-js-cli' or `exb` widgets\n"
        )
      );
      return Promise.reject(
        new Error(
          "The `widget` command can only be used in a `jsapi` type app scaffolded with 'arcgis-js-cli' or `exb` widgets"
        )
      );
    }
  } catch (err) {
    /* let it fail! */
  }

  const directory = argv.type === "exb" ? EXB : BASIC;

  const target = path.resolve(process.cwd(), "tmp");
  const dest = path.resolve(
    process.cwd(),
    argv.type === "exb" ? "client" : "src"
  );
  const tests = path.resolve(process.cwd(), "tests");
  const name = normalize(argv.name);

  try {
    const rootDir = await pkgDir(__dirname);
    await fse.copy(`${rootDir}/${directory}`, target, {
      filter: (s, d) => !s.includes("DS_Store")
    });
    await copyUpdateFiles(readDirR(target), name);
    await cleanDirectories(target, dest, tests, argv.type);
  } catch (error) {
    console.info(chalk.red.bold(`Widget creation failed: ${error.message}\n`));
    return Promise.reject(
      new Error(`Widget creation failed: ${error.message}`)
    );
  }
};

export default createWidget;
