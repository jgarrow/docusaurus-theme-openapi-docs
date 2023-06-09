"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

const methodStyle = {
  borderRadius: "var(--ifm-global-radius)"
};
function colorForMethod(method) {
  switch (method.toLowerCase()) {
    case "get":
      return "primary";
    case "post":
      return "success";
    case "delete":
      return "danger";
    case "put":
      return "info";
    case "patch":
      return "warning";
    case "head":
      return "secondary";
    case "event":
      return "secondary";
    default:
      return undefined;
  }
}
function MethodEndpoint({
  method,
  path
}) {
  return <pre className="openapi-method-endpoint" style={{
    background: "var(--openapi-card-background-color)",
    borderRadius: "var(--openapi-card-border-radius)"
  }}>
      <span style={methodStyle} className={"badge badge--" + colorForMethod(method)}>
        {method.toUpperCase()}
      </span>{" "}
      <span className="openapi-method-endpoint__path">
        {path.replace(/{([a-z0-9-_]+)}/gi, ":$1")}
      </span>
    </pre>;
}
var _default = MethodEndpoint;
exports.default = _default;