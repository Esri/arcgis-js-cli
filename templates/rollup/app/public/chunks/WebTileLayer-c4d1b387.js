import{p as e,y as t,q as l,cf as r,aR as s,eX as o,eZ as i,eY as a,cE as n,cF as p,cG as u,cJ as c,aT as y,aB as h,cK as d,a5 as m,gd as f,ci as v,ch as w,k as g,U as T,ge as b,cl as j,L as R,gf as S,cz as x,b7 as I}from"../main.js";var O;let P=O=class extends r{constructor(e){super(e)}clone(){return new O({customLayerParameters:s(this.customLayerParameters),customParameters:s(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};e([t({json:{type:Object,write:!0}})],P.prototype,"customLayerParameters",void 0),e([t({json:{type:Object,write:!0}})],P.prototype,"customParameters",void 0),e([t({type:String,json:{write:!0}})],P.prototype,"layerIdentifier",void 0),e([t({type:String,json:{write:!0}})],P.prototype,"tileMatrixSet",void 0),e([t({type:String,json:{write:!0}})],P.prototype,"url",void 0),P=O=e([l("esri.layer.support.WMTSLayerInfo")],P);var E=P;let W=class extends(o(i(a(n(p(u(c))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new y(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,h.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=h.WebMercator,this.subDomains=null,this.tileInfo=new d({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new m({x:-20037508.342787,y:20037508.342787,spatialReference:h.WebMercator}),spatialReference:h.WebMercator,lods:[new f({level:0,scale:591657527.591555,resolution:156543.033928}),new f({level:1,scale:295828763.795777,resolution:78271.5169639999}),new f({level:2,scale:147914381.897889,resolution:39135.7584820001}),new f({level:3,scale:73957190.948944,resolution:19567.8792409999}),new f({level:4,scale:36978595.474472,resolution:9783.93962049996}),new f({level:5,scale:18489297.737236,resolution:4891.96981024998}),new f({level:6,scale:9244648.868618,resolution:2445.98490512499}),new f({level:7,scale:4622324.434309,resolution:1222.99245256249}),new f({level:8,scale:2311162.217155,resolution:611.49622628138}),new f({level:9,scale:1155581.108577,resolution:305.748113140558}),new f({level:10,scale:577790.554289,resolution:152.874056570411}),new f({level:11,scale:288895.277144,resolution:76.4370282850732}),new f({level:12,scale:144447.638572,resolution:38.2185141425366}),new f({level:13,scale:72223.819286,resolution:19.1092570712683}),new f({level:14,scale:36111.909643,resolution:9.55462853563415}),new f({level:15,scale:18055.954822,resolution:4.77731426794937}),new f({level:16,scale:9027.977411,resolution:2.38865713397468}),new f({level:17,scale:4513.988705,resolution:1.19432856685505}),new f({level:18,scale:2256.994353,resolution:.597164283559817}),new f({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?v({urlTemplate:e},t||{}):e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new w(this.urlTemplate);this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new g("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),T(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&h.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:l}=this,r=new w(t),s=r.scheme?r.scheme+"://":"//",o=s+r.authority+"/";if(-1===r.authority.indexOf("{subDomain}"))e.push(o);else if(l&&l.length>0&&r.authority.split(".").length>1)for(const t of l)e.push(s+r.authority.replace(/\{subDomain\}/gi,t)+"/");return e.map((e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e)))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new w(e),l=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(l.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&b(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=j(e)),t.templateUrl=e}fetchTile(e,t,l,r={}){const{signal:s,timestamp:o}=r,i=this.getTileUrl(e,t,l),a={responseType:"image",signal:s};return null!=o&&(a.query={_ts:r.timestamp}),R(i,a).then((e=>e.data))}getTileUrl(e,t,l){const r=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+S(this.urlPath,{level:r,z:r,col:l,x:l,row:t,y:t})}};e([t({type:String,value:"",json:{write:!0}})],W.prototype,"copyright",void 0),e([t({type:y,json:{write:!0}})],W.prototype,"fullExtent",void 0),e([t({readOnly:!0,json:{read:!1,write:!1}})],W.prototype,"legendEnabled",void 0),e([t({type:["show","hide"]})],W.prototype,"listMode",void 0),e([t({dependsOn:["tileInfo"]})],W.prototype,"levelValues",null),e([t({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],W.prototype,"isReference",void 0),e([t({type:["WebTiledLayer"],value:"WebTiledLayer"})],W.prototype,"operationalLayerType",void 0),e([t({readOnly:!0,json:{read:!1,write:!1}})],W.prototype,"popupEnabled",void 0),e([t({type:h})],W.prototype,"spatialReference",void 0),e([x("spatialReference",["spatialReference","fullExtent.spatialReference"])],W.prototype,"readSpatialReference",null),e([t({type:[String],json:{write:!0}})],W.prototype,"subDomains",void 0),e([t({type:d,json:{write:!0}})],W.prototype,"tileInfo",void 0),e([t({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],W.prototype,"tileServers",null),e([t({json:{read:!1}})],W.prototype,"type",void 0),e([t({dependsOn:["urlTemplate"]})],W.prototype,"urlPath",null),e([t({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],W.prototype,"urlTemplate",void 0),e([x("urlTemplate",["urlTemplate","templateUrl"])],W.prototype,"readUrlTemplate",null),e([I("urlTemplate",{templateUrl:{type:String}})],W.prototype,"writeUrlTemplate",null),e([t({type:E,json:{write:!0}})],W.prototype,"wmtsInfo",void 0),W=e([l("esri.layers.WebTileLayer")],W);var D=W,L=Object.freeze({__proto__:null,default:D});export{D as E,L as W,E as a};
