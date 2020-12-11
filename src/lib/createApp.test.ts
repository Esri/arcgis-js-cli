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

/* eslint spaced-comment:0 */
/* global jest, expect, test, afterEach */
import createApp from "./createApp";
import fs from "fs";
import installer from "./installer";

jest.mock("./installer");
jest.mock("path");
jest.mock("ora");
jest.mock("fs.promises");

afterEach(() => {
  fs.rmdir(
    "~redcup",
    () => {}
  );
  (fs.promises as any).__RETURN = null;
});

test("Will write files and run installer", async () => {
  (fs.promises as any).__RETURN = `{}`;
  const argv = {
    name: "tmp",
    dest: "~tmp",
    type: "jsapi"
  };
  const spinner = {
    start: jest.fn(),
    stop: jest.fn(),
    succeed: jest.fn(() => {
      return new Promise((resolve, reject) => {
        process.nextTick(() => resolve(null));
      });
    })
  };

  await createApp({ argv });
  expect(fs.promises.writeFile).toBeCalled();
  expect(installer).toBeCalled();
});
