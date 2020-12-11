import{d$ as e,e0 as t,e1 as s,aR as i,x as n,J as o,al as r,e2 as d,i as a,k as h,a as u}from"../main.js";import{a as _,t as l,l as c}from"./featureConversionUtils-0e5f7c52.js";import{t as m}from"./centroid-aa1305d6.js";import{i as y}from"./quantizationUtils-779d11a7.js";import{G as f}from"./aaBoundingBox-56c013d2.js";function I(i){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===i||"esriGeometryMultipoint"===i?e:"esriGeometryPolyline"===i?t:s}}}function g(e,t){if(n("csp-restrictions"))return()=>({[t]:null,...e});try{let s=`this.${t} = null;`;for(const t in e)s+=`this${t.indexOf(".")?`["${t}"]`:"."+t} = ${JSON.stringify(e[t])};`;const i=new Function(s);return()=>new i}catch(s){return()=>({[t]:null,...e})}}function B(e={}){return[{name:"New Feature",description:"",prototype:{attributes:i(e)}}]}const b={minX:0,minY:0,maxX:0,maxY:0};class x{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=y(9,n("csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((s,i)=>{e[t++]=i})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex();for(const s of function(e,t){return b.minX=t[0],b.minY=t[1],b.maxX=t[2],b.maxY=t[3],e.search(b)}(this._index,e))t(this._idByBounds.get(s))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}const v={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new _(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(e.centroid||(e.centroid=m(new l,e.geometry,t.hasZ,t.hasM)),e.centroid)};class p{constructor(e){this.geometryInfo=e,this._boundsStore=new x,this._featuresById=new Map,this._markedIds=new Set,this.events=new o,this.featureAdapter=v}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=r(d);return this._featuresById.forEach((t=>{const s=this._boundsStore.get(t.objectId);s&&(e[0]=Math.min(s[0],e[0]),e[1]=Math.min(s[1],e[1]),e[2]=Math.max(s[2],e[2]),e[3]=Math.max(s[3],e[3]))})),e}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,s){for(const i of e){const e=this._boundsStore.get(i.objectId);e&&t(f(s,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,s)=>{this._markedIds.has(s)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void a.getLogger("esri.layers.graphics.data.FeatureStore").error(new h("featurestore:invalid-feature","feature id is missing",{feature:e}));const s=this._featuresById.get(t);let i;if(this._markedIds.add(t),s?(e.displayId=s.displayId,i=this._boundsStore.get(t),this._boundsStore.delete(t)):u(this.onFeatureAdd)&&this.onFeatureAdd(e),!e.geometry||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);i=c(i||r(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(t,i),this._featuresById.set(t,e)}_remove(e){return u(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}export{p as h,I as i,g as s,B as u};
