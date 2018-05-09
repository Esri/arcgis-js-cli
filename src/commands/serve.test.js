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
/* global expect, test, jest */
import serve from "../commands/serve";
import liveServer from "live-server";
import ora from "ora";
import { spawn } from "child_process";
import fsp from "fs.promised";

jest.mock("ora");
jest.mock("path");
jest.mock("child_process");
jest.mock("cross-spawn-promise");
jest.mock("fs.promised");
jest.mock("live-server");

test.skip("Serve command has correct options", () => {
  const { dir, port } = serve.builder;
  expect(dir).toBeDefined();
  expect(port).toBeDefined();
  expect(port.default).toEqual(8080);
});

test.skip("Serve handler can start service", async () => {
  fsp.__RETURN = `{
    "name": "Sam"
  }`;
  const argv = {
    dir: ".",
    port: 8080
  };
  try {
    let result = await serve.handler(argv);
    expect(result).not.toBeDefined();
    expect(spawn).toHaveBeenCalled();
    expect(ora.__text).toEqual("Compiling TypeScript...");
    expect(liveServer.start).toHaveBeenCalled();
  } catch (error) {
    expect(error.message).toEqual(1);
  }
});
