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

// @flow
import ora from "ora";
import path from "path";
import fsp from "fs.promised";
import { yellow } from "chalk";
import liveServer from "live-server";
import { spawn } from "child_process";
import cspawn from "cross-spawn-promise";

type ServeArgs = {
  dir: string,
  port: number
};

const serve = {
  command: "serve [dir] [port]",
  desc: "Serve application locally.",
  builder: {
    dir: {
      alias: "d",
      description: "Directory to serve application",
      default: "."
    },
    port: {
      alias: "p",
      description: "What port to serve locally?",
      default: 8080
    }
  },

  async handler(argv: ServeArgs) {
    const spinner = ora({
      text: `Building project`,
      color: "green"
    }).start();

    const target = path.resolve(process.cwd(), argv.dir);

    let tsconfig = null;
    try {
      tsconfig = JSON.parse(
        await fsp.readFile(path.resolve(target, "tsconfig.json"))
      );
    } catch (err) {}

    if (tsconfig) {
      spinner.text = "Start application setup...";
      // do not want this spawn to be async
      // because tsc is called with "-w" flag, promise doesn't resolve
      try {
        await cspawn("tsc", [], { cwd: target });
      } catch (error) {
        // let it fail
      }
      const watcher = spawn("yarn", ["watch"], { cwd: target });
      process.on("exit", () => {
        watcher.kill();
      });
    }
    spinner.succeed(yellow("Application ready"));
    const params = {
      port: argv.port, // Set the server port. Defaults to 8080.
      // host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
      root: argv.dir, // Set root directory that's being served. Defaults to cwd.
      cors: true,
      open: true, // When false, it won't load your browser by default.
      ignore: "node_modules", // comma-separated string for paths to ignore
      // file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
      wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
      // mount: [['/components', './node_modules']], // Mount a directory to a route.
      logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
      ignorePattern: /.*\.ts/
      // middleware: [function(req, res, next) {next()}] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
    };
    liveServer.start(params);
  }
};

export default serve;
