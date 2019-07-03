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
import ora from "ora";
import installer from "./installer";

const depsInstall = async (target: any) => {
  const spinner = ora({
    text: "ArcGIS CLI",
    spinner: "earth"
  });

  spinner.start("Installing dependencies, this could take a while...");
  try {
    await installer(target, "npm", ["install"]);
  } catch (error) {
    spinner.fail("Oops, something went wrong...");
  }

  try {
    await installer(target, "git", ["init"]);
    await installer(target, "git", ["add", "."]);
    await installer(target, "git", ["commit", "-m", "'first commit'"]);
  } catch (error) {
    spinner.fail("git unavailable");
  }
  spinner.stop(chalk.green.bold(" completed"));
  return Promise.resolve();
};

export default depsInstall;
