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
import chalk from "chalk";
import path from "path";
import fse from "fs-extra";
import fs from "fs";
import pkgDir from "pkg-dir";

type Args = {
  name: string,
  dest?: string,
  type?: string
};

const BASIC = "templates/basic/app";
const REACT = "templates/react/app";
const VUE = "templates/vue/app";

const gitignore = `node_modules/*
.vscode/*
build/*
dist/*
html-report/*
~tmp/*
.baseDir*
.tsdrc
.tscache
npm-debug.log
yarn.lock
package-lock.json
coverage-final.*
*.env
`;

const copyTemplate = async (arg: Args, init: boolean = false) => {
  let templateDirectory = BASIC;
  if (arg.type === "react") {
    templateDirectory = REACT;
  } else if (arg.type === "vue") {
    templateDirectory = VUE;
  }
  let target: string;
  if (!init) {
    target = path.resolve(process.cwd(), arg.dest || arg.name);
    if (!fs.existsSync(target)) {
      console.info(chalk.green.bold(" create : ") + target);
      fs.mkdirSync(target);
    }
  } else {
    target = path.resolve(process.cwd());
  }
  try {
    const rootDir = await pkgDir(__dirname);
    await fse.copy(`${rootDir}/${templateDirectory}`, `${target}`);
    await fse.writeFile(`${target}/.gitignore`, gitignore);
    // await fse.copy(
    //   `${rootDir}/${templateDirectory}/.gitignore`,
    //   `${target}/.gitignore`
    // );
  } catch (error) {
    console.info(error.message);
  }

  return target;
};

export default copyTemplate;
