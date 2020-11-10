"use strict";
/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Bio = void 0;
var gatsby_1 = require("gatsby");
var gatsby_image_1 = require("gatsby-image");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var typography_1 = require("../utils/typography");
var Content = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  margin-bottom: ", ";\n"], ["\n  display: flex;\n  margin-bottom: ", ";\n"])), typography_1.rhythm(2.5));
var GatsbyImage = react_1.forwardRef(function (props, ref) { return (<gatsby_image_1["default"] {...props} ref={ref}/>); });
var Avatar = styled_components_1["default"](GatsbyImage)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-radius: 100%;\n  margin-bottom: 0;\n  margin-right: ", ";\n  min-width: 50px;\n"], ["\n  border-radius: 100%;\n  margin-bottom: 0;\n  margin-right: ", ";\n  min-width: 50px;\n"])), typography_1.rhythm(1 / 2));
exports.Bio = function () {
    var data = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    query BioQuery {\n      avatar: file(absolutePath: { regex: \"/profile-pic.jpg/\" }) {\n        childImageSharp {\n          fixed(width: 50, height: 50) {\n            ...GatsbyImageSharpFixed\n          }\n        }\n      }\n      site {\n        siteMetadata {\n          author\n          social {\n            twitter\n          }\n        }\n      }\n    }\n  "], ["\n    query BioQuery {\n      avatar: file(absolutePath: { regex: \"/profile-pic.jpg/\" }) {\n        childImageSharp {\n          fixed(width: 50, height: 50) {\n            ...GatsbyImageSharpFixed\n          }\n        }\n      }\n      site {\n        siteMetadata {\n          author\n          social {\n            twitter\n          }\n        }\n      }\n    }\n  "]))));
    var _a = data.site.siteMetadata, author = _a.author, social = _a.social;
    return (<Content>
      <Avatar fixed={data.avatar.childImageSharp.fixed} alt={author} imgStyle={{ borderRadius: "50%" }}/>
      <p>
        Written by <strong>{author}</strong> who lives and works in San
        Francisco building useful things.
        {" "}
        <a href={"https://twitter.com/" + social.twitter}>
          You should follow him on Twitter
        </a>
      </p>
    </Content>);
};
var templateObject_1, templateObject_2, templateObject_3;
