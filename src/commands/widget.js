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
import ora from "ora";
import path from "path";
import fse from "fs-extra";
import del from "del";
import { yellow } from "chalk";
import camelCase from "lodash.camelcase";
import startCase from "lodash.startcase";
import copy from "recursive-copy";
import pkgDir from "pkg-dir";

import { compose, map, replace, toLower } from "ramda";

import readDirR from "../lib/readDirR";

type WidgetArgs = {
  name: string,
  type: string
};

const normalize: string => string = compose(
  replace(/\s/g, ""),
  startCase,
  camelCase
);
const nameTplLower: string => string => string = compose(
  replace(/<%name-lower%>/g),
  toLower
);

const nameTpl: string => string => string = replace(/<%name%>/g);

const copyUpdateFiles = (files, name): Promise<any> => {
  const nameUpdate = compose(nameTpl(name), nameTplLower(name));
  const widgetName = replace(/WidgetName/g)(name);
  const updateFiles = map(filename => {
    let updatedFileName = widgetName(filename);
    return fse
      .copy(filename, updatedFileName)
      .then(() => {
        return fse.readFile(filename, "utf-8");
      })
      .then(file => {
        const updatedFile = nameUpdate(file);
        return fse.writeFile(updatedFileName, updatedFile);
      });
  });
  return Promise.all(updateFiles(files));
};

const cleanDirectories = async (target, dest, tests) => {
  await del(`${target}/tests/unit/widgets/WidgetName.tsx`);
  await del(`${target}/tests/unit/widgets/WidgetName/**`);
  await del(`${target}/src/widgets/WidgetName.tsx`);
  await del(`${target}/src/widgets/WidgetName/**`);

  await copy(`${target}/src/`, dest + "/");
  await copy(`${target}/tests/`, tests + "/");

  return del(`${target}/**`);
};

const createWidget = async ({ argv }) => {
  const spinner = ora({
    text: `Scaffolding new widget - ${argv.name}`,
    color: "green"
  }).start();

  let pkg = null;

  try {
    pkg = JSON.parse(
      await fse.readFile(path.resolve(process.cwd(), "package.json"))
    );
    if (!pkg || (pkg && pkg.arcgis.type !== "jsapi")) {
      spinner.fail(
        "The `widget` command can only be used in an `jsapi` type app scaffolded with 'arcgis-js-cli'"
      );
      return Promise.reject(
        new Error(
          "The `widget` command can only be used in an `jsapi` type app scaffolded with 'arcgis-js-cli'"
        )
      );
    }
  } catch (err) {
    /* let it fail! */
  }

  const target = path.resolve(process.cwd(), "tmp");
  const dest = path.resolve(process.cwd(), "src");
  const tests = path.resolve(process.cwd(), "tests");
  const name = normalize(argv.name);

  try {
    const rootDir = await pkgDir(__dirname);
    await fse.copy(`${rootDir}/templates/widget`, target, {
      filter: (s, d) => !s.includes("DS_Store")
    });
    spinner.text = yellow("Updating widget...");
    await copyUpdateFiles(readDirR(target), name);
    await cleanDirectories(target, dest, tests);
    await spinner.succeed("Done!\n");
  } catch (error) {
    spinner.fail(`Widget creation failed: ${error.message}`);
    return Promise.reject(
      new Error(`Widget creation failed: ${error.message}`)
    );
  }
};

const widget = {
  command: "widget <name> [type]",
  desc: "Create a new Widget.",
  builder: {
    name: {
      alias: "n",
      description: "Name of new widget"
    },
    type: {
      alias: "t",
      describe: "A widget template",
      choices: ["jsapi"],
      demandOption: false,
      default: "jsapi"
    }
  },

  async handler(argv: WidgetArgs) {
    await createWidget({ argv });
  }
};

export default widget;
