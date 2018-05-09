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
import request from "request-promise-native";

import { compose, filter, map, mergeAll } from "ramda";

type Options = {
  argv: any,
  init?: boolean
};

const ONLINE =
  "https://api.github.com/search/repositories?q=language:javascript+language:typescript+user:esri+template";

const validate = filter(x => !x.name.includes("storymap"));

const asNames = map(x => {
  const obj = {};
  obj[x.name] = x.full_name;
  return obj;
});

const asObject = compose(mergeAll, asNames);

const asOptions = (arr: any[]) => ({
  templates: asObject(arr),
  choices: map(x => x.name, arr)
});

const fetchRepos = async ({ argv }: Options): Promise<any> => {
  const type = argv.type;

  try {
    const options = {
      uri: ONLINE,
      headers: {
        "User-Agent": "arcgis-js-cli"
      },
      json: true
    };

    const response: { items: any[] } = await request(options);
    const repos = response.items;
    const results =
      type === "template" ? asOptions(validate(repos)) : asOptions(repos);

    return Promise.resolve(results);
  } catch (error) {}
};

export default fetchRepos;
