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
import fse from "fs-extra";
import chalk from "chalk";
// import { compose, map, replace, toLower } from "ramda";

const nameTplLower: string => string => string = compose(
  replace(/<%name-lower%>/g),
  toLower
);

const nameTpl: string => string => string = replace(/<%name%>/g);

const copyUpdateFiles = (files: string[], name: string): Promise<any> => {
  const nameUpdate = compose(
    nameTpl(name),
    nameTplLower(name)
  );
  const widgetName = replace(/WidgetName/g)(name);
  const updateFiles = map(filename => {
    let updatedFileName = widgetName(filename);
    console.info(chalk.green.bold(" widget : ") + updatedFileName + "\n");
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

export default copyUpdateFiles;
