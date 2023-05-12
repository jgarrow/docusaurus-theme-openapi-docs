"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
var _TableBody = require("./TableBody");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

const initialData = [{
  field: "name",
  description: "User's name. I am a really long description so that this will wrap onto the next line.",
  required: true,
  type: "Name",
  subfields: [{
    field: "first",
    description: "First name",
    required: true,
    type: "string"
  }, {
    field: "last",
    description: "Last name",
    required: true,
    type: "string"
  }]
}, {
  field: "age",
  description: "User's age, in years",
  required: true,
  type: "number"
}, {
  field: "email",
  description: "User's email address",
  required: true,
  type: "string"
}, {
  field: "address",
  description: "User's home address",
  required: false,
  type: "Address",
  subfields: [{
    field: "street",
    description: "User's street address",
    required: true,
    type: "Street",
    subfields: [{
      field: "address 1",
      description: "First line of street address",
      required: true,
      type: "string"
    }, {
      field: "address 2",
      description: "Second line of street address",
      required: false,
      type: "string"
    }]
  }, {
    field: "city",
    description: "City of the home address",
    required: true,
    type: "string"
  }, {
    field: "state",
    description: "State of the home address",
    required: true,
    type: "string"
  }, {
    field: "zip",
    description: "Postal code of the home address",
    required: true,
    type: "string"
  }]
}, {
  field: "phone",
  description: "User's phone number",
  required: false,
  type: "string"
}];
const Table = ({
  data = initialData,
  isBodyRequired
}) => {
  // compensate for the extra padding on the last row if it has subfields
  // this is hacky, but it avoids messing up the animations
  const bottomPadding = data[data.length - 1].subfields ? "pb-1" : "pb-4";

  // if the body is marked as required and there's only one field, mark it as required
  if (isBodyRequired && !data[0].required && data.length === 1) {
    data[0].required = true;
  }
  return <table className={_stylesModule.default.table}>
      <thead className={_stylesModule.default.thead}>
        <tr>
          <th className={_stylesModule.default.fieldTh}>Field</th>
          <th className={_stylesModule.default.requiredTh}>Required</th>
          <th className={_stylesModule.default.typeTh}>Type</th>
        </tr>
        {/* <tr
            aria-hidden={true} // using an extra row as a "border" instead of an actual border to make the animations smoother
            className="w-full table-head-border"
          >
            <td colSpan={3} className="p-0"></td>
          </tr> */}
      </thead>

      <_TableBody.TBody tableData={data} className="relative" />
    </table>;
};
var _default = Table;
exports.default = _default;