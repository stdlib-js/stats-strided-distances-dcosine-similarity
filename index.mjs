// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import{ndarray as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-ddot@v0.3.0-esm/index.mjs";import{ndarray as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-dnrm2@v0.3.0-esm/index.mjs";function d(s,e,d,n,i,a,m){return s<=0?NaN:t(s,e,d,n,i,a,m)/(r(s,e,d,n)*r(s,i,a,m))}function n(s,t,r,n,i){return d(s,t,r,e(s,r),n,i,e(s,i))}s(n,"ndarray",d);export{n as default,d as ndarray};
//# sourceMappingURL=index.mjs.map
