"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.pageQuery = void 0;
var gatsby_1 = require("gatsby");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var bio_1 = require("../components/bio");
var layout_1 = require("../components/layout");
var link_1 = require("../components/link");
var seo_1 = require("../components/seo");
var typography_1 = require("../utils/typography");
var Date = styled_components_1["default"].p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  ", ";\n  margin-bottom: ", ";\n  margin-top: ", ";\n"], ["\n  display: block;\n  ", ";\n  margin-bottom: ", ";\n  margin-top: ", ";\n"])), typography_1.styledScale(-1 / 5), typography_1.rhythm(1), typography_1.rhythm(-1));
var Divider = styled_components_1["default"].hr(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: ", ";\n"], ["\n  margin-bottom: ", ";\n"])), typography_1.rhythm(1));
var PostNavigator = styled_components_1["default"].ul(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  list-style: none;\n  padding: 0;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  list-style: none;\n  padding: 0;\n"])));
var BlogPostTemplate = function (props) {
    var data = props.data;
    var post = data.markdownRemark;
    var excerpt = post.excerpt;
    var frontmatter = post.frontmatter;
    var html = post.html;
    var siteTitle = data.site.siteMetadata.title;
    var _a = props.pageContext, previous = _a.previous, next = _a.next;
    return (<layout_1.Layout location={props.location} title={siteTitle}>
      <seo_1.SEO title={frontmatter.title} description={frontmatter.description || excerpt}/>
      <h1>{post.frontmatter.title}</h1>
      <Date>{frontmatter.date}</Date>
      <div dangerouslySetInnerHTML={{ __html: html }}/>
      <Divider />
      <bio_1.Bio />
      <PostNavigator>
        <li>
          {previous && (<link_1.FadeLink to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </link_1.FadeLink>)}
        </li>
        <li>
          {next && (<link_1.FadeLink to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </link_1.FadeLink>)}
        </li>
      </PostNavigator>
    </layout_1.Layout>);
};
exports["default"] = BlogPostTemplate;
exports.pageQuery = gatsby_1.graphql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  query BlogPostBySlug($slug: String!) {\n    site {\n      siteMetadata {\n        title\n        author\n      }\n    }\n    markdownRemark(fields: { slug: { eq: $slug } }) {\n      id\n      excerpt(pruneLength: 160)\n      html\n      frontmatter {\n        title\n        date(formatString: \"MMMM DD, YYYY\")\n        description\n      }\n    }\n  }\n"], ["\n  query BlogPostBySlug($slug: String!) {\n    site {\n      siteMetadata {\n        title\n        author\n      }\n    }\n    markdownRemark(fields: { slug: { eq: $slug } }) {\n      id\n      excerpt(pruneLength: 160)\n      html\n      frontmatter {\n        title\n        date(formatString: \"MMMM DD, YYYY\")\n        description\n      }\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
