import{ax as e,e_ as t,p as r,y as s,cz as i,eS as o,e$ as a,q as n,bP as l,d5 as p,a_ as y,a as d,eI as u,U as c,f0 as h,L as f,cY as v,t as g,k as b,aT as m,aB as w,f1 as S,f2 as O,f3 as j,dB as x,dG as F,bc as I,f4 as L,bL as T,f5 as B,f6 as E,cf as A,aR as q,f7 as _,f8 as N,i as R,cD as M,cE as k,cF as P,eY as D,cG as Q,cJ as U,f9 as V,c_ as C,fa as J,fb as K}from"../main.js";import"./resourceUtils-4e1e675c.js";import{s as G,c as H}from"./FetchAssociatedFeatureLayer-6697ac64.js";import{s as Z,a as $,u as z,m as Y}from"./I3SLayerDefinitions-17378793.js";import{O as W}from"./SceneService-e8a9abe2.js";let X=class extends(e(t)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:void 0}};r([s({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],X.prototype,"title",void 0),r([i("service","title",["alias","name"])],X.prototype,"readTitle",null),r([s()],X.prototype,"layer",void 0),r([s({type:o,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],X.prototype,"id",void 0),r([i("service","id")],X.prototype,"readIdOnlyOnce",null),r([s(a(String))],X.prototype,"modelName",void 0),r([s(a(Boolean))],X.prototype,"isEmpty",void 0),r([s({type:Boolean,json:{name:"visibility",write:!0}})],X.prototype,"visible",void 0),r([s({type:Number,json:{write:!0}})],X.prototype,"opacity",void 0),X=r([n("esri.layers.buildingSublayers.BuildingSublayer")],X);var ee=X;const te=L();let re=class extends(l.LoadableMixin(p(ee))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new y(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,s=t.associatedLayerID;return d(r)&&"number"==typeof s?new u({portalItem:r,layerId:s}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return d(this.associatedLayer)?this.associatedLayer.displayField:null}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=d(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),c(this)}createPopupTemplate(e){return h(this,e)}async _fetchService(e){const t=(await f(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){const t=this.getField(e);return t&&t.domain?t.domain:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=d(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:G,{query:t,data:{supportsZ:r,supportsM:s,isVersioned:i}}=e;return{query:t,data:{supportsZ:r,supportsM:s,isVersioned:i}}}createQuery(){const e=new v;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e&&e.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:d(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return d(e)&&e.loaded?c(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),g(this.associatedLayer))throw new b("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new b("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};r([s({readOnly:!0,dependsOn:["layer","id"]})],re.prototype,"parsedUrl",null),r([s({type:Z,readOnly:!0})],re.prototype,"nodePages",void 0),r([s({type:[$],readOnly:!0})],re.prototype,"materialDefinitions",void 0),r([s({type:[z],readOnly:!0})],re.prototype,"textureSetDefinitions",void 0),r([s({type:[Y],readOnly:!0})],re.prototype,"geometryDefinitions",void 0),r([s({readOnly:!0})],re.prototype,"serviceUpdateTimeStamp",void 0),r([s({readOnly:!0})],re.prototype,"store",void 0),r([s({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],re.prototype,"rootNode",void 0),r([s({readOnly:!0})],re.prototype,"attributeStorageInfo",void 0),r([s(te.fields)],re.prototype,"fields",void 0),r([s({readOnly:!0,dependsOn:["fields"]})],re.prototype,"fieldsIndex",null),r([s({readOnly:!0,type:u})],re.prototype,"associatedLayer",void 0),r([i("service","associatedLayer",["associatedLayerID"])],re.prototype,"readAssociatedLayer",null),r([s(te.outFields)],re.prototype,"outFields",void 0),r([s({type:String,dependsOn:["fields"],readOnly:!0})],re.prototype,"objectIdField",null),r([s({readOnly:!0,type:String,json:{read:!1},dependsOn:["associatedLayer.displayField"]})],re.prototype,"displayField",null),r([s({readOnly:!0,type:m,aliasOf:"layer.fullExtent"})],re.prototype,"fullExtent",void 0),r([s({readOnly:!0,type:w,aliasOf:"layer.spatialReference"})],re.prototype,"spatialReference",void 0),r([s({readOnly:!0,aliasOf:"layer.version"})],re.prototype,"version",void 0),r([s({readOnly:!0,type:S,aliasOf:"layer.elevationInfo"})],re.prototype,"elevationInfo",void 0),r([s({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],re.prototype,"minScale",void 0),r([s({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],re.prototype,"maxScale",void 0),r([s({type:["hide","show"],json:{write:!0}})],re.prototype,"listMode",void 0),r([s({types:O,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],re.prototype,"renderer",void 0),r([s({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],re.prototype,"definitionExpression",void 0),r([s(j)],re.prototype,"popupEnabled",void 0),r([s({type:x,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],re.prototype,"popupTemplate",void 0),r([s({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],re.prototype,"normalReferenceFrame",void 0),r([s({readOnly:!0,json:{read:!1},dependsOn:["fields","title"]})],re.prototype,"defaultPopupTemplate",null),r([s({json:{write:!1}}),F(new I({"3DObject":"3d-object",Point:"point"}))],re.prototype,"layerType",void 0),r([s({dependsOn:["layerType"]})],re.prototype,"geometryType",null),r([s({dependsOn:["layerType"]})],re.prototype,"profile",null),r([s({readOnly:!0,json:{read:!1},dependsOn:["associatedLayer.capabilities"]})],re.prototype,"capabilities",null),re=r([n("esri.layers.buildingSublayers.BuildingComponentSublayer")],re);var se,ie=re;const oe={type:T,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:ae}}},read:!1}};function ae(e,t,r){if(e&&Array.isArray(e))return new T(e.map((e=>{const t=function(e){return"group"===e.layerType?ne:ie}(e);if(t){const s=new t;return s.read(e,r),s}r&&r.messages&&e&&r.messages.push(new B("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r}))})))}let ne=se=class extends ee{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return E(this,(e=>se.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};r([s({type:["hide","show","hide-children"],json:{write:!0}})],ne.prototype,"listMode",void 0),r([s(oe)],ne.prototype,"sublayers",void 0),ne=se=r([n("esri.layers.buildingSublayers.BuildingGroupSublayer")],ne),function(e){e.sublayersProperty=oe,e.readSublayers=ae,e.forEachSublayer=function e(t,r){t.forEach((t=>{r(t),"building-group"===t.type&&e(t.sublayers,r)}))}}(ne||(ne={}));var le=ne;let pe=class extends A{constructor(){super(...arguments),this.type=null}};r([s({type:String,readOnly:!0,json:{write:!0}})],pe.prototype,"type",void 0),pe=r([n("esri.layers.support.BuildingFilterAuthoringInfo")],pe);var ye,de=pe;let ue=ye=class extends A{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new ye({filterType:this.filterType,filterValues:q(this.filterValues)})}};r([s({type:String,json:{write:!0}})],ue.prototype,"filterType",void 0),r([s({type:[String],json:{write:!0}})],ue.prototype,"filterValues",void 0),ue=ye=r([n("esri.layers.support.BuildingFilterAuthoringInfoType")],ue);var ce,he=ue;const fe=T.ofType(he);let ve=ce=class extends A{clone(){return new ce({filterTypes:q(this.filterTypes)})}};r([s({type:fe,json:{write:!0}})],ve.prototype,"filterTypes",void 0),ve=ce=r([n("esri.layers.support.BuildingFilterAuthoringInfoBlock")],ve);var ge,be=ve;const me=T.ofType(be);let we=ge=class extends de{constructor(){super(...arguments),this.type="checkbox"}clone(){return new ge({filterBlocks:q(this.filterBlocks)})}};r([s({type:["checkbox"]})],we.prototype,"type",void 0),r([s({type:me,json:{write:!0}})],we.prototype,"filterBlocks",void 0),we=ge=r([n("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],we);var Se=we;let Oe=class extends A{};r([s({readOnly:!0,json:{read:!1}})],Oe.prototype,"type",void 0),Oe=r([n("esri.layers.support.BuildingFilterMode")],Oe);var je,xe=Oe;let Fe=je=class extends xe{constructor(){super(...arguments),this.type="solid"}clone(){return new je}};r([s({type:["solid"],readOnly:!0,json:{write:!0}})],Fe.prototype,"type",void 0),Fe=je=r([n("esri.layers.support.BuildingFilterModeSolid")],Fe);var Ie,Le=Fe;let Te=Ie=class extends xe{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new Ie({edges:q(this.edges)})}};r([F({wireFrame:"wire-frame"})],Te.prototype,"type",void 0),r([s(_)],Te.prototype,"edges",void 0),Te=Ie=r([n("esri.layers.support.BuildingFilterModeWireFrame")],Te);var Be,Ee=Te;let Ae=Be=class extends xe{constructor(){super(...arguments),this.type="x-ray"}clone(){return new Be}};r([s({type:["x-ray"],readOnly:!0,json:{write:!0}})],Ae.prototype,"type",void 0),Ae=Be=r([n("esri.layers.support.BuildingFilterModeXRay")],Ae);var qe,_e=Ae;const Ne={nonNullable:!0,types:{key:"type",base:xe,typeMap:{solid:Le,"wire-frame":Ee,"x-ray":_e}},json:{read:e=>{switch(e&&e.type){case"solid":return Le.fromJSON(e);case"wireFrame":return Ee.fromJSON(e);case"x-ray":return _e.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let Re=qe=class extends A{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new Le,this.title=""}clone(){return new qe({filterExpression:this.filterExpression,filterMode:q(this.filterMode),title:this.title})}};r([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Re.prototype,"filterExpression",void 0),r([s(Ne)],Re.prototype,"filterMode",void 0),r([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Re.prototype,"title",void 0),Re=qe=r([n("esri.layers.support.BuildingFilterBlock")],Re);var Me,ke=Re;const Pe=T.ofType(ke);let De=Me=class extends A{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=N(),this.name=null}clone(){return new Me({description:this.description,filterBlocks:q(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:q(this.filterAuthoringInfo)})}};r([s({type:String,json:{write:!0}})],De.prototype,"description",void 0),r([s({type:Pe,json:{write:{enabled:!0,isRequired:!0}}})],De.prototype,"filterBlocks",void 0),r([s({types:{key:"type",base:de,typeMap:{checkbox:Se}},json:{read:e=>{switch(e&&e.type){case"checkbox":return Se.fromJSON(e);default:return null}},write:!0}})],De.prototype,"filterAuthoringInfo",void 0),r([s({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],De.prototype,"id",void 0),r([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],De.prototype,"name",void 0),De=Me=r([n("esri.layers.support.BuildingFilter")],De);var Qe=De;const Ue=R.getLogger("esri.layers.support.BuildingSummaryStatistics");let Ve=class extends A{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};r([s({type:String})],Ve.prototype,"fieldName",void 0),r([s({type:String})],Ve.prototype,"modelName",void 0),r([s({type:String})],Ve.prototype,"label",void 0),r([s({type:Number})],Ve.prototype,"min",void 0),r([s({type:Number})],Ve.prototype,"max",void 0),r([s({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],Ve.prototype,"mostFrequentValues",void 0),r([s({type:[Number]})],Ve.prototype,"subLayerIds",void 0),Ve=r([n("esri.layers.support.BuildingFieldStatistics")],Ve);let Ce=class extends(l.LoadableMixin(p(A))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded?this._get("fields"):(Ue.error("building summary statistics are not loaded"),null)}load(e){const t=d(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),c(this)}async _fetchService(e){const t=(await f(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};r([s({constructOnly:!0,type:String})],Ce.prototype,"url",void 0),r([s({readOnly:!0,type:[Ve],json:{read:{source:"summary"}}})],Ce.prototype,"fields",null),Ce=r([n("esri.layers.support.BuildingSummaryStatistics")],Ce);var Je=Ce;const Ke=R.getLogger("esri.layers.BuildingSceneLayer"),Ge=T.ofType(Qe),He=q(le.sublayersProperty);He.json.origins["web-scene"]={type:[ie],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},He.json.origins["portal-item"]={type:[ie],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let Ze=class extends(W(M(k(P(D(Q(U))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new V({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new Ge,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,t,r){const s=le.readSublayers(e,t,r);return le.forEachSublayer(s,(e=>e.layer=this)),this.sublayerOverrides&&(this.applySublayerOverrides(s,this.sublayerOverrides),this.sublayerOverrides=null),s}applySublayerOverrides(e,{overrides:t,context:r}){le.forEachSublayer(e,(e=>e.read(t.get(e.id),r)))}readSublayerOverrides(e,t){const r=new Map;for(const s of e)null!=s&&"object"==typeof s&&"number"==typeof s.id?r.set(s.id,s):t.messages.push(new b("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:s}));return{overrides:r,context:t}}writeSublayerOverrides(e,t,r){const s=[];le.forEachSublayer(this.sublayers,(e=>{const t=e.write({},r);Object.keys(t).length>1&&s.push(t)})),s.length>0&&(t.sublayers=s)}writeUnappliedOverrides(e,t){t.sublayers=[],e.overrides.forEach((e=>{t.sublayers.push(q(e))}))}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,t){if(super.read(e,t),t&&("web-scene"===t.origin||"portal-item"===t.origin)&&null!=e&&Array.isArray(e.sublayers)){const r=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,r):this.sublayerOverrides=r}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef){const e=C(this.parsedUrl.path,t.statisticsHRef);return new Je({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const t=d(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch((()=>{})).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(r),c(this)}loadAll(){return J(this,(e=>{le.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new b("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&Ke.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&Ke.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const t=new H(this.parsedUrl,this.portalItem,e);try{this.associatedFeatureServiceItem=await t.fetchPortalItem()}catch(e){Ke.warn("Associated feature service item could not be loaded",e)}}};r([s({type:["BuildingSceneLayer"]})],Ze.prototype,"operationalLayerType",void 0),r([s({readOnly:!0})],Ze.prototype,"allSublayers",void 0),r([s(He)],Ze.prototype,"sublayers",void 0),r([i("service","sublayers")],Ze.prototype,"readSublayers",null),r([s({type:Ge,nonNullable:!0,json:{write:!0}})],Ze.prototype,"filters",void 0),r([s({type:String,json:{write:!0}})],Ze.prototype,"activeFilterId",void 0),r([s({readOnly:!0,type:Je})],Ze.prototype,"summaryStatistics",void 0),r([i("summaryStatistics",["statisticsHRef"])],Ze.prototype,"readSummaryStatistics",null),r([s({type:[String],json:{read:!1}})],Ze.prototype,"outFields",void 0),r([s(a(m))],Ze.prototype,"fullExtent",void 0),r([s({type:["show","hide","hide-children"]})],Ze.prototype,"listMode",void 0),r([s(a(w))],Ze.prototype,"spatialReference",void 0),r([s(K)],Ze.prototype,"elevationInfo",null),r([s({json:{read:!1},readOnly:!0})],Ze.prototype,"type",void 0),r([s()],Ze.prototype,"associatedFeatureServiceItem",void 0),Ze=r([n("esri.layers.BuildingSceneLayer")],Ze);var $e=Ze;export default $e;
