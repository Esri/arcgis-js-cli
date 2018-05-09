/*
  Copyright 2018 Esri
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
/* global jest, expect, test */
import fetchRepos from "./fetchRepos";

import fs from "fs";

jest.mock("request-promise-native");

afterEach(() => {
  fs.rmdir("~redcup", () => {}, () => {});
});

test("Can fetch template repos from github", async () => {
  const argv = {
    name: "tmp",
    dest: "~tmp",
    type: "template"
  };
  const results = await fetchRepos({ argv });
  expect(results.choices.length).toEqual(1);
  expect(results.templates.maptemplate).toBeDefined();
});

test("Can fetch storymap repos from github", async () => {
  const argv = {
    name: "tmp",
    dest: "~tmp",
    type: "storymap"
  };

  const results = await fetchRepos({ argv });
  expect(results.choices.length).toEqual(2);
  expect(results.templates.storymap).toBeDefined();
});
