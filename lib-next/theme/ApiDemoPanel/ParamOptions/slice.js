/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
export const slice = createSlice({
  name: "params",
  initialState,
  reducers: {
    setParam: (state, action) => {
      const newParam = action.payload;
      const paramGroup = state[action.payload.in];
      const index = paramGroup.findIndex((p) => p.name === newParam.name);
      paramGroup[index] = newParam;
    },
  },
});
export const { setParam } = slice.actions;
export default slice.reducer;
