/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

import { useDispatch, useSelector } from "react-redux";
export const useTypedDispatch = () => useDispatch();
export const useTypedSelector = useSelector;