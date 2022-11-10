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

/* eslint spaced-comment:0 */
/* global jest */

const succeed = jest.fn((...args) => {
	return new Promise((resolve, reject) => {
		process.nextTick(() => resolve());
	});
});

const ora = jest.fn().mockImplementation((args) => {
	ora.__text = args.text;
	return {
		start: jest.fn(() => {
			return {
				info() {},
				start() {},
				stop() {},
				fail() {},
				get text() {
					return ora.__text;
				},
				set text(v) {
					ora.__text = v;
				},
				succeed,
			};
		}),
		stop() {},
		succeed,
		fail() {},
	};
});

ora.__succeed = succeed;

export default ora;
