import{i as e,k as t,aH as n,am as o,ao as r,b1 as s}from"../main.js";class l{constructor(e=null,t={},n,o){this.displayId=0,this.geohashIndexed=!1,this.geohashX=0,this.geohashY=0,this.geometry=e,t&&(this.attributes=t),n&&(this.centroid=n),null!=o&&(this.objectId=o)}get hasGeometry(){return!(!this.geometry||!this.geometry.coords||!this.geometry.coords.length)}weakClone(){const e=new l(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashIndexed=this.geohashIndexed,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}}class i{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new i;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}class c{constructor(e=[],t=[],n=!1){this.lengths=null!=e?e:[],this.coords=null!=t?t:[],this.hasIndeterminateRingOrder=n}get isPoint(){return 0===this.lengths.length}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let n=0;n<this.lengths.length;n++){const o=this.lengths[n];for(let n=0;n<o;n++)e(this.coords[2*(n+t)],this.coords[2*(n+t)+1]);t+=o}}clone(){return new c(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}function u(e,t){return e?t?4:3:t?3:2}const h=e.getLogger("esri.tasks.support.optimizedFeatureSet"),a={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},f=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s},g=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+2]},d=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+3]},m=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+2],e[n+3]=t[o+3]};function y(e,t,n,o){if(e){if(n)return t&&o?m:g;if(t&&o)return d}else if(t&&o)return g;return f}function p({scale:e,translate:t},n){return Math.round((n-t[0])/e[0])}function b({scale:e,translate:t},n){return Math.round((t[1]-n)/e[1])}function I({scale:e,translate:t},n){return n*e[0]+t[0]}function w({scale:e,translate:t},n){return t[1]-n*e[1]}function G(e,t,n){return e?t?n?k(e):M(e):n?x(e):T(e):null}function T(e){const t=e.coords;return{x:t[0],y:t[1]}}function F(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function M(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2]}}function N(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function x(e){const t=e.coords;return{x:t[0],y:t[1],m:t[2]}}function P(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function k(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2],m:t[3]}}function Z(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function j(e,t){return e&&t?Z:e?N:t?P:F}function q(e,t,n,o,r){const s=j(n,o);for(const n of t){const{geometry:t,attributes:o}=n;let i;t&&(i=s(new c,t)),e.push(new l(i,o,null,o[r]))}return e}function R(e,t,n){if(!e)return null;const o=u(t,n),r=[];for(let t=0;t<e.coords.length;t+=o){const n=[];for(let r=0;r<o;r++)n.push(e.coords[t+r]);r.push(n)}return t?n?{points:r,hasZ:t,hasM:n}:{points:r,hasZ:t}:n?{points:r,hasM:n}:{points:r}}function v(e,t,n,o,r){const s=u(n,o);for(const n of t){const t=n.geometry,o=n.attributes;let i;t&&(i=L(new c,t,s)),e.push(new l(i,o,null,o[r]))}return e}function L(e,t,n=u(t.hasZ,t.hasM)){e.lengths[0]=t.points.length;const o=e.coords;let r=0;for(const e of t.points)for(let t=0;t<n;t++)o[r++]=e[t];return e}function z(e,t,n){if(!e)return null;const o=u(t,n),{coords:r,lengths:s}=e,l=[];let i=0;for(const e of s){const t=[];for(let n=0;n<e;n++){const e=[];for(let t=0;t<o;t++)e.push(r[i++]);t.push(e)}l.push(t)}return t?n?{paths:l,hasZ:t,hasM:n}:{paths:l,hasZ:t}:n?{paths:l,hasM:n}:{paths:l}}function E(e,t,n,o,r){const s=u(n,o);for(const n of t){const t=n.geometry,o=n.attributes;let i;t&&(i=Y(new c,t,s)),e.push(new l(i,o,null,o[r]))}return e}function Y(e,t,n=u(t.hasZ,t.hasM)){const{lengths:o,coords:r}=e;let s=0;for(const e of t.paths){for(const t of e)for(let e=0;e<n;e++)r[s++]=t[e];o.push(e.length)}return e}function S(e,t,n){if(!e)return null;const o=u(t,n),{coords:r,lengths:s}=e,l=[];let i=0;for(const e of s){const t=[];for(let n=0;n<e;n++){const e=[];for(let t=0;t<o;t++)e.push(r[i++]);t.push(e)}l.push(t)}return t?n?{rings:l,hasZ:t,hasM:n}:{rings:l,hasZ:t}:n?{rings:l,hasM:n}:{rings:l}}function U(e,t,n,o,r){for(const s of t){const t=s.geometry,i=s.centroid,u=s.attributes;let h;t&&(h=V(new c,t,n,o)),i?e.push(new l(h,u,F(new c,i),u[r])):e.push(new l(h,u,null,u[r]))}return e}function V(e,t,n=t.hasZ,o=t.hasM){return $(e,t.rings,n,o),e}function $(e,t,n,o){const r=u(n,o),{lengths:s,coords:l}=e;let i=0;s.length=l.length=0;for(const e of t){for(const t of e)for(let e=0;e<r;e++)l[i++]=t[e];s.push(e.length)}return e}const A=[],O=[];function _(e,t,n,o,r){A[0]=e;const[s]=C(O,A,t,n,o,r);return A.length=O.length=0,s}function C(e,n,o,r,s,i){if(e.length=0,!o){for(const t of n){const n=t.attributes[i];e.push(new l(null,t.attributes,null,n))}return e}switch(o){case"esriGeometryPoint":return q(e,n,r,s,i);case"esriGeometryMultipoint":return v(e,n,r,s,i);case"esriGeometryPolyline":return E(e,n,r,s,i);case"esriGeometryPolygon":return U(e,n,r,s,i);default:h.error("convertToFeatureSet:unknown-geometry",new t(`Unable to parse unknown geometry type '${o}'`)),e.length=0}return e}function X(e,n,o,r,s,l){const i=e.length;switch(o){case"esriGeometryPoint":q(e,n,r,s,l);break;case"esriGeometryMultipoint":v(e,n,r,s,l);break;case"esriGeometryPolyline":E(e,n,r,s,l);break;case"esriGeometryPolygon":U(e,n,r,s,l);break;default:h.error("convertToFeatureSet:unknown-geometry",new t(`Unable to parse unknown geometry type '${o}'`))}for(let t=0;t<n.length;t++)e[t+i].geometryType=o,e[t+i].insertAfter=n[t].insertAfter,e[t+i].groupId=n[t].groupId;return e}function H(e,t,n,o){O[0]=e,J(A,O,t,n,o);const r=A[0];return A.length=O.length=0,r}function B(e,l,i){if(!e)return null;const a=new c;return"hasZ"in e&&null==l&&(l=e.hasZ),"hasM"in e&&null==i&&(i=e.hasM),n(e)?j(null!=l?l:null!=e.z,null!=i?i:null!=e.m)(a,e):o(e)?V(a,e,l,i):r(e)?Y(a,e,u(l,i)):s(e)?L(a,e,u(l,i)):void h.error("convertFromGeometry:unknown-geometry",new t(`Unable to parse unknown geometry type '${e}'`))}function D(e,n,o,r){const s=e&&("coords"in e?e:e.geometry);if(!s)return null;switch(n){case"esriGeometryPoint":{let e=T;return o&&r?e=k:o?e=M:r&&(e=x),e(s)}case"esriGeometryMultipoint":return R(s,o,r);case"esriGeometryPolyline":return z(s,o,r);case"esriGeometryPolygon":return S(s,o,r);default:return void h.error("convertToGeometry:unknown-geometry",new t(`Unable to parse unknown geometry type '${n}'`))}}function J(e,n,o,r,s){switch(e.length=0,o){case"esriGeometryPoint":return function(e,t,n,o){let r=T;n&&o?r=k:n?r=M:o&&(r=x);for(const n of t){const{geometry:t,attributes:o}=n,s=t?r(t):null;e.push({attributes:o,geometry:s})}return e}(e,n,r,s);case"esriGeometryMultipoint":return function(e,t,n,o){for(const r of t){const{geometry:t,attributes:s}=r;let l;t&&(l=R(t,n,o)),e.push({attributes:s,geometry:l})}return e}(e,n,r,s);case"esriGeometryPolyline":return function(e,t,n,o){for(const r of t){const{geometry:t,attributes:s}=r;let l;t&&(l=z(t,n,o)),e.push({attributes:s,geometry:l})}return e}(e,n,r,s);case"esriGeometryPolygon":return function(e,t,n,o){for(const r of t){const{geometry:t,attributes:s,centroid:l}=r;let i;if(t&&(i=S(t,n,o)),l){const t=T(l);e.push({attributes:s,centroid:t,geometry:i})}else e.push({attributes:s,geometry:i})}return e}(e,n,r,s);default:h.error("convertToFeatureSet:unknown-geometry",new t(`Unable to parse unknown geometry type '${o}'`))}return e}function K(e){const{objectIdFieldName:t,spatialReference:n,transform:o,fields:r,hasM:s,hasZ:l,features:i,geometryType:c,exceededTransferLimit:u,uniqueIdField:h,queryGeometry:a,queryGeometryType:f}=e,g={features:J([],i,c,l,s),fields:r,geometryType:c,objectIdFieldName:t,spatialReference:n,uniqueIdField:h,queryGeometry:D(a,f,!1,!1)};return o&&(g.transform=o),u&&(g.exceededTransferLimit=u),s&&(g.hasM=s),l&&(g.hasZ=l),g}function Q(e,n){const o=new i,{hasM:r,hasZ:s,features:l,objectIdFieldName:c,spatialReference:u,geometryType:a,exceededTransferLimit:f,transform:g,fields:d}=e;return d&&(o.fields=d),o.geometryType=a,o.objectIdFieldName=c||n,o.spatialReference=u,o.objectIdFieldName?(l&&C(o.features,l,a,s,r,o.objectIdFieldName),f&&(o.exceededTransferLimit=f),r&&(o.hasM=r),s&&(o.hasZ=s),g&&(o.transform=g),o):(h.error(new t("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),o)}function W(e,t){const{geometryType:n,features:o,hasM:r,hasZ:s}=t;if(!e)return t;for(let t=0;t<o.length;t++){const l=o[t],i=l.weakClone();i.geometry=new c,ee(i.geometry,l.geometry,r,s,n,e),l.centroid&&(i.centroid=new c,ee(i.centroid,l.centroid,r,s,"esriGeometryPoint",e)),o[t]=i}return t.transform=e,t}function ee(e,t,n,o,r,s,l=n,i=o){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;const c=a[r],{coords:h,lengths:f}=t,g=u(n,o),d=u(n&&l,o&&i),m=y(n,o,l,i);if(!f.length)return m(e.coords,h,0,0,p(s,h[0]),b(s,h[1])),e.lengths.length&&(e.lengths.length=0),e.coords.length=g,e;let I,w,G,T,F=0,M=0,N=M;for(const t of f){if(t<c)continue;let n=0;M=N,G=I=p(s,h[F]),T=w=b(s,h[F+1]),m(e.coords,h,M,F,G,T),n++,F+=g,M+=d;for(let o=1;o<t;o++,F+=g)G=p(s,h[F]),T=b(s,h[F+1]),G===I&&T===w||(m(e.coords,h,M,F,G-I,T-w),M+=d,n++,I=G,w=T);n>=c&&(e.lengths.push(n),N=M)}return e.coords.length=N,e.coords.length?e:null}function te(e,t,n,o,r,s,l=n,i=o){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;const c=a[r],{coords:h,lengths:f}=t,g=u(n,o),d=u(n&&l,o&&i),m=y(n,o,l,i);if(!f.length)return m(e.coords,h,0,0,h[0],h[1]),e.lengths.length&&(e.lengths.length=0),e.coords.length=g,e;let p=0;const b=s*s;for(const t of f){if(t<c){p+=t*g;continue}const n=e.coords.length/d,o=p,r=p+(t-1)*g;m(e.coords,h,e.coords.length,o,h[o],h[o+1]),oe(e.coords,h,g,b,m,o,r),m(e.coords,h,e.coords.length,r,h[r],h[r+1]);const s=e.coords.length/d-n;s>=c?e.lengths.push(s):e.coords.length=n*d,p+=t*g}return e.coords.length?e:null}function ne(e,t,n,o){const r=e[t],s=e[t+1],l=e[n],i=e[n+1],c=e[o],u=e[o+1];let h=l,a=i,f=c-h,g=u-a;if(0!==f||0!==g){const e=((r-h)*f+(s-a)*g)/(f*f+g*g);e>1?(h=c,a=u):e>0&&(h+=f*e,a+=g*e)}return f=r-h,g=s-a,f*f+g*g}function oe(e,t,n,o,r,s,l){let i,c=o,u=0;for(let e=s+n;e<l;e+=n)i=ne(t,e,s,l),i>c&&(u=e,c=i);c>o&&(u-s>n&&oe(e,t,n,o,r,s,u),r(e,t,e.length,u,t[u],t[u+1]),l-u>n&&oe(e,t,n,o,r,u,l))}function re(e,t,n,o){if(!t||!t.coords||!t.coords.length)return null;const r=u(n,o);let s=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,c=Number.NEGATIVE_INFINITY;if(t&&t.coords){const e=t.coords;for(let t=0;t<e.length;t+=r){const n=e[t],o=e[t+1];s=Math.min(s,n),i=Math.max(i,n),l=Math.min(l,o),c=Math.max(c,o)}}return e[0]=s,e[1]=l,e[2]=i,e[3]=c,e}function se(e,t,n,o,r){const{coords:s,lengths:l}=t,i=n?o?m:g:o?g:f,c=u(n,o);if(!s.length)return e!==t&&(e.lengths.length=0,e.coords.length=0),e;if(!l.length)return i(e.coords,s,0,0,I(r,s[0]),w(r,s[1])),e!==t&&(e.lengths.length=0,e.coords.length=c),e;const[h,a]=r.scale;let d=0;for(let t=0;t<l.length;t++){const n=l[t];e.lengths[t]=n;let o=I(r,s[d]),u=w(r,s[d+1]);i(e.coords,s,d,d,o,u),d+=c;for(let t=1;t<n;t++,d+=c)o+=s[d]*h,u-=s[d+1]*a,i(e.coords,s,d,d,o,u)}return e!==t&&(e.lengths.length=l.length,e.coords.length=s.length),e}function le(e,t,n,o,r,s){const l=u(n,o),i=y(n,o,r,s),c=t.coords;e.coords.length=0,e.lengths.length=0,e.lengths.push(...t.lengths);for(let t=0;t<c.length;t+=l)i(e.coords,c,e.coords.length,t,c[t],c[t+1]);return e}function ie(e,t,n,o){let r=0,s=e[o*t],l=e[o*(t+1)];for(let i=1;i<n;i++){const n=s+e[o*(t+i)],c=l+e[o*(t+i)+1],u=(n-s)*(c+l);s=n,l=c,r+=u}return.5*r}function ce(e,t){const{coords:n,lengths:o}=e;let r=0,s=0;for(let e=0;e<o.length;e++)s+=ie(n,r,o[e],t),r+=e;return Math.abs(s)}function ue(e,t){const n=e.clone(),o=e.coords,r=e.lengths;let s=0;for(let e=0;e<r.length;e++){const l=r[e];let i=o[t*s],c=o[t*s+1];for(let e=1;e<l;e++){const r=i+o[t*(s+e)],l=c+o[t*(s+e)+1];n.coords[t*(s+e)]=r,n.coords[t*(s+e)+1]=l,i=r,c=l}s+=l}return n}export{$,Y as A,_ as B,C as D,X as H,b as I,H as J,B as K,S as L,D as Q,K as X,z as _,l as a,i as b,Q as e,le as f,ce as g,se as i,re as l,ue as m,W as n,ee as o,p,V as q,te as r,c as t,R as v,G as w};
