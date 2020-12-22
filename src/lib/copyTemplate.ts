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

import chalk from 'chalk';
import path from 'path';
import fse from 'fs-extra';
import fs from 'fs';
import pkgDir from 'pkg-dir';

type Args = {
	name: string;
	dest?: string;
	type?: string;
	cdn: boolean;
};

const BASIC = 'templates/webpack/app';
const BASIC_CDN = 'templates/basic-cdn/app';
const ROLLUP = 'templates/rollup/app';

const gitignore = `
node_modules/*
.vscode/*
build/*
dist/*
output/*
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
coverage/*
`;

const copyTemplate = async (arg: Args, init = false) => {
	let templateDirectory = BASIC;
	if (arg.cdn) {
		templateDirectory = BASIC_CDN;
	}
	if (arg.type === 'rollup') {
		templateDirectory = ROLLUP;
	}

	let target: string;
	if (!init) {
		target = path.resolve(process.cwd(), arg.dest || arg.name);
		if (!fs.existsSync(target)) {
			console.info(chalk.green.bold(' create : ') + target);
			fs.mkdirSync(target);
		}
	} else {
		target = path.resolve(process.cwd());
	}
	try {
		const rootDir = await pkgDir(__dirname);
		await fse.copy(`${rootDir}/${templateDirectory}`, `${target}`);
		await fse.writeFile(`${target}/.gitignore`, gitignore);
		// DOES NOT WORK WITH `npm install`
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
