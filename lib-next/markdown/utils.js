/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

export function create(tag, props) {
  const { children, ...rest } = props;
  let propString = "";
  for (const [key, value] of Object.entries(rest)) {
    propString += ` ${key}={${JSON.stringify(value)}}`;
  }
  return `<${tag}${propString}>${render(children)}</${tag}>`;
}
export function guard(value, cb) {
  if (!!value) {
    const children = cb(value);
    return render(children);
  }
  return "";
}
export function render(children) {
  if (Array.isArray(children)) {
    return children.filter((c) => c !== undefined).join("");
  }
  return children ?? "";
}
export function toString(value) {
  // Return as-is if already string
  if (typeof value === "string") {
    return value;
  }
  // Return undefined if null or undefined
  if (value == null) {
    return undefined;
  }
  // Return formatted array if Array
  if (Array.isArray(value)) {
    return `[${value.join(", ")}]`;
  }
  // Coerce to string in all other cases,
  return value + "";
}
