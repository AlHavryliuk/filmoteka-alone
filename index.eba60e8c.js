function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i("jOU4Y"),i("TIRvd"),i("kJ7C1"),i("9Bkxl"),i("krGWQ"),i("cky31"),i("g5ITN");var o,a=i("kJ7C1"),u=i("krGWQ"),l={},c={};c=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var f,d={},v={};f="object"==typeof t&&t&&t.Object===Object&&t;var s="object"==typeof self&&self&&self.Object===Object&&self,p=f||s||Function("return this")();d=function(){return v.Date.now()};var y={},g={},b={},m=/\s/;b=function(e){for(var t=e.length;t--&&m.test(e.charAt(t)););return t};var h=/^\s+/;g=function(e){return e?e.slice(0,b(e)+1).replace(h,""):e};var T,w={},j={};T=(v=p).Symbol;var x={},O=Object.prototype,E=O.hasOwnProperty,k=O.toString,N=T?T.toStringTag:void 0;x=function(e){var t=E.call(e,N),n=e[N];try{e[N]=void 0;var r=!0}catch(e){}var i=k.call(e);return r&&(t?e[N]=n:delete e[N]),i};var S={},D=Object.prototype.toString;S=function(e){return D.call(e)};var L=T?T.toStringTag:void 0;j=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":L&&L in Object(e)?x(e):S(e)};var M={};M=function(e){return null!=e&&"object"==typeof e};w=function(e){return"symbol"==typeof e||M(e)&&"[object Symbol]"==j(e)};var W=/^[-+]0x[0-9a-f]+$/i,P=/^0b[01]+$/i,U=/^0o[0-7]+$/i,_=parseInt;y=function(e){if("number"==typeof e)return e;if(w(e))return NaN;if(c(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=c(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=g(e);var n=P.test(e);return n||U.test(e)?_(e.slice(2),n?2:8):W.test(e)?NaN:+e};var C=Math.max,I=Math.min;l=function(e,t,n){var r,i,o,a,u,l,f=0,v=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,o=i;return r=i=void 0,f=t,a=e.apply(o,n)}function b(e){return f=e,u=setTimeout(h,t),v?g(e):a}function m(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-f>=o}function h(){var e=d();if(m(e))return T(e);u=setTimeout(h,function(e){var n=t-(e-l);return s?I(n,o-(e-f)):n}(e))}function T(e){return u=void 0,p&&r?g(e):(r=i=void 0,a)}function w(){var e=d(),n=m(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return b(l);if(s)return clearTimeout(u),u=setTimeout(h,t),g(l)}return void 0===u&&(u=setTimeout(h,t)),a}return t=y(t)||0,c(n)&&(v=!!n.leading,o=(s="maxWait"in n)?C(y(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==u&&clearTimeout(u),f=0,r=l=i=u=void 0},w.flush=function(){return void 0===u?a:T(d())},w};o=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return c(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),l(e,t,{leading:r,maxWait:t,trailing:i})};var R=i("as7W7");window.addEventListener("load",(async()=>{document.location.href.includes("index")&&(await R.loadData.genres(),await R.loadData.trends(),a.modalPopup.addModalListeners(),u.refs.popupTrailerEl.addEventListener("click",a.modalPopup.escapePopupTrailer),u.refs.galleryEl.addEventListener("click",a.modalPopup.open),u.refs.inputSearchEl.addEventListener("input",e(o)(R.loadData.searchMovies,1e3)))}));
//# sourceMappingURL=index.eba60e8c.js.map