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

import widget from './widget';
import fse from 'fs-extra';

jest.mock('ora');
jest.mock('path');
jest.mock('fs');
jest.mock('fs-extra');
jest.mock('child_process');
jest.mock('fs.promised');
jest.mock('del');
jest.mock('recursive-copy');
jest.mock('../lib/readDirR');

afterEach(() => {
	fse.__RETURN = null;
});

test('Widget command has correct options', () => {
	const { name, type } = widget.builder;
	expect(name).toBeDefined();
	expect(type).toBeDefined();
	expect(type.default).toEqual('jsapi');
});

test('Widget command only works with `jsapi` apps', async () => {
	fse.__RETURN = `{ "arcgis": { "type": "template" } }`;
	const argv = {
		type: 'template',
		name: 'mywidget',
	};
	try {
		const result = await widget.handler(argv);
		expect(result).not.toBeDefined();
	} catch (error) {
		expect(error.message).toEqual(
			"The `widget` command can only be used in a `jsapi` type app scaffolded with 'arcgis-js-cli' or `exb` widgets",
		);
	}
});
