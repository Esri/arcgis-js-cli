#!/usr/bin/env node

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

import yargs from 'yargs';

import create, { CreateArgs } from './commands/create';
import init, { InitArgs } from './commands/init';
import widget, { WidgetArgs } from './commands/widget';

yargs
	.scriptName('arcgis')
	.command<CreateArgs>(create)
	.command<InitArgs>(init)
	.command<WidgetArgs>(widget)
	/* eslint-disable @typescript-eslint/no-var-requires */
	.command(require('./commands/styles'))
	/* eslint-enable @typescript-eslint/no-var-requires */
	.usage('Usage: $0 <name> [dest] -t <type>')
	.help()
	.alias('h', 'help')
	.demandCommand()
	.strict().argv;
