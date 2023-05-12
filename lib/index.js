"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = docusaurusThemeOpenAPI;
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
function docusaurusThemeOpenAPI() {
  return {
    name: "docusaurus-theme-openapi",
    getClientModules() {
      const modules = [require.resolve("./theme/styles.css")];
      return modules;
    },
    getThemePath() {
      return _path.default.join(__dirname, "..", "lib-next", "theme");
    },
    getTypeScriptThemePath() {
      return _path.default.resolve(__dirname, "..", "src", "theme");
    },
    configureWebpack() {
      return {
        plugins: [new NodePolyfillPlugin()]
      };
    }
  };
}