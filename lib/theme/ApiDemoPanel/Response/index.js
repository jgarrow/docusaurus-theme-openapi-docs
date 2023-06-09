"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _hooks = require("@theme/ApiItem/hooks");
var _CodeBlock = _interopRequireDefault(require("@theme/CodeBlock"));
var _slice = require("./slice");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

// TODO: We probably shouldn't attempt to format XML...
function formatXml(xml) {
  const tab = "  ";
  let formatted = "";
  let indent = "";
  xml.split(/>\s*</).forEach(node => {
    if (node.match(/^\/\w/)) {
      // decrease indent by one 'tab'
      indent = indent.substring(tab.length);
    }
    formatted += indent + "<" + node + ">\r\n";
    if (node.match(/^<?\w[^>]*[^/]$/)) {
      // increase indent
      indent += tab;
    }
  });
  return formatted.substring(1, formatted.length - 3);
}
function Response() {
  const response = (0, _hooks.useTypedSelector)(state => state.response.value);
  const dispatch = (0, _hooks.useTypedDispatch)();
  if (response === undefined) {
    return null;
  }
  let prettyResponse = response;
  try {
    prettyResponse = JSON.stringify(JSON.parse(response), null, 2);
  } catch {
    if (response.startsWith("<")) {
      prettyResponse = formatXml(response);
    }
  }
  return <details className={`details__demo-panel`} open={true}>
      <summary>
        <div className={`details__response-summary`}>
          <h4>Response</h4>
          <button className="button button--sm button--secondary" onClick={() => dispatch((0, _slice.clearResponse)())}>
            Clear
          </button>
        </div>
      </summary>
      <_CodeBlock.default language={response.startsWith("<") ? `xml` : `json`} className="openapi-demo__code-block">
        {prettyResponse || "No Response"}
      </_CodeBlock.default>
    </details>;
}
var _default = Response;
exports.default = _default;