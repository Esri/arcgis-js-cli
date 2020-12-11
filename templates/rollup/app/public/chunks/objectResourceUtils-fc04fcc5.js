import{i as e,gP as t,gQ as r,gR as o,gS as i,gT as n,a0 as a,ei as s,ee as c,ej as l,a3 as d,h as u,eb as f,a2 as m,gU as h,ef as p,gV as v,a1 as g,cM as x,a8 as b,gW as y,ek as w,ec as _,gX as T,gY as S,c as C,em as M,el as O,gZ as A,aM as P,g_ as I,g$ as R,h0 as F,h1 as L,h2 as B,dd as z,aj as N,a as D,t as E,h3 as V,h4 as U,b6 as H,h5 as G,h6 as k,x as j,p as q,h7 as $,L as W,b as X,J as Y,fW as Q,h8 as K,eN as J,h9 as Z,aG as ee,ha as te,A as re,k as oe,B as ie,C as ne,bp as ae,cR as se,af as ce,hb as le,b$ as de,fh as ue,hc as fe,bN as me,hd as he,co as pe,v as ve,u as ge,b0 as xe,he as be,ci as ye,U as we,hf as _e,c$ as Te,hg as Se,hh as Ce}from"../main.js";import{i as Me,d as Oe,q as Ae,f as Pe,A as Ie}from"./aaBoundingBox-56c013d2.js";import{p as Re,x as Fe,a as Le,u as Be,A as ze,n as Ne,r as De,s as Ee,t as Ve,F as Ue,g as He,h as Ge,I as ke,w as je,v as qe,e as $e,M as We,L as Xe,O as Ye,E as Qe}from"./InterleavedLayout-46517429.js";import{y as Ke}from"./vec4-28f36952.js";import{e as Je,d as Ze,r as et,u as tt,n as rt,s as ot,i as it,f as nt}from"./RenderingContext-81847018.js";import{a as at,b as st,t as ct,e as lt,I as dt,c as ut}from"./vec3f32-d0d6f180.js";import{i as ft,a as mt,o as ht,r as pt}from"./VertexArrayObject-17b5c9bd.js";import{r as vt}from"./mat4f32-a7ddfa75.js";function gt(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function xt(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function bt(e,t){return new Float64Array(e,t,16)}Object.freeze({__proto__:null,create:gt,clone:xt,fromValues:function(e,t,r,o,i,n,a,s,c,l,d,u,f,m,h,p){return[e,t,r,o,i,n,a,s,c,l,d,u,f,m,h,p]},createView:bt,IDENTITY:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]});const yt=e.getLogger("esri.views.3d.support.buffer.math");function wt(e,t,r){if(e.count!==t.count)return void yt.error("source and destination buffers need to have the same number of elements");const o=e.count,i=r[0],n=r[1],a=r[2],s=r[4],c=r[5],l=r[6],d=r[8],u=r[9],f=r[10],m=r[12],h=r[13],p=r[14],v=e.typedBuffer,g=e.typedBufferStride,x=t.typedBuffer,b=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*g,r=e*b,o=x[r],y=x[r+1],w=x[r+2];v[t]=i*o+s*y+d*w+m,v[t+1]=n*o+c*y+u*w+h,v[t+2]=a*o+l*y+f*w+p}}function _t(e,t,r){if(e.count!==t.count)return void yt.error("source and destination buffers need to have the same number of elements");const o=e.count,i=r[0],n=r[1],a=r[2],s=r[3],c=r[4],l=r[5],d=r[6],u=r[7],f=r[8],m=e.typedBuffer,h=e.typedBufferStride,p=t.typedBuffer,v=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*h,r=e*v,o=p[r],g=p[r+1],x=p[r+2];m[t]=i*o+s*g+d*x,m[t+1]=n*o+c*g+u*x,m[t+2]=a*o+l*g+f*x}}function Tt(e,t,r){const o=Math.min(e.count,t.count),i=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*n,o=e*s;i[t]=r*a[o],i[t+1]=r*a[o+1],i[t+2]=r*a[o+2]}}Object.freeze({__proto__:null,transformMat4:wt,transformMat3:_t,scale:Tt,shiftRight:function(e,t,r){const o=Math.min(e.count,t.count),i=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*n,o=e*s;i[t]=a[o]>>r,i[t+1]=a[o+1]>>r,i[t+2]=a[o+2]>>r}}});class St{constructor(e){this.allocator=e,this.items=[],this.itemsPtr=0,this.tickHandle=t.before((()=>this.reset())),this.grow()}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=r(this.tickHandle)),this.items=r(this.items)}get(){return 0===this.itemsPtr&&t((()=>{})),this.itemsPtr===this.items.length&&this.grow(),this.items[this.itemsPtr++]}reset(){const e=Math.min(3*Math.max(8,this.itemsPtr),this.itemsPtr+3*Ct);this.items.length=Math.min(e,this.items.length),this.itemsPtr=0}grow(){for(let e=0;e<Math.max(8,Math.min(this.items.length,Ct));e++)this.items.push(this.allocator())}}const Ct=1024;function Mt(e,t,r,o){return[e,t,r,o]}function Ot(e,t){return new Float64Array(e,t,4)}function At(){return Mt(1,1,1,1)}function Pt(){return Mt(1,0,0,0)}function It(){return Mt(0,1,0,0)}function Rt(){return Mt(0,0,1,0)}function Ft(){return Mt(0,0,0,1)}const Lt=At(),Bt=Pt(),zt=It(),Nt=Rt(),Dt=Ft();Object.freeze({__proto__:null,create:function(){return[0,0,0,0]},clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:Mt,fromArray:function(e){const t=[0,0,0,0],r=Math.min(4,e.length);for(let o=0;o<r;++o)t[o]=e[o];return t},createView:Ot,zeros:function(){return[0,0,0,0]},ones:At,unitX:Pt,unitY:It,unitZ:Rt,unitW:Ft,ZEROS:[0,0,0,0],ONES:Lt,UNIT_X:Bt,UNIT_Y:zt,UNIT_Z:Nt,UNIT_W:Dt});class Et{constructor(e,r,o){this.itemByteSize=e,this.itemCreate=r,this.buffers=[],this.items=[],this.itemsPerBuffer=0,this.itemsPtr=0,this.itemsPerBuffer=Math.ceil(o/this.itemByteSize),this.tickHandle=t.before((()=>this.reset()))}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=r(this.tickHandle)),this.itemsPtr=0,this.items=r(this.items),this.buffers=r(this.buffers)}get(){0===this.itemsPtr&&t((()=>{}));const e=Math.floor(this.itemsPtr/this.itemsPerBuffer);for(;this.buffers.length<=e;){const e=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize);for(let t=0;t<this.itemsPerBuffer;++t)this.items.push(this.itemCreate(e,t*this.itemByteSize));this.buffers.push(e)}return this.items[this.itemsPtr++]}reset(){const e=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);for(;this.buffers.length>e;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0}static createVec2f64(e=Vt){return new Et(16,o,e)}static createVec3f64(e=Vt){return new Et(24,i,e)}static createVec4f64(e=Vt){return new Et(32,Ot,e)}static createMat3f64(e=Vt){return new Et(72,at,e)}static createMat4f64(e=Vt){return new Et(128,bt,e)}static createQuatf64(e=Vt){return new Et(32,st,e)}get test(){return{size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}}}const Vt=4096,Ut=(Et.createVec2f64(),Et.createVec3f64()),Ht=Et.createVec4f64(),Gt=(Et.createMat3f64(),Et.createMat4f64());Et.createQuatf64();function kt(e){return e?{origin:n(e.origin),vector:n(e.vector)}:{origin:a(),vector:a()}}function jt(e,t){const r=Qt.get();return r.origin=e,r.vector=t,r}function qt(e,t,r=kt()){return s(r.origin,e),s(r.vector,t),r}function $t(e,t){const r=c(Ut.get(),t,e.origin),o=l(e.vector,r),i=l(e.vector,e.vector),n=u(o/i,0,1),a=c(Ut.get(),d(Ut.get(),e.vector,n),r);return l(a,a)}function Wt(e,t,r,o,i){const{vector:n,origin:a}=e,s=c(Ut.get(),t,a),h=m(n),p=l(n,s)/h;return d(i,n,u(p,r,o)),f(i,i,e.origin)}function Xt(e,t,r,o){const i=1e-6,n=e.origin,a=f(Ut.get(),n,e.vector),s=t.origin,c=f(Ut.get(),s,t.vector),l=Ut.get(),d=Ut.get();if(l[0]=n[0]-s[0],l[1]=n[1]-s[1],l[2]=n[2]-s[2],d[0]=c[0]-s[0],d[1]=c[1]-s[1],d[2]=c[2]-s[2],Math.abs(d[0])<i&&Math.abs(d[1])<i&&Math.abs(d[2])<i)return!1;const m=Ut.get();if(m[0]=a[0]-n[0],m[1]=a[1]-n[1],m[2]=a[2]-n[2],Math.abs(m[0])<i&&Math.abs(m[1])<i&&Math.abs(m[2])<i)return!1;const p=l[0]*d[0]+l[1]*d[1]+l[2]*d[2],v=d[0]*m[0]+d[1]*m[1]+d[2]*m[2],g=l[0]*m[0]+l[1]*m[1]+l[2]*m[2],x=d[0]*d[0]+d[1]*d[1]+d[2]*d[2],b=(m[0]*m[0]+m[1]*m[1]+m[2]*m[2])*x-v*v;if(Math.abs(b)<i)return!1;let y=(p*v-g*x)/b,w=(p+v*y)/x;r&&(y=u(y,0,1),w=u(w,0,1));const _=Ut.get(),T=Ut.get();return _[0]=n[0]+y*m[0],_[1]=n[1]+y*m[1],_[2]=n[2]+y*m[2],T[0]=s[0]+w*d[0],T[1]=s[1]+w*d[1],T[2]=s[2]+w*d[2],o.tA=y,o.tB=w,o.pA=_,o.pB=T,o.distance2=h(_,T),!0}const Yt={tA:0,tB:0,pA:a(),pB:a(),distance2:0},Qt=new St((()=>({origin:null,vector:null})));Object.freeze({__proto__:null,create:kt,wrap:jt,copy:function(e,t=kt()){return qt(e.origin,e.vector,t)},fromValues:qt,fromPoints:function(e,t,r=kt()){return s(r.origin,e),c(r.vector,t,e),r},distance2:$t,distance:function(e,t){return Math.sqrt($t(e,t))},projectPoint:function(e,t,r){return Wt(e,t,0,1,r)},pointAt:function(e,t,r){return f(r,e.origin,d(r,e.vector,t))},projectPointClamp:Wt,closestRayDistance2:function(e,t){if(Xt(e,jt(t.origin,t.direction),!1,Yt)){const{tA:t,pB:r,distance2:o}=Yt;if(t>=0&&t<=1)return o;if(t<0)return h(e.origin,r);if(t>1)return h(f(Ut.get(),e.origin,e.vector),r)}return null},closestLineSegmentPoint:function(e,t,r){return!!Xt(e,t,!0,Yt)&&(s(r,Yt.pA),!0)},closestLineSegmentDistance2:function(e,t){return Xt(e,t,!0,Yt)?Yt.distance2:null}});function Kt(e){return e?{p0:n(e.p0),p1:n(e.p1),p2:n(e.p2)}:{p0:a(),p1:a(),p2:a()}}function Jt(e,t,r,o=Kt()){return s(o.p0,e),s(o.p1,t),s(o.p2,r),o}function Zt(e,t,r){const o=v(e,t),i=v(t,r),n=v(r,e),a=(o+i+n)/2,s=a*(a-o)*(a-i)*(a-n);return s<=0?0:Math.sqrt(s)}function er(e,t,r){return c(or,t,e),c(ir,r,e),m(p(or,or,ir))/2}const tr=new St(kt),rr=new St((()=>({p0:null,p1:null,p2:null}))),or=a(),ir=a();Object.freeze({__proto__:null,create:Kt,wrap:function(e,t,r){const o=rr.get();return o.p0=e,o.p1=t,o.p2=r,o},copy:function(e,t=Kt()){return Jt(e.p0,e.p1,e.p2,t)},fromValues:Jt,distance2:function(e,t){const r=e.p0,o=e.p1,i=e.p2,n=c(Ut.get(),o,r),a=c(Ut.get(),i,o),s=c(Ut.get(),r,i),d=c(Ut.get(),t,r),u=c(Ut.get(),t,o),f=c(Ut.get(),t,i),m=p(n,n,s),h=l(p(Ut.get(),n,m),d),v=l(p(Ut.get(),a,m),u),g=l(p(Ut.get(),s,m),f);if(h>0&&v>0&&g>0){const e=l(m,d);return e*e/l(m,m)}const x=$t(qt(r,n,tr.get()),t),b=$t(qt(o,a,tr.get()),t),y=$t(qt(i,s,tr.get()),t);return Math.min(x,b,y)},intersectRay:function(e,t,r){const o=1e-5,{direction:i,origin:n}=t,{p0:a,p1:s,p2:c}=e,l=s[0]-a[0],u=s[1]-a[1],m=s[2]-a[2],h=c[0]-a[0],p=c[1]-a[1],v=c[2]-a[2],g=i[1]*v-p*i[2],x=i[2]*h-v*i[0],b=i[0]*p-h*i[1],y=l*g+u*x+m*b;if(y>-o&&y<o)return!1;const w=1/y,_=n[0]-a[0],T=n[1]-a[1],S=n[2]-a[2],C=w*(_*g+T*x+S*b);if(C<0||C>1)return!1;const M=T*m-u*S,O=S*l-m*_,A=_*u-l*T,P=w*(i[0]*M+i[1]*O+i[2]*A);return!(P<0||C+P>1)&&(r&&(d(r,i,w*(h*M+p*O+v*A)),f(r,n,r)),!0)},areaPoints2d:Zt,area2d:function(e){return Zt(e.p0,e.p1,e.p2)},areaPoints3d:er});let nr=1,ar=null;const sr=new Uint32Array([0]);function cr(e){if(1===e)return sr;if(e>nr||null==ar){for(;e>nr;)nr*=2;ar=new Uint32Array(nr);for(let e=0;e<nr;e++)ar[e]=e}return new Uint32Array(ar.buffer,0,e)}let lr=0;const dr=a(),ur=a(),fr=a(),mr=a();class hr{constructor(e){this.message=e}toString(){return"AssertException: "+this.message}}const pr={POSITION:"position",NORMAL:"normal",UV0:"uv0",UVMAPSPACE:"uvMapSpace",MEANVERTEXPOSITION:"meanVertexPosition",AUXPOS1:"auxpos1",AUXPOS2:"auxpos2",BOUND1:"bound1",BOUND2:"bound2",BOUND3:"bound3",COLOR:"color",SYMBOLCOLOR:"symbolColor",SIZE:"size",TANGENT:"tangent"};function vr(e,t){if(!e){t=t||"assert";const e=new Error(t);throw e.stack&&console.log(e.stack),new hr(t)}}function gr(e){return e[function(e){for(const t in e)return t}(e)]}function xr(e,t=0){let r=0;for(let o=0;o<4;o++)r+=e[t+o]*br[o];return r}const br=[1/256,1/65536,1/16777216,1/4294967296];xr(new Uint8ClampedArray([255,255,255,255]));class yr{constructor(e,t=yr.DefaultIndices,r="triangle"){this.initialize(e,t,r)}get id(){return this._id}get vertexAttributes(){return this._vertexAttributes}get indices(){return this._indices}get indexCount(){const e=gr(this._indices);return null==e?0:e.length}get primitiveType(){return this._primitiveType}getVertexAttr(){return this.vertexAttributes}initialize(e,t=yr.DefaultIndices,r="triangle"){const o={};for(const t in e){const{data:r,size:i}=e[t];o[t]={data:r,size:i,offsetIdx:0,strideIdx:i}}if(t===yr.DefaultIndices){const e=cr(function(e){const t=gr(e);return null==t?0:t.data.length/t.size}(o));t={};for(const r in o)t[r]=e}this._id=lr++,this._vertexAttributes=o,this._indices=t,this._primitiveType=r}toRenderData(){return{id:this._id.toString(),indices:this._indices,vertexAttr:this._vertexAttributes}}getIndices(e){return this._indices[e]}getAttribute(e){return this._vertexAttributes[e]}estimateGpuMemoryUsage(){let e=0;if(this._indices[pr.POSITION]){const t=3;e+=this._indices[pr.POSITION].length*t*4}if(this._indices[pr.NORMAL]){const t=3;e+=this._indices[pr.NORMAL].length*t*4}if(this._indices[pr.UV0]){const t=2;e+=this._indices[pr.UV0].length*t*4}if(this._indices[pr.COLOR]){const t=1;e+=this._indices[pr.COLOR].length*t*4}return e}}yr.DefaultIndices={};class wr{constructor(){this._count=0}gen(e){return null==e&&(e="a"),e+"_"+this._count++}}class _r{constructor(e,t,r,o){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this._position=o,this.center=a(),vr(e.length>=1),vr(r.length%this._numIndexPerPrimitive==0),vr(r.length>=e.length*this._numIndexPerPrimitive),vr(3===this._position.size||4===this._position.size);const{data:i,offsetIdx:s,strideIdx:c}=this._position;let l=0;const d=e.length;let u=s+c*r[this._numIndexPerPrimitive*e[l]];for(_r.tmpIndices.clear(),_r.tmpIndices.push(u),this.bbMin=b(i[u],i[u+1],i[u+2]),this.bbMax=n(this.bbMin);l<d;++l){const t=this._numIndexPerPrimitive*e[l];for(let e=0;e<this._numIndexPerPrimitive;++e){u=s+c*r[t+e],_r.tmpIndices.push(u);let o=i[u];this.bbMin[0]=Math.min(o,this.bbMin[0]),this.bbMax[0]=Math.max(o,this.bbMax[0]),o=i[u+1],this.bbMin[1]=Math.min(o,this.bbMin[1]),this.bbMax[1]=Math.max(o,this.bbMax[1]),o=i[u+2],this.bbMin[2]=Math.min(o,this.bbMin[2]),this.bbMax[2]=Math.max(o,this.bbMax[2])}}y(this.center,this.bbMin,this.bbMax,.5),this.bsRadius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let f=this.bsRadius*this.bsRadius;for(l=0;l<_r.tmpIndices.length;++l){u=_r.tmpIndices.data[l];const e=i[u]-this.center[0],t=i[u+1]-this.center[1],r=i[u+2]-this.center[2],o=e*e+t*t+r*r;if(o<=f)continue;const n=Math.sqrt(o),a=.5*(n-this.bsRadius);this.bsRadius=this.bsRadius+a,f=this.bsRadius*this.bsRadius;const s=a/n;this.center[0]+=e*s,this.center[1]+=t*s,this.center[2]+=r*s}_r.tmpIndices.clear()}getCenter(){return this.center}getBSRadius(){return this.bsRadius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getPrimitiveIndices(){return this.primitiveIndices}getIndices(){return this.indices}getPosition(){return this._position}getChildren(){if(this._children)return this._children;if(h(this.bbMin,this.bbMax)>1){const e=y(a(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),o=new Array(8);for(let e=0;e<8;++e)o[e]=0;const{data:i,offsetIdx:n,strideIdx:s}=this._position;for(let a=0;a<t;++a){let t=0;const c=this._numIndexPerPrimitive*this.primitiveIndices[a];let l=n+s*this.indices[c],d=i[l],u=i[l+1],f=i[l+2];for(let e=1;e<this._numIndexPerPrimitive;++e){l=n+s*this.indices[c+e];const t=i[l],r=i[l+1],o=i[l+2];t<d&&(d=t),r<u&&(u=r),o<f&&(f=o)}d<e[0]&&(t|=1),u<e[1]&&(t|=2),f<e[2]&&(t|=4),r[a]=t,++o[t]}let c=0;for(let e=0;e<8;++e)o[e]>0&&++c;if(c<2)return;const l=new Array(8);for(let e=0;e<8;++e)l[e]=o[e]>0?new Uint32Array(o[e]):void 0;for(let e=0;e<8;++e)o[e]=0;for(let e=0;e<t;++e){const t=r[e];l[t][o[t]++]=this.primitiveIndices[e]}this._children=new Array(8);for(let e=0;e<8;++e)void 0!==l[e]&&(this._children[e]=new _r(l[e],this._numIndexPerPrimitive,this.indices,this._position))}return this._children}}(_r||(_r={})).tmpIndices=new x({deallocator:null});var Tr=_r;class Sr{constructor(e,t,r){this._boundingInfo=null,this._id=Sr.__idGen.gen(t),this._data=e,this._boundingInfo=r}get id(){return this._id}get data(){return this._data}getIndices(e){return this.data.getIndices(e)}get indexCount(){return this.data.indexCount}getAttribute(e){return this.data.getAttribute(e)}get vertexCount(){return this.data.indexCount}get faceCount(){return this.data.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return"triangle"===this.data.primitiveType?this.computeAttachmentOriginTriangles(e):this.computeAttachmentOriginPoints(e)}computeAttachmentOriginTriangles(e){const t=this.getIndices(pr.POSITION);return function(e,t,r){if(!e)return!1;const{strideIdx:o,offsetIdx:i,data:n}=e;g(r,0,0,0),g(mr,0,0,0);let a=0,s=0;for(let e=0;e<t.length-2;e+=3){const c=t[e+0]*o+i,l=t[e+1]*o+i,u=t[e+2]*o+i;g(dr,n[c+0],n[c+1],n[c+2]),g(ur,n[l+0],n[l+1],n[l+2]),g(fr,n[u+0],n[u+1],n[u+2]);const m=er(dr,ur,fr);m?(f(dr,dr,ur),f(dr,dr,fr),d(dr,dr,1/3*m),f(r,r,dr),a+=m):(f(mr,mr,dr),f(mr,mr,ur),f(mr,mr,fr),s+=3)}return!(0===s&&0===a||(0!==a?(d(r,r,1/a),0):0===s||(d(r,mr,1/s),0)))}(this.getAttribute(pr.POSITION),t,e)}computeAttachmentOriginPoints(e){const t=this.getIndices(pr.POSITION);return function(e,t,r){if(!e||!t)return!1;const{strideIdx:o,offsetIdx:i,data:n}=e;g(r,0,0,0);let a=-1,s=0;for(let e=0;e<t.length;e++){const c=t[e]*o+i;a!==c&&(r[0]+=n[c+0],r[1]+=n[c+1],r[2]+=n[c+2],s++),a=c}return s>1&&d(r,r,1/s),s>0}(this.getAttribute(pr.POSITION),t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){let e=this.data.getIndices(pr.POSITION);const t=this.data.getAttribute(pr.POSITION),r="triangle"===this.data.primitiveType?3:1;if(0===e.length){e=new Uint32Array(r);for(let t=0;t<r;++t)e[t]=t}const o=e.length;vr(o%r==0,"Indexing error: "+o.toFixed(0)+" not divisible by "+r.toFixed(0));const i=cr(o/r);return new Tr(i,r,e,t)}}function Cr(e,t){return l(e,t)/m(e)}function Mr(e,t){const r=l(e,t)/(m(e)*m(t));return-w(r)}Sr.__idGen=new wr;const Or=a(),Ar=a();Object.freeze({__proto__:null,projectPoint:function(e,t,r){const o=l(e,t)/l(e,e);return d(r,e,o)},projectPointSignedLength:Cr,angle:Mr,angleAroundAxis:function(e,t,r){_(Or,e),_(Ar,t);const o=l(Or,Ar),i=w(o),n=p(Or,Or,Ar);return l(n,r)<0?2*Math.PI-i:i}});function Pr(e=oo){return[e[0],e[1],e[2],e[3]]}function Ir(e,t,r,o){return Fr(e,t,r,o,Ht.get())}function Rr(e,t=Pr()){return Fr(e[0],e[1],e[2],e[3],t)}function Fr(e,t,r,o,i=Pr()){return i[0]=e,i[1]=t,i[2]=r,i[3]=o,i}function Lr(e,t,r=Pr()){s(r,t);const o=l(t,t);return Math.abs(o-1)>1e-5&&o>1e-12&&d(r,r,1/Math.sqrt(o)),Gr(r,e,r),r}function Br(e,t,r,o=Pr()){return kr(c(Ut.get(),e,t),c(Ut.get(),r,t),e,o)}function zr(e,t,r,o,i){if(e.count<3)return!1;e.getVec(r,Dr);let n=o,a=!1;for(;n<e.count-1&&!a;)e.getVec(n,Er),n++,a=!T(Dr,Er);if(!a)return!1;for(n=Math.max(n,i),a=!1;n<e.count&&!a;)e.getVec(n,Vr),n++,c(Ur,Dr,Er),_(Ur,Ur),c(Hr,Er,Vr),_(Hr,Hr),a=!T(Dr,Vr)&&!T(Er,Vr)&&Math.abs(l(Ur,Hr))<Nr;return a?(Br(Dr,Er,Vr,t),!0):(0!==r||1!==o||2!==i)&&zr(e,t,0,1,2)}const Nr=.99619469809,Dr=a(),Er=a(),Vr=a(),Ur=a(),Hr=a();function Gr(e,t,r){return e!==r&&Rr(e,r),r[3]=-l(r,t),r}function kr(e,t,r,o=Pr()){return Lr(r,p(Ut.get(),t,e),o)}function jr(e,t,r){return to(e,t.origin,t.direction,!0,!1,r)}function qr(e,t,r){return to(e,t.origin,t.vector,!1,!1,r)}function $r(e,t,r){return to(e,t.origin,t.vector,!1,!0,r)}function Wr(e,t){const{center:r,radius:o}=t;return eo(e,r)-o>=0}function Xr(e,t){return eo(e,t)>=0}function Yr(e,t){const r=t[0],o=t[1],i=t[2],n=t[3],a=t[4],s=t[5];return e[0]*(e[0]>0?r:n)+e[1]*(e[1]>0?o:a)+e[2]*(e[2]>0?i:s)+e[3]>=0}function Qr(e,t){const r=l(e,t.ray.direction),o=-eo(e,t.ray.origin);if(o<0&&r>=0)return!1;if(r>-1e-6&&r<1e-6)return o>0;if((o<0||r<0)&&!(o<0&&r<0))return!0;const i=o/r;return r>0?i<t.c1&&(t.c1=i):i>t.c0&&(t.c0=i),t.c0<=t.c1}function Kr(e,t){const r=l(e,t.ray.direction),o=-eo(e,t.ray.origin);if(r>-1e-6&&r<1e-6)return o>0;const i=o/r;return r>0?i<t.c1&&(t.c1=i):i>t.c0&&(t.c0=i),t.c0<=t.c1}function Jr(e,t,r){const o=d(Ut.get(),e,-e[3]),i=Zr(e,c(Ut.get(),t,o),Ut.get());return f(r,i,o),r}function Zr(e,t,r){const o=d(Ut.get(),e,l(e,t));return c(r,t,o),r}function eo(e,t){return l(e,t)+e[3]}function to(e,t,r,o,i,n){const a=l(e,r);if(0===a)return!1;let s=-(l(e,t)+e[3])/a;return i&&(s=o?Math.max(0,s):u(s,0,1)),!(s<0||!o&&s>1||(f(n,t,d(n,r,s)),0))}function ro(e){return e}const oo=[0,0,1,0];Object.freeze({__proto__:null,create:Pr,wrap:Ir,copy:Rr,fromValues:Fr,fromNormalAndOffset:function(e,t,r=Pr()){return s(r,e),r[3]=t,r},fromPositionAndNormal:Lr,fromPoints:Br,fromManyPoints:function(e,t){return zr(e,t,0,1,2)},fromManyPointsSampleAt:zr,setOffsetFromPoint:Gr,negate:function(e,t){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},fromVectorsAndPoint:kr,intersectRay:jr,intersectLineSegment:qr,intersectLineSegmentClamp:$r,isSphereFullyInside:Wr,isSphereFullyOutside:function(e,t){const{center:r,radius:o}=t;return eo(e,r)+o<0},isPointInside:Xr,isPointOutside:function(e,t){return eo(e,t)<0},isAABBFullyInside:Yr,clip:Qr,clipInfinite:Kr,projectPoint:Jr,projectVector:Zr,distance:function(e,t){return Math.abs(eo(e,t))},signedDistance:eo,normal:ro,UP:oo});function io(e){return e?{origin:n(e.origin),direction:n(e.direction)}:{origin:a(),direction:a()}}function no(e,t=io()){return ao(e.origin,e.direction,t)}function ao(e,t,r=io()){return s(r.origin,e),s(r.direction,t),r}function so(e,t,r=io()){const o=S(C(Ut.get(),t));o[2]=0,e.unprojectFromRenderScreen(o,r.origin);const i=S(C(Ut.get(),t));i[2]=1;const n=e.unprojectFromRenderScreen(i,Ut.get());return c(r.direction,n,r.origin),r}function co(e,t,r=io()){return lo(e,e.screenToRender(t,S(Ut.get())),r)}function lo(e,t,r=io()){s(r.origin,e.eye);const o=g(Ut.get(),t[0],t[1],1),i=e.unprojectFromRenderScreen(o,Ut.get());return c(r.direction,i,r.origin),r}function uo(e,t){const r=p(Ut.get(),_(Ut.get(),e.direction),c(Ut.get(),t,e.origin));return l(r,r)}function fo(e,t,r){const o=l(e.direction,c(r,t,e.origin));return f(r,e.origin,d(r,e.direction,o)),r}function mo(){return{origin:null,direction:null}}const ho=new St(mo);Object.freeze({__proto__:null,create:io,wrap:function(e,t){const r=ho.get();return r.origin=e,r.direction=t,r},copy:no,fromPoints:function(e,t,r=io()){return s(r.origin,e),c(r.direction,t,e),r},fromValues:ao,fromScreen:function(e,t,r=io()){return so(e,e.screenToRender(t,S(Ut.get())),r)},fromRender:so,fromScreenAtEye:co,fromRenderAtEye:lo,distance2:uo,distance:function(e,t){return Math.sqrt(uo(e,t))},closestPoint:fo,createWrapper:mo});const po=e.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");function vo(e=Bo){return{plane:Pr(e.plane),origin:n(e.origin),basis1:n(e.basis1),basis2:n(e.basis2)}}function go(e,t=vo()){return xo(e.origin,e.basis1,e.basis2,t)}function xo(e,t,r,o=vo()){return s(o.origin,e),s(o.basis1,t),s(o.basis2,r),bo(o),function(e,t){Math.abs(l(e.basis1,e.basis2)/(m(e.basis1)*m(e.basis2)))>1e-6&&po.warn(t,"Provided basis vectors are not perpendicular"),Math.abs(l(e.basis1,Po(e)))>1e-6&&po.warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-l(Po(e),e.origin)-e.plane[3])>1e-6&&po.warn(t,"Plane offset is not consistent with plane origin")}(o,"fromValues()"),o}function bo(e){kr(e.basis2,e.basis1,e.origin,e.plane)}function yo(e,t,r){e!==r&&go(e,r);const o=d(Ut.get(),Po(e),t);return f(r.origin,r.origin,o),r.plane[3]-=t,r}function wo(e,t=vo()){const r=(e[2]-e[0])/2,o=(e[3]-e[1])/2;return g(t.origin,e[0]+r,e[1]+o,0),g(t.basis1,r,0,0),g(t.basis2,0,o,0),Fr(0,0,1,0,t.plane),t}function _o(e,t,r){return!!jr(e.plane,t,r)&&Io(e,r)}function To(e,t,r){const o=zo.get();Lo(e,t,o,zo.get());let i=Number.POSITIVE_INFINITY;for(const n of Vo){const a=Fo(e,n,No.get()),c=Ut.get();if(qr(o,a,c)){const e=O(Ut.get(),t.origin,c),o=Math.abs(w(l(t.direction,e)));o<i&&(i=o,s(r,c))}}return i===Number.POSITIVE_INFINITY?So(e,t,r):r}function So(e,t,r){if(_o(e,t,r))return r;const o=zo.get(),i=zo.get();Lo(e,t,o,i);let n=Number.POSITIVE_INFINITY;for(const a of Vo){const c=Fo(e,a,No.get()),l=Ut.get();if($r(o,c,l)){const e=uo(t,l);if(!Xr(i,l))continue;e<n&&(n=e,s(r,l))}}return Oo(e,t.origin)<n&&Co(e,t.origin,r),r}function Co(e,t,r){const o=Jr(e.plane,t,Ut.get()),i=Wt(Ro(e,e.basis1),o,-1,1,Ut.get()),n=Wt(Ro(e,e.basis2),o,-1,1,Ut.get());return c(r,f(Ut.get(),i,n),e.origin),r}function Mo(e,t,r){const{origin:o,basis1:i,basis2:n}=e,a=c(Ut.get(),t,o),s=Cr(i,a),l=Cr(n,a),d=Cr(Po(e),a);return g(r,s,l,d)}function Oo(e,t){const r=Mo(e,t,Ut.get()),{basis1:o,basis2:i}=e,n=m(o),a=m(i),s=Math.max(Math.abs(r[0])-n,0),c=Math.max(Math.abs(r[1])-a,0),l=r[2];return s*s+c*c+l*l}function Ao(e,t){const r=-e.plane[3];return Cr(Po(e),t)-r}function Po(e){return e.plane}function Io(e,t){const r=c(Ut.get(),t,e.origin),o=L(e.basis1),i=L(e.basis2),n=l(e.basis1,r),a=l(e.basis2,r);return-n-o<0&&n-o<0&&-a-i<0&&a-i<0}function Ro(e,t){const r=No.get();return s(r.origin,e.origin),s(r.vector,t),r}function Fo(e,t,r){const{basis1:o,basis2:i,origin:n}=e,a=d(Ut.get(),o,t.origin[0]),s=d(Ut.get(),i,t.origin[1]);f(r.origin,a,s),f(r.origin,r.origin,n);const c=d(Ut.get(),o,t.direction[0]),l=d(Ut.get(),i,t.direction[1]);return d(r.vector,f(c,c,l),2),r}function Lo(e,t,r,o){const i=Po(e);kr(i,t.direction,t.origin,r),kr(r,i,t.origin,o)}const Bo={plane:Pr(),origin:b(0,0,0),basis1:b(1,0,0),basis2:b(0,1,0)},zo=new St(Pr),No=new St(kt),Do=a(),Eo=new St((()=>({origin:null,basis1:null,basis2:null,plane:null}))),Vo=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],Uo=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Ho=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze({__proto__:null,BoundedPlaneClass:class{constructor(){this.plane=Pr(),this.origin=a(),this.basis1=a(),this.basis2=a()}},create:vo,wrap:function(e,t,r){const o=Eo.get();return o.origin=e,o.basis1=t,o.basis2=r,o.plane=Ir(0,0,0,0),bo(o),o},copy:go,fromValues:xo,updateUnboundedPlane:bo,elevate:yo,setExtent:function(e,t,r){return wo(t,r),yo(r,Ao(e,e.origin),r),r},fromAABoundingRect:wo,intersectRay:_o,intersectRayClosestSilhouette:function(e,t,r){if(_o(e,t,r))return r;const o=To(e,t,Ut.get());return f(r,t.origin,d(Ut.get(),t.direction,M(t.origin,o)/m(t.direction))),r},closestPointOnSilhouette:To,closestPoint:So,projectPoint:Co,projectPointLocal:Mo,distance2:Oo,distance:function(e,t){return Math.sqrt(Oo(e,t))},distanceToSilhouette:function(e,t){let r=Number.NEGATIVE_INFINITY;for(const o of Vo){const i=$t(Fo(e,o,No.get()),t);i>r&&(r=i)}return Math.sqrt(r)},extrusionContainsPoint:function(e,t){return Xr(e.plane,t)&&Io(e,t)},axisAt:function(e,t,r,o){return function(e,t,r){switch(t){case 0:s(r,e.basis1),_(r,r);break;case 1:s(r,e.basis2),_(r,r);break;case 2:s(r,Po(e))}return r}(e,r,o)},altitudeAt:Ao,setAltitudeAt:function(e,t,r,o){const i=Ao(e,t),n=d(Do,Po(e),r-i);return f(o,t,n),o},equals:function(e,t){return T(e.basis1,t.basis1)&&T(e.basis2,t.basis2)&&T(e.origin,t.origin)},transform:function(e,t,r){return e!==r&&go(e,r),A(Uo,t),P(Uo,Uo),I(r.basis1,e.basis1,Uo),I(r.basis2,e.basis2,Uo),I(r.plane,e.plane,Uo),I(r.origin,e.origin,t),Gr(r.plane,r.origin,r.plane),r},rotate:function(e,t,r,o){return e!==o&&go(e,o),R(Ho,F(Ho),t,r),I(o.basis1,e.basis1,Ho),I(o.basis2,e.basis2,Ho),bo(o),o},normal:Po,UP:Bo});const Go=e.getLogger("esri.views.3d.support.geometryUtils.sphere");function ko(e){return e?{radius:e.radius,center:n(e.center)}:{radius:1,center:a()}}function jo(e,t=ko()){return qo(e.radius,e.center,t)}function qo(e,t,r=ko()){return s(r.center,t),r.radius=e,r}function $o(e,t,r){const o=c(Ut.get(),t.origin,e.center),i=l(t.direction,t.direction),n=2*l(t.direction,o),a=n*n-4*i*(l(o,o)-e.radius*e.radius);if(a<0)return!1;const s=Math.sqrt(a);let u=(-n-s)/(2*i);const m=(-n+s)/(2*i);return(u<0||m<u&&m>0)&&(u=m),!(u<0||(r&&f(r,t.origin,d(Ut.get(),t.direction,u)),0))}function Wo(e,t,r){const o=Ut.get(),i=Gt.get();p(o,t.origin,t.direction),p(r,o,t.origin),d(r,r,1/m(r)*e.radius);const n=Yo(e,t.origin),a=Mr(t.origin,r);return F(i),R(i,i,a+n,o),I(r,r,i),r}function Xo(e,t,r){const o=c(Ut.get(),t,e.center),i=d(Ut.get(),o,e.radius/m(o));return f(r,i,e.center)}function Yo(e,t){const r=c(Ut.get(),t,e.center),o=m(r),i=e.radius+Math.abs(e.radius-o);return w(e.radius/i)}const Qo=a();function Ko(e,t,r,o){const i=c(Qo,t,e.center);switch(r){case 0:{const e=B(i,Qo)[2];return g(o,-Math.sin(e),Math.cos(e),0)}case 1:{const e=B(i,Qo),t=e[1],r=e[2],n=Math.sin(t);return g(o,-n*Math.cos(r),-n*Math.sin(r),Math.cos(t))}case 2:return _(o,i);default:return}}function Jo(e,t){const r=c(ri,t,e.center);return m(r)-e.radius}const Zo=new St((()=>({center:null,radius:0}))),ei=io(),ti=a(),ri=a();Object.freeze(ti);Object.freeze({__proto__:null,create:ko,wrap:function(e,t){const r=Zo.get();return r.radius=e,r.center=t||ti,r},copy:jo,fromValues:qo,elevate:function(e,t,r){return e!==r&&s(r.center,e.center),r.radius=e.radius+t,r},setExtent:function(e,t,r){return Go.error("sphere.setExtent is not yet supported"),e===r?r:jo(e,r)},intersectRay:$o,intersectScreen:function(e,t,r,o){return $o(e,co(t,r,ei),o)},intersectsRay:function(e,t){return $o(e,t,null)},intersectRayClosestSilhouette:function(e,t,r){if($o(e,t,r))return r;const o=Wo(e,t,Ut.get());return f(r,t.origin,d(Ut.get(),t.direction,M(t.origin,o)/m(t.direction))),r},closestPointOnSilhouette:Wo,closestPoint:function(e,t,r){return $o(e,t,r)?r:(fo(t,e.center,r),Xo(e,r,r))},projectPoint:Xo,distanceToSilhouette:function(e,t){const r=c(Ut.get(),t,e.center),o=L(r),i=e.radius*e.radius;return Math.sqrt(Math.abs(o-i))},angleToSilhouette:Yo,axisAt:Ko,altitudeAt:Jo,setAltitudeAt:function(e,t,r,o){const i=Jo(e,t),n=Ko(e,t,2,ri),a=d(ri,n,r-i);return f(o,t,a),o}});function oi(e=ni){return[e[0],e[1],e[2],e[3]]}function ii(e,t,r,o,i=oi()){return i[0]=e,i[1]=t,i[2]=r,i[3]=o,i}const ni=[0,0,1,0];Object.freeze({__proto__:null,create:oi,wrap:function(e,t,r,o){return ii(e,t,r,o,Ht.get())},wrapAxisAngle:function(e,t){return ii(e[0],e[1],e[2],t,Ht.get())},copy:function(e,t=oi()){return ii(e[0],e[1],e[2],e[3],t)},fromValues:ii,fromAxisAndAngle:function(e,t,r=oi()){return s(r,e),r[3]=t,r},fromPoints:function(e,t,r=oi()){return p(r,e,t),_(r,r),r[3]=Mr(e,t),r},axis:function(e){return e},UP:ni});function ai(e){return e?{ray:io(e.ray),c0:e.c0,c1:e.c1}:{ray:io(),c0:0,c1:Number.MAX_VALUE}}function si(e,t,r,o=ai()){return no(e,o.ray),o.c0=t,o.c1=r,o}function ci(e,t=ai()){return no(e,t.ray),t.c0=0,t.c1=Number.MAX_VALUE,t}function li(e,t,r=ai()){const o=m(e.vector);return ao(e.origin,t,r.ray),r.c0=0,r.c1=o,r}function di(e,t,r){return f(r,e.ray.origin,d(r,e.ray.direction,t))}const ui=new St((()=>({c0:0,c1:0,ray:null})));Object.freeze({__proto__:null,create:ai,wrap:function(e,t,r){const o=ui.get();return o.ray=e,o.c0=t,o.c1=r,o},copy:function(e,t=ai()){return si(e.ray,e.c0,e.c1,t)},fromValues:si,fromRay:ci,fromLineSegment:function(e,t=ai()){return li(e,_(Ut.get(),e.vector),t)},fromLineSegmentAndDirection:li,getStart:function(e,t){return di(e,e.c0,t)},getEnd:function(e,t){return di(e,e.c1,t)},getAt:di});function fi(e){if(e){const{planes:t,points:r}=e;return{planes:[Pr(t[0]),Pr(t[1]),Pr(t[2]),Pr(t[3]),Pr(t[4]),Pr(t[5])],points:[n(r[0]),n(r[1]),n(r[2]),n(r[3]),n(r[4]),n(r[5]),n(r[6]),n(r[7])]}}return{planes:[Pr(),Pr(),Pr(),Pr(),Pr(),Pr()],points:[a(),a(),a(),a(),a(),a(),a(),a()]}}function mi(e,t,r=fi()){for(let t=0;t<6;t++)Rr(e[t],r.planes[t]);for(let e=0;e<8;e++)s(r.points[e],t[e]);return r}function hi(e){const{planes:t,points:r}=e;Br(r[4],r[0],r[3],t[0]),Br(r[1],r[5],r[6],t[1]),Br(r[4],r[5],r[1],t[2]),Br(r[3],r[2],r[6],t[3]),Br(r[0],r[1],r[2],t[4]),Br(r[5],r[4],r[7],t[5])}function pi(e,t){for(let r=0;r<6;r++)if(!Qr(e[r],t))return!1;return!0}const vi=[Mt(-1,-1,-1,1),Mt(1,-1,-1,1),Mt(1,1,-1,1),Mt(-1,1,-1,1),Mt(-1,-1,1,1),Mt(1,-1,1,1),Mt(1,1,1,1),Mt(-1,1,1,1)],gi=new St(ai);Object.freeze({__proto__:null,create:fi,copy:function(e,t=fi()){return mi(e.planes,e.points,t)},fromValues:mi,fromMatrix:function(e,t,r=fi()){const{points:o}=r,i=z(Gt.get(),t,e);A(i,i);for(let e=0;e<8;++e){const t=Ke(Ht.get(),vi[e],i);g(o[e],t[0]/t[3],t[1]/t[3],t[2]/t[3])}return hi(r),r},recomputePlanes:hi,intersectsSphere:function(e,t){for(let r=0;r<6;r++)if(Wr(e[r],t))return!1;return!0},intersectsRay:function(e,t){return pi(e,ci(t,gi.get()))},intersectClipRay:function(e,t){for(let r=0;r<6;r++){if(!Kr(e[r],t))return!1}return!0},intersectsLineSegment:function(e,t,r){return pi(e,li(t,r,gi.get()))},intersectsPoint:function(e,t){for(let r=0;r<6;r++)if(eo(e[r],t)>0)return!1;return!0},intersectsAABB:function(e,t){for(let r=0;r<6;r++)if(Yr(e[r],t))return!1;return!0},planePointIndices:{bottom:[5,1,0,4],near:[0,1,2,3],far:[5,4,7,6],right:[1,5,6,2],left:[4,0,3,7],top:[7,3,2,6]}});class xi{acquire(e,t,r,o,i,n){this.id=xi._idGen.gen(e&&e.id),this.geometry=e,this.material=t,this.transformation=r,this.instanceParameters=o,this.origin=i,this.shaderTransformation=n}getStaticTransformation(){return this.transformation}getShaderTransformation(){return this.shaderTransformation?this.shaderTransformation(this.transformation):this.transformation}computeAttachmentOrigin(e){return!!(this.material.computeAttachmentOrigin?this.material.computeAttachmentOrigin(this.geometry,e):this.geometry.computeAttachmentOrigin(e))&&(I(e,e,this.getStaticTransformation()),!0)}}function bi(e,t,r){for(let o=0;o<r;++o)t[2*o]=e[o],t[2*o+1]=e[o]-t[2*o]}xi._idGen=new wr,xi.pool=new N(xi);const yi=new Float64Array(1),wi=new Float32Array(2);const _i=new class{constructor(e=0){this.offset=e,this.sphere=ko(),this.tmpVertex=a()}applyToVertex(e,t,r){const o=this.objectTransform.transform;let i=o[0]*e+o[4]*t+o[8]*r+o[12],n=o[1]*e+o[5]*t+o[9]*r+o[13],a=o[2]*e+o[6]*t+o[10]*r+o[14];const s=this.offset/Math.sqrt(i*i+n*n+a*a);i+=i*s,n+=n*s,a+=a*s;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*i+c[4]*n+c[8]*a+c[12],this.tmpVertex[1]=c[1]*i+c[5]*n+c[9]*a+c[13],this.tmpVertex[2]=c[2]*i+c[6]*n+c[10]*a+c[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const o=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*o,t[1]+=t[1]*o,t[2]+=t[2]*o}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e,t){const r=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),o=this.offset/r;return this.sphere.center[0]=t[0]+t[0]*o,this.sphere.center[1]=t[1]+t[1]*o,this.sphere.center[2]=t[2]+t[2]*o,this.sphere.radius=e+e*this.offset/r,this.sphere}};const Ti=0,Si=1,Ci=2,Mi=3,Oi=4,Ai=e=>class extends e{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const t of null!=(e=this._managedDisposables)?e:[]){var e;const r=this[t];this[t]=null,r&&"function"==typeof r.dispose&&r.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}};class Pi extends(Ai(class{})){}class Ii extends Pi{constructor(e){super(),this.material=e.material,this.techniqueRep=e.techniqueRep,this.output=e.output}getTechnique(){return this.technique}getPipelineState(e,t){return this.getTechnique().pipeline}ensureResources(e){return 2}ensureParameters(e){}}class Ri extends Ii{constructor(e){super(e),this._textureIDs=new Set,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._initTransparent=!!e.initTextureTransparent,this._texture=this._acquireIfNotUndefined(this._textureId),this._textureNormal=this._acquireIfNotUndefined(e.normalTextureId),this._textureEmissive=this._acquireIfNotUndefined(e.emissiveTextureId),this._textureOcclusion=this._acquireIfNotUndefined(e.occlusionTextureId),this._textureMetallicRoughness=this._acquireIfNotUndefined(e.metallicRoughnessTextureId)}dispose(){this._textureIDs.forEach((e=>this._textureRepository.release(e))),this._textureIDs.clear()}updateTexture(e){e!==this._textureId&&(this._releaseIfNotUndefined(this._textureId),this._textureId=e,this._texture=this._acquireIfNotUndefined(this._textureId))}bindTexture(e,t){D(this._texture)&&(t.setUniform1i("tex",Ti),e.bindTexture(this._texture.glTexture,Ti)),D(this._textureNormal)&&(t.setUniform1i("normalTexture",Si),e.bindTexture(this._textureNormal.glTexture,Si)),D(this._textureEmissive)&&(t.setUniform1i("texEmission",Ci),e.bindTexture(this._textureEmissive.glTexture,Ci)),D(this._textureOcclusion)&&(t.setUniform1i("texOcclusion",Mi),e.bindTexture(this._textureOcclusion.glTexture,Mi)),D(this._textureMetallicRoughness)&&(t.setUniform1i("texMetallicRoughness",Oi),e.bindTexture(this._textureMetallicRoughness.glTexture,Oi))}bindTextureScale(e,t){const r=D(this._texture)&&this._texture.glTexture;r&&r.descriptor.textureCoordinateScaleFactor?t.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):t.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquireIfNotUndefined(e){if(!E(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)}_releaseIfNotUndefined(e){void 0!==e&&(this._textureIDs.delete(e),this._textureRepository.release(e))}}function Fi(e,t,r,o){return function(e,t){return Math.max(V(e*t.scale,e,t.factor),function(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}(e,t))}(e,function(e,t,r){const o=r.parameters,i=r.paddingPixelsOverride;return Li.scale=Math.min(o.divisor/(t-o.offset),1),Li.factor=function(e){return Math.abs(e*e*e)}(e),Li.minPixelSize=o.minPixelSize,Li.paddingPixels=i,Li}(t,r,o))}const Li={scale:0,factor:0,minPixelSize:0,paddingPixels:0},Bi=Me(),zi=pr;function Ni(e,t,r,o,i,n,a){const s=function(e){return!!D(e)&&!e.visible}(t),c=r.tolerance;if(!s)if(e.boundingInfo)vr("triangle"===e.data.primitiveType),Ei(e.boundingInfo,o,i,c,n,a);else{const t=e.getIndices(zi.POSITION),r=e.getAttribute(zi.POSITION);Hi(o,i,0,t.length/3,t,r,void 0,n,a)}}const Di=a();function Ei(e,t,r,o,i,n){const a=function(e,t,r){return g(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,Di);if(Oe(Bi,e.getBBMin()),Ae(Bi,e.getBBMax()),D(i)&&i.applyToAabb(Bi),function(e,t,r,o){return function(e,t,r,o,i){const n=(e[0]-o-t[0])*r[0],a=(e[3]+o-t[0])*r[0];let s=Math.min(n,a),c=Math.max(n,a);const l=(e[1]-o-t[1])*r[1],d=(e[4]+o-t[1])*r[1];if(c=Math.min(c,Math.max(l,d)),c<0)return!1;if(s=Math.max(s,Math.min(l,d)),s>c)return!1;const u=(e[2]-o-t[2])*r[2],f=(e[5]+o-t[2])*r[2];return c=Math.min(c,Math.max(u,f)),!(c<0)&&(s=Math.max(s,Math.min(u,f)),!(s>c)&&s<i)}(e,t,r,o,1/0)}(Bi,t,a,o)){const a=e.getPrimitiveIndices(),s=e.getIndices(),c=e.getPosition(),l=a?a.length:s.length/3;if(l>Yi){const a=e.getChildren();if(void 0!==a){for(let e=0;e<8;++e)void 0!==a[e]&&Ei(a[e],t,r,o,i,n);return}}Hi(t,r,0,l,s,c,a,i,n)}}const Vi=2**-52,Ui=a();function Hi(e,t,r,o,i,n,a,s,c){if(a)return function(e,t,r,o,i,n,a,s,c){const{data:l,offsetIdx:d,strideIdx:u}=n,f=e[0],m=e[1],h=e[2],p=t[0]-f,v=t[1]-m,g=t[2]-h;for(let e=r;e<o;++e){const t=a[e];let r=3*t,o=d+u*i[r++],n=l[o++],x=l[o++],b=l[o];o=d+u*i[r++];let y=l[o++],w=l[o++],_=l[o];o=d+u*i[r];let T=l[o++],S=l[o++],C=l[o];D(s)&&([n,x,b]=s.applyToVertex(n,x,b,e),[y,w,_]=s.applyToVertex(y,w,_,e),[T,S,C]=s.applyToVertex(T,S,C,e));const M=y-n,O=w-x,A=_-b,P=T-n,I=S-x,R=C-b,F=v*R-I*g,L=g*P-R*p,B=p*I-P*v,z=M*F+O*L+A*B;if(Math.abs(z)<=Vi)continue;const N=f-n,E=m-x,V=h-b,U=N*F+E*L+V*B;if(z>0){if(U<0||U>z)continue}else if(U>0||U<z)continue;const H=E*A-O*V,G=V*M-A*N,k=N*O-M*E,j=p*H+v*G+g*k;if(z>0){if(j<0||U+j>z)continue}else if(j>0||U+j<z)continue;const q=(P*H+I*G+R*k)/z;q>=0&&c(q,ji(M,O,A,P,I,R,Ui),t)}}(e,t,r,o,i,n,a,s,c);const{data:l,offsetIdx:d,strideIdx:u}=n,f=e[0],m=e[1],h=e[2],p=t[0]-f,v=t[1]-m,g=t[2]-h;for(let e=r,t=3*r;e<o;++e){let r=d+u*i[t++],o=l[r++],n=l[r++],a=l[r];r=d+u*i[t++];let x=l[r++],b=l[r++],y=l[r];r=d+u*i[t++];let w=l[r++],_=l[r++],T=l[r];D(s)&&([o,n,a]=s.applyToVertex(o,n,a,e),[x,b,y]=s.applyToVertex(x,b,y,e),[w,_,T]=s.applyToVertex(w,_,T,e));const S=x-o,C=b-n,M=y-a,O=w-o,A=_-n,P=T-a,I=v*P-A*g,R=g*O-P*p,F=p*A-O*v,L=S*I+C*R+M*F;if(Math.abs(L)<=Vi)continue;const B=f-o,z=m-n,N=h-a,E=B*I+z*R+N*F;if(L>0){if(E<0||E>L)continue}else if(E>0||E<L)continue;const V=z*M-C*N,U=N*S-M*B,H=B*C-S*z,G=p*V+v*U+g*H;if(L>0){if(G<0||E+G>L)continue}else if(G>0||E+G<L)continue;const k=(O*V+A*U+P*H)/L;k>=0&&c(k,ji(S,C,M,O,A,P,Ui),e)}}const Gi=a(),ki=a();function ji(e,t,r,o,i,n,a){return g(Gi,e,t,r),g(ki,o,i,n),p(a,Gi,ki),_(a,a),a}function qi(e,t,r){if(!e)return;const o=e.parameters,i=e.paddingPixelsOverride;t.setUniform4f(r,o.divisor,o.offset,o.minPixelSize,i)}function $i(e,t){const r=t?$i(t):{};for(const t in e){let o=e[t];o&&o.forEach&&(o=Wi(o)),null==o&&t in r||(r[t]=o)}return r}function Wi(e){const t=[];return e.forEach((e=>t.push(e))),t}const Xi={multiply:1,ignore:2,replace:3,tint:4},Yi=1e3,Qi={position:0,normal:1,uv0:2,color:3,size:4,tangent:4,uvMapSpace:4,auxpos1:5,symbolColor:5,auxpos2:6,featureAttribute:6,instanceFeatureAttribute:6,instanceColor:7,bound1:5,bound2:6,bound3:7,model:8,modelNormal:12,modelOriginHi:11,modelOriginLo:15};class Ki{constructor(e,t,r){this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Qi,this.id=Ki._idGen.gen(e),this._params=$i(t,r)}dispose(){}get params(){return this._params}update(){return!1}setParameterValues(e){(function(e,t){let r=!1;for(const o in t){const i=t[o];void 0!==i&&(r=!0,Array.isArray(i)?e[o]=i.slice():e[o]=i)}return r})(this._params,e)&&(this.validateParameterValues(this._params),this.parametersChanged())}validateParameterValues(){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}isVisibleInPass(e){return!0}get renderOccluded(){return this.params.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){D(this.materialRepository)&&this.materialRepository.materialChanged(this)}}Ki._idGen=new wr;function Ji(e,t,r,o,i){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(o*=a,null==i||1===i)for(let r=0;r<s;++r){const i=2*e[r];n[o]=t[i],n[o+1]=t[i+1],o+=a}else for(let r=0;r<s;++r){const s=2*e[r];for(let e=0;e<i;++e)n[o]=t[s],n[o+1]=t[s+1],o+=a}}function Zi(e,t,r,o,i){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(o*=a,null==i||1===i)for(let r=0;r<s;++r){const i=3*e[r];n[o]=t[i],n[o+1]=t[i+1],n[o+2]=t[i+2],o+=a}else for(let r=0;r<s;++r){const s=3*e[r];for(let e=0;e<i;++e)n[o]=t[s],n[o+1]=t[s+1],n[o+2]=t[s+2],o+=a}}function en(e,t,r,o,i){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(o*=a,null==i||1===i)for(let r=0;r<s;++r){const i=4*e[r];n[o]=t[i],n[o+1]=t[i+1],n[o+2]=t[i+2],n[o+3]=t[i+3],o+=a}else for(let r=0;r<s;++r){const s=4*e[r];for(let e=0;e<i;++e)n[o]=t[s],n[o+1]=t[s+1],n[o+2]=t[s+2],n[o+3]=t[s+3],o+=a}}function tn(e,t,r,o,i,n){if(r){const a=r,s=o.typedBuffer,c=o.typedBufferStride,l=e.length;if(i*=c,null==n||1===n)for(let r=0;r<l;++r){const o=3*e[r],n=t[o],l=t[o+1],d=t[o+2];s[i]=a[0]*n+a[4]*l+a[8]*d+a[12],s[i+1]=a[1]*n+a[5]*l+a[9]*d+a[13],s[i+2]=a[2]*n+a[6]*l+a[10]*d+a[14],i+=c}else for(let r=0;r<l;++r){const o=3*e[r],l=t[o],d=t[o+1],u=t[o+2],f=a[0]*l+a[4]*d+a[8]*u+a[12],m=a[1]*l+a[5]*d+a[9]*u+a[13],h=a[2]*l+a[6]*d+a[10]*u+a[14];for(let e=0;e<n;++e)s[i]=f,s[i+1]=m,s[i+2]=h,i+=c}}else Zi(e,t,o,i,n)}function rn(e,t,r,o,i,n){if(r){const a=r,s=o.typedBuffer,c=o.typedBufferStride,l=e.length,d=a[0],u=a[1],f=a[2],m=a[4],h=a[5],p=a[6],v=a[8],g=a[9],x=a[10],b=Math.abs(1-d*d+m*m+v*v)>1e-5||Math.abs(1-u*u+h*h+g*g)>1e-5||Math.abs(1-f*f+p*p+x*x)>1e-5;if(i*=c,null==n||1===n)for(let r=0;r<l;++r){const o=3*e[r],n=t[o],a=t[o+1],l=t[o+2];let y=d*n+m*a+v*l,w=u*n+h*a+g*l,_=f*n+p*a+x*l;if(b){const e=y*y+w*w+_*_;if(e<.999999&&e>1e-6){const t=Math.sqrt(e);y/=t,w/=t,_/=t}}s[i+0]=y,s[i+1]=w,s[i+2]=_,i+=c}else for(let r=0;r<l;++r){const o=3*e[r],a=t[o],l=t[o+1],y=t[o+2];let w=d*a+m*l+v*y,_=u*a+h*l+g*y,T=f*a+p*l+x*y;if(b){const e=w*w+_*_+T*T;if(e<.999999&&e>1e-6){const t=Math.sqrt(e);w/=t,_/=t,T/=t}}for(let e=0;e<n;++e)s[i+0]=w,s[i+1]=_,s[i+2]=T,i+=c}}else Zi(e,t,o,i,n)}function on(e,t,r,o,i,n){const a=o.typedBuffer,s=o.typedBufferStride,c=e.length;if(i*=s,null==n||1===n){if(4===r)for(let r=0;r<c;++r){const o=4*e[r];a[i]=t[o],a[i+1]=t[o+1],a[i+2]=t[o+2],a[i+3]=t[o+3],i+=s}else if(3===r)for(let r=0;r<c;++r){const o=3*e[r];a[i]=t[o],a[i+1]=t[o+1],a[i+2]=t[o+2],a[i+3]=255,i+=s}}else if(4===r)for(let r=0;r<c;++r){const o=4*e[r];for(let e=0;e<n;++e)a[i]=t[o],a[i+1]=t[o+1],a[i+2]=t[o+2],a[i+3]=t[o+3],i+=s}else if(3===r)for(let r=0;r<c;++r){const o=3*e[r];for(let e=0;e<n;++e)a[i]=t[o],a[i+1]=t[o+1],a[i+2]=t[o+2],a[i+3]=255,i+=s}}function nn(e,...t){let r="";for(let o=0;o<t.length;o++)r+=e[o]+t[o];return r+=e[e.length-1],r}!function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(nn||(nn={}));function an(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case 0:r.code.add(nn`
        void discardOrAdjustAlpha(inout vec4 color) {}
      `);break;case 1:r.code.add(nn`
        void discardOrAdjustAlpha(inout vec4 color) {
          color.a = 1.0;
        }
      `);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(nn`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }
      `);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(nn`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }
      `)}}class sn{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}function cn(e={}){return(t,r)=>{var o,i;t._parameterNames=null!=(o=t._parameterNames)?o:[],t._parameterNames.push(r);const n=t._parameterNames.length-1,a=e.count||2,s=Math.ceil(H(a)),c=null!=(i=t._parameterBits)?i:[0];let l=0;for(;c[l]+s>16;)l++,l>=c.length&&c.push(0);t._parameterBits=c;const d=c[l],u=(1<<s)-1<<d;c[l]+=s,Object.defineProperty(t,r,{get(){return this[n]},set(e){if(this[n]!==e&&(this[n]=e,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~u|+e<<d&u,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration values must be booleans or numbers!"}})}}var ln;!function(e){function t(e,t,r){G(dn,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",dn)}e.bindCamPosition=function(e,t,r){e.setUniform3f("camPos",r[3]-t[0],r[7]-t[1],r[11]-t[2])},e.bindProjectionMatrix=function(e,t){e.setUniformMatrix4fv("proj",t)},e.bindNearFar=function(e,t){e.setUniform2fv("nearFar",t)},e.bindViewCustomOrigin=t,e.bindView=function(e,r){t(e,r.origin,r.camera.viewMatrix)},e.bindViewport=function(e,t){e.setUniform4fv("viewport",t.camera.fullViewport)}}(ln||(ln={}));const dn=vt();function un(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=nn`
      struct SliceFactors {
        float front;
        float side0;
        float side1;
        float side2;
        float side3;
      };

      SliceFactors calculateSliceFactors(vec3 pos) {
        vec3 rel = pos - slicePlaneOrigin;

        vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
        float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);

        float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
        float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);

        float basis1Dot = dot(slicePlaneBasis1, rel);
        float basis2Dot = dot(slicePlaneBasis2, rel);

        return SliceFactors(
          dot(slicePlaneNormal, pos) + slicePlaneW,
          -basis1Dot - basis1Len2,
          basis1Dot - basis1Len2,
          -basis2Dot - basis2Len2,
          basis2Dot - basis2Len2
        );
      }

      bool sliceByFactors(SliceFactors factors) {
        return factors.front < 0.0
          && factors.side0 < 0.0
          && factors.side1 < 0.0
          && factors.side2 < 0.0
          && factors.side3 < 0.0;
      }

      bool sliceEnabled() {
        // a slicePlaneBasis1 vector of zero length is used to disable slicing in the shader during draped rendering.
        return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
      }

      bool sliceByPlane(vec3 pos) {
        return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
      }

      #define rejectBySlice(_pos_) sliceByPlane(_pos_)
      #define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }
    `,o=nn`
      vec4 applySliceHighlight(vec4 color, vec3 pos) {
        SliceFactors factors = calculateSliceFactors(pos);

        if (sliceByFactors(factors)) {
          return color;
        }

        const float HIGHLIGHT_WIDTH = 1.0;
        const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);

        factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
        factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
        factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
        factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
        factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);

        float highlightFactor = (1.0 - step(0.5, factors.front))
          * (1.0 - step(0.5, factors.side0))
          * (1.0 - step(0.5, factors.side1))
          * (1.0 - step(0.5, factors.side2))
          * (1.0 - step(0.5, factors.side3));

        return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
      }
    `,i=t.sliceHighlightDisabled?nn`#define highlightSlice(_color_, _pos_) (_color_)`:nn`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(i)}else{const r=nn`
      #define rejectBySlice(_pos_) false
      #define discardBySlice(_pos_) {}
      #define highlightSlice(_color_, _pos_) (_color_)
    `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}!function(e){e.bindUniformsWithOrigin=function(t,r,o){e.bindUniforms(t,r,o.slicePlane,o.origin)},e.bindUniforms=function(e,t,r,o){t.slicePlaneEnabled&&(D(r)?(o?(c(fn,r.origin,o),e.setUniform3fv("slicePlaneOrigin",fn)):e.setUniform3fv("slicePlaneOrigin",r.origin),e.setUniform3fv("slicePlaneBasis1",r.basis1),e.setUniform3fv("slicePlaneBasis2",r.basis2)):(e.setUniform3fv("slicePlaneBasis1",k),e.setUniform3fv("slicePlaneBasis2",k),e.setUniform3fv("slicePlaneOrigin",k)))}}(un||(un={}));const fn=a();function mn(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.code.add(nn`
    void outputHighlight() {
      vec4 fragCoord = gl_FragCoord;

      float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
      }
      else {
        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
      }
    }
  `)}function hn(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(nn`
      vec3 vvScale(vec4 _featureAttribute) {
        return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
      }

      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
        return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
      }
    `),e.vertex.code.add(nn`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?nn`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(nn`
      vec4 localPosition() { return vec4(position, 1.0); }

      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }
    `),t.vvColor?(e.vertex.defines.addInt("VV_COLOR_N",8),e.vertex.code.add(nn`
      uniform float vvColorValues[VV_COLOR_N];
      uniform vec4 vvColorColors[VV_COLOR_N];

      vec4 vvGetColor(vec4 featureAttribute, float values[VV_COLOR_N], vec4 colors[VV_COLOR_N]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < VV_COLOR_N; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[VV_COLOR_N - 1];
      }

      ${t.vvInstancingEnabled?nn`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(nn`
      vec4 vvColor() { return vec4(1.0); }
    `)}function pn(e){e.vertex.code.add(nn`
    float screenSizePerspectiveMinSize(float size, vec4 factor) {
      float nonZeroSize = 1.0 - step(size, 0.0);

      return (
        factor.z * (
          1.0 +
          // Multiply by nzs ensures if size is 0, then we ignore proportionally scaled padding
          nonZeroSize *
          2.0 * factor.w / (
            size + (1.0 - nonZeroSize) // Adding 1 - nzs ensures we divide either by size, or by 1
          )
        )
      );
    }
  `),e.vertex.code.add(nn`
    float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
      return absCosAngle * absCosAngle * absCosAngle;
    }
  `),e.vertex.code.add(nn`
    vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
      return vec4(
        min(params.x / (distanceToCamera - params.y), 1.0),
        screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
        params.z,
        params.w
      );
    }
  `),e.vertex.code.add(nn`
    float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
      return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
    }
  `),e.vertex.code.add(nn`
    float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorFloat(
        size,
        screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
      );
    }
  `),e.vertex.code.add(nn`
    vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
      return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
    }
  `),e.vertex.code.add(nn`
    vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
    }
  `)}function vn(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(pn),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(nn`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===t.viewingMode?nn`vec3 worldNormal = normalize(worldPos + localOrigin);`:nn`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?nn`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:nn`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(nn`
    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }
    `)}(mn||(mn={})).bindOutputHighlight=function(e,t,r){e.bindTexture(r.highlightDepthTexture,5),t.setUniform1i("depthTex",5),t.setUniform4f("highlightViewportPixelSz",0,0,r.inverseViewport[0],r.inverseViewport[1])},function(e){function t(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}e.bindUniforms=t,e.bindUniformsWithOpacity=function(e,r){t(e,r),r.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",r.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",r.vvOpacityOpacities))},e.bindUniformsForSymbols=function(e,r){t(e,r),r.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",r.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",r.vvSymbolRotationMatrix))}}(hn||(hn={})),(pn||(pn={})).bindUniforms=function(e,t){t.screenSizePerspective&&(qi(t.screenSizePerspective,e,"screenSizePerspective"),qi(t.screenSizePerspectiveAlignment||t.screenSizePerspective,e,"screenSizePerspectiveAlignment"))},(vn||(vn={})).bindUniforms=function(e,t,r){if(!t.verticalOffset)return;const o=function(e,t,r,o=gn){return o.screenLength=e.screenLength,o.perDistance=Math.tan(.5*t)/(.5*r),o.minWorldLength=e.minWorldLength,o.maxWorldLength=e.maxWorldLength,o}(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),i=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",o.screenLength*i,o.perDistance,o.minWorldLength,o.maxWorldLength)};const gn={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0},xn=Je(770,1,771,771),bn=Ze(1,1),yn=Ze(0,771);function wn(e){return 2===e?null:1===e?yn:bn}const _n={factor:-1,units:-2};function Tn(e){return 3===e||2===e?513:515}const Sn={mask:255},Cn={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},Mn={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};function On(e){e.code.add(nn`
    // This is the maximum float value representable as 32bit fixed point,
    // it is rgba2float(vec4(1)) inlined.
    const float MAX_RGBA_FLOAT =
      255.0 / 256.0 +
      255.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 / 256.0;

    // Factors to convert to fixed point, i.e. factors (256^0, 256^1, 256^2, 256^3)
    const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

    vec4 float2rgba(const float value) {
      // Make sure value is in the domain we can represent
      float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

      // Decompose value in 32bit fixed point parts represented as
      // uint8 rgba components. Decomposition uses the fractional part after multiplying
      // by a power of 256 (this removes the bits that are represented in the previous
      // component) and then converts the fractional part to 8bits.
      vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

      // Convert uint8 values (from 0 to 255) to floating point representation for
      // the shader
      const float toU8AsFloat = 1.0 / 255.0;

      return fixedPointU8 * toU8AsFloat;
    }

    // Factors to convert rgba back to float
    const vec4 RGBA_2_FLOAT_FACTORS = vec4(
      255.0 / (256.0),
      255.0 / (256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0 * 256.0)
    );

    float rgba2float(vec4 rgba) {
      // Convert components from 0->1 back to 0->255 and then
      // add the components together with their corresponding
      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)
      return dot(rgba, RGBA_2_FLOAT_FACTORS);
    }
  `)}function An(e){e.fragment.include(On),e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("shadowMapNum","int"),e.fragment.uniforms.add("shadowMapDistance","vec4"),e.fragment.uniforms.add("shadowMapMatrix","mat4",4),e.fragment.uniforms.add("depthHalfPixelSz","float"),e.fragment.code.add(nn`
    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      float halfPixelSize = depthHalfPixelSz;
      vec4 distance = shadowMapDistance;
      float depth = _linearDepth;

      //choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      if (i >= shadowMapNum) { return 0.0; }

      mat4 mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;

      // vertex completely outside? -> no shadow
      vec3 lvpos = 0.5 * lv.xyz + vec3(0.5);
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;

      float texSize = 0.5 / halfPixelSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);

      float s00 = rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, -halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s10 = rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, -halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s11 = rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s01 = rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, halfPixelSize))) < lvpos.z ? 1.0 : 0.0;

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }
  `)}!function(e){e.bindUniforms=function(e,t,r){t.shadowMappingEnabled&&(t.shadowMap.bind(e,r),t.shadowMap.bindView(e,t.origin))},e.bindViewCustomOrigin=function(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)},e.bindView=function(e,t){t.shadowMappingEnabled&&t.shadowMap.bindView(e,t.origin)}}(An||(An={}));class Pn{constructor(e){this.context=e,this._doublePrecisionRequiresObfuscation=null}get doublePrecisionRequiresObfuscation(){if(E(this._doublePrecisionRequiresObfuscation)){const e=Rn(this.context,!1),t=Rn(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let In=null;function Rn(e,t){const r=new et(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),o=ft.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),i=new mt(e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:o}),n=b(5633261.287538229,2626832.878767164,1434988.0495278358),a=b(5633271.46742708,2626873.6381334523,1434963.231608387),s=function(r,o){const i=new ht(e,`\n\n  precision highp float;\n\n  attribute vec2 a_pos;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",{a_pos:0}),n=new Float32Array(6);bi(r,n,3);const a=new Float32Array(6);return bi(o,a,3),e.bindProgram(i),i.setUniform3f("u_highA",n[0],n[2],n[4]),i.setUniform3f("u_lowA",n[1],n[3],n[5]),i.setUniform3f("u_highB",a[0],a[2],a[4]),i.setUniform3f("u_lowB",a[1],a[3],a[5]),i}(n,a),c=e.getBoundFramebufferObject(),{x:l,y:d,width:u,height:f}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(i),e.drawArrays(5,0,4);const m=new Uint8Array(4);r.readPixels(0,0,1,1,6408,5121,m),s.dispose(),i.dispose(!1),o.dispose(),r.dispose(),e.setViewport(l,d,u,f),e.bindFramebuffer(c);const h=(n[2]-a[2])/25,p=xr(m);return Math.abs(h-p)}function Fn({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(nn`
      vec3 dpPlusFrc(vec3 a, vec3 b) {
        return mix(a, a + b, vec3(notEqual(b, vec3(0))));
      }

      vec3 dpMinusFrc(vec3 a, vec3 b) {
        return mix(vec3(0), a - b, vec3(notEqual(a, b)));
      }

      // based on https://www.thasler.com/blog/blog/glsl-part2-emu
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = dpPlusFrc(hiA, hiB);
        vec3 e = dpMinusFrc(t1, hiA);
        vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
        return t1 + t2;
      }
    `):e.add(nn`
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = hiA + hiB;
        vec3 e = t1 - hiA;
        vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
        return t1 + t2;
      }
    `)}function Ln(e){return!!j("force-double-precision-obfuscation")||function(e){return(E(In)||In.context!==e)&&(In=new Pn(e)),In}(e).doublePrecisionRequiresObfuscation}function Bn(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(Fn,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[nn`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,nn`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?nn`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,nn`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,nn`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangets?nn`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:nn``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}!function(e){e.Uniforms=class{},e.bindCustomOrigin=function(e,t){(function(e,t,r,o){for(let i=0;i<o;++i)yi[0]=e[i],bi(yi,wi,1),t[i]=wi[0],r[i]=wi[1]})(t,zn,Nn,3),e.setUniform3fv("viewOriginHi",zn),e.setUniform3fv("viewOriginLo",Nn)}}(Bn||(Bn={}));const zn=a(),Nn=a();function Dn(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(nn`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
      }
    `)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(nn`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
        vuvRegion = uvRegion;
      }
    `)),0===t.attributeTextureCoordinates&&e.vertex.code.add(nn`
      void forwardTextureCoordinates() {}
    `)}function En(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(nn`
    #ifndef GL_EXT_shader_texture_lod
      float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
        float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
        return max(0.0, 0.5 * log2(deltaMaxSqr));
      }
    #endif

    vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
      //[umin, vmin, umax, vmax]
      vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
      vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;

      // calculate derivative of continuous texture coordinate
      // to avoid mipmapping artifacts caused by manual wrapping in shader
      vec2 dUVdx = dFdx(textureCoordinates) * atlasScale;
      vec2 dUVdy = dFdy(textureCoordinates) * atlasScale;

      #ifdef GL_EXT_shader_texture_lod
        return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
      #else
        // use bias to compensate for difference in automatic vs desired mipmap level
        vec2 dUVdxAuto = dFdx(uvAtlas);
        vec2 dUVdyAuto = dFdy(uvAtlas);
        float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
        float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);

        return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
      #endif
    }
  `)}function Vn(e,t){e.include(Dn,t),e.fragment.code.add(nn`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(nn`
      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return texture2D(tex, params.uv);
      }
    `),2===t.attributeTextureCoordinates&&(e.include(En),e.fragment.code.add(nn`
    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
      }
    `))}ct(0,.6,.2);function Un(e,t){const r=e.fragment,o=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&o&&e.include(Vn,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(nn`
      float getBakedOcclusion() { return 1.0; }
  `),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(nn`
      vec3 mrr;
      vec3 emission;
      float occlusion;
    `),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(nn`
      void applyMetallnessAndRoughness(TextureLookupParameter params) {
        vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;

        mrr[0] *= metallicRoughness.b;
        mrr[1] *= metallicRoughness.g;
      }`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(nn`
      void applyEmission(TextureLookupParameter params) {
        emission *= textureLookup(texEmission, params).rgb;
      }`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(nn`
      void applyOcclusion(TextureLookupParameter params) {
        occlusion *= textureLookup(texOcclusion, params).r;
      }

      float getBakedOcclusion() {
        return occlusion;
      }
      `)):r.code.add(nn`
      float getBakedOcclusion() { return 1.0; }
      `),r.code.add(nn`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${o?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(nn`
      const vec3 mrr = vec3(0.0, 0.6, 0.2);
      const vec3 emission = vec3(0.0);
      float occlusion = 1.0;

      void applyPBRFactors() {}

      float getBakedOcclusion() { return 1.0; }
    `)}function Hn(e,t){t.linearDepth?e.vertex.code.add(nn`
    vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
      vec4 eye = view * vec4(pos, 1.0);
      depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
      return proj * eye;
    }
    `):e.vertex.code.add(nn`
    vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
      // Make sure the order of operations is the same as in transformPositionWithDepth.
      return proj * (view * vec4(pos, 1.0));
    }
    `)}(Un||(Un={})).bindUniforms=function(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))};const Gn=e.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class kn{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&Gn.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class jn extends kn{constructor(){super(...arguments),this.vertex=new Wn,this.fragment=new Wn,this.attributes=new Xn,this.varyings=new Yn,this.extensions=new Qn,this.defines=new Kn}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),o=this.varyings.generateSource(),i="vertex"===e?this.vertex:this.fragment,n=i.uniforms.generateSource(),a=i.code.generateSource(),s="vertex"===e?Zn:Jn,c=this.defines.generateSource().concat(i.defines.generateSource());return`\n${t.join("\n")}\n\n${c.join("\n")}\n\n${s}\n\n${n.join("\n")}\n\n${r.join("\n")}\n\n${o.join("\n")}\n\n${a.join("\n")}`}}class qn{constructor(){this._entries=new Array,this._set=new Set}add(e,t,r){const o=`${e}_${t}_${r}`;return this._set.has(o)||(this._entries.push([e,t,r]),this._set.add(o)),this}generateSource(){return this._entries.map((e=>{return`uniform ${e[1]} ${e[0]}${t=e[2],t?`[${t}]`:""};`;var t}))}}class $n{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class Wn extends kn{constructor(){super(...arguments),this.uniforms=new qn,this.code=new $n,this.defines=new Kn}get builder(){return this}}class Xn{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class Yn{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class Qn{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?Qn.ALLOWLIST_VERTEX:Qn.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}Qn.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],Qn.ALLOWLIST_VERTEX=[];class Kn{constructor(){this._entries=new Map}addInt(e,t){const r=t%1==0?t.toFixed(0):t.toString();this._entries.set(e,r)}addFloat(e,t){const r=t%1==0?t.toFixed(1):t.toString();this._entries.set(e,r)}generateSource(){return Array.from(this._entries,(([e,t])=>`#define ${e} ${t}`))}}const Jn="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",Zn="precision highp float;\nprecision highp sampler2D;";function ea(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(nn`
      void forwardVertexColor() { vColor = color; }
    `),e.vertex.code.add(nn`
      void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }
    `)):e.vertex.code.add(nn`
      void forwardVertexColor() {}
      void forwardNormalizedVertexColor() {}
    `)}function ta(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(nn`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("uCameraNearFar","vec2"),e.vertex.code.add(nn`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - uCameraNearFar[0]) / (uCameraNearFar[1] - uCameraNearFar[0]);
      }
    `)):e.vertex.code.add(nn`
      void forwardLinearDepth() {}
    `)}function ra(e){e.vertex.code.add(nn`
    const float PI = 3.141592653589793;
  `),e.fragment.code.add(nn`
    const float PI = 3.141592653589793;
    const float LIGHT_NORMALIZATION = 1.0 / PI;
    const float INV_PI = 0.3183098861837907;
    const float HALF_PI = 1.570796326794897;
    `)}function oa(e){const t=e.fragment.code;t.add(nn`
    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
    {
      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
    }
    `),t.add(nn`
    float integratedRadiance(float cosTheta2, float roughness)
    {
      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
    }
    `),t.add(nn`
    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
    {
      float cosTheta2 = 1.0 - RdotNG * RdotNG;
      float intRadTheta = integratedRadiance(cosTheta2, roughness);

      // Calculate the integrated directional radiance of the ground and the sky
      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
      float sky = 2.0 - ground;
      return (ground * ambientGround + sky * ambientSky) * 0.5;
    }
    `)}function ia(e,t){const r=e.fragment.code;e.include(ra),3===t.pbrMode||4===t.pbrMode?(r.add(nn`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(nn`
    vec3 fresnelReflection(float angle, vec3 f0, float f90) {
      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
    }
    `),r.add(nn`
    float normalDistributionWater(float NdotH, float roughness)
    {
      float r2 = roughness * roughness;
      float NdotH2 = NdotH * NdotH;
      float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
      return r2 / denom;
    }
    `),r.add(nn`
    float geometricOcclusionKelemen(float LoH)
    {
        return 0.25 / (LoH * LoH);
    }
    `),r.add(nn`
    vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
    {
      vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
      float dSun = normalDistributionWater(props.NdotH, roughness);
      float V = geometricOcclusionKelemen(props.LdotH);

      float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
      float strengthSunHaze  = 1.2;
      float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;

      return ((dSun + dSunHaze) * V) * F;
    }

    vec3 tonemapACES(const vec3 x) {
      return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
    }
    `)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(oa),r.add(nn`
    struct PBRShadingInfo
    {
        float NdotL;                  // cos angle between normal and light direction
        float NdotV;                  // cos angle between normal and view direction
        float NdotH;                  // cos angle between normal and half vector
        float VdotH;                  // cos angle between view direction and half vector
        float LdotH;                  // cos angle between view light direction and half vector
        float NdotNG;                 // cos angle between normal and normal of the ground
        float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground
        float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination
        float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination
        vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)
        vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)
        vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)
        vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)

        float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping
        float ssao;                   // ssao coefficient
        vec3 albedoLinear;            // linear color of the albedo
        vec3 f0;                      // fresnel value at normal incident light
        vec3 f90;                     // fresnel value at 90o of incident light

        vec3 diffuseColor;            // diffuse color of the material used in environment illumination
        float metalness;              // metalness of the material
        float roughness;              // roughness of the material
    };
    `),r.add(nn`
    float normalDistribution(float NdotH, float roughness)
    {
        float a = NdotH * roughness;
        float b = roughness / (1.0 - NdotH * NdotH + a * a);
        return b * b * INV_PI;
    }
    `),r.add(nn`
    const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
    const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
    const vec2 c2 = vec2(-1.04, 1.04);

    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
        vec4 r = roughness * c0 + c1;
        float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
        return c2 * a004 + r.zw;
    }
    `),r.add(nn`
    vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
      vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
      vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);

      // From diffuse illumination calculate reflected color
      vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;

      // From specular illumination calculate reflected color
      vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
      vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
      vec3 specularComponent = specularColor * indirectSpecular;

      return (diffuseComponent + specularComponent);
    }
    `),r.add(nn`
    float gamutMapChanel(float x, vec2 p){
      return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
    }`),r.add(nn`
    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
      vec3 outColor;
      vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
      outColor.x = gamutMapChanel(inColor.x, p) ;
      outColor.y = gamutMapChanel(inColor.y, p) ;
      outColor.z = gamutMapChanel(inColor.z, p) ;
      return outColor;
    }
    `))}function na(e){e.vertex.code.add(nn`
    vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
      vec3 camToVert = posWorld - camPosWorld;

      bool isBackface = dot(camToVert, normalWorld) > 0.0;
      if (isBackface) {
        posClip.z += 0.0000003 * posClip.w;
      }
      return posClip;
    }
  `)}function aa(e){const t=nn`
    vec3 decodeNormal(vec2 f) {
      float z = 1.0 - abs(f.x) - abs(f.y);
      return vec3(f + sign(f) * min(z, 0.0), z);
    }
  `;e.fragment.code.add(t),e.vertex.code.add(t)}function sa(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(nn`
      vec3 normalModel() {
        return normal;
      }
    `)),1===t.normalType&&(e.include(aa),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(nn`
      vec3 normalModel() {
        return decodeNormal(normalCompressed);
      }
    `)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(nn`
      vec3 screenDerivativeNormal(vec3 positionView) {
        return normalize(cross(dFdx(positionView), dFdy(positionView)));
      }
    `))}function ca(e){e.attributes.add("position","vec3"),e.vertex.code.add(nn`
    vec3 positionModel() { return position; }
  `)}function la(e){e.vertex.code.add(nn`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${nn.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${nn.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${nn.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${nn.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function da(e,t){t.symbolColor?(e.include(la),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(nn`
    int symbolColorMixMode;

    vec4 getSymbolColor() {
      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
    }

    void forwardColorMixMode() {
      colorMixMode = float(symbolColorMixMode) + 0.5;
    }
  `):e.vertex.code.add(nn`
    vec4 getSymbolColor() { return vec4(1.0); }
    void forwardColorMixMode() {}
    `)}function ua(e,t){e.include(ca),e.vertex.include(Fn,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(nn`
    // compute position in world space orientation, but relative to the camera position
    vec3 positionWorldCameraRelative() {
      vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();

      vec3 transform_CameraRelativeFromModel = dpAdd(
        uTransform_WorldFromModel_TL,
        uTransform_WorldFromModel_TH,
        -uTransform_WorldFromView_TL,
        -uTransform_WorldFromView_TH
      );

      return transform_CameraRelativeFromModel + rotatedModelPosition;
    }

    // position in view space, that is relative to the camera position and orientation
    vec3 position_view() {
      return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
    }

    // compute gl_Position and forward related varyings to fragment shader
    void forwardPosition() {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      vPosition_view = position_view();
      gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
    }

    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(nn`
    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `)}function fa(e,t){0===t.normalType||1===t.normalType?(e.include(sa,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(nn`
      void forwardNormal() {
        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
      }
    `)):2===t.normalType?(e.include(ua,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(nn`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?nn`normalize(vPositionWorldCameraRelative);`:nn`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(nn`
      void forwardNormal() {}
    `)}function ma(e,t){e.fragment.include(On),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(nn`
      float _calculateFragDepth(const in float depth) {
        // calc polygon offset
        const float SLOPE_SCALE = 2.0;
        const float BIAS = 2.0 * .000015259;    // 1 / (2^16 - 1)
        float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
        float result = depth + SLOPE_SCALE * m + BIAS;
        return clamp(result, .0, .999999);
      }

      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
      }
    `)):1===t.output&&e.fragment.code.add(nn`
      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_linearDepth);
      }
    `)}function ha(e,t){const r=e.vertex.code,o=e.fragment.code;1!==t.output&&3!==t.output||(e.include(Hn,{linearDepth:!0}),e.include(Dn,t),e.include(hn,t),e.include(ma,t),e.include(un,t),e.vertex.uniforms.add("nearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(nn`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(an,t),o.add(nn`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?nn`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(Hn,{linearDepth:!1}),e.include(sa,t),e.include(fa,t),e.include(Dn,t),e.include(hn,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(nn`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?nn`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(un,t),e.include(an,t),o.add(nn`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?nn`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?nn`
            vec3 normal = screenDerivativeNormal(vPositionView);`:nn`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(Hn,{linearDepth:!1}),e.include(Dn,t),e.include(hn,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(nn`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(un,t),e.include(an,t),e.include(mn),o.add(nn`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?nn`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function pa(e,t){const r=e.fragment;r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),t.vertexTangets?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?r.code.add(nn`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
        vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `):r.code.add(nn`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = vTangent.w;
        vec3 tangent = normalize(vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(nn`
    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {

      vec3 Q1 = dFdx(pos);
      vec3 Q2 = dFdy(pos);

      vec2 stx = dFdx(st);
      vec2 sty = dFdy(st);

      float det = stx.t * sty.s - sty.t * stx.s;

      vec3 T = stx.t * Q2 - sty.t * Q1; // compute tangent
      T = T - normal * dot(normal, T); // orthogonalize tangent
      T *= inversesqrt(max(dot(T,T), 1.e-10)); // "soft" normalize - goes to 0 when T goes to 0
      vec3 B = sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B
      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates
    }
  `)),0!==t.attributeTextureCoordinates&&(e.include(Vn,t),r.code.add(nn`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}function va(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(nn`
      float evaluateAmbientOcclusion() {
        return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
      }

      float evaluateAmbientOcclusionInverse() {
        float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
        return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
      }
    `)):r.code.add(nn`
      float evaluateAmbientOcclusion() { return 0.0; } // no occlusion
      float evaluateAmbientOcclusionInverse() { return 1.0; }
    `)}function ga(e,t){const r=e.fragment,o=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===o?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(nn`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):1===o?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(nn`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec4 sh0 = vec4(
          0.282095,
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y
        );
        vec3 ambientLight = vec3(
          dot(lightingAmbientSH_R, sh0),
          dot(lightingAmbientSH_G, sh0),
          dot(lightingAmbientSH_B, sh0)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):2===o&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(nn`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;

        vec4 sh1 = vec4(
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y,
          1.092548 * normal.x * normal.y
        );
        vec4 sh2 = vec4(
          1.092548 * normal.y * normal.z,
          0.315392 * (3.0 * normal.z * normal.z - 1.0),
          1.092548 * normal.x * normal.z,
          0.546274 * (normal.x * normal.x - normal.y * normal.y)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R1, sh1),
          dot(lightingAmbientSH_G1, sh1),
          dot(lightingAmbientSH_B1, sh1)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R2, sh2),
          dot(lightingAmbientSH_G2, sh2),
          dot(lightingAmbientSH_B2, sh2)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `),1!==t.pbrMode&&2!==t.pbrMode||r.code.add(nn`
        const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);

        vec3 calculateAmbientRadiance(float ambientOcclusion)
        {
          vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
          return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
        }
      `))}function xa(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(nn`
    vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
      float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
    }
  `)}function ba(e,t){const r=e.fragment;e.include(xa),e.include(va,t),0!==t.pbrMode&&e.include(ia,t),e.include(ga,t),t.receiveShadows&&e.include(An,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(ra),r.code.add(nn`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),t.useOldSceneLightInterface?r.code.add(nn`
    vec3 evaluateSceneLightingExt(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
      // evaluate the main light
      #if defined(TREE_RENDERING)
        // Special case for tree rendering:
        // We shift the Lambert lobe to the back, allowing it to reach part of the hemisphere
        // facing away from the light. The idea is to get an effect where light is transmitted
        // through the tree.
        float minDot = -0.5;
        float dotRange = 1.0 - minDot;
        float dotNormalization = 0.66; // guessed & hand tweaked value, for an exact value we could precompute an integral over the sphere

        float dotVal = dotNormalization * (clamp(-dot(normal, lightingMainDirection), 1.0 - dotRange, 1.0) - minDot) * (1.0 / dotRange);
      #else
        float dotVal = clamp(-dot(normal, lightingMainDirection), 0.0, 1.0);
      #endif

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      vec3 mainLight = (1.0 - shadow) * lightingMainIntensity * dotVal;
      vec3 ambientLight = calculateAmbientIrradiance(normal, ssao);

      // inverse gamma correction on the albedo color
      vec3 albedoGammaC = pow(albedo, vec3(GAMMA_SRGB));

      // physically correct BRDF normalizes by PI
      vec3 totalLight = mainLight + ambientLight + additionalLight;
      totalLight = min(totalLight, vec3(PI));
      vec3 outColor = vec3((albedoGammaC / PI) * (totalLight));

      // apply gamma correction to the computed color
      outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

      return outColor;
    }
  `):(1===t.viewingMode?r.code.add(nn`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        vec3 shadingNormalWorld = normalize(vPosWorld);
        float vndl = -dot(shadingNormalWorld, lightingMainDirection);

        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `):r.code.add(nn`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        float vndl = -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);
        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `),r.code.add(nn`
      vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
        float additionalAmbientScale = _oldHeuristicLighting(vPosWorld);
        return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
      }
    `),0===t.pbrMode||4===t.pbrMode?r.code.add(nn`
      vec3 evaluateSceneLighting(vec3 normalWorld, vec3 baseColor, float mainLightShadow, float ambientOcclusion, vec3 additionalLight)
      {
        vec3 mainLighting = evaluateMainLighting(normalWorld, mainLightShadow);
        vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ambientOcclusion);
        // inverse gamma correction on the base color
        vec3 baseColorLinear = pow(baseColor, vec3(GAMMA_SRGB));

        // physically correct BRDF normalizes by PI
        vec3 totalLight = mainLighting + ambientLighting + additionalLight;
        totalLight = min(totalLight, vec3(PI));
        vec3 outColor = vec3((baseColorLinear / PI) * totalLight);

        // apply gamma correction to the computed color
        outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

        return outColor;
      }
      `):1!==t.pbrMode&&2!==t.pbrMode||(r.code.add(nn`
      const float fillLightIntensity = 0.25;
      const float horizonLightDiffusion = 0.4;
      const float additionalAmbientIrradianceFactor = 0.02;

      vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
      {
        // Calculate half vector between view and light direction
        vec3 viewDirection = -viewDir;
        vec3 mainLightDirection = -lightingMainDirection;
        vec3 h = normalize(viewDirection + mainLightDirection);

        PBRShadingInfo inputs;
        inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
        inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
        inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
        inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
        inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
        vec3 reflectedView = normalize(reflect(viewDirection, normal));
        inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);

        inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
        inputs.ssao = ssao;

        inputs.metalness = mrr[0];
        inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
      `),r.code.add(nn`
        inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
        inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0
        inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
      `),r.code.add(nn`
        vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
        ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = abs(dot(normal, ambientDir));

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent  = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
        // calculateAmbientIrradiance for localView and additionalLight for gloabalView
        vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface    = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),r.code.add(nn`
        vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
        vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent  = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
        vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight; // calculateAmbientRadiance for localView and additionalLight for gloabalView

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface    =  ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radince by the groundReflectance
        inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;

        // Calculate average ambient radiance - this is used int the gamut mapping part to deduce the black level that is soft compressed
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);
        `),r.code.add(nn`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?nn`vec3 outColor = pow(outColorLinear - 0.005 * inputs.averageAmbientRadiance, vec3(INV_GAMMA_SRGB));`:nn`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `)))}function ya(e,t){const r=e.fragment;r.code.add(nn`
    struct ShadingNormalParameters {
      vec3 normalView;
      vec3 viewDirection;
    } shadingParams;
    `),1===t.doubleSidedMode?r.code.add(nn`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
      }
    `):2===t.doubleSidedMode?r.code.add(nn`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
      }
    `):r.code.add(nn`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return normalize(params.normalView);
      }
    `)}function wa(e,t){nn`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `}function _a(e){e.code.add(nn`
    vec4 premultiplyAlpha(vec4 v) {
      return vec4(v.rgb * v.a, v.a);
    }

    // Note: the min in the last line has been added to fix an instability in chrome.
    // See https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/23911
    // With proper floating point handling, the value could never be >1.
    vec3 rgb2hsv(vec3 c) {
      vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
      vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
      vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);

      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
    }

    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    float rgb2v(vec3 c) {
      return max(c.x, max(c.y, c.z));
    }
  `)}function Ta(e){e.include(_a),e.code.add(nn`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${nn.int(1)}) {
        return allMixed;
      }
      else if (mode == ${nn.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${nn.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${nn.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${nn.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}function Sa(e){const t=new jn,r=t.vertex.code,o=t.fragment.code;return t.include(wa,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(ca),t.varyings.add("vpos","vec3"),t.include(hn,e),t.include(Bn,e),t.include(vn,e),0!==e.output&&7!==e.output||(t.include(sa,e),t.include(Hn,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(na),t.include(pa,e),t.include(fa,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(Dn,e),t.include(ta,e),t.include(da,e),t.include(ea,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(nn`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${nn.float(.001)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?nn`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangets?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(un,e),t.include(an,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(Ta),o.add(nn`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?nn`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:nn`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?nn`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:nn`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(un,e),t.include(ba,e),t.include(va,e),t.include(an,e),e.receiveShadows&&t.include(An,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(Un,e),t.include(ia,e),t.fragment.include(Ta),t.include(ya,e),o.add(nn`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?nn`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:nn`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?nn`
        vec3 normal = screenDerivativeNormal(localvpos);`:nn`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?nn`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:nn`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?nn`
              mat3 tangentSpace = ${e.vertexTangets?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?nn`vec3 normalGround = normalize(vpos + localOrigin);`:nn`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:nn``}
        ${1===e.pbrMode||2===e.pbrMode?nn`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(ha,e),t}!function(e){e.ModelTransform=class{constructor(){this.worldFromModel_RS=lt(),this.worldFromModel_TH=a(),this.worldFromModel_TL=a()}},e.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=a(),this.worldFromView_TL=a(),this.viewFromCameraRelative_RS=lt(),this.projFromView=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}},e.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},e.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}}(ua||(ua={})),(fa||(fa={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)};var Ca=Object.freeze({__proto__:null,build:Sa});class Ma extends class{constructor(e,t){t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),e.commonUniformStore&&(this._commonUniformStore=e.commonUniformStore,this._commonUniformStore.subscribeProgram(this._program)),this._pipeline=this.initializePipeline(e)}dispose(){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose(),this._program=null)}reload(e){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose()),this._program=this.initializeProgram(e),this._commonUniformStore&&this._commonUniformStore.subscribeProgram(this._program)}get program(){return this._program}get pipeline(){return this._pipeline}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t,r){}bindMaterial(e,t,r){}bindDraw(e,t,r){}bindPipelineState(e){e.setPipelineState(this.pipeline)}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}}{initializeProgram(e){const t=Ma.shader.get(),r=this.configuration,o=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangets:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Ln(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1});return new ht(e.rctx,o.generateSource("vertex"),o.generateSource("fragment"),Qi)}bindPass(e,t,r){ln.bindProjectionMatrix(this.program,r.camera.projectionMatrix);const o=this.configuration.output;7===o&&(this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",Xi[t.colorMixMode])),0===o?(r.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",t.ambient),this.program.setUniform3fv("diffuse",t.diffuse),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",Xi[t.colorMixMode]),this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.configuration.usePBR&&Un.bindUniforms(this.program,t,this.configuration.isSchematic)):1===o||3===o?this.program.setUniform2fv("nearFar",r.camera.nearFar):4===o&&mn.bindOutputHighlight(e,this.program,r),hn.bindUniformsForSymbols(this.program,t),vn.bindUniforms(this.program,t,r),qi(t.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==t.textureAlphaMode&&3!==t.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",t.textureAlphaCutoff)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?b(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;ln.bindViewCustomOrigin(this.program,t,e.camera.viewMatrix),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&ln.bindCamPosition(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&Bn.bindCustomOrigin(this.program,t),un.bindUniforms(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&An.bindViewCustomOrigin(this.program,e,t)}setPipeline(e,t){const r=this.configuration,o=3===e,i=2===e;return tt({blending:0!==r.output&&7!==r.output||!r.transparent?null:o?xn:wn(e),culling:Oa(r),depthTest:{func:Tn(e)},depthWrite:o||i?r.writeDepth&&rt:null,colorWrite:ot,stencilWrite:r.sceneHasOcludees?Sn:null,stencilTest:r.sceneHasOcludees?t?Mn:Cn:null,polygonOffset:o||i?null:_n})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}Ma.shader=new sn(Ca,(()=>import("./DefaultMaterial.glsl-0aea0661.js")));const Oa=e=>function(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}(e)&&{face:1===e.cullFace?1028:1029,mode:2305};class Aa extends class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits.map((()=>0))}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.cullFace=0,this.transparencyPassType=3}}function Pa(e){const t=new jn,r=t.vertex.code,o=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(ca),t.varyings.add("vpos","vec3"),t.include(hn,e),t.include(Bn,e),t.include(vn,e),0!==e.output&&7!==e.output||(t.include(sa,e),t.include(Hn,{linearDepth:!1}),e.offsetBackfaces&&t.include(na),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),t.include(Dn,e),t.include(ta,e),t.include(da,e),t.include(ea,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(nn`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${nn.float(.001)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(un,e),t.include(an,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(Ta),o.add(nn`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?nn`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:nn`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?nn`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:nn`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(un,e),t.include(ba,e),t.include(va,e),t.include(an,e),e.receiveShadows&&t.include(An,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(Un,e),t.include(ia,e),t.fragment.include(Ta),o.add(nn`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?nn`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:nn`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?nn`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:nn`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${nn`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(-viewForward, lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(-viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?nn`vec3 normalGround = normalize(vpos + localOrigin);`:nn`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:nn``}
        ${1===e.pbrMode||2===e.pbrMode?nn`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(ha,e),t}q([cn({count:8})],Aa.prototype,"output",void 0),q([cn({count:4})],Aa.prototype,"alphaDiscardMode",void 0),q([cn({count:3})],Aa.prototype,"doubleSidedMode",void 0),q([cn()],Aa.prototype,"isSchematic",void 0),q([cn()],Aa.prototype,"vertexColors",void 0),q([cn()],Aa.prototype,"offsetBackfaces",void 0),q([cn()],Aa.prototype,"symbolColors",void 0),q([cn()],Aa.prototype,"vvSize",void 0),q([cn()],Aa.prototype,"vvColor",void 0),q([cn()],Aa.prototype,"verticalOffset",void 0),q([cn()],Aa.prototype,"receiveShadows",void 0),q([cn()],Aa.prototype,"slicePlaneEnabled",void 0),q([cn()],Aa.prototype,"sliceHighlightDisabled",void 0),q([cn()],Aa.prototype,"receiveAmbientOcclusion",void 0),q([cn()],Aa.prototype,"screenSizePerspective",void 0),q([cn()],Aa.prototype,"textureAlphaPremultiplied",void 0),q([cn()],Aa.prototype,"hasColorTexture",void 0),q([cn()],Aa.prototype,"usePBR",void 0),q([cn()],Aa.prototype,"hasMetalnessAndRoughnessTexture",void 0),q([cn()],Aa.prototype,"hasEmissionTexture",void 0),q([cn()],Aa.prototype,"hasOcclusionTexture",void 0),q([cn()],Aa.prototype,"hasNormalTexture",void 0),q([cn()],Aa.prototype,"instanced",void 0),q([cn()],Aa.prototype,"instancedColor",void 0),q([cn()],Aa.prototype,"instancedDoublePrecision",void 0),q([cn()],Aa.prototype,"vertexTangents",void 0),q([cn()],Aa.prototype,"normalsTypeDerivate",void 0),q([cn()],Aa.prototype,"writeDepth",void 0),q([cn()],Aa.prototype,"sceneHasOcludees",void 0),q([cn()],Aa.prototype,"transparent",void 0),q([cn({count:3})],Aa.prototype,"cullFace",void 0),q([cn({count:4})],Aa.prototype,"transparencyPassType",void 0);var Ia=Object.freeze({__proto__:null,build:Pa});class Ra extends Ma{initializeProgram(e){const t=Ra.shader.get(),r=this.configuration,o=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangets:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Ln(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1});return new ht(e.rctx,o.generateSource("vertex"),o.generateSource("fragment"),Qi)}}Ra.shader=new sn(Ia,(()=>import("./RealisticTree.glsl-ff09dc91.js")));class Fa extends Ki{constructor(e,t){super(t,e,Ba),this.supportsEdges=!0,this.techniqueConfig=new Aa,this.vertexBufferLayout=Fa.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?Fa.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,o=e.symbolColors,i=!!t&&t.indexOf("color")>-1,n=e.vvColorEnabled,a="replace"===e.colorMixMode,s=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(i||n||o)?!!a||s:r?a?c:s:i||n||o?!!a||s:a?c:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=null!=this.params.cullFace?this.params.cullFace:0,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3),this.techniqueConfig}intersect(e,t,r,o,i,n,a){if(null!==this.params.verticalOffset){const e=o.camera;g(Ha,r[12],r[13],r[14]);let t=null;switch(o.viewingMode){case 1:t=_(Va,Ha);break;case 2:t=s(Va,Ea)}let a=0;if(null!==this.params.verticalOffset){const r=c(Ga,Ha,e.eye),o=m(r),i=d(r,r,1/o);let n=null;this.params.screenSizePerspective&&(n=l(t,i)),a+=function(e,t,r,o,i){let n=(r.screenLength||0)*e.pixelRatio;i&&(n=Fi(n,o,t,i));const a=n*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return U(a*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}(e,o,this.params.verticalOffset,n,this.params.screenSizePerspective)}d(t,t,a),$(Ua,t,o.transform.inverseRotation),i=c(Na,i,Ua),n=c(Da,n,Ua)}Ni(e,t,o,i,n,function(e){return D(e)?(_i.offset=e,_i):null}(o.verticalOffset),a)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new La(e)}createBufferWriter(){return new za(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=ze().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}static getInstanceBufferLayout(e){let t=ze();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class La extends Ri{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this.material.params;this.updateTexture(t.textureId),this.technique=t.treeRendering?this.techniqueRep.acquireAndReleaseExisting(Ra,this.material.getTechniqueConfig(this.output,e),this.technique):this.techniqueRep.acquireAndReleaseExisting(Ma,this.material.getTechniqueConfig(this.output,e),this.technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this.material.params.shadowMappingEnabled&&this.material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this.output&&7!==this.output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.params,t),this.bindTexture(e,this.technique.program)}beginSlot(e){return e===(this.material.params.transparent?this.material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this.technique.getPipelineState(t)}}const Ba={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:void 0,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:lt(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:.1,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,renderOccluded:1};class za{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.position.length}write(e,t,r,o){!function(e,t,r,o,i,n){for(const a of t.fieldNames){const t=e.vertexAttr[a],s=e.indices[a];if(t&&s)switch(a){case pr.POSITION:{vr(3===t.size);const e=i.getField(a,Le);e&&tn(s,t.data,r,e,n);break}case pr.NORMAL:{vr(3===t.size);const e=i.getField(a,Le);e&&rn(s,t.data,o,e,n);break}case pr.UV0:{vr(2===t.size);const e=i.getField(a,Be);e&&Ji(s,t.data,e,n);break}case pr.UVMAPSPACE:{vr(4===t.size);const e=i.getField(a,Re);e&&en(s,t.data,e,n);break}case pr.MEANVERTEXPOSITION:{vr(3===t.size);const e=i.getField(a,Le);e&&tn(s,t.data,r,e,n);break}case pr.BOUND1:case pr.BOUND2:case pr.BOUND3:{vr(3===t.size);const e=i.getField(a,Le);e&&tn(s,t.data,r,e,n);break}case pr.COLOR:{vr(3===t.size||4===t.size);const e=i.getField(a,Fe);e&&on(s,t.data,t.size,e,n);break}case pr.SYMBOLCOLOR:{vr(3===t.size||4===t.size);const e=i.getField(a,Fe);e&&on(s,t.data,t.size,e,n);break}case pr.TANGENT:{vr(4===t.size);const e=i.getField(a,Re);e&&en(s,t.data,e,n);break}}}}(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,o)}}const Na=a(),Da=a(),Ea=b(0,0,1),Va=a(),Ua=a(),Ha=a(),Ga=a();function ka(e,t){return W(e,{responseType:"image",...t}).then((e=>e.data))}const ja=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],qa=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];const $a=e.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function Wa(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const Xa=Wa("DXT1"),Ya=Wa("DXT3"),Qa=Wa("DXT5");function Ka(e,t,r,o){const{textureData:i,internalFormat:n,width:a,height:s}=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return $a.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return $a.error("Unsupported format, must contain a FourCC code"),null;const o=r[21];let i,n;switch(o){case Xa:i=8,n=33776;break;case Ya:i=16,n=33778;break;case Qa:i=16,n=33779;break;default:return $a.error("Unsupported FourCC code:",(a=o,String.fromCharCode(255&a,a>>8&255,a>>16&255,a>>24&255))),null}var a;let s=1,c=r[4],l=r[3];0==(3&c)&&0==(3&l)||($a.warn("Rounding up compressed texture size to nearest multiple of 4."),c=c+3&-4,l=l+3&-4);const d=c,u=l;let f,m;131072&r[2]&&!1!==t&&(s=Math.max(1,r[7])),1===s||X(c)&&X(l)||($a.warn("Ignoring mipmaps of non power of two sized compressed texture."),s=1);let h=r[1]+4;const p=[];for(let t=0;t<s;++t)m=(c+3>>2)*(l+3>>2)*i,f=new Uint8Array(e,h,m),p.push(f),h+=m,c=Math.max(1,c>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:p},internalFormat:n,width:d,height:u}}(r,o);t.samplingMode=i.levels.length>1?9987:9729,t.hasMipmap=i.levels.length>1,t.internalFormat=n,t.width=a,t.height=s;const c=new it(e,t,i);return e.bindTexture(c,0),c}class Ja{constructor(e,t,r){this.data=e,this.glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new Y,this.data=e,this.id=Ja.idGen.gen(t),this.params=r||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=Ja.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;E(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){Q(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){K(e.src)||Q(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,t){if(E(e))return 0;if(J(e)||Z(e))return e.byteLength;const{width:r,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Ja.getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*o*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){const t=this.params.mipmap&&!this.params.disableAnisotropy;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:t?e.parameters.maxMaxAnisotropy:void 0}}load(e,t){if(D(this.glTexture))return this.glTexture;if(D(this.loadingPromise))return this.loadingPromise;const r=this.data;return E(r)?(this.glTexture=new it(e,this.createDescriptor(e),null),e.bindTexture(this.glTexture,0),this.glTexture):"string"==typeof r?this.loadFromURL(e,t,r):r instanceof Image?this.loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(e,r,t):(J(r)||Z(r))&&this.params.encoding===Ja.DDS_ENCODING?this.loadFromDDSData(e,r):Z(r)?this.loadFromPixelData(e,r):J(r)?this.loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||E(this.glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if(D(this.powerOfTwoStretchInfo)){const{framebuffer:r,vao:o,sourceTexture:i}=this.powerOfTwoStretchInfo;i.setData(this.data),this.drawStretchedTexture(e,t,r,o,i,this.glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:o}=this.glTexture.descriptor;e!==r||t!==o?this.glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,o),this.data):this.glTexture.setData(this.data)}return this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this.glTexture=Ka(e,this.createDescriptor(e),t,this.params.mipmap),e.bindTexture(this.glTexture,0),this.glTexture}loadFromPixelData(e,t){vr(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this.glTexture=new it(e,r,t),e.bindTexture(this.glTexture,0),this.glTexture}async loadAsync(e){const t=ee();this.loadingController=t;const r=e(t.signal);this.loadingPromise=r;const o=()=>{this.loadingController===t&&(this.loadingController=null),this.loadingPromise===r&&(this.loadingPromise=null)};return r.then(o,o),r}loadFromURL(e,t,r){return this.loadAsync((async o=>{const i=await ka(r,{signal:o});return this.loadFromImage(e,i,t)}))}loadFromImageElement(e,t,r){return r.complete?this.loadFromImage(e,r,t):this.loadAsync((async o=>{const i=await te(r,r.src,!1,o);return this.loadFromImage(e,i,t)}))}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync((o=>re(((i,n)=>{const a=()=>{r.removeEventListener("loadeddata",s),r.removeEventListener("error",c),D(l)&&l.remove()},s=()=>{r.readyState>=2&&(a(),i(this.loadFromImage(e,r,t)))},c=e=>{a(),n(e||new oe("Failed to load video"))};r.addEventListener("loadeddata",s),r.addEventListener("error",c);const l=ie(o,(()=>c(ne())))}))))}loadFromImage(e,t,r){const o=Ja.getDataDimensions(t);this.params.width=o.width,this.params.height=o.height;const i=this.createDescriptor(e);return i.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,i)||X(o.width)&&X(o.height)?(i.width=o.width,i.height=o.height,this.glTexture=new it(e,i,t),e.bindTexture(this.glTexture,0),this.glTexture):(this.glTexture=this.makePowerOfTwoTexture(e,t,o,i,r),e.bindTexture(this.glTexture,0),this.glTexture)}requiresPowerOfTwo(e,t){const r=33071,o="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!nt(e.gl)&&(t.hasMipmap||!o)}makePowerOfTwoTexture(e,t,r,o,i){const{width:n,height:a}=r,s=ae(n),c=ae(a);let l;switch(o.width=s,o.height=c,this.params.powerOfTwoResizeMode){case 2:o.textureCoordinateScaleFactor=[n/s,a/c],l=new it(e,o),l.updateData(0,0,0,n,a,t);break;case 1:case null:case void 0:l=this.stretchToPowerOfTwo(e,t,o,i);break;default:se(this.params.powerOfTwoResizeMode)}return o.hasMipmap&&l.generateMipmap(),l}stretchToPowerOfTwo(e,t,r,o){const i=new it(e,r),n=new et(e,{colorTarget:0,depthStencilTarget:0},i),a=new it(e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=function(e,t=ja,r=Qi,o=-1,i=1){let n=null;switch(t){case qa:n=new Float32Array([o,o,0,0,i,o,1,0,o,i,0,1,i,i,1,1]);break;case ja:default:n=new Float32Array([o,o,i,o,o,i,i,i])}return new mt(e,r,{geometry:t},{geometry:ft.createVertex(e,35044,n)})}(e);return this.drawStretchedTexture(e,o,n,s,a,i),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:s,sourceTexture:a,framebuffer:n}:(s.dispose(!0),a.dispose(),n.detachColorTexture(),e.bindFramebuffer(null),n.dispose()),i}drawStretchedTexture(e,t,r,o,i,n){e.bindFramebuffer(r);const a=e.getViewport();e.setViewport(0,0,n.descriptor.width,n.descriptor.height);const s=t.program;e.bindProgram(s),s.setUniform4f("color",1,1,1,1),s.setUniform1i("tex",0),e.bindTexture(i,0),e.bindVAO(o),e.setPipelineState(t.pipeline),e.drawArrays(5,0,pt(o,"geometry")),e.bindFramebuffer(null),e.setViewport(a.x,a.y,a.width,a.height)}unload(){if(D(this.powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this.powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this.glTexture=null,this.powerOfTwoStretchInfo=null}if(D(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null),D(this.loadingController)){const e=this.loadingController;this.loadingController=null,this.loadingPromise=null,e.abort()}this.events.emit("unloaded")}}Ja.idGen=new wr,Ja.DDS_ENCODING="image/vnd-ms.dds";class Za{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return K(e)?(ce(t),le(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,r){if(E(this.streamDataRequester))return(await W(t,{responseType:es[e]})).data;const o=await de(this.streamDataRequester.request(t,e,r));if(!0===o.ok)return o.value;throw ue(o.error),new oe("","Request for resource failed: "+o.error)}}const es={image:"image",binary:"array-buffer",json:"json"};function ts(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)o[c]=n[l],o[c+1]=n[l+1],c+=i,l+=a}function rs(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;if(Ne(t.elementType)){const e=De(t.elementType);if(Ee(t.elementType))for(let t=0;t<s;++t)o[c]=Math.max(n[l]/e,-1),o[c+1]=Math.max(n[l+1]/e,-1),c+=i,l+=a;else for(let t=0;t<s;++t)o[c]=n[l]/e,o[c+1]=n[l+1]/e,c+=i,l+=a}else ts(e,t,r);return e}Object.freeze({__proto__:null,copy:ts,normalizeIntegerBuffer:rs});function os(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)o[c]=n[l],o[c+1]=n[l+1],o[c+2]=n[l+2],c+=i,l+=a}Object.freeze({__proto__:null,copy:os});function is(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)o[c]=n[l],o[c+1]=n[l+1],o[c+2]=n[l+2],o[c+3]=n[l+3],c+=i,l+=a}function ns(e,t,r,o,i,n){const a=e.typedBuffer,s=e.typedBufferStride,c=n?n.count:e.count;let l=(n&&n.dstIndex?n.dstIndex:0)*s;for(let e=0;e<c;++e)a[l]=t,a[l+1]=r,a[l+2]=o,a[l+3]=i,l+=s}Object.freeze({__proto__:null,copy:is,fill:ns});Object.freeze({__proto__:null,copy:function(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e){for(let e=0;e<9;++e)o[c+e]=n[l+e];c+=i,l+=a}}});Object.freeze({__proto__:null,copy:function(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e){for(let e=0;e<16;++e)o[c+e]=n[l+e];c+=i,l+=a}}});function as(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let o=0;o<r;o++)t[o]=e.get(o);return t}Object.freeze({__proto__:null,copy:function(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)o[c]=n[l],c+=i,l+=a},makeDense:as});function ss(e,t){return new e(new ArrayBuffer(t*e.ElementCount*Ve(e.ElementType)))}const cs=e.getLogger("esri.views.3d.glTF");class ls{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new oe(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new ls(this.major,this.minor,this._context)}static parse(e,t=""){const[r,o]=e.split("."),i=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(i))throw new oe((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!o||!o.match||!o.match(i))throw new oe((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const n=parseInt(r,10),a=parseInt(o,10);return new ls(n,a,t)}}class ds{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const us={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},fs={pbrMetallicRoughness:us,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},ms={ESRI_externalColorMixMode:"tint"},hs=(e={})=>{const t={...us,...e.pbrMetallicRoughness},r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:se(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}({...ms,...e.extras});return{...fs,...e,pbrMetallicRoughness:t,extras:r}},ps={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497};class vs{constructor(e,t,r,o,i){this.context=e,this.errorContext=t,this.uri=r,this.json=o,this.glbBuffer=i,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,((e,o,i)=>(t=o||"",r=i||"",""))),{dirPart:t,filePart:r}}(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==o.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==o.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==o.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,r,o){if(K(r)){const o=me(r);if("model/gltf-binary"!==o.mediaType)try{const i=JSON.parse(o.isBase64?atob(o.data):o.data);return new vs(e,t,r,i)}catch{}const i=le(r);if(vs.isGLBData(i))return this.fromGLBData(e,t,r,i)}if(r.endsWith(".gltf")){const i=await e.loadJSON(r,o);return new vs(e,t,r,i)}const i=await e.loadBinary(r,o);if(vs.isGLBData(i))return this.fromGLBData(e,t,r,i);const n=await e.loadJSON(r,o);return new vs(e,t,r,n)}static isGLBData(e){const t=new ds(e);return t.remainingBytes()>=4&&1179937895===t.readUint32()}static async fromGLBData(e,t,r,o){const i=await vs.parseGLBData(t,o);return new vs(e,t,r,i.json,i.binaryData)}static async parseGLBData(e,t){const r=new ds(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const o=r.readUint32(),i=r.readUint32(),n=r.readUint32();e.assert(1179937895===o,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=n,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==i,"An unsupported GLB container version was detected. Only version 2 is supported.");let a,s,c=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),o=r.readUint32();0===c?(e.assert(1313821514===o,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),a=await _s(r.readUint8Array(t))):1===c?(e.errorUnsupportedIf(5130562!==o,"Second GLB chunk expected to be BIN."),s=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),c+=1}return a||e.error("No GLB JSON chunk detected."),{json:a,binaryData:s}}async getBuffer(e,t){const r=this.json.buffers[e],o=this.errorContext;if(null==r.uri)return o.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let i=this.bufferCache.get(e);if(!i){const n=await this.context.loadBinary(this.resolveUri(r.uri),t);i=new Uint8Array(n),this.bufferCache.set(e,i),o.assert(i.byteLength===r.byteLength,"Buffer byte lengths should match.")}return i}async getAccessor(e,t){const r=this.json.accessors[e],o=this.errorContext;o.errorUnsupportedIf(null==r.bufferView,"Some accessor does not specify a bufferView."),o.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const i=this.json.bufferViews[r.bufferView],n=await this.getBuffer(i.buffer,t),a=ys[r.type],s=ws[r.componentType],c=a*s,l=i.byteStride||c;return{raw:n.buffer,byteStride:l,byteOffset:n.byteOffset+(i.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:l===c,componentCount:a,componentByteSize:s,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return as(this.wrapAccessor(Ge,r));case 5123:return as(this.wrapAccessor(He,r));case 5125:return as(this.wrapAccessor(Ue,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const o=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+Ts[o.componentType]),r.errorUnsupportedIf(3!==o.componentCount,"POSITION vertex attribute must have 3 components, but found "+o.componentCount.toFixed()),this.wrapAccessor(Le,o)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const o=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+Ts[o.componentType]),r.errorUnsupportedIf(3!==o.componentCount,"NORMAL vertex attribute must have 3 components, but found "+o.componentCount.toFixed()),this.wrapAccessor(Le,o)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const o=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+Ts[o.componentType]),r.errorUnsupportedIf(4!==o.componentCount,"TANGENT vertex attribute must have 4 components, but found "+o.componentCount.toFixed()),new Re(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const o=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==o.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+o.componentCount.toFixed()),5126===o.componentType?this.wrapAccessor(Be,o):(r.errorUnsupportedIf(!o.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(e){switch(e.componentType){case 5120:return new We(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new $e(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new qe(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new je(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new ke(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new Be(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void se(e.componentType)}}(o))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const o=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==o.componentCount&&3!==o.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+o.componentCount.toFixed()),4===o.componentCount){if(5126===o.componentType)return this.wrapAccessor(Re,o);if(5121===o.componentType)return this.wrapAccessor(Fe,o);if(5123===o.componentType)return this.wrapAccessor(Xe,o)}else if(3===o.componentCount){if(5126===o.componentType)return this.wrapAccessor(Le,o);if(5121===o.componentType)return this.wrapAccessor(Ye,o);if(5123===o.componentType)return this.wrapAccessor(Qe,o)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+Ts[o.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t){const r=this.errorContext;let o=this.materialCache.get(e.material);if(!o){const i=null!=e.material?hs(this.json.materials[e.material]):hs(),n=i.pbrMetallicRoughness,a=this.hasVertexColors(e);let s,c,l,d,u;n.baseColorTexture&&(r.errorUnsupportedIf(0!==(n.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),s=await this.getTexture(n.baseColorTexture.index,t)),i.normalTexture&&(0!==(i.normalTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):c=await this.getTexture(i.normalTexture.index,t)),i.occlusionTexture&&(0!==(i.occlusionTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):l=await this.getTexture(i.occlusionTexture.index,t)),i.emissiveTexture&&(0!==(i.emissiveTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):d=await this.getTexture(i.emissiveTexture.index,t)),n.metallicRoughnessTexture&&(0!==(n.metallicRoughnessTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):u=await this.getTexture(n.metallicRoughnessTexture.index,t));const f=null!=e.material?e.material:-1;o={alphaMode:i.alphaMode,alphaCutoff:i.alphaCutoff,color:n.baseColorFactor,doubleSided:!!i.doubleSided,colorTexture:s,normalTexture:c,name:i.name,id:f,occlusionTexture:l,emissiveTexture:d,emissiveFactor:i.emissiveFactor,metallicFactor:n.metallicFactor,roughnessFactor:n.roughnessFactor,metallicRoughnessTexture:u,vertexColors:a,ESRI_externalColorMixMode:i.extras.ESRI_externalColorMixMode}}return o}async getTexture(e,t){const r=this.errorContext,o=this.json.textures[e],i=(e=>({...ps,...e}))(null!=o.sampler?this.json.samplers[o.sampler]:{});r.errorUnsupportedIf(null==o.source,"Source is expected to be defined for a texture.");const n=this.json.images[o.source];let a=this.textureCache.get(e);if(!a){let o;if(n.uri)o=await this.context.loadImage(this.resolveUri(n.uri),t);else{r.errorUnsupportedIf(null==n.bufferView,"Image bufferView must be defined."),r.errorUnsupportedIf(null==n.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[n.bufferView],i=await this.getBuffer(e.buffer,t);r.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),o=await async function(e,t){return re(((r,o)=>{const i=new Blob([e],{type:t}),n=URL.createObjectURL(i),a=new Image;a.addEventListener("load",(()=>{URL.revokeObjectURL(n),"decode"in a?a.decode().then((()=>r(a)),(()=>r(a))):r(a)})),a.addEventListener("error",(e=>{URL.revokeObjectURL(n),o(e)})),a.src=n}))}(new Uint8Array(i.buffer,i.byteOffset+(e.byteOffset||0),e.byteLength),n.mimeType)}a={data:o,wrapS:i.wrapS,wrapT:i.wrapT,minFilter:i.minFilter,name:n.name,id:e},this.textureCache.set(e,a)}return a}getNodeTransform(e){if(void 0===e)return xs;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),o=this.json.nodes[e];o.matrix?t=z([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],r,o.matrix):o.translation||o.rotation||o.scale?(t=xt(r),o.translation&&G(t,t,o.translation),o.rotation&&(bs[3]=dt(bs,o.rotation),R(t,t,bs[3],bs)),o.scale&&he(t,t,o.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return pe(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=ls.parse(this.json.asset.version,"glTF");gs.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t)}))}))}}const gs=new ls(2,0,"glTF"),xs=fe([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Math.PI/2),bs=ut(),ys={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},ws={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function _s(e){return re(((t,r)=>{const o=new Blob([e]),i=new FileReader;i.onload=()=>{const e=i.result;t(JSON.parse(e))},i.onerror=e=>{r(e)},i.readAsText(o)}))}const Ts={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let Ss=0;function Cs(e){const t=e.json;let r=null;return t.nodes.forEach((e=>{const t=e.extras;D(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)})),r}function Ms(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function Os(e,t,r){const o=t=>{const o=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(o)){const r=function(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:As(t.wrapS),t:As(t.wrapT)},mipmap:Is.some((e=>e===t.minFilter)),noUnpackFlip:!0});e.textures.set(o,r)}return o},i=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(i)){const r=function(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?o(t.colorTexture):void 0,textureNormal:t.normalTexture?o(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?o(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?o(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?o(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(i,r)}return i}function As(e){if(33071===e||33648===e||10497===e)return e;Ps.error("Unexpected TextureSampler WrapMode: "+e)}const Ps=new class{error(e){throw new oe("gltf-loader-error",e)}errorUnsupported(e){throw new oe("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){cs.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}},Is=[9987,9985],Rs=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];function Fs(e){return"number"==typeof e?function(e){return cr(e)}(e):ge(e)||Z(e)?new Uint32Array(e):e}const Ls=e.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function Bs(e){throw new oe("","Request for object resource failed: "+e)}function zs(e){const t=e.params,r=t.topology;let o=!0;switch(t.vertexAttributes||(Ls.warn("Geometry must specify vertex attributes"),o=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Ls.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),o=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Ls.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),o=!1)):(Ls.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),o=!1)}}else Ls.warn("Indexed geometries must specify faces"),o=!1;break}default:Ls.warn(`Unsupported topology '${r}'`),o=!1}e.params.material||(Ls.warn("Geometry requires material"),o=!1);const i=e.params.vertexAttributes;for(const e in i)i[e].values||(Ls.warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function Ns(e){const t=Ie();return e.forEach((e=>{const r=e.boundingInfo;Pe(t,r.getBBMin()),Pe(t,r.getBBMax())})),t}async function Ds(e,t){const r=[];for(const o in e){const i=e[o],n=i.images[0].data;if(!n){Ls.warn("Externally referenced texture data is not yet supported");continue}const a=i.encoding+";base64,"+n,s="/textureDefinitions/"+o,c={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},l=D(t)&&t.disableTextures?we(null):ka(a,t);r.push(l.then((e=>({refId:s,image:e,params:c,alphaChannelUsage:"rgba"===i.channels?i.alphaChannelUsage||"transparency":"none"}))))}const o=await ve(r),i={};for(const e of o)i[e.refId]=e;return i}function Es(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function Vs(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}function Us(e){const t=new Uint32Array(e);for(let r=0;r<e;r++)t[r]=r;return t}const Hs=new ls(1,2,"wosr");function Gs(e,t,r){if(e.count!==t.count)return void yt.error("source and destination buffers need to have the same number of elements");const o=e.count,i=r[0],n=r[1],a=r[2],s=r[3],c=r[4],l=r[5],d=r[6],u=r[7],f=r[8],m=e.typedBuffer,h=e.typedBufferStride,p=t.typedBuffer,v=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*h,r=e*v,o=p[r],g=p[r+1],x=p[r+2],b=p[r+3];m[t]=i*o+s*g+d*x,m[t+1]=n*o+c*g+u*x,m[t+2]=a*o+l*g+f*x,m[t+3]=b}}function ks(e,t,r){const o=Math.min(e.count,t.count),i=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*n,o=e*s;i[t]=r*a[o],i[t+1]=r*a[o+1],i[t+2]=r*a[o+2],i[t+3]=r*a[o+3]}}Object.freeze({__proto__:null,transformMat4:function(e,t,r){if(e.count!==t.count)return void yt.error("source and destination buffers need to have the same number of elements");const o=e.count,i=r[0],n=r[1],a=r[2],s=r[3],c=r[4],l=r[5],d=r[6],u=r[7],f=r[8],m=r[9],h=r[10],p=r[11],v=r[12],g=r[13],x=r[14],b=r[15],y=e.typedBuffer,w=e.typedBufferStride,_=t.typedBuffer,T=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*w,r=e*T,o=_[r],S=_[r+1],C=_[r+2],M=_[r+3];y[t]=i*o+c*S+f*C+v*M,y[t+1]=n*o+l*S+m*C+g*M,y[t+2]=a*o+d*S+h*C+x*M,y[t+3]=s*o+u*S+p*C+b*M}},transformMat3:Gs,scale:ks,shiftRight:function(e,t,r){const o=Math.min(e.count,t.count),i=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*n,o=e*s;i[t]=a[o]>>r,i[t+1]=a[o+1]>>r,i[t+2]=a[o+2]>>r,i[t+3]=a[o+3]>>r}}});function js(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function qs(e,t,r,o){const i=e.model,n=lt(),a=new Array,s=new Map,c=new Map;return i.lods.forEach(((e,l)=>{if(void 0!==o&&l!==o)return;let d=0;const u={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:D(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Ie()};a.push(u),e.parts.forEach((o=>{const a=o.material+(o.attributes.normal?"_normal":"")+(o.attributes.color?"_color":"")+(o.attributes.texCoord0?"_texCoord0":"")+(o.attributes.tangent?"_tangent":""),l=i.materials.get(o.material),f=D(o.attributes.texCoord0),m=D(o.attributes.normal);if(!s.has(a)){if(f){if(D(l.textureColor)&&!c.has(l.textureColor)){const e=i.textures.get(l.textureColor),t={...e.parameters,preMultiplyAlpha:!0};c.set(l.textureColor,new Ja(e.data,l.textureColor,t))}if(D(l.textureNormal)&&!c.has(l.textureNormal)){const e=i.textures.get(l.textureNormal),t={...e.parameters,preMultiplyAlpha:!0};c.set(l.textureNormal,new Ja(e.data,l.textureNormal,t))}if(D(l.textureOcclusion)&&!c.has(l.textureOcclusion)){const e=i.textures.get(l.textureOcclusion),t={...e.parameters,preMultiplyAlpha:!0};c.set(l.textureOcclusion,new Ja(e.data,l.textureOcclusion,t))}if(D(l.textureEmissive)&&!c.has(l.textureEmissive)){const e=i.textures.get(l.textureEmissive),t={...e.parameters,preMultiplyAlpha:!0};c.set(l.textureEmissive,new Ja(e.data,l.textureEmissive,t))}if(D(l.textureMetallicRoughness)&&!c.has(l.textureMetallicRoughness)){const e=i.textures.get(l.textureMetallicRoughness),t={...e.parameters,preMultiplyAlpha:!0};c.set(l.textureMetallicRoughness,new Ja(e.data,l.textureMetallicRoughness,t))}}const e=Math.pow(l.color[0],1/2.1),n=Math.pow(l.color[1],1/2.1),d=Math.pow(l.color[2],1/2.1),u=Math.pow(l.emissiveFactor[0],1/2.1),h=Math.pow(l.emissiveFactor[1],1/2.1),p=Math.pow(l.emissiveFactor[2],1/2.1);s.set(a,new Fa({...t,transparent:"BLEND"===l.alphaMode,textureAlphaMode:$s(l.alphaMode),textureAlphaCutoff:l.alphaCutoff,diffuse:[e,n,d],ambient:[e,n,d],opacity:l.opacity,doubleSided:l.doubleSided,doubleSidedType:"winding-order",cullFace:l.doubleSided?0:2,vertexColors:!!o.attributes.color,vertexTangents:!!o.attributes.tangent,normals:m?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:D(l.textureColor)&&f?c.get(l.textureColor).id:void 0,colorMixMode:l.colorMixMode,normalTextureId:D(l.textureNormal)&&f?c.get(l.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:D(l.textureOcclusion)&&f?c.get(l.textureOcclusion).id:void 0,emissiveTextureId:D(l.textureEmissive)&&f?c.get(l.textureEmissive).id:void 0,metallicRoughnessTextureId:D(l.textureMetallicRoughness)&&f?c.get(l.textureMetallicRoughness).id:void 0,emissiveFactor:[u,h,p],mrrFactors:[l.metallicFactor,l.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r},a))}const h=function(e,t){switch(t){case 4:return Fs(e);case 5:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint32Array(0);const r=t-2,o=new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(o[e++]=t,o[e++]=t+1,o[e++]=t+2):(o[e++]=t+1,o[e++]=t,o[e++]=t+2)}else{let t=0;for(let i=0;i<r;i+=1)if(i%2==0){const r=e[i],n=e[i+1],a=e[i+2];o[t++]=r,o[t++]=n,o[t++]=a}else{const r=e[i+1],n=e[i],a=e[i+2];o[t++]=r,o[t++]=n,o[t++]=a}}return o}(e);case 6:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint32Array(0);const r=t-2,o=new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)o[e++]=0,o[e++]=t+1,o[e++]=t+2;return o}{const t=e[0];let i=e[1],n=0;for(let a=0;a<r;++a){const r=e[a+2];o[n++]=t,o[n++]=i,o[n++]=r,i=r}return o}}(e)}}(o.indices||o.attributes.position.count,o.primitiveType),p={},v={},g=o.attributes.position.count,x=ss(Le,g);if(wt(x,o.attributes.position,o.transform),v.position={data:x.typedBuffer,size:x.elementCount},p.position=h,D(o.attributes.normal)){const e=ss(Le,g);Ce(n,o.transform),_t(e,o.attributes.normal,n),v.normal={data:e.typedBuffer,size:e.elementCount},p.normal=h}if(D(o.attributes.tangent)){const e=ss(Re,g);Ce(n,o.transform),Gs(e,o.attributes.tangent,n),v.tangent={data:e.typedBuffer,size:e.elementCount},p.tangent=h}if(D(o.attributes.texCoord0)){const e=ss(Be,g);rs(e,o.attributes.texCoord0),v.uv0={data:e.typedBuffer,size:e.elementCount},p.uv0=h}if(D(o.attributes.color)){const e=ss(Fe,g);if(4===o.attributes.color.elementCount)o.attributes.color instanceof Re?ks(e,o.attributes.color,255):o.attributes.color instanceof Fe?is(e,o.attributes.color):o.attributes.color instanceof Xe&&ks(e,o.attributes.color,1/256);else{ns(e,255,255,255,255);const t=new Ye(e.buffer,0,4);o.attributes.color instanceof Le?Tt(t,o.attributes.color,255):o.attributes.color instanceof Ye?os(t,o.attributes.color):o.attributes.color instanceof Qe&&Tt(t,o.attributes.color,1/256)}v.color={data:e.typedBuffer,size:e.elementCount},p.color=h}const b=new Sr(new yr(v,p),`gltf_${e.name}_${d++}`);u.stageResources.geometries.push(b),u.stageResources.materials.push(s.get(a)),f&&(D(l.textureColor)&&u.stageResources.textures.push(c.get(l.textureColor)),D(l.textureNormal)&&u.stageResources.textures.push(c.get(l.textureNormal)),D(l.textureOcclusion)&&u.stageResources.textures.push(c.get(l.textureOcclusion)),D(l.textureEmissive)&&u.stageResources.textures.push(c.get(l.textureEmissive)),D(l.textureMetallicRoughness)&&u.stageResources.textures.push(c.get(l.textureMetallicRoughness))),u.numberOfVertices+=g;const y=b.boundingInfo;Pe(u.boundingBox,y.getBBMin()),Pe(u.boundingBox,y.getBBMax())}))})),a}function $s(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}var Ws=Object.freeze({__proto__:null,fetch:async function(e,t){const r=js(_e(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):async function(e,t){const r=await async function(e,t){const r=D(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const o=await de(t.request(e,"json",r));return!0===o.ok?o.value:(ue(o.error),void Bs(o.error.details.url))}(e,r,t);const o=await de(W(e,xe(t)));return!0===o.ok?o.value.data:(ue(o.error),void Bs(o.error))}(e,t);return{resource:r,textures:await Ds(r.textureDefinitions,t)}}(r.url,t)),o=function(e,t){const r=[],o=[],i=[],n=[],a=e.resource,s=ls.parse(a.version||"1.0","wosr");Hs.validate(s);const c=a.model.name,l=a.model.geometries,d=a.materialDefinitions,u=e.textures;let f=0;const m=new Map;for(let e=0;e<l.length;e++){const a=l[e];if(!zs(a))continue;const s=Vs(a),h=a.params.vertexAttributes,p={};for(const e in h){const t=h[e],r=t.values;p[e]={data:r,size:t.valuesPerElement}}const v={};if("PerAttributeArray"===a.params.topology){const e=Us(p.position.data.length/p.position.size);for(const t in p)v[t]=e}else{const e=a.params.faces;for(const t in e)v[t]=new Uint32Array(e[t].values)}const g=u&&u[s.texture];if(g&&!m.has(s.texture)){const{image:e,params:t}=g,r=new Ja(e,c,t);n.push(r),m.set(s.texture,r)}const x=m.get(s.texture),b=x?x.id:void 0;let y=i[s.material]?i[s.material][s.texture]:null;if(!y){const e=d[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=g&&g.alphaChannelUsage,o=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,n={ambient:be(e.diffuse),diffuse:be(e.diffuse),opacity:1-(e.transparency||0),transparent:o,textureAlphaMode:g?Es(g.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:b,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};D(t)&&t.materialParamsMixin&&ye(n,t.materialParamsMixin),y=new Fa(n,c),i[s.material]||(i[s.material]={}),i[s.material][s.texture]=y}o.push(y);const w=new Sr(new yr(p,v),c);f+=v.position?v.position.length:0,r.push(w)}return{name:c,stageResources:{textures:n,materials:o,geometries:r},pivotOffset:a.model.pivotOffset,boundingBox:Ns(r),numberOfVertices:f,lodThreshold:null}}(e,t);return{lods:[o],referenceBoundingBox:o.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const o=await(t.cache?t.cache.loadGLTF(r.url,t):async function(e,t,r={}){const o=await vs.load(e,Ps,t,r),i="gltf_"+Ss++,n={lods:[],materials:new Map,textures:new Map,meta:Cs(o)},a=!(!o.json.asset.extras||"symbolResource"!==o.json.asset.extras.ESRI_type);return await async function(e,t){const r=e.json,o=r.scenes[r.scene||0].nodes,i=o.length>1;for(const e of o){const t=r.nodes[e],o=[n(e,0)];if(Ms(t)&&!i){const e=t.extensions.MSFT_lod.ids;o.push(...e.map(((e,t)=>n(e,t+1))))}await ve(o)}async function n(o,i){const a=r.nodes[o],s=e.getNodeTransform(o);if(Ps.warnUnsupportedIf(null!=a.weights,"Morph targets are not supported."),null!=a.mesh){const e=r.meshes[a.mesh];for(const r of e.primitives)await t(r,s,i,e.name)}for(const e of a.children||[])await n(e,i)}}(o,(async(e,t,a,s)=>{const c=void 0!==e.mode?e.mode:4,l=function(e){switch(e){case 4:case 5:case 6:return e;default:return null}}(c);if(E(l))return void Ps.warnUnsupported("Unsupported primitive mode ("+Rs[c]+"). Skipping primitive.");if(!o.hasPositions(e))return void Ps.warn("Skipping primitive without POSITION vertex attribute.");const d=await o.getMaterial(e,r),u={transform:xt(t),attributes:{position:await o.getPositionData(e,r),normal:null,texCoord0:null,color:null,tangent:null},indices:await o.getIndexData(e,r),primitiveType:l,material:Os(n,d,i)};o.hasNormals(e)&&(u.attributes.normal=await o.getNormalData(e,r)),o.hasTangents(e)&&(u.attributes.tangent=await o.getTangentData(e,r)),o.hasTextureCoordinates(e)&&(u.attributes.texCoord0=await o.getTextureCoordinates(e,r)),o.hasVertexColors(e)&&(u.attributes.color=await o.getVertexColors(e,r));let f=null;D(n.meta)&&D(n.meta.ESRI_lod)&&"screenSpaceRadius"===n.meta.ESRI_lod.metric&&(f=n.meta.ESRI_lod.thresholds[a]),n.lods[a]=n.lods[a]||{parts:[],name:s,lodThreshold:f},n.lods[a].parts.push(u)})),{model:n,meta:{isEsriSymbolResource:a,uri:o.uri},customMeta:{}}}(new Za(t.streamDataRequester),r.url,t)),i=Te(o.model.meta,"ESRI_proxyEllipsoid");o.meta.isEsriSymbolResource&&D(i)&&-1!==o.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let r=0;r<e.model.lods.length;++r){const o=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const i of o.parts){const o=i.attributes.normal;if(E(o))return;const n=i.attributes.position,s=n.count,l=a(),d=a(),u=a(),f=ss(Fe,s),h=ss(Le,s),p=A([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],i.transform);for(let a=0;a<s;a++){n.getVec(a,d),o.getVec(a,l),I(d,d,i.transform),c(u,d,t.center),Se(u,u,t.radius);const s=u[2],v=m(u),g=Math.min(.45+.55*v*v,1);Se(u,u,t.radius),I(u,u,p),_(u,u),r+1!==e.model.lods.length&&e.model.lods.length>1&&y(u,u,l,s>-1?.2:Math.min(-4*s-3.8,1)),h.setVec(a,u),f.set(a,0,255*g),f.set(a,1,255*g),f.set(a,2,255*g),f.set(a,3,255)}i.attributes.normal=h,i.attributes.color=f}}}(o,i);const n=o.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:o.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:!0,isSchematic:!1,mrrFactors:[0,1,.5]},s={...t.materialParamsMixin,treeRendering:o.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=qs(o,n,s,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=qs(o,n,s,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1,remove:o.remove}}const l=qs(o,n,s);return{lods:l,referenceBoundingBox:l[0].boundingBox,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1,remove:o.remove}},gltfToEngineResources:qs,parseUrl:js});export{Pa as L,Sa as P,Ws as o};
