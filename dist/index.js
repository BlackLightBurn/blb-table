'use strict';

var React = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".Button-module_btn__Fx11X {\n  position: relative;\n  background-color: transparent;\n  border: none;\n  padding: 10px 12px;\n  width: auto;\n  border-radius: var(--asb-border-radius);\n  font-weight: 400;\n  text-align: center;\n  cursor: pointer;\n  transition:\n    background-color 0.2s ease-in-out,\n    filter 0.2s ease-in-out;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: rgb(var(--foreground-rgb));\n  border: 1px solid rgba(var(--foreground-rgb), 0.2);\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Paint */\n.Button-module_btnPrimary__S4VEe {\n  color: var(--asb-white-color);\n  background-color: var(--asb-primary-color);\n  box-shadow: 0 0 0 1px var(--asb-primary-color);\n}\n\n.Button-module_btnPrimary__S4VEe:hover {\n  color: var(--asb-white-color);\n  background-color: var(--asb-primary-hover-color);\n  box-shadow: 0 0 0 1px var(--asb-primary-hover-color);\n}\n\n.Button-module_btnDanger__DSgdk {\n  color: var(--asb-white-color);\n  background-color: var(--asb-danger-color);\n  box-shadow: inset 0 0 0 1px var(--asb-danger-color);\n}\n\n.Button-module_btnDanger__DSgdk:hover {\n  color: var(--asb-white-color);\n  background-color: var(--asb-danger-hover-color);\n  box-shadow: inset 0 0 0 1px var(--asb-danger-hover-color);\n}\n\n.Button-module_btnSuccess__l1b3N {\n  color: var(--asb-white-color);\n  background-color: var(--asb-success-color);\n  box-shadow: inset 0 0 0 1px var(--asb-success-color);\n}\n\n.Button-module_btnSuccess__l1b3N:hover {\n  color: var(--asb-white-color);\n  background-color: var(--asb-success-hover-color);\n  box-shadow: inset 0 0 0 1px var(--asb-success-hover-color);\n}\n\n.Button-module_btnWarning__NGPUN {\n  color: var(--asb-gray-dark-color);\n  background-color: var(--asb-warning-color);\n  box-shadow: inset 0 0 0 1px var(--asb-warning-color);\n}\n\n.Button-module_btnWarning__NGPUN:hover {\n  color: var(--asb-gray-dark-color);\n  background-color: var(--asb-warning-hover-color);\n  box-shadow: inset 0 0 0 1px var(--asb-warning-hover-color);\n}\n\n.Button-module_btnInfo__nIDA2 {\n  color: var(--asb-white-color);\n  background-color: var(--asb-info-color);\n  box-shadow: inset 0 0 0 1px var(--asb-info-color);\n}\n\n.Button-module_btnInfo__nIDA2:hover {\n  color: var(--asb-white-color);\n  background-color: var(--asb-info-hover-colo);\n  box-shadow: inset 0 0 0 1px var(--asb-info-hover-color);\n}\n\n/* Variant Outlined */\n.Button-module_btnPrimary__S4VEe.Button-module_btnOutlined__JGvhZ {\n  color: var(--asb-primary-color);\n  background-color: transparent;\n  box-shadow: inset 0 0 0 1px var(--asb-primary-color);\n}\n\n.Button-module_btnPrimary__S4VEe.Button-module_btnOutlined__JGvhZ:hover:not(.Button-module_btnDisabled__KBkpS) {\n  color: var(--asb-white-color);\n  background-color: var(--asb-primary-color);\n  box-shadow: inset 0 0 0 1px var(--asb-primary-color);\n}\n\n.Button-module_btnDanger__DSgdk.Button-module_btnOutlined__JGvhZ {\n  color: var(--asb-danger-color);\n  background-color: transparent;\n  box-shadow: inset 0 0 0 1px var(--asb-danger-color);\n}\n\n.Button-module_btnDanger__DSgdk.Button-module_btnOutlined__JGvhZ:hover:not(.Button-module_btnDisabled__KBkpS) {\n  color: var(--asb-white-color);\n  background-color: var(--asb-danger-color);\n  box-shadow: inset 0 0 0 1px var(--asb-danger-color);\n}\n\n.Button-module_btnSuccess__l1b3N.Button-module_btnOutlined__JGvhZ {\n  color: var(--asb-success-color);\n  background-color: transparent;\n  box-shadow: inset 0 0 0 1px var(--asb-success-color);\n}\n\n.Button-module_btnSuccess__l1b3N.Button-module_btnOutlined__JGvhZ:hover:not(.Button-module_btnDisabled__KBkpS) {\n  color: var(--asb-white-color);\n  background-color: var(--asb-success-color);\n  box-shadow: inset 0 0 0 1px var(--asb-success-color);\n}\n\n.Button-module_btnWarning__NGPUN.Button-module_btnOutlined__JGvhZ {\n  color: var(--asb-warning-color);\n  background-color: transparent;\n  box-shadow: inset 0 0 0 1px var(--asb-warning-color);\n}\n\n.Button-module_btnWarning__NGPUN.Button-module_btnOutlined__JGvhZ:hover:not(.Button-module_btnDisabled__KBkpS) {\n  color: var(--asb-gray-dark-color);\n  background-color: var(--asb-warning-color);\n  box-shadow: inset 0 0 0 1px var(--asb-warning-color);\n}\n\n.Button-module_btnInfo__nIDA2.Button-module_btnOutlined__JGvhZ {\n  color: var(--asb-info-color);\n  background-color: transparent;\n  box-shadow: inset 0 0 0 1px var(--asb-info-color);\n}\n\n.Button-module_btnInfo__nIDA2.Button-module_btnOutlined__JGvhZ:hover:not(.Button-module_btnDisabled__KBkpS) {\n  color: var(--asb-white-color);\n  background-color: var(--asb-info-color);\n  box-shadow: inset 0 0 0 1px var(--asb-info-color);\n}\n\n.Button-module_btnPrimary__S4VEe.Button-module_btnOutlined__JGvhZ .Button-module_spinner__ZExvW div {\n  border-color: var(--asb-primary-color) transparent transparent transparent;\n}\n.Button-module_btnPrimary__S4VEe.Button-module_btnOutlined__JGvhZ:hover .Button-module_spinner__ZExvW div {\n  border-color: var(--asb-white-color) transparent transparent transparent;\n}\n.Button-module_btnDanger__DSgdk.Button-module_btnOutlined__JGvhZ .Button-module_spinner__ZExvW div {\n  border-color: var(--asb-danger-color) transparent transparent transparent;\n}\n.Button-module_btnDanger__DSgdk.Button-module_btnOutlined__JGvhZ:hover .Button-module_spinner__ZExvW div {\n  border-color: var(--asb-white-color) transparent transparent transparent;\n}\n.Button-module_btnSuccess__l1b3N.Button-module_btnOutlined__JGvhZ .Button-module_spinner__ZExvW div {\n  border-color: var(--asb-success-color) transparent transparent transparent;\n}\n.Button-module_btnSuccess__l1b3N.Button-module_btnOutlined__JGvhZ:hover .Button-module_spinner__ZExvW div {\n  border-color: var(--asb-white-color) transparent transparent transparent;\n}\n.Button-module_btnWarning__NGPUN.Button-module_btnOutlined__JGvhZ .Button-module_spinner__ZExvW div {\n  border-color: var(--asb-warning-color) transparent transparent transparent;\n}\n.Button-module_btnWarning__NGPUN.Button-module_btnOutlined__JGvhZ:hover .Button-module_spinner__ZExvW div {\n  border-color: var(--asb-gray-dark-color) transparent transparent transparent;\n}\n.Button-module_btnInfo__nIDA2.Button-module_btnOutlined__JGvhZ .Button-module_spinner__ZExvW div {\n  border-color: var(--asb-info-color) transparent transparent transparent;\n}\n.Button-module_btnInfo__nIDA2.Button-module_btnOutlined__JGvhZ:hover .Button-module_spinner__ZExvW div {\n  border-color: var(--asb-white-color) transparent transparent transparent;\n}\n\n/* Variant Text */\n.Button-module_btnPrimary__S4VEe.Button-module_btnText__DZXtg {\n  color: var(--asb-primary-color);\n  background-color: transparent;\n  box-shadow: none;\n}\n.Button-module_btnPrimary__S4VEe.Button-module_btnText__DZXtg:hover:not(.Button-module_btnDisabled__KBkpS) {\n  color: var(--asb-primary-dark-color);\n  background-color: transparent;\n  box-shadow: none;\n}\n.Button-module_btnDanger__DSgdk.Button-module_btnText__DZXtg {\n  color: var(--asb-danger-color);\n  background-color: transparent;\n  box-shadow: none;\n}\n.Button-module_btnDanger__DSgdk.Button-module_btnText__DZXtg:hover:not(.Button-module_btnDisabled__KBkpS) {\n  color: var(--asb-danger-dark-color);\n  background-color: transparent;\n  box-shadow: none;\n}\n.Button-module_btnSuccess__l1b3N.Button-module_btnText__DZXtg {\n  color: var(--asb-success-color);\n  background-color: transparent;\n  box-shadow: none;\n}\n.Button-module_btnSuccess__l1b3N.Button-module_btnText__DZXtg:hover:not(.Button-module_btnDisabled__KBkpS) {\n  color: var(--asb-success-dark-color);\n  background-color: transparent;\n  box-shadow: none;\n}\n.Button-module_btnWarning__NGPUN.Button-module_btnText__DZXtg {\n  color: var(--asb-warning-color);\n  background-color: transparent;\n  box-shadow: none;\n}\n.Button-module_btnWarning__NGPUN.Button-module_btnText__DZXtg:hover:not(.Button-module_btnDisabled__KBkpS) {\n  color: var(--asb-warning-dark-color);\n  background-color: transparent;\n  box-shadow: none;\n}\n.Button-module_btnInfo__nIDA2.Button-module_btnText__DZXtg {\n  color: var(--asb-info-color);\n  background-color: transparent;\n  box-shadow: none;\n}\n.Button-module_btnInfo__nIDA2.Button-module_btnText__DZXtg:hover:not(.Button-module_btnDisabled__KBkpS) {\n  color: var(--asb-info-dark-color);\n  background-color: transparent;\n  box-shadow: none;\n}\n\n.Button-module_btnPrimary__S4VEe.Button-module_btnText__DZXtg .Button-module_spinner__ZExvW div {\n  border-color: var(--asb-primary-color) transparent transparent transparent;\n}\n.Button-module_btnPrimary__S4VEe.Button-module_btnText__DZXtg:hover .Button-module_spinner__ZExvW div {\n  border-color: var(--asb-primary-dark-color) transparent transparent transparent;\n}\n.Button-module_btnDanger__DSgdk.Button-module_btnText__DZXtg .Button-module_spinner__ZExvW div {\n  border-color: var(--asb-danger-color) transparent transparent transparent;\n}\n.Button-module_btnDanger__DSgdk.Button-module_btnText__DZXtg:hover .Button-module_spinner__ZExvW div {\n  border-color: var(--asb-danger-dark-color) transparent transparent transparent;\n}\n.Button-module_btnSuccess__l1b3N.Button-module_btnText__DZXtg .Button-module_spinner__ZExvW div {\n  border-color: var(--asb-success-color) transparent transparent transparent;\n}\n.Button-module_btnSuccess__l1b3N.Button-module_btnText__DZXtg:hover .Button-module_spinner__ZExvW div {\n  border-color: var(--asb-success-dark-color) transparent transparent transparent;\n}\n.Button-module_btnWarning__NGPUN.Button-module_btnText__DZXtg .Button-module_spinner__ZExvW div {\n  border-color: var(--asb-warning-color) transparent transparent transparent;\n}\n.Button-module_btnWarning__NGPUN.Button-module_btnText__DZXtg:hover .Button-module_spinner__ZExvW div {\n  border-color: var(--asb-warning-dark-color) transparent transparent transparent;\n}\n.Button-module_btnInfo__nIDA2.Button-module_btnText__DZXtg .Button-module_spinner__ZExvW div {\n  border-color: var(--asb-info-color) transparent transparent transparent;\n}\n.Button-module_btnInfo__nIDA2.Button-module_btnText__DZXtg:hover .Button-module_spinner__ZExvW div {\n  border-color: var(--asb-info-dark-color) transparent transparent transparent;\n}\n\n/* Size */\n.Button-module_btnSmall__zhiDM {\n  padding: 5px 10px;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.Button-module_btnMedium__UDi5F {\n  padding: 7px 12px;\n  font-size: 1rem;\n  line-height: 1.5;\n}\n.Button-module_btnLarge__trnzA {\n  padding: 10px 16px;\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.Button-module_startIcon__hSezo,\n.Button-module_endIcon__waAzv {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Start Icon */\n.Button-module_btnSmall__zhiDM .Button-module_startIcon__hSezo {\n  margin-right: 6px;\n}\n.Button-module_btnMedium__UDi5F .Button-module_startIcon__hSezo {\n  margin-right: 8px;\n}\n.Button-module_btnLarge__trnzA .Button-module_startIcon__hSezo {\n  margin-right: 10px;\n}\n\n/* End Icon */\n.Button-module_btnSmall__zhiDM .Button-module_endIcon__waAzv {\n  margin-left: 6px;\n}\n.Button-module_btnMedium__UDi5F .Button-module_endIcon__waAzv {\n  margin-left: 8px;\n}\n.Button-module_btnLarge__trnzA .Button-module_endIcon__waAzv {\n  margin-left: 10px;\n}\n\n.Button-module_btnBlock__4-XFY {\n  width: 100%;\n}\n\n.Button-module_btnDisabled__KBkpS {\n  opacity: 0.5;\n  cursor: default;\n}\n";
var styles = {"btn":"Button-module_btn__Fx11X","btnPrimary":"Button-module_btnPrimary__S4VEe","btnDanger":"Button-module_btnDanger__DSgdk","btnSuccess":"Button-module_btnSuccess__l1b3N","btnWarning":"Button-module_btnWarning__NGPUN","btnInfo":"Button-module_btnInfo__nIDA2","btnOutlined":"Button-module_btnOutlined__JGvhZ","btnDisabled":"Button-module_btnDisabled__KBkpS","spinner":"Button-module_spinner__ZExvW","btnText":"Button-module_btnText__DZXtg","btnSmall":"Button-module_btnSmall__zhiDM","btnMedium":"Button-module_btnMedium__UDi5F","btnLarge":"Button-module_btnLarge__trnzA","startIcon":"Button-module_startIcon__hSezo","endIcon":"Button-module_endIcon__waAzv","btnBlock":"Button-module_btnBlock__4-XFY"};
styleInject(css_248z$1);

