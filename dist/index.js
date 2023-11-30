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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
var styles$1 = {"btn":"Button-module_btn__Fx11X","btnPrimary":"Button-module_btnPrimary__S4VEe","btnDanger":"Button-module_btnDanger__DSgdk","btnSuccess":"Button-module_btnSuccess__l1b3N","btnWarning":"Button-module_btnWarning__NGPUN","btnInfo":"Button-module_btnInfo__nIDA2","btnOutlined":"Button-module_btnOutlined__JGvhZ","btnDisabled":"Button-module_btnDisabled__KBkpS","spinner":"Button-module_spinner__ZExvW","btnText":"Button-module_btnText__DZXtg","btnSmall":"Button-module_btnSmall__zhiDM","btnMedium":"Button-module_btnMedium__UDi5F","btnLarge":"Button-module_btnLarge__trnzA","startIcon":"Button-module_startIcon__hSezo","endIcon":"Button-module_endIcon__waAzv","btnBlock":"Button-module_btnBlock__4-XFY"};
styleInject(css_248z$1);

const Button = (_a) => {
    var { className = '', size = 'medium', paint = 'primary', variant = 'contained', block, disabled, startIcon, endIcon, icon, children } = _a, props = __rest(_a, ["className", "size", "paint", "variant", "block", "disabled", "startIcon", "endIcon", "icon", "children"]);
    return (React.createElement("button", Object.assign({ type: "button", disabled: disabled, className: clsx(styles$1.btn, {
            [styles$1.btnPrimary]: paint === 'primary',
            [styles$1.btnSuccess]: paint === 'success',
            [styles$1.btnWarning]: paint === 'warning',
            [styles$1.btnDanger]: paint === 'danger',
            [styles$1.btnInfo]: paint === 'info',
            [styles$1.btnOutlined]: variant === 'outlined',
            [styles$1.btnText]: variant === 'text',
            [styles$1.btnBlock]: block,
            [styles$1.btnDisabled]: disabled,
            [styles$1.btnSmall]: size === 'small',
            [styles$1.btnMedium]: size === 'medium',
            [styles$1.btnLarge]: size === 'large',
            [className]: !!className,
        }) }, props),
        startIcon && React.createElement("span", { className: styles$1.startIcon }, startIcon),
        icon || children,
        endIcon && React.createElement("span", { className: styles$1.endIcon }, endIcon)));
};

const CheckIcon = () => (React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("g", { id: "ic - 24 / Check" },
        React.createElement("path", { id: "icon/action/done_24px", d: "M8.80001 15.9L4.60001 11.7L3.20001 13.1L8.80001 18.7L20.8 6.70005L19.4 5.30005L8.80001 15.9Z", fill: "currentColor" }))));

const CrossIcon = () => (React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("g", { id: "Small=No" },
        React.createElement("path", { id: "Vector", fillRule: "evenodd", clipRule: "evenodd", d: "M13.4143 12.0002L18.7073 6.70725C19.0983 6.31625 19.0983 5.68425 18.7073 5.29325C18.3163 4.90225 17.6842 4.90225 17.2932 5.29325L12.0002 10.5863L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5863 12.0002L5.29325 17.2932C4.90225 17.6842 4.90225 18.3163 5.29325 18.7073C5.48825 18.9023 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9023 6.70725 18.7073L12.0002 13.4143L17.2932 18.7073C17.4882 18.9023 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5123 18.9023 18.7073 18.7073C19.0983 18.3163 19.0983 17.6842 18.7073 17.2932L13.4143 12.0002Z", fill: "currentColor" }))));

var css_248z = ".SmartButton-module_content__mvcJ- {\n  display: flex;\n  align-items: center;\n}\n\n.SmartButton-module_visibility__nKxzi {\n  visibility: hidden;\n}\n\n.SmartButton-module_overlay__b83Tk {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--asb-border-radius);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.SmartButton-module_overlay__b83Tk svg {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.SmartButton-module_spinner__9CASa {\n  display: inline-block;\n  position: relative;\n  width: 24px;\n  height: 24px;\n}\n.SmartButton-module_spinner__9CASa div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  border: 2px solid var(--asb-white-color);\n  border-radius: 50%;\n  animation: SmartButton-module_spinner__9CASa 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: var(--asb-white-color) transparent transparent transparent;\n}\n@keyframes SmartButton-module_spinner__9CASa {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n";
var styles = {"content":"SmartButton-module_content__mvcJ-","visibility":"SmartButton-module_visibility__nKxzi","overlay":"SmartButton-module_overlay__b83Tk","spinner":"SmartButton-module_spinner__9CASa"};
styleInject(css_248z);

const states = {
    default: 'Submit',
    loading: (React.createElement("div", { className: styles.spinner },
        React.createElement("div", null))),
    success: React.createElement(CheckIcon, null),
    error: React.createElement(CrossIcon, null),
};
const SmartButton = (_a) => {
    var { children, state: _state, onClick, disabled } = _a, props = __rest(_a, ["children", "state", "onClick", "disabled"]);
    let timeoutId = undefined;
    const [isDisabled, setIsDisabled] = React.useState(disabled || false);
    const [state, setState] = React.useState('default');
    function handleSubmit(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (isDisabled || !onClick)
                return;
            if (onClick.constructor.name !== 'AsyncFunction')
                return onClick(event);
            clearTimeout(timeoutId);
            setState('loading');
            setIsDisabled(true);
            try {
                yield onClick(event);
                setState('success');
            }
            catch (error) {
                setState('error');
                console.error(`Submit error: ${error}`);
            }
            finally {
                timeoutId = setTimeout(() => {
                    setState(_state || 'default');
                    setIsDisabled(false);
                }, 2000);
            }
        });
    }
    React.useEffect(() => {
        if (_state) {
            Object.hasOwn(states, _state) ? setState(_state) : setState('default');
        }
    }, [_state]);
    return (React.createElement(Button, Object.assign({ disabled: disabled, onClick: onClick ? handleSubmit : undefined }, props),
        state !== 'default' && React.createElement("div", { className: styles.overlay }, state && states[state]),
        React.createElement("span", { className: clsx(styles.content, { [styles.visibility]: state !== 'default' }) }, children || states.default)));
};

function getButtonStatus({ isSubmitting, submitCount, isValid, errors, isSubmitted, isSubmitSuccessful, }) {
    if (isSubmitting) {
        return 'loading';
    }
    if (isSubmitSuccessful) {
        return 'success';
    }
    if (submitCount && (!isValid || (isSubmitted && Object.keys(errors).length))) {
        return 'error';
    }
    return 'default';
}
function useButtonStatus(formState, { timeout = 2000 } = {}) {
    const [buttonStatus, setButtonStatus] = React.useState('default');
    const status = getButtonStatus(formState);
    React.useEffect(() => {
        setButtonStatus(status);
        if (['error', 'success'].includes(status)) {
            setTimeout(() => {
                setButtonStatus('default');
            }, timeout);
        }
    }, [status, timeout]);
    return buttonStatus;
}

exports.Button = Button;
exports.SmartButton = SmartButton;
exports.useButtonStatus = useButtonStatus;
//# sourceMappingURL=index.js.map
