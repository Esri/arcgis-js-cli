import{et as e,eu as t,ev as n,ew as i,ex as s,bw as r}from"../main.js";class o{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function l(e){return new a(e)}class u{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function c(e){return new u(e)}const f=new Set;function d(e,t,n,r,o=!1,a){f.clear();for(const t in r){const u=e.get(t);if(!u)continue;const c=r[t],d=h(u,c);if(d!==c&&a&&a.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:u,originalValue:c,sanitizedValue:d}}),f.add(u.name),u&&(o||u.editable)){const e=i(u,d);if(e)return l(s(e,u,d));n[u.name]=d}}for(const e of t)if(!f.has(e.name))return l(`missing required field "${e.name}"`);return null}function h(i,s){let r=s;return"string"==typeof s&&e(i)?r=parseFloat(s):null!=s&&t(i)&&"string"!=typeof s&&(r=String(s)),n(r)}let m;function g(e,t){if(!e||!r(t))return e;if("rings"in e||"paths"in e){if(!m)throw new TypeError("geometry engine not loaded");return m.simplify(t,e)}return e}async function p(e,t){!r(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return m||(m=await import("./geometryEngineJSON-b594cca3.js"),m)}()}export{c,d,g as h,l as u,p as y};
