"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Layout = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var typography_1 = require("../utils/typography");
var link_1 = require("./link");
var StyledH1 = styled_components_1["default"].h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  margin-bottom: ", ";\n  margin-top: 0;\n"], ["\n  ", ";\n  margin-bottom: ", ";\n  margin-top: 0;\n"])), typography_1.styledScale(1.5), typography_1.rhythm(1.5));
var StyledH3 = styled_components_1["default"].h3(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: Montserrat, sans-serif;\n  margin-top: 0;\n"], ["\n  font-family: Montserrat, sans-serif;\n  margin-top: 0;\n"])));
var StyledLink = styled_components_1["default"](link_1.FadeLink)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  box-shadow: none;\n  color: inherit;\n  text-decoration: none;\n"], ["\n  box-shadow: none;\n  color: inherit;\n  text-decoration: none;\n"])));
var Content = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: ", ";\n  padding: ", ";\n"], ["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: ", ";\n  padding: ", ";\n"])), typography_1.rhythm(24), typography_1.rhythm(1.5) + " " + typography_1.rhythm(3 / 4));
exports.Layout = function (props) {
    var location = props.location, title = props.title, children = props.children;
    var rootPath = "/";
    var HeaderTitle = location.pathname === rootPath ? StyledH1 : StyledH3;
    return (<Content>
      <header>
        <HeaderTitle>
          <StyledLink to={"/"}>{title}</StyledLink>
        </HeaderTitle>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {" "}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Content>);
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
