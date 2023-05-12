/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

import React, { Fragment, useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { TR } from "./TableRow";
const PADDING_LEFT = 12;
export function TBody({ tableData, subfieldLevel = 0, ...props }) {
  const [openRows, setOpenRows] = useState([]);
  const toggleRow = (index) => {
    if (openRows.includes(index)) {
      setOpenRows(openRows.filter((i) => i !== index));
    } else {
      setOpenRows([...openRows, index]);
    }
  };
  return (
    <tbody {...props} className={clsx(styles.tbody, props?.className)}>
      {tableData.map((row, index) => {
        const isSubfieldTableOpen = openRows.includes(index);
        return (
          <Fragment key={row.field}>
            <tr
              // className={clsx(
              //   "w-full",
              //   subfieldLevel % 2 ? "bg-neutral-100" : "bg-white"
              // )}
              className={clsx(
                styles.tr,
                !subfieldLevel &&
                  index === tableData.length - 1 &&
                  styles.hasBottomBorder
              )}
              style={{
                backgroundColor:
                  subfieldLevel % 2
                    ? "var(--ifm-color-secondary-lighter)"
                    : "#fff",
                // borderBottomWidth:
                //   !subfieldLevel && index === tableData.length - 1
                //     ? "1px"
                //     : "initial",
              }}
              onClick={() => row.subfields && toggleRow(index)}
            >
              <td
                // className="w-[calc(100%-117px-76px)] p-0 pr-4"
                className={clsx(styles.fieldTh, styles.td)}
                style={{
                  paddingLeft: `${(subfieldLevel + 1) * PADDING_LEFT}px`,
                }}
              >
                <span className="font-semibold">{row.field}</span>
                {row.description ? (
                  <p className="mt-1 text-xs">{row.description}</p>
                ) : null}

                {row.subfields ? (
                  <button
                    className={clsx(
                      "button",
                      "button--secondary",
                      styles.subfieldButton
                    )}
                    // className="flex items-center pl-0 bg-inherit outline-none border-0 border-b-[1px] border-transparent text-primary-300 mt-1 transition-colors focus:bg-primary-100 focus:text-primary-400 focus:border-primary-400 hover:border-primary-400 hover:text-primary-400 hover:bg-primary-100"
                  >
                    <Chevron
                      // className={clsx(
                      //   "h-5 w-5 mr-2 transition-transform",
                      //   `${isSubfieldTableOpen ? "rotate-180" : ""}`
                      // )}
                      className={clsx(styles.subfieldButtonIcon)}
                      style={{
                        transform: `rotate(${
                          isSubfieldTableOpen ? "0deg" : "180deg"
                        })`,
                      }}
                    />
                    {isSubfieldTableOpen ? "Hide" : "View"} subfields
                  </button>
                ) : null}
              </td>
              <td
                // className="w-[117px] p-0"
                className={styles.requiredTh}
              >
                <Required isRequired={row.required} />
              </td>
              <td
                // className="w-[76px] p-0 text-xs text-neutral-700"
                className={clsx(styles.typeTh, styles.tdType)}
              >
                {row.type.charAt(0).toUpperCase() + row.type.slice(1)}
              </td>
            </tr>

            {/* <tr
                aria-hidden={true} // using an extra row as a "border" instead of an actual border to make the animations smoother
                className={clsx(
                  "w-full table-row-border",
                  row.subfields
                    ? "has-subfields"
                    : index === tableData.length - 1
                    ? "bottom-only"
                    : "",
                  subfieldLevel % 2 ? "nested" : ""
                )}
              >
                <td colSpan={3} className="p-0"></td>
              </tr> */}

            {row.subfields &&
              (isSubfieldTableOpen ? (
                <TR row={row} index={index} subfieldLevel={subfieldLevel + 1} />
              ) : null)}
          </Fragment>
        );
      })}
    </tbody>
  );
}
function Required({ isRequired }) {
  return (
    <div
      className={clsx(styles.requiredBubble, isRequired && styles.isRequired)}
    >
      <span>{isRequired ? "Required" : "Optional"}</span>
    </div>
  );
}
function Chevron(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16px"
      height="16px"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="rgba(0,0,0,0.5)"
        d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
      ></path>
    </svg>
  );
}
