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

/* eslint spaced-comment:0 */
/* global jest */

const fse = {};

fse.__RETURN = null;

const copy = jest.fn((...args) => {
  return new Promise((resolve, reject) => {
    process.nextTick(
        () => resolve()
    );
  });
});

const readFile = jest.fn((...args) => {
  const file = `{
    "name": "Sam"
  }`;
  let result = fse.__RETURN ? fse.__RETURN : file;
  return new Promise((resolve, reject) => {
    process.nextTick(() => resolve(result));
  });
});

fse.copy = copy;
fse.readFile = readFile;

export default fse;
