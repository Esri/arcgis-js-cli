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

import chalk from 'chalk';
import createApp from '../lib/createApp';

export type CreateArgs = {
	name: string;
	dest?: string;
	type: string;
};

const create = {
	command: 'create <name> [dest] [type]',
	desc: 'Create a new application',
	builder: {
		name: {
			alias: 'n',
			description: 'directory and package name for the new app',
		},
		dest: {
			description: 'Directory to create the application in',
			defaultDescription: '<name>',
		},
		type: {
			alias: 't',
			describe: 'A project template',
			choices: ['jsapi', 'vite'],
			demandOption: false,
			default: 'jsapi',
		},
	},

	async handler(argv: CreateArgs): Promise<void> {
		console.info(chalk.underline(`Creating ArcGIS project: ${argv.name}\n`));

		if (argv.type === 'jsapi' || argv.type === 'vite') {
			return await createApp({ argv });
		} else {
			console.info(chalk.red(`Unknown app template "${argv.type}.\n`));
			return Promise.reject(new Error(`Unknown app template "${argv.type}.`));
		}
	},
};

export default create;
