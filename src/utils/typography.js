"use strict";
exports.__esModule = true;
exports.styledScale = exports.scale = exports.rhythm = void 0;
var typography_1 = require("typography");
var typography_theme_wordpress_2016_1 = require("typography-theme-wordpress-2016");
typography_theme_wordpress_2016_1["default"].overrideThemeStyles = function () {
    return {
        "a.gatsby-resp-image-link": {
            boxShadow: "none"
        }
    };
};
delete typography_theme_wordpress_2016_1["default"].googleFonts;
var typography = new typography_1["default"](typography_theme_wordpress_2016_1["default"]);
// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
    typography.injectStyles();
}
exports["default"] = typography;
exports.rhythm = typography.rhythm;
exports.scale = typography.scale;
exports.styledScale = exports.scale;
