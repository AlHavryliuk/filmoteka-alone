function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=e.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},e.parcelRequired7c6=i),i("jOU4Y"),i("TIRvd"),i("kJ7C1"),i("9Bkxl"),i("krGWQ"),i("cky31"),i("g5ITN");var o,a=i("kJ7C1"),u=i("krGWQ"),l={},f={};f=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var c,d={},v={};c="object"==typeof e&&e&&e.Object===Object&&e;var s="object"==typeof self&&self&&self.Object===Object&&self,p=c||s||Function("return this")();d=function(){return v.Date.now()};var y={},g={},b={},m=/\s/;b=function(t){for(var e=t.length;e--&&m.test(t.charAt(e)););return e};var h=/^\s+/;g=function(t){return t?t.slice(0,b(t)+1).replace(h,""):t};var w,j={},T={};w=(v=p).Symbol;var x={},O=Object.prototype,E=O.hasOwnProperty,k=O.toString,N=w?w.toStringTag:void 0;x=function(t){var e=E.call(t,N),n=t[N];try{t[N]=void 0;var r=!0}catch(t){}var i=k.call(t);return r&&(e?t[N]=n:delete t[N]),i};var M={},S=Object.prototype.toString;M=function(t){return S.call(t)};var D=w?w.toStringTag:void 0;T=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":D&&D in Object(t)?x(t):M(t)};var W={};W=function(t){return null!=t&&"object"==typeof t};j=function(t){return"symbol"==typeof t||W(t)&&"[object Symbol]"==T(t)};var L=/^[-+]0x[0-9a-f]+$/i,U=/^0b[01]+$/i,_=/^0o[0-7]+$/i,C=parseInt;y=function(t){if("number"==typeof t)return t;if(j(t))return NaN;if(f(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=f(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=g(t);var n=U.test(t);return n||_.test(t)?C(t.slice(2),n?2:8):L.test(t)?NaN:+t};var I=Math.max,P=Math.min;l=function(t,e,n){var r,i,o,a,u,l,c=0,v=!1,s=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=r,o=i;return r=i=void 0,c=e,a=t.apply(o,n)}function b(t){return c=t,u=setTimeout(h,e),v?g(t):a}function m(t){var n=t-l;return void 0===l||n>=e||n<0||s&&t-c>=o}function h(){var t=d();if(m(t))return w(t);u=setTimeout(h,function(t){var n=e-(t-l);return s?P(n,o-(t-c)):n}(t))}function w(t){return u=void 0,p&&r?g(t):(r=i=void 0,a)}function j(){var t=d(),n=m(t);if(r=arguments,i=this,l=t,n){if(void 0===u)return b(l);if(s)return clearTimeout(u),u=setTimeout(h,e),g(l)}return void 0===u&&(u=setTimeout(h,e)),a}return e=y(e)||0,f(n)&&(v=!!n.leading,o=(s="maxWait"in n)?I(y(n.maxWait)||0,e):o,p="trailing"in n?!!n.trailing:p),j.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},j.flush=function(){return void 0===u?a:w(d())},j};o=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return f(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),l(t,e,{leading:r,maxWait:e,trailing:i})};var R=i("as7W7"),$=i("cky31");window.addEventListener("load",(async()=>{document.location.href.includes("index")&&(await R.loadData.genres(),await R.loadData.trends(),a.modalPopup.addModalListeners(),$.render.loadMoreBtn(),u.refs.galleryEl.addEventListener("click",a.modalPopup.open),u.refs.inputSearchEl.addEventListener("input",t(o)(R.loadData.searchMovies,1e3)))}));
//# sourceMappingURL=index.c5e577c0.js.map