"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RequestBodyDetails;
var _react = _interopRequireDefault(require("react"));
var _SchemaTable = _interopRequireDefault(require("../SchemaTable"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

function RequestBodyDetails({
  title = "Request Body",
  description,
  required,
  data
}) {
  console.log("data: ", data);
  return <div>
      <div className={_stylesModule.default.flex}>
        <h3 className={_stylesModule.default.h3}>{title}</h3>
        {required ? <span className={_stylesModule.default.required}> required</span> : null}
      </div>
      {description ? <p className={_stylesModule.default.description}>{description}</p> : null}
      <_SchemaTable.default data={data} isBodyRequired={required} />
    </div>;
}