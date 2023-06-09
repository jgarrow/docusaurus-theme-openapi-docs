"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _internal = require("@docusaurus/theme-common/internal");
var _postmanCollection = _interopRequireDefault(require("@paloaltonetworks/postman-collection"));
var _Accept = _interopRequireDefault(require("@theme/ApiDemoPanel/Accept"));
var _Authorization = _interopRequireDefault(require("@theme/ApiDemoPanel/Authorization"));
var _Body = _interopRequireDefault(require("@theme/ApiDemoPanel/Body"));
var _Execute = _interopRequireDefault(require("@theme/ApiDemoPanel/Execute"));
var _ParamOptions = _interopRequireDefault(require("@theme/ApiDemoPanel/ParamOptions"));
var _Server = _interopRequireDefault(require("@theme/ApiDemoPanel/Server"));
var _hooks = require("@theme/ApiItem/hooks");
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

function Request({
  item
}) {
  var _item$parameters;
  const response = (0, _hooks.useTypedSelector)(state => state.response.value);
  const postman = new _postmanCollection.default.Request(item.postman);
  const metadata = (0, _internal.useDoc)();
  const {
    proxy,
    hide_send_button
  } = metadata.frontMatter;
  const params = {
    path: [],
    query: [],
    header: [],
    cookie: []
  };
  (_item$parameters = item.parameters) === null || _item$parameters === void 0 ? void 0 : _item$parameters.forEach(param => {
    const paramType = param.in;
    const paramsArray = params[paramType];
    paramsArray.push(param);
  });
  return <div>
      <details className={`details__demo-panel`} open={response ? false : true}>
        <summary>
          <div className={`details__request-summary`}>
            <h4>Request</h4>
            {item.servers && !hide_send_button && <_Execute.default postman={postman} proxy={proxy} />}
          </div>
        </summary>
        <div className={_stylesModule.default.optionsPanel}>
          <_Server.default />
          <_Authorization.default />
          <_ParamOptions.default />
          <_Body.default jsonRequestBodyExample={item.jsonRequestBodyExample} requestBodyMetadata={item.requestBody} />
          <_Accept.default />
        </div>
      </details>
    </div>;
}
var _default = Request;
exports.default = _default;