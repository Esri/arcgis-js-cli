/* eslint spaced-comment:0 */
/*
  Copyright 2022 Esri
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

/* global jest */
const fs = {};

const existsSync = jest.fn((...args) => true);
const mkdirSync = jest.fn((...args) => {});

const statSync = jest.fn((...args) => {
	return {
		isDirectory: jest.fn(() => true),
	};
});

const readdirSync = jest.fn(() => []);

const rmdir = jest.fn((...args) => []);

export const promises = {
	writeFile: jest.fn((...args) => []),
	readFile: jest.fn((...args) => {}),
};

fs.statSync = statSync;
fs.readdirSync = readdirSync;
fs.existsSync = existsSync;
fs.mkdirSync = mkdirSync;
fs.rmdir = rmdir;
fs.promises = promises;

export default fs;
