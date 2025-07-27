"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=v(function(w,d){
var j=require('@stdlib/number-float64-base-to-float32/dist');function R(e,r,a,f){var s,t,n,i,u;if(e<=0)return NaN;if(e===1||a===0)return r[f];for(t=f,s=0,i=0,u=0;u<e;u++)n=r[t],n===n&&(s+=n,i+=1),t+=a;return i===0?NaN:j(s/i)}d.exports=R
});var c=v(function(z,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=o();function F(e,r,a){return E(e,r,a,_(e,a))}m.exports=F
});var l=v(function(A,y){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=c(),O=o();N(p,"ndarray",O);y.exports=p
});var T=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=l(),q,x=b(T(__dirname,"./native.js"));g(x)?q=h:q=x;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
