"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TR = TR;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
var _TableBody = require("./TableBody");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

function TR({
  row,
  index,
  subfieldLevel
}) {
  return <tr
  // className={clsx(
  //   `w-full`,
  //   subfieldLevel % 2 ? "bg-neutral-100" : "bg-white"
  // )}
  className={(0, _clsx.default)(_stylesModule.default.tr)} style={{
    backgroundColor: subfieldLevel % 2 ? "var(--ifm-color-secondary-lighter)" : "#fff",
    borderBottom: subfieldLevel ? "none" : "var(--ifm-table-border-width)"
  }}
  // style={{
  //   position: isPresent ? "relative" : "absolute",
  //   display: isPresent ? "table-row" : "flex",
  //   alignItems: isPresent ? "" : "center",
  //   top: isPresent ? "-12px" : "", // offset subfield padding
  // }}
  >
      <td colSpan={3}
    // className="w-full p-0"
    className={(0, _clsx.default)(_stylesModule.default.TableRowTd)} style={{
      backgroundColor: subfieldLevel % 2 ? "var(--ifm-color-secondary-lighter)" : "#fff"
    }}>
        <table className={(0, _clsx.default)(_stylesModule.default.table, _stylesModule.default.TableRowTable)}>
          <thead hidden>
            <tr>
              <th className={_stylesModule.default.fieldTh}>Field</th>
              <th className={_stylesModule.default.requiredTh}>Required</th>
              <th className={_stylesModule.default.typeTh}>Type</th>
            </tr>
          </thead>
          <_TableBody.TBody tableData={row.subfields} subfieldLevel={subfieldLevel} />
        </table>
      </td>
    </tr>;
}