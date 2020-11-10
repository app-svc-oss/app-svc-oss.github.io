"use strict";
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.SEO = void 0;
var gatsby_1 = require("gatsby");
var react_1 = require("react");
var react_helmet_1 = require("react-helmet");
exports.SEO = function (props) {
    var lang = props.lang || "en";
    var meta = props.meta || [];
    var keywords = props.keywords || [];
    var description = props.description || "";
    var site = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      query {\n        site {\n          siteMetadata {\n            title\n            description\n            author\n          }\n        }\n      }\n    "], ["\n      query {\n        site {\n          siteMetadata {\n            title\n            description\n            author\n          }\n        }\n      }\n    "])))).site;
    var metaDescription = description || site.siteMetadata.description;
    return (<react_helmet_1["default"] htmlAttributes={{
        lang: lang
    }} title={props.title} titleTemplate={"%s | " + site.siteMetadata.title} meta={[
        {
            content: metaDescription,
            name: "description"
        },
        {
            content: props.title,
            property: "og:title"
        },
        {
            content: metaDescription,
            property: "og:description"
        },
        {
            content: "website",
            property: "og:type"
        },
        {
            content: "summary",
            name: "twitter:card"
        },
        {
            content: site.siteMetadata.author,
            name: "twitter:creator"
        },
        {
            content: props.title,
            name: "twitter:title"
        },
        {
            content: metaDescription,
            name: "twitter:description"
        }
    ]
        .concat(keywords.length > 0
        ? {
            content: keywords.join(", "),
            name: "keywords"
        }
        : [])
        .concat(meta)}/>);
};
var templateObject_1;
