/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { TBody } from "./TableBody";
export function TR({ row, index, subfieldLevel }) {
  return (
    <tr
      // className={clsx(
      //   `w-full`,
      //   subfieldLevel % 2 ? "bg-neutral-100" : "bg-white"
      // )}
      className={clsx(styles.tr)}
      style={{
        backgroundColor:
          subfieldLevel % 2 ? "var(--ifm-color-secondary-lighter)" : "#fff",
        borderBottom: subfieldLevel ? "none" : "var(--ifm-table-border-width)",
      }}
      // style={{
      //   position: isPresent ? "relative" : "absolute",
      //   display: isPresent ? "table-row" : "flex",
      //   alignItems: isPresent ? "" : "center",
      //   top: isPresent ? "-12px" : "", // offset subfield padding
      // }}
    >
      <td
        colSpan={3}
        // className="w-full p-0"
        className={clsx(styles.TableRowTd)}
        style={{
          backgroundColor:
            subfieldLevel % 2 ? "var(--ifm-color-secondary-lighter)" : "#fff",
        }}
      >
        <table className={clsx(styles.table, styles.TableRowTable)}>
          <thead hidden>
            <tr>
              <th className={styles.fieldTh}>Field</th>
              <th className={styles.requiredTh}>Required</th>
              <th className={styles.typeTh}>Type</th>
            </tr>
          </thead>
          <TBody tableData={row.subfields} subfieldLevel={subfieldLevel} />
        </table>
      </td>
    </tr>
  );
}
