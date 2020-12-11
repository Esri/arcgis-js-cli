/*
  Copyright 2020 Esri
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
import chalk from "chalk";
import path from "path";
import { promises } from "fs";

import copyTemplate from "./copyTemplate";
import depsInstall from "./depsInstall";

const fallbackPkgString = (name: string) => `
  {
    "name": "${name}",
    "version": "1.0.0",
    "description": ""
  }
`;

type Options = {
  argv: any,
  init?: boolean
};

const createApp = async ({ argv, init = false }: Options) => {
  console.info(chalk.underline("Preparing Application Directory"));

  const target = await copyTemplate(argv, init);

  console.info(chalk.green.bold("ArcGIS Application template installed."));

  let pkg = null;
  let pkgString = null;
  try {
    const filePath = path.resolve(target, "package.json");
    pkgString = await promises.readFile(filePath, "utf8");
  } catch (error) {}
  pkgString = pkgString || fallbackPkgString(argv.name);
  pkg = JSON.parse(pkgString);
  if (pkg) {
    pkg.name = argv.name || argv.dest;
    pkg.arcgis = {
      type: argv.type || "unknown"
    };
    await promises.writeFile(
      path.resolve(target, "package.json"),
      JSON.stringify(pkg, null, 2)
    );

    console.info(chalk.underline("\nRunning npm install"));

    await depsInstall(target);
  }
  console.info(
    chalk.green.bold(
      "Done! Your ArcGIS JSAPI application has been installed!\n"
    )
  );
};

export default createApp;
