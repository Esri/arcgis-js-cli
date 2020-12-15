/* eslint spaced-comment:0 */
/* global afterAll, expect, test, jest */
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

import create from './create';

jest.mock('../lib/installer');
jest.mock('path');
jest.mock('fs.promised');
jest.mock('ora');
jest.mock('inquirer');
jest.mock('pkg-dir');

test('Create command has correct options', () => {
	const { name, dest, type } = create.builder;
	expect(name).toBeDefined();
	expect(dest).toBeDefined();
	expect(type).toBeDefined();
	expect(type.default).toEqual('jsapi');
});

test('Create handler succeeds for default app', async () => {
	const argv = {
		type: 'jsapi',
		name: 'testapp',
		cdn: false,
	};
	try {
		const result = await create.handler(argv);
		expect(result).not.toBeDefined();
	} catch (error) {
		expect(error.message).toEqual("EISDIR: illegal operation on a directory, open '~redcup'");
	}
});

test.skip('Create handler succeeds for template', async () => {
	const argv: any = {
		type: 'template',
	};
	try {
		const result = await create.handler(argv);
		expect(result).not.toBeDefined();
	} catch (error) {
		expect(error.message).toEqual(1);
	}
});

test('Create handler fails for unknown template', async () => {
	const argv: any = {
		type: 'jerry',
	};
	try {
		const result = await create.handler(argv);
		expect(result).not.toBeDefined();
	} catch (error) {
		expect(error.message).toEqual(`Unknown app template "${argv.type}.`);
	}
});
