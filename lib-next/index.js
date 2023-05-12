/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

import path from "path";
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
export default function docusaurusThemeOpenAPI() {
  return {
    name: "docusaurus-theme-openapi",
    getClientModules() {
      const modules = [require.resolve("./theme/styles.css")];
      return modules;
    },
    getThemePath() {
      return path.join(__dirname, "..", "lib-next", "theme");
    },
    getTypeScriptThemePath() {
      return path.resolve(__dirname, "..", "src", "theme");
    },
    configureWebpack() {
      return {
        plugins: [new NodePolyfillPlugin()],
      };
    },
  };
}
