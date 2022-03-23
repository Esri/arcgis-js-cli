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

import copy from 'recursive-copy';
import del from 'del';
import rimraf from 'rimraf';

const cleanDirectories = async (target: string, dest: string, tests: string, type: string) => {
	if (type === 'jsapi') {
		return new Promise(async (resolve) => {
			await del([`${target}/tests/unit/widgets/WidgetName.tsx`]);
			rimraf(`${target}/tests/unit/widgets/WidgetName/`, async () => {
				await del([`${target}/src/widgets/WidgetName.tsx`]);
				rimraf(`${target}/src/widgets/WidgetName/`, async () => {
					rimraf(`${target}/**`, resolve);
				});
			});
		});
	} else if (type === 'exb') {
		return new Promise(async (resolve) => {
			rimraf(`${target}/client/your-extensions/widgets/WidgetName/`, async () => {
				await copy(`${target}/client/`, dest + '/');
				rimraf(`${target}/**`, resolve);
			});
		});
	}
};

export default cleanDirectories;
