"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ApiLogo;
var _react = _interopRequireDefault(require("react"));
var _themeCommon = require("@docusaurus/theme-common");
var _useBaseUrl = _interopRequireDefault(require("@docusaurus/useBaseUrl"));
var _ThemedImage = _interopRequireDefault(require("@theme/ThemedImage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

function ApiLogo(props) {
  const {
    colorMode
  } = (0, _themeCommon.useColorMode)();
  const {
    logo,
    darkLogo
  } = props;
  const altText = () => {
    if (colorMode === "dark") {
      var _darkLogo$altText;
      return (_darkLogo$altText = darkLogo === null || darkLogo === void 0 ? void 0 : darkLogo.altText) !== null && _darkLogo$altText !== void 0 ? _darkLogo$altText : logo === null || logo === void 0 ? void 0 : logo.altText;
    }
    return logo === null || logo === void 0 ? void 0 : logo.altText;
  };
  const lightLogoUrl = (0, _useBaseUrl.default)(logo === null || logo === void 0 ? void 0 : logo.url);
  const darkLogoUrl = (0, _useBaseUrl.default)(darkLogo === null || darkLogo === void 0 ? void 0 : darkLogo.url);
  if (logo && darkLogo) {
    return <_ThemedImage.default alt={altText()} sources={{
      light: lightLogoUrl,
      dark: darkLogoUrl
    }} className="openapi__logo" />;
  }
  if (logo || darkLogo) {
    return <_ThemedImage.default alt={altText()} sources={{
      light: lightLogoUrl !== null && lightLogoUrl !== void 0 ? lightLogoUrl : darkLogoUrl,
      dark: lightLogoUrl !== null && lightLogoUrl !== void 0 ? lightLogoUrl : darkLogoUrl
    }} className="openapi__logo" />;
  }
  return undefined;
}