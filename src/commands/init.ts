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
import { compose, last, split } from 'ramda';

import createApp from '../lib/createApp';
import { PositionalOptionsType } from 'yargs';

const currentDirectory = compose(last, split('/'));

export type InitArgs = {
	type: string;
	name: string;
};

const init = {
	command: 'init [type]',
	desc: 'Initialize a new application in current directory',
	builder: {
		type: {
			alias: 't',
			describe: 'A project template',
			choices: ['jsapi', 'vite'],
			demandOption: false,
			default: 'jsapi',
		},
	},

	async handler(argv: InitArgs): Promise<void> {
		argv.name = currentDirectory(process.cwd());

		console.info(chalk.underline(`Initializing ArcGIS project: ${argv.name}\n`));

		if (argv.type === 'jsapi') {
			return await createApp({ argv, init: true });
		} else {
			console.info(chalk.red(`Unknown app template "${argv.type}".\n`));
			return Promise.reject(new Error(`Unknown app template "${argv.type}".`));
		}
	},
};

export default init;
