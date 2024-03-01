"use strict";var o=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var m=o(function(k,q){
var j=require('@stdlib/number-float64-base-to-float32/dist');function N(r,a,u){var t,n,i,e,s;if(r<=0)return NaN;if(r===1||u===0)return a[0];for(u<0?n=(1-r)*u:n=0,t=0,e=0,s=0;s<r;s++)i=a[n],i===i&&(t+=i,e+=1),n+=u;return e===0?NaN:j(t/e)}q.exports=N
});var c=o(function(w,l){
var F=require('@stdlib/number-float64-base-to-float32/dist');function R(r,a,u,t){var n,i,e,s,v;if(r<=0)return NaN;if(r===1||u===0)return a[t];for(i=t,n=0,s=0,v=0;v<r;v++)e=a[i],e===e&&(n+=e,s+=1),i+=u;return s===0?NaN:F(n/s)}l.exports=R
});var x=o(function(z,d){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=m(),_=c();T(p,"ndarray",_);d.exports=p
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=x(),f,y=O(E(__dirname,"./native.js"));b(y)?f=g:f=y;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
