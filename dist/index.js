"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=v(function(C,m){
var _=require('@stdlib/blas-base-ddot/dist').ndarray,c=require('@stdlib/blas-base-dnrm2/dist').ndarray;function E(r,e,i,n,a,t,u){var d,q,y;return r<=0?0:(y=_(r,e,i,n,a,t,u),q=c(r,e,i,n),d=c(r,a,t,u),y/(q*d))}m.exports=E
});var x=v(function(D,p){
var l=require('@stdlib/strided-base-stride2offset/dist'),O=o();function b(r,e,i,n,a){var t=l(r,i),u=l(r,a);return O(r,e,i,t,n,a,u)}p.exports=b
});var f=v(function(F,j){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=x(),h=o();g(S,"ndarray",h);j.exports=S
});var k=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=f(),s,R=w(k(__dirname,"./native.js"));z(R)?s=A:s=R;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
