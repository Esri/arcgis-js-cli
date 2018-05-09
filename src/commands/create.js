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
import inquirer from "inquirer";
import { blue, cyan } from "chalk";
import { prop } from "ramda";

import createApp from "../lib/createApp";
import fetchRepos from "../lib/fetchRepos";

type CreatArgs = {
  name: string,
  dest?: string,
  type: string
};
const spinner = ora({
  text: "ArcGIS CLI",
  spinner: "earth"
});

const create = {
  command: "create <name> [dest]",
  desc: "Create a new application.",
  builder: {
    name: {
      alias: "n",
      description: "directory and package name for the new app"
    },
    dest: {
      description: "Directory to create the application in",
      defaultDescription: "<name>"
    },
    type: {
      alias: "t",
      describe: "A project template",
      choices: ["jsapi"],
      demandOption: false,
      default: "jsapi"
    }
  },

  async handler(argv: CreatArgs) {
    spinner.start();
    spinner.text = `Creating ArcGIS project - ${argv.name}`;
    if (argv.type === "jsapi") {
      return await createApp({ argv, spinner });
    } else {
      await spinner.fail(`Unknown app template "${argv.type}.\n`);
      return Promise.reject(new Error(`Unknown app template "${argv.type}.`));
    }
  }
};

export default create;
