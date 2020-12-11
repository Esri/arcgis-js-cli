import{bU as e,U as r,bo as a,k as t,L as n,b0 as l}from"../main.js";import{a as s}from"./lazyLayerLoader-c27264ad.js";function o(e,r){return!!e.typeKeywords&&e.typeKeywords.indexOf(r)>-1}function c(e){switch(e.type){case"Map Service":return function(e){return function(e){return d(e.url).then((e=>e.tileInfo))}(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}))}(e);case"Feature Service":return function(e){return i(e).then((e=>{if("object"==typeof e){const r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return async function(e){return await e.load(),o(e,"Map Notes")?{className:"MapNotesLayer"}:o(e,"Route Layer")?{className:"RouteLayer"}:1===p(await e.fetchData())?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return i(e).then((r=>{if("object"==typeof r){const a={};let t;if(null!=r.id?(a.layerId=r.id,t=`${e.url}/layers/${r.id}`):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const r={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const a of Object.keys(r))if(-1!==e.typeKeywords.indexOf(a))return{className:r[a]}}return d(t).then((e=>{let r="SceneLayer";const t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&t[e.layerType]&&(r=t[e.layerType]),{className:r,properties:a}}))}return{className:"GroupLayer"}}))}(e);case"Image Service":return async function(e){var r,a,t;await e.load();const n=null!=(r=null==(a=e.typeKeywords)?void 0:a.map((e=>e.toLowerCase())))?r:[];if(n.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(n.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const l=await e.fetchData(),s=null==l?void 0:l.layerType;if("ArcGISTiledImageServiceLayer"===s)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===s)return{className:"ImageryLayer"};return"map"===(null==(t=(await d(e.url)).cacheType)?void 0:t.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return a(new t("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function u(e){return(0,s[e.className])().then((r=>({constructor:r,properties:e.properties})))}function i(e){return!e.url||e.url.match(/\/\d+$/)?r({}):e.load().then((()=>e.fetchData())).then((r=>p(r)>0?y(r):d(e.url).then(y)))}function y(e){return 1===p(e)&&{id:l(m(e))}}function m(e){const r=e.layers;if(r&&r.length)return r[0].id;const a=e.tables;return a&&a.length?a[0].id:null}function p(e){var r,a,t,n;return(null!=(r=null==e||null==(a=e.layers)?void 0:a.length)?r:0)+(null!=(t=null==e||null==(n=e.tables)?void 0:n.length)?t:0)}function d(e){return n(e,{responseType:"json",query:{f:"json"}}).then((e=>e.data))}var f=Object.freeze({__proto__:null,fromItem:function(a){return!a.portalItem||a.portalItem instanceof e||(a={...a,portalItem:new e(a.portalItem)}),(t=a.portalItem,t.load().then(c).then(u)).then((e=>{const t={portalItem:a.portalItem,...e.properties},n=e.constructor;return r(new n(t))}));var t},selectLayerClassPath:c});export{c,f as p,o as t};
