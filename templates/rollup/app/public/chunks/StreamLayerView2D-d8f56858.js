import{p as e,y as t,q as r,k as i,cA as s,t as n,a}from"../main.js";import"./definitions-5e24d82a.js";import"./RenderingContext-81847018.js";import"./Utils-b46864a6.js";import"./visualVariablesUtils-a8352e1b.js";import"./Rect-31175b04.js";import"./BidiEngine-b37d0381.js";import"./Container-c6c95dc1.js";import"./mat4f32-a7ddfa75.js";import"./MaterialKey-a89f5ca3.js";import{l as o}from"./shapingUtils-e86a3b68.js";import"./MD5-f399cfb7.js";import"./graphicsUtils-f2509259.js";import"./LayerView2D-6e7585a5.js";import"./clickToleranceUtils-c77be34a.js";import"./drapedUtils-c5c5241c.js";import c from"./FeatureLayerView2D-cdefb1cc.js";import"./popupUtils-2a195f64.js";function l(e,t){if(n(e)&&n(t))return null;const r={};return a(t)&&(r.geometry=t.toJSON()),a(e)&&(r.where=e),r}let p=class extends c{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.handles.add([this.layer.watch("purgeOptions",(()=>this._update()))])}destroy(){this.connectionStatus="disconnected"}get connectionError(){if(this.errorString)return new i("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),i=this;return{remove(){r.remove(),"data-received"===e&&(i._proxy.closed||i.hasEventListener("data-received")||i._proxy.enableEvent("data-received",!1))}}}queryLatestObservations(e,t){if(!this.layer.timeInfo.endField&&!this.layer.timeInfo.startField)throw new i("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then((e=>{const t=s.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),t}))}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(l(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),i=o(e.geometryType),s=e.timeInfo&&e.timeInfo.toJSON()||null,n=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:r,geometryType:i,objectIdField:t,timeInfo:s,source:this.layer.parsedUrl,serviceFilter:l(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:n,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval}}};e([t()],p.prototype,"errorString",void 0),e([t({dependsOn:["errorString"],readOnly:!0})],p.prototype,"connectionError",null),e([t()],p.prototype,"connectionStatus",void 0),p=e([r("esri.views.2d.layers.StreamLayerView2D")],p);var d=p;export default d;
