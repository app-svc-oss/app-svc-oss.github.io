"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var gatsby_1 = require("gatsby");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var bio_1 = require("../components/bio");
var layout_1 = require("../components/layout");
var link_1 = require("../components/link");
var seo_1 = require("../components/seo");
var typography_1 = require("../utils/typography");
var StyledLink = styled_components_1["default"](link_1.FadeLink)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-shadow: none;\n"], ["\n  box-shadow: none;\n"])));
var Title = styled_components_1["default"].h3(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: ", ";\n"], ["\n  margin-bottom: ", ";\n"])), typography_1.rhythm(1 / 4));
var BlogIndex = function (props) {
    var data = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    query {\n      site {\n        siteMetadata {\n          title\n        }\n      }\n      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {\n        edges {\n          node {\n            excerpt\n            fields {\n              slug\n            }\n            frontmatter {\n              date(formatString: \"MMMM DD, YYYY\")\n              title\n              description\n            }\n          }\n        }\n      }\n    }\n  "], ["\n    query {\n      site {\n        siteMetadata {\n          title\n        }\n      }\n      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {\n        edges {\n          node {\n            excerpt\n            fields {\n              slug\n            }\n            frontmatter {\n              date(formatString: \"MMMM DD, YYYY\")\n              title\n              description\n            }\n          }\n        }\n      }\n    }\n  "]))));
    var siteTitle = data.site.siteMetadata.title;
    var posts = data.allMarkdownRemark.edges;
    return (<layout_1.Layout location={props.location} title={siteTitle}>
      <seo_1.SEO title="All posts" keywords={["blog", "gatsby", "javascript", "react"]}/>
      <bio_1.Bio />
      {posts.map(function (_a) {
        var node = _a.node;
        var frontmatter = node.frontmatter;
        var fields = node.fields;
        var slug = fields.slug;
        var excerpt = node.excerpt;
        var title = frontmatter.title || fields.slug;
        return (<div key={slug}>
            <Title>
              <StyledLink to={slug}>{title}</StyledLink>
            </Title>
            <small>{frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{
            __html: frontmatter.description || excerpt
        }}/>
          </div>);
    })}
    </layout_1.Layout>);
};
exports["default"] = BlogIndex;
var templateObject_1, templateObject_2, templateObject_3;
