// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";function s(e,r,s,n){var d,i,o,a,f;if(e<=0)return NaN;if(1===e||0===s)return r[n];for(i=n,d=0,a=0,f=0;f<e;f++)(o=r[i])==o&&(d+=o,a+=1),i+=s;return 0===a?NaN:t(d/a)}function n(e,t,n){return s(e,t,n,r(e,n))}e(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
