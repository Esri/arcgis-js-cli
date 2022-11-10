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
import installer from './installer';

const depsInstall = async (target: any) => {
	console.info(chalk.green.bold('Initializing git repository'));
	try {
		await installer(target, 'git', ['init']);
	} catch (error) {
		console.info(chalk.red.bold('git unavailable'));
	}
	console.info(chalk.green.bold('Installing dependencies, this could take a while...'));
	try {
		await installer(target, 'npm', ['install']);
	} catch (error) {
		console.info(chalk.red.bold('Oops, something went wrong...'));
	}
	console.info(chalk.green.bold('Dependencies completed'));
	return Promise.resolve();
};

export default depsInstall;
