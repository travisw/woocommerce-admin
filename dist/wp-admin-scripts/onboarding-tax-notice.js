this.wc=this.wc||{},this.wc.onboardingTaxNotice=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=467)}({11:function(t,e){!function(){t.exports=this.wp.data}()},2:function(t,e){!function(){t.exports=this.wp.i18n}()},25:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return p})),n.d(e,"g",(function(){return m})),n.d(e,"h",(function(){return b})),n.d(e,"f",(function(){return y}));var r=n(31),o=n.n(r),i=n(2),c=["wcAdminSettings","preloadSettings"],u="object"===("undefined"==typeof wcSettings?"undefined":o()(wcSettings))?wcSettings:{},a=Object.keys(u).reduce((function(t,e){return c.includes(e)||(t[e]=u[e]),t}),{}),s=a.adminUrl,d=(a.countries,a.currency),f=a.locale,l=a.orderStatuses,p=(a.siteTitle,a.wcAssetUrl);function m(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};if(c.includes(t))throw new Error(Object(i.__)("Mutable settings should be accessed via data store."));var r=a.hasOwnProperty(t)?a[t]:e;return n(r,e)}function b(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};if(c.includes(t))throw new Error(Object(i.__)("Mutable settings should be mutated via data store."));a[t]=n(e)}function y(t){return(s||"")+t}},31:function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},467:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(11),i=n(54),c=n(25),u=function(){var t=document.querySelector(".woocommerce-save-button");t.classList.contains("has-tax")||function t(e){return e&&!e.disabled?new Promise((function(t){window.requestAnimationFrame(t)})).then((function(){return t(e)})):Promise.resolve(!0)}(t).then((function(){document.querySelector(".wc_tax_rates .tips")&&(t.classList.add("has-tax"),Object(o.dispatch)("core/notices").createSuccessNotice(Object(r.__)("You've added your first tax rate!","woocommerce-admin"),{id:"WOOCOMMERCE_ONBOARDING_TAX_NOTICE",actions:[{url:Object(c.f)("admin.php?page=wc-admin"),label:Object(r.__)("Continue setup.","woocommerce-admin")}]}))}))};Object(i.a)((function(){var t=document.querySelector(".woocommerce-save-button");window.htmlSettingsTaxLocalizeScript&&window.htmlSettingsTaxLocalizeScript.rates&&!window.htmlSettingsTaxLocalizeScript.rates.length&&t&&t.addEventListener("click",u)}))},54:function(t,e,n){"use strict";function r(t){"complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",t):t()}n.d(e,"a",(function(){return r}))}});