const Button = (_a) => {
    var { className = '', size = 'medium', paint = 'primary', variant = 'contained', block, disabled, startIcon, endIcon, icon, children } = _a, props = __rest(_a, ["className", "size", "paint", "variant", "block", "disabled", "startIcon", "endIcon", "icon", "children"]);
    return (React.createElement("button", Object.assign({ type: "button", disabled: disabled, className: clsx(styles.btn, {
            [styles.btnPrimary]: paint === 'primary',
            [styles.btnSuccess]: paint === 'success',
            [styles.btnWarning]: paint === 'warning',
            [styles.btnDanger]: paint === 'danger',
            [styles.btnInfo]: paint === 'info',
            [styles.btnOutlined]: variant === 'outlined',
            [styles.btnText]: variant === 'text',
            [styles.btnBlock]: block,
            [styles.btnDisabled]: disabled,
            [styles.btnSmall]: size === 'small',
            [styles.btnMedium]: size === 'medium',
            [styles.btnLarge]: size === 'large',
            [className]: !!className,
        }) }, props),
        startIcon && React.createElement("span", { className: styles.startIcon }, startIcon),
        icon || children,
        endIcon && React.createElement("span", { className: styles.endIcon }, endIcon)));
};

var css_248z = ".styles-module_root__Xsw1F {\n  background: gold;\n}\n";
var s = {"root":"styles-module_root__Xsw1F"};
styleInject(css_248z);

const TestComponent = ({ textText }) => {
    return React.createElement("div", { className: s.root }, textText !== null && textText !== void 0 ? textText : 'Hello!');
};

exports.Button = Button;
exports.TestComponent = TestComponent;
//# sourceMappingURL=index.js.map
