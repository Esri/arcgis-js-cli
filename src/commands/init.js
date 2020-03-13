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
import { blue, cyan } from "chalk";
import ora from "ora";
import inquirer from "inquirer";
import chalk from "chalk";
import { compose, last, prop, split } from "ramda";

import createApp from "../lib/createApp";
import fetchRepos from "../lib/fetchRepos";

const currentDirectory: string => any | string = compose(last, split("/"));

type InitArgs = {
  type: string,
  name: string,
  cdn: boolean
};

const init = {
  command: "init [type]",
  desc: "Initialize a new application in current directory",
  builder: {
    type: {
      alias: "t",
      describe: "A project template",
      choices: ["jsapi", "react", "vue", "calcite"],
      demandOption: false,
      default: "jsapi"
    },
    cdn: {
      describe:
        "Project template using JSAPI CDN (only valid with default or calcite)",
      default: false,
      type: "boolean"
    }
  },

  async handler(argv: InitArgs) {
    argv.name = currentDirectory(process.cwd());

    console.info(
      chalk.underline(`Initializing ArcGIS project: ${argv.name}\n`)
    );
    if (argv.cdn && (argv.type === "react" || argv.type === "vue")) {
      console.info(
        chalk.underline(
          `NOTE: cdn option only applies for type 'jsapi' and 'calcite'\n`
        )
      );
    } else {
      console.info(chalk.underline(`Use CDN: ${String(argv.cdn)}\n`));
    }

    if (
      argv.type === "jsapi" ||
      argv.type === "react" ||
      argv.type === "vue" ||
      argv.type === "calcite"
    ) {
      return await createApp({ argv, init: true });
    } else {
      console.info(chalk.red(`Unknown app template "${argv.type}".\n`));
      return Promise.reject(new Error(`Unknown app template "${argv.type}".`));
    }
  }
};

export default init;
