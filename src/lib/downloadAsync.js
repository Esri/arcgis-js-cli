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
import download from "download-git-repo";
// simple Promise wrapper around the git download repo

export default async function downloadAsync(
  repository: string | void,
  destination: string
) {
  return new Promise((resolve, reject) => {
    download(repository, destination, error => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}
