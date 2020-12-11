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
import chalk from 'chalk';

import createWidget from '../lib/createWidget';

type WidgetArgs = {
	name: string;
	type: string;
};

const widget = {
	command: 'widget <name> [type]',
	desc: 'Create a new Widget.',
	builder: {
		name: {
			alias: 'n',
			description: 'Name of new widget',
		},
		type: {
			alias: 't',
			describe: 'A widget template',
			choices: ['jsapi', 'exb'],
			demandOption: false,
			default: 'jsapi',
		},
	},

	async handler(argv: WidgetArgs) {
		console.info(chalk.underline('Creating Widget Template'));
		await createWidget({ argv });
		console.info(chalk.green.bold('Widget template installed!'));
	},
};

export default widget;
