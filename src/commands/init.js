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
import { compose, last, prop, split } from "ramda";

import createApp from "../lib/createApp";
import fetchRepos from "../lib/fetchRepos";

const currentDirectory: string => any | string = compose(
  last,
  split("/")
);

type InitArgs = {
  type: string,
  name: string
};

const init = {
  command: "init [type]",
  desc: "Initialize a new application in current directory",
  builder: {
    type: {
      alias: "t",
      describe: "A project template",
      choices: ["jsapi", "react"],
      demandOption: false,
      default: "jsapi"
    }
  },

  async handler(argv: InitArgs) {
    let template = "";
    argv.name = currentDirectory(process.cwd());
    const spinner = ora({
      text: `Creating ArcGIS project - ${argv.name}`,
      color: "green",
      spinner: "earth"
    }).start();

    await createApp({ argv, template, spinner, init: true });
  }
};

export default init;
