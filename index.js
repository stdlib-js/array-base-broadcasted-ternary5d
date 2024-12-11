// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(e){var r,i,a;for(i=e.length,r=[],a=0;a<i;a++)r.push(e[a]);return r}function r(e){return"number"==typeof e}function i(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function a(e,r,a){var n=!1,t=r-e.length;return t<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=a?e+i(t):i(t)+e,n&&(e="-"+e)),e}var n=String.prototype.toLowerCase,t=String.prototype.toUpperCase;function s(e){var i,s,o;switch(e.specifier){case"b":i=2;break;case"o":i=8;break;case"x":case"X":i=16;break;default:i=10}if(s=e.arg,o=parseInt(s,10),!isFinite(o)){if(!r(s))throw new Error("invalid integer. Value: "+s);o=0}return o<0&&("u"===e.specifier||10!==i)&&(o=4294967295+o+1),o<0?(s=(-o).toString(i),e.precision&&(s=a(s,e.precision,e.padRight)),s="-"+s):(s=o.toString(i),o||e.precision?e.precision&&(s=a(s,e.precision,e.padRight)):s="",e.sign&&(s=e.sign+s)),16===i&&(e.alternate&&(s="0x"+s),s=e.specifier===t.call(e.specifier)?t.call(s):n.call(s)),8===i&&e.alternate&&"0"!==s.charAt(0)&&(s="0"+s),s}var o=Math.abs,c=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,d=/e\+(\d)$/,l=/e-(\d)$/,h=/^(\d+)$/,g=/^(\d+)e/,u=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function b(e){var i,a,n=parseFloat(e.arg);if(!isFinite(n)){if(!r(e.arg))throw new Error("invalid floating-point number. Value: "+a);n=e.arg}switch(e.specifier){case"e":case"E":a=n.toExponential(e.precision);break;case"f":case"F":a=n.toFixed(e.precision);break;case"g":case"G":o(n)<1e-4?((i=e.precision)>0&&(i-=1),a=n.toExponential(i)):a=n.toPrecision(e.precision),e.alternate||(a=f.call(a,m,"$1e"),a=f.call(a,w,"e"),a=f.call(a,u,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return a=f.call(a,d,"e+0$1"),a=f.call(a,l,"e-0$1"),e.alternate&&(a=f.call(a,h,"$1."),a=f.call(a,g,"$1.e")),n>=0&&e.sign&&(a=e.sign+a),a=e.specifier===p.call(e.specifier)?p.call(a):c.call(a)}function v(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}var y=String.fromCharCode,x=Array.isArray;function E(e){return e!=e}function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,i,n,t,o,c,p,f,d,l,h,g,u;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,f=0;f<e.length;f++)if("string"==typeof(n=e[f]))c+=n;else{if(r=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(p=n.mapping),i=n.flags,d=0;d<i.length;d++)switch(t=i.charAt(d)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=i.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+t)}if("*"===n.width){if(n.width=parseInt(arguments[p],10),p+=1,E(n.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[p],10),p+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[p],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):y(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,h=n.width,g=n.padRight,u=void 0,(u=h-l.length)<0?l:l=g?l+v(u):v(u)+l)),c+=n.arg||"",p+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,i,a,n;for(i=[],n=0,a=S.exec(e);a;)(r=e.slice(n,S.lastIndex-a[0].length)).length&&i.push(r),i.push($(a)),n=S.lastIndex,a=S.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function A(e){var r,i;if("string"!=typeof e)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return I.apply(null,r)}function F(r,i,a){var n,t,s,o,c,p,f,d;if((o=a.length)<(c=i.length))throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(n=r,f=c;f<o;f++)n=[n];for(s=function(e,r){var i,a;for(i=[],a=0;a<r;a++)i.push(e);return i}(0,o),f=o-1;f>=0;f--)if(!((d=c-o+f)<0)){if(p=i[d],0!==(t=a[f])&&t<p)throw new Error(A("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",e(i).join(", "),e(a).join(", "),f));if(p===t)s[f]=1;else{if(1!==p)throw new Error(A("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",e(i).join(", "),e(a).join(", "),f));s[f]=0}}return{ref:r,data:n,shape:e(a),strides:s}}return function(e,r,i){var a,n,t,s,o,c,p,f,d,l,h,g,u,w,m,b,v,y,x,E,k,I,S,$,V,A,T,C,R,j,Z,D,W,z,L,G,U,X,M,O,P,q,B,H,J,K,N,Q,Y,_,ee,re,ie,ae,ne,te,se,oe,ce,pe,fe,de,le;if(b=(ie=r[3])[4],v=ie[3],y=ie[2],x=ie[1],E=ie[0],!(b<=0||v<=0||y<=0||x<=0||E<=0))for(pe=(ce=F(e[0],r[0],ie)).data,a=(ae=ce.strides)[4],n=ae[3],t=ae[2],s=ae[1],o=ae[0],fe=(ce=F(e[1],r[1],ie)).data,c=(ae=ce.strides)[4],p=ae[3],f=ae[2],d=ae[1],l=ae[0],de=(ce=F(e[2],r[2],ie)).data,h=(ae=ce.strides)[4],g=ae[3],u=ae[2],w=ae[1],m=ae[0],le=e[3],j=0,L=0,O=0,V=0;V<E;V++){for(R=0,z=0,M=0,H=pe[j],Q=fe[L],re=de[O],oe=le[V],$=0;$<x;$++){for(C=0,W=0,X=0,B=H[R],N=Q[z],ee=re[M],se=oe[$],S=0;S<y;S++){for(T=0,D=0,U=0,q=B[C],K=N[W],_=ee[X],te=se[S],I=0;I<v;I++){for(A=0,Z=0,G=0,P=q[T],J=K[D],Y=_[U],ne=te[I],k=0;k<b;k++)ne[k]=i(P[A],J[Z],Y[G]),A+=a,Z+=c,G+=h;T+=n,D+=p,U+=g}C+=t,W+=f,X+=u}R+=s,z+=d,M+=w}j+=o,L+=l,O+=m}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).bternary5d=r();
//# sourceMappingURL=index.js.map
