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
import fsp from "fs.promised";
import fs from "fs";
import commandExists from "command-exists";
import installer from "./installer";
import download from "./downloadAsync";
import pkgDir from "pkg-dir";

const fallbackPkgString = (name: string) => `
  {
    "name": "${name}",
    "version": "1.0.0",
    "description": ""
  }
`;

type Options = {
  argv: any,
  spinner: any,
  init?: boolean
};

const createApp = async ({ argv, spinner, init = false }: Options) => {
  let target: string;
  if (!init) {
    target = path.resolve(process.cwd(), argv.dest || argv.name);
    if (!fs.existsSync(target)) {
      fs.mkdirSync(target);
    }
  } else {
    target = path.resolve(process.cwd());
  }
  spinner.text = "Installing template application...";
  try {
    const rootDir = await pkgDir(__dirname);
    await fse.copy(`${rootDir}/templates/app`, target);
  } catch (error) {}

  spinner.succeed("ArcGIS Application template installed.");

  let pkg = null;
  let pkgString = null;
  try {
    const filePath = path.resolve(target, "package.json");
    pkgString = await fsp.readFile(filePath, "utf8");
  } catch (error) {}
  pkgString = pkgString || fallbackPkgString(argv.name);
  pkg = JSON.parse(pkgString);
  if (pkg) {
    pkg.name = argv.name || argv.dest;
    pkg.arcgis = {
      type: argv.type || "unknown"
    };
    await fsp.writeFile(
      path.resolve(target, "package.json"),
      JSON.stringify(pkg, null, 2)
    );
    spinner.start("Installing dependencies, this could take a while...");
    try {
      await installer(target, "npm", ["install"]);
    } catch (error) {
      // use npm if not
      spinner.fail("Oops, something went wrong...");
    }
  }

  await spinner.succeed(
    "Done! You're ArcGIS JSAPI application has been installed!\n"
  );
};

export default createApp;
