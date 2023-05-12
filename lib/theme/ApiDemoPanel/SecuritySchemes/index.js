"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Link = _interopRequireDefault(require("@docusaurus/Link"));
var _hooks = require("@theme/ApiItem/hooks");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

function SecuritySchemes(props) {
  var _options$selected, _options$selected$;
  const options = (0, _hooks.useTypedSelector)(state => state.auth.options);
  const selected = (0, _hooks.useTypedSelector)(state => state.auth.selected);
  const infoAuthPath = `/${props.infoPath}#authentication`;
  if (selected === undefined) return null;
  if (((_options$selected = options[selected]) === null || _options$selected === void 0 ? void 0 : (_options$selected$ = _options$selected[0]) === null || _options$selected$ === void 0 ? void 0 : _options$selected$.type) === undefined) {
    return null;
  }
  const selectedAuth = options[selected];
  return <details className={`details__demo-panel`} open={false}>
      <summary className={`details__request-summary`}>
        <h4>Authorization</h4>
      </summary>
      {selectedAuth.map(auth => {
      const isHttp = auth.type === "http";
      const isApiKey = auth.type === "apiKey";
      const isOauth2 = auth.type === "oauth2";
      const isOpenId = auth.type === "openIdConnect";
      if (isHttp) {
        var _auth$name;
        if (auth.scheme === "bearer") {
          const {
            name,
            key,
            type,
            scopes,
            ...rest
          } = auth;
          return <_react.default.Fragment key={auth.key}>
                <pre style={{
              display: "flex",
              flexDirection: "column",
              background: "var(--openapi-card-background-color)"
            }}>
                  <span>
                    <strong>name:</strong>{" "}
                    <_Link.default to={infoAuthPath}>{name !== null && name !== void 0 ? name : key}</_Link.default>
                  </span>
                  <span>
                    <strong>type: </strong>
                    {type}
                  </span>
                  {scopes && scopes.length > 0 && <span>
                      <strong>scopes: </strong>
                      <code>
                        {auth.scopes.length > 0 ? auth.scopes.toString() : "[]"}
                      </code>
                    </span>}
                  {Object.keys(rest).map((k, i) => {
                return <span key={k}>
                        <strong>{k}: </strong>
                        {typeof rest[k] === "object" ? JSON.stringify(rest[k], null, 2) : String(rest[k])}
                      </span>;
              })}
                </pre>
              </_react.default.Fragment>;
        }
        if (auth.scheme === "basic") {
          const {
            name,
            key,
            type,
            scopes,
            ...rest
          } = auth;
          return <_react.default.Fragment key={auth.key}>
                <pre style={{
              display: "flex",
              flexDirection: "column",
              background: "var(--openapi-card-background-color)"
            }}>
                  <span>
                    <strong>name:</strong>{" "}
                    <_Link.default to={infoAuthPath}>{name !== null && name !== void 0 ? name : key}</_Link.default>
                  </span>
                  <span>
                    <strong>type: </strong>
                    {type}
                  </span>
                  {scopes && scopes.length > 0 && <span>
                      <strong>scopes: </strong>
                      <code>
                        {auth.scopes.length > 0 ? auth.scopes.toString() : "[]"}
                      </code>
                    </span>}
                  {Object.keys(rest).map((k, i) => {
                return <span key={k}>
                        <strong>{k}: </strong>
                        {typeof rest[k] === "object" ? JSON.stringify(rest[k], null, 2) : String(rest[k])}
                      </span>;
              })}
                </pre>
              </_react.default.Fragment>;
        }
        return <_react.default.Fragment key={auth.key}>
              <pre style={{
            display: "flex",
            flexDirection: "column",
            background: "var(--openapi-card-background-color)"
          }}>
                <span>
                  <strong>name:</strong>{" "}
                  <_Link.default to={infoAuthPath}>{(_auth$name = auth.name) !== null && _auth$name !== void 0 ? _auth$name : auth.key}</_Link.default>
                </span>
                <span>
                  <strong>type: </strong>
                  {auth.type}
                </span>
                <span>
                  <strong>in: </strong>
                  {auth.in}
                </span>
              </pre>
            </_react.default.Fragment>;
      }
      if (isApiKey) {
        const {
          name,
          key,
          type,
          scopes,
          ...rest
        } = auth;
        return <_react.default.Fragment key={auth.key}>
              <pre style={{
            display: "flex",
            flexDirection: "column",
            background: "var(--openapi-card-background-color)"
          }}>
                <span>
                  <strong>name:</strong>{" "}
                  <_Link.default to={infoAuthPath}>{name !== null && name !== void 0 ? name : key}</_Link.default>
                </span>
                <span>
                  <strong>type: </strong>
                  {type}
                </span>
                {scopes && scopes.length > 0 && <span>
                    <strong>scopes: </strong>
                    <code>
                      {auth.scopes.length > 0 ? auth.scopes.toString() : "[]"}
                    </code>
                  </span>}
                {Object.keys(rest).map((k, i) => {
              return <span key={k}>
                      <strong>{k}: </strong>
                      {typeof rest[k] === "object" ? JSON.stringify(rest[k], null, 2) : String(rest[k])}
                    </span>;
            })}
              </pre>
            </_react.default.Fragment>;
      }
      if (isOauth2) {
        const {
          name,
          key,
          type,
          scopes,
          flows,
          ...rest
        } = auth;
        return <_react.default.Fragment key={selected}>
              <pre style={{
            display: "flex",
            flexDirection: "column",
            background: "var(--openapi-card-background-color)"
          }}>
                <span>
                  <strong>name:</strong>{" "}
                  <_Link.default to={infoAuthPath}>{name !== null && name !== void 0 ? name : key}</_Link.default>
                </span>
                <span>
                  <strong>type: </strong>
                  {type}
                </span>
                {scopes && scopes.length > 0 && <span>
                    <strong>scopes: </strong>
                    <code>
                      {auth.scopes.length > 0 ? auth.scopes.toString() : "[]"}
                    </code>
                  </span>}
                {Object.keys(rest).map((k, i) => {
              return <span key={k}>
                      <strong>{k}: </strong>
                      {typeof rest[k] === "object" ? JSON.stringify(rest[k], null, 2) : String(rest[k])}
                    </span>;
            })}
                {flows && <span>
                    <code>
                      <strong>flows: </strong>
                      {JSON.stringify(flows, null, 2)}
                    </code>
                  </span>}
              </pre>
            </_react.default.Fragment>;
      }
      if (isOpenId) {
        const {
          name,
          key,
          scopes,
          type,
          ...rest
        } = auth;
        return <_react.default.Fragment key={auth.key}>
              <pre style={{
            display: "flex",
            flexDirection: "column",
            background: "var(--openapi-card-background-color)"
          }}>
                <span>
                  <strong>name:</strong>{" "}
                  <_Link.default to={infoAuthPath}>{name !== null && name !== void 0 ? name : key}</_Link.default>
                </span>
                <span>
                  <strong>type: </strong>
                  {type}
                </span>
                {scopes && scopes.length > 0 && <span>
                    <strong>scopes: </strong>
                    <code>
                      {auth.scopes.length > 0 ? auth.scopes.toString() : "[]"}
                    </code>
                  </span>}
                {Object.keys(rest).map((k, i) => {
              return <span key={k}>
                      <strong>{k}: </strong>
                      {typeof rest[k] === "object" ? JSON.stringify(rest[k], null, 2) : String(rest[k])}
                    </span>;
            })}
              </pre>
            </_react.default.Fragment>;
      }
      return undefined;
    })}
    </details>;
}
var _default = SecuritySchemes;
exports.default = _default;