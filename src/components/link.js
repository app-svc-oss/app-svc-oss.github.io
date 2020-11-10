"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.FadeLink = void 0;
// tslint:disable-next-line:no-submodule-imports
var AniLink_1 = require("gatsby-plugin-transition-link/AniLink");
var React = require("react");
var FADE_TIME = 0.5;
exports.FadeLink = function (props) {
    var children = props.children, linkProps = __rest(props, ["children"]);
    return (<AniLink_1["default"] fade={true} duration={FADE_TIME} {...linkProps}>
      {children}
    </AniLink_1["default"]>);
};
