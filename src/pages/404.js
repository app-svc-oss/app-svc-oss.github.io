"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.NotFoundPage = void 0;
var gatsby_1 = require("gatsby");
var react_1 = require("react");
var layout_1 = require("../components/layout");
var seo_1 = require("../components/seo");
exports.NotFoundPage = function (props) {
    var data = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query {\n      site {\n        siteMetadata {\n          title\n        }\n      }\n    }\n  "], ["\n    query {\n      site {\n        siteMetadata {\n          title\n        }\n      }\n    }\n  "]))));
    return (<layout_1.Layout location={props.location} title={data.site.siteMetadata.title}>
      <seo_1.SEO title="404: Not Found"/>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </layout_1.Layout>);
};
exports["default"] = exports.NotFoundPage;
var templateObject_1;
