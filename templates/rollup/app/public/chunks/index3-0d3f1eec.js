import{o as a,eW as r}from"../main.js";var t=a((function(a,r){!function(a){var r=function(a){var r=0,t=0,e=0,n=0;return a.map((function(a){var o=(a=a.slice())[0],c=o.toUpperCase();if(o!=c)switch(a[0]=c,o){case"a":a[6]+=e,a[7]+=n;break;case"v":a[1]+=n;break;case"h":a[1]+=e;break;default:for(var i=1;i<a.length;)a[i++]+=e,a[i++]+=n}switch(c){case"Z":e=r,n=t;break;case"H":e=a[1];break;case"V":n=a[1];break;case"M":e=r=a[1],n=t=a[2];break;default:e=a[a.length-2],n=a[a.length-1]}return a}))};var t=function(a,r){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return function(a,r){var t=[],e=!0,n=!1,o=void 0;try{for(var c,i=a[Symbol.iterator]();!(e=(c=i.next()).done)&&(t.push(c.value),!r||t.length!==r);e=!0);}catch(a){n=!0,o=a}finally{try{!e&&i.return&&i.return()}finally{if(n)throw o}}return t}(a,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")},e=2*Math.PI,n=function(a,r,t,e,n,o,c){var i=a.x,h=a.y;return{x:e*(i*=r)-n*(h*=t)+o,y:n*i+e*h+c}},o=function(a,r){var t=1.5707963267948966===r?.551915024494:-1.5707963267948966===r?-.551915024494:4/3*Math.tan(r/4),e=Math.cos(a),n=Math.sin(a),o=Math.cos(a+r),c=Math.sin(a+r);return[{x:e-n*t,y:n+e*t},{x:o+c*t,y:c-o*t},{x:o,y:c}]},c=function(a,r,t,e){var n=a*t+r*e;return n>1&&(n=1),n<-1&&(n=-1),(a*e-r*t<0?-1:1)*Math.acos(n)},i=function(a,r,t,n,o,i,h,s,u,l,f,v){var p=Math.pow(o,2),y=Math.pow(i,2),M=Math.pow(f,2),b=Math.pow(v,2),x=p*y-p*b-y*M;x<0&&(x=0),x/=p*b+y*M;var g=(x=Math.sqrt(x)*(h===s?-1:1))*o/i*v,m=x*-i/o*f,w=l*g-u*m+(a+t)/2,d=u*g+l*m+(r+n)/2,k=(f-g)/o,C=(v-m)/i,A=(-f-g)/o,j=(-v-m)/i,q=c(1,0,k,C),z=c(k,C,A,j);return 0===s&&z>0&&(z-=e),1===s&&z<0&&(z+=e),[w,d,q,z]},h=function(a){var r=a.px,c=a.py,h=a.cx,s=a.cy,u=a.rx,l=a.ry,f=a.xAxisRotation,v=void 0===f?0:f,p=a.largeArcFlag,y=void 0===p?0:p,M=a.sweepFlag,b=void 0===M?0:M,x=[];if(0===u||0===l)return[];var g=Math.sin(v*e/360),m=Math.cos(v*e/360),w=m*(r-h)/2+g*(c-s)/2,d=-g*(r-h)/2+m*(c-s)/2;if(0===w&&0===d)return[];u=Math.abs(u),l=Math.abs(l);var k=Math.pow(w,2)/Math.pow(u,2)+Math.pow(d,2)/Math.pow(l,2);k>1&&(u*=Math.sqrt(k),l*=Math.sqrt(k));var C=i(r,c,h,s,u,l,y,b,g,m,w,d),A=t(C,4),j=A[0],q=A[1],z=A[2],O=A[3],T=Math.abs(O)/(e/4);Math.abs(1-T)<1e-7&&(T=1);var F=Math.max(Math.ceil(T),1);O/=F;for(var S=0;S<F;S++)x.push(o(z,O)),z+=O;return x.map((function(a){var r=n(a[0],u,l,m,g,j,q),t=r.x,e=r.y,o=n(a[1],u,l,m,g,j,q),c=o.x,i=o.y,h=n(a[2],u,l,m,g,j,q);return{x1:t,y1:e,x2:c,y2:i,x:h.x,y:h.y}}))},s=function(a){for(var r,t=[],e=0,n=0,o=0,c=0,i=null,s=null,f=0,v=0,p=0,y=a.length;p<y;p++){var M=a[p],b=M[0];switch(b){case"M":o=M[1],c=M[2];break;case"A":var x=h({px:f,py:v,cx:M[6],cy:M[7],rx:M[1],ry:M[2],xAxisRotation:M[3],largeArcFlag:M[4],sweepFlag:M[5]});if(!x.length)continue;for(var g,m=0;m<x.length;m++)M=["C",(g=x[m]).x1,g.y1,g.x2,g.y2,g.x,g.y],m<x.length-1&&t.push(M);break;case"S":var w=f,d=v;"C"!=r&&"S"!=r||(w+=w-e,d+=d-n),M=["C",w,d,M[1],M[2],M[3],M[4]];break;case"T":"Q"==r||"T"==r?(i=2*f-i,s=2*v-s):(i=f,s=v),M=l(f,v,i,s,M[1],M[2]);break;case"Q":i=M[1],s=M[2],M=l(f,v,M[1],M[2],M[3],M[4]);break;case"L":M=u(f,v,M[1],M[2]);break;case"H":M=u(f,v,M[1],v);break;case"V":M=u(f,v,f,M[1]);break;case"Z":M=u(f,v,o,c)}r=b,f=M[M.length-2],v=M[M.length-1],M.length>4?(e=M[M.length-4],n=M[M.length-3]):(e=f,n=v),t.push(M)}return t};function u(a,r,t,e){return["C",a,r,t,e,t,e]}function l(a,r,t,e,n,o){return["C",a/3+2/3*t,r/3+2/3*e,n/3+2/3*t,o/3+2/3*e,n,o]}var f=function(a){var r=[];return a.replace(p,(function(a,t,e){var n=t.toLowerCase();for(e=function(a){var r=a.match(y);return r?r.map(Number):[]}(e),"m"==n&&e.length>2&&(r.push([t].concat(e.splice(0,2))),n="l",t="m"==t?"l":"L");;){if(e.length==v[n])return e.unshift(t),r.push(e);if(e.length<v[n])throw new Error("malformed path data");r.push([t].concat(e.splice(0,v[n])))}})),r},v={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},p=/([astvzqmhlc])([^astvzqmhlc]*)/gi;var y=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;a.draw=function(a,t){for(var e=s(r(f(t))),n=0;n<e.length;n++){var o=e[n];"M"===o[0]?a.moveTo(o[1],o[2]):"C"===o[0]&&a.bezierCurveTo(o[1],o[2],o[3],o[4],o[5],o[6])}},Object.defineProperty(a,"__esModule",{value:!0})}(r)})),e=r(t),n=Object.freeze(Object.assign(Object.create(null),t,{default:e}));export{n as i};
