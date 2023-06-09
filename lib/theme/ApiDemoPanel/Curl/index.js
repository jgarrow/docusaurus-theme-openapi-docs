"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.languageSet = exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useDocusaurusContext = _interopRequireDefault(require("@docusaurus/useDocusaurusContext"));
var _postmanCodeGenerators = _interopRequireDefault(require("@paloaltonetworks/postman-code-generators"));
var _buildPostmanRequest = _interopRequireDefault(require("@theme/ApiDemoPanel/buildPostmanRequest"));
var _CodeTabs = _interopRequireDefault(require("@theme/ApiDemoPanel/CodeTabs"));
var _hooks = require("@theme/ApiItem/hooks");
var _CodeBlock = _interopRequireDefault(require("@theme/CodeBlock"));
var _clsx = _interopRequireDefault(require("clsx"));
var _merge = _interopRequireDefault(require("lodash/merge"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

const languageSet = [{
  highlight: "bash",
  language: "curl",
  logoClass: "bash",
  options: {
    longFormat: false,
    followRedirect: true,
    trimRequestBody: true
  },
  variant: "cURL"
}, {
  highlight: "python",
  language: "python",
  logoClass: "python",
  options: {
    followRedirect: true,
    trimRequestBody: true
  },
  variant: "requests"
}, {
  highlight: "go",
  language: "go",
  logoClass: "go",
  options: {
    followRedirect: true,
    trimRequestBody: true
  },
  variant: "native"
}, {
  highlight: "javascript",
  language: "nodejs",
  logoClass: "nodejs",
  options: {
    ES6_enabled: true,
    followRedirect: true,
    trimRequestBody: true
  },
  variant: "axios"
}, {
  highlight: "ruby",
  language: "ruby",
  logoClass: "ruby",
  options: {
    followRedirect: true,
    trimRequestBody: true
  },
  variant: "Net::HTTP"
}, {
  highlight: "csharp",
  language: "csharp",
  logoClass: "csharp",
  options: {
    followRedirect: true,
    trimRequestBody: true
  },
  variant: "RestSharp"
}, {
  highlight: "php",
  language: "php",
  logoClass: "php",
  options: {
    followRedirect: true,
    trimRequestBody: true
  },
  variant: "cURL"
}, {
  highlight: "java",
  language: "java",
  logoClass: "java",
  options: {
    followRedirect: true,
    trimRequestBody: true
  },
  variant: "OkHttp"
}, {
  highlight: "powershell",
  language: "powershell",
  logoClass: "powershell",
  options: {
    followRedirect: true,
    trimRequestBody: true
  },
  variant: "RestMethod"
}];
exports.languageSet = languageSet;
function CodeTab({
  children,
  hidden,
  className,
  onClick
}) {
  return <div role="tabpanel" className={(0, _clsx.default)(_stylesModule.default.tabItem, className)} {...{
    hidden
  }}>
      {children}
    </div>;
}
function Curl({
  postman,
  codeSamples
}) {
  var _ref, _siteConfig$themeConf;
  // TODO: match theme for vscode.

  const {
    siteConfig
  } = (0, _useDocusaurusContext.default)();
  const contentType = (0, _hooks.useTypedSelector)(state => state.contentType.value);
  const accept = (0, _hooks.useTypedSelector)(state => state.accept.value);
  const server = (0, _hooks.useTypedSelector)(state => state.server.value);
  const body = (0, _hooks.useTypedSelector)(state => state.body);
  const pathParams = (0, _hooks.useTypedSelector)(state => state.params.path);
  const queryParams = (0, _hooks.useTypedSelector)(state => state.params.query);
  const cookieParams = (0, _hooks.useTypedSelector)(state => state.params.cookie);
  const headerParams = (0, _hooks.useTypedSelector)(state => state.params.header);
  const auth = (0, _hooks.useTypedSelector)(state => state.auth);

  // User-defined languages array
  // Can override languageSet, change order of langs, override options and variants
  const langs = [...((_ref = siteConfig === null || siteConfig === void 0 ? void 0 : (_siteConfig$themeConf = siteConfig.themeConfig) === null || _siteConfig$themeConf === void 0 ? void 0 : _siteConfig$themeConf.languageTabs) !== null && _ref !== void 0 ? _ref : languageSet), ...codeSamples];

  // Filter languageSet by user-defined langs
  const filteredLanguageSet = languageSet.filter(ls => {
    return langs.some(lang => {
      return lang.language === ls.language;
    });
  });

  // Merge user-defined langs into languageSet
  const mergedLangs = (0, _merge.default)(filteredLanguageSet, langs);

  // Read defaultLang from localStorage
  const defaultLang = mergedLangs.filter(lang => lang.language === localStorage.getItem("docusaurus.tab.code-samples"));
  const [language, setLanguage] = (0, _react.useState)(() => {
    var _defaultLang$;
    // Return first index if only 1 user-defined language exists
    if (mergedLangs.length === 1) {
      return mergedLangs[0];
    }
    // Fall back to language in localStorage or first user-defined language
    return (_defaultLang$ = defaultLang[0]) !== null && _defaultLang$ !== void 0 ? _defaultLang$ : mergedLangs[0];
  });
  const [codeText, setCodeText] = (0, _react.useState)("");
  (0, _react.useEffect)(() => {
    if (language && !!language.options) {
      const postmanRequest = (0, _buildPostmanRequest.default)(postman, {
        queryParams,
        pathParams,
        cookieParams,
        contentType,
        accept,
        headerParams,
        body,
        server,
        auth
      });
      _postmanCodeGenerators.default.convert(language.language, language.variant, postmanRequest, language.options, (error, snippet) => {
        if (error) {
          return;
        }
        setCodeText(snippet);
      });
    } else if (language && !!language.source) {
      setCodeText(language.source);
    } else if (language && !language.options) {
      const langSource = mergedLangs.filter(lang => lang.language === language.language);

      // Merges user-defined language with default languageSet
      // This allows users to define only the minimal properties necessary in languageTabs
      // User-defined properties should override languageSet properties
      const mergedLanguage = {
        ...langSource[0],
        ...language
      };
      const postmanRequest = (0, _buildPostmanRequest.default)(postman, {
        queryParams,
        pathParams,
        cookieParams,
        contentType,
        accept,
        headerParams,
        body,
        server,
        auth
      });
      _postmanCodeGenerators.default.convert(mergedLanguage.language, mergedLanguage.variant, postmanRequest, mergedLanguage.options, (error, snippet) => {
        if (error) {
          return;
        }
        setCodeText(snippet);
      });
    } else {
      setCodeText("");
    }
  }, [accept, body, contentType, cookieParams, headerParams, language, pathParams, postman, queryParams, server, auth, mergedLangs]);
  if (language === undefined) {
    return null;
  }
  return <>
      <_CodeTabs.default groupId="code-samples" action={setLanguage}>
        {mergedLangs.map(lang => {
        return <CodeTab value={lang.language} label={""} key={lang.variant ? `${lang.language}-${lang.variant}` : lang.language} attributes={{
          className: `code__tab--${lang.logoClass}`
        }}>
              <_CodeBlock.default language={lang.highlight} className={_stylesModule.default.codeBlock} title={`${lang.language} / ${lang.variant}`}>
                {codeText}
              </_CodeBlock.default>
            </CodeTab>;
      })}
      </_CodeTabs.default>
    </>;
}
var _default = Curl;
exports.default = _default;