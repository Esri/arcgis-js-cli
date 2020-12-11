import{m as e,ax as t,d5 as s,J as i,r,i as n,p as a,y as d,q as o,cf as p,bK as l,cs as h,aT as u,aD as y,bL as c,d6 as v,Q as g}from"../main.js";import{r as w}from"./Container-c6c95dc1.js";let m=class extends(e(t(s(i.EventedMixin(r))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",s=this.layer&&this.layer.title||"no title";throw n.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${s}', id: '${t}')`,e),e}}))}get fullOpacity(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get visible(){return!0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};a([d({dependsOn:["layer.opacity","parent.fullOpacity"]})],m.prototype,"fullOpacity",null),a([d()],m.prototype,"layer",void 0),a([d()],m.prototype,"parent",void 0),a([d({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],m.prototype,"suspended",null),a([d({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],m.prototype,"suspendInfo",null),a([d({readOnly:!0,dependsOn:["suspended","layer.legendEnabled?"]})],m.prototype,"legendEnabled",null),a([d({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],m.prototype,"updating",null),a([d({dependsOn:["layer.visible"]})],m.prototype,"visible",null),m=a([o("esri.views.layers.LayerView")],m);var b=m;let f=class extends p{};f=a([o("esri.views.layers.support.ClipArea")],f);var O,R=f;let q=O=class extends R{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new O({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};a([d({type:[Number,String],json:{write:!0}})],q.prototype,"left",void 0),a([d({type:[Number,String],json:{write:!0}})],q.prototype,"right",void 0),a([d({type:[Number,String],json:{write:!0}})],q.prototype,"top",void 0),a([d({type:[Number,String],json:{write:!0}})],q.prototype,"bottom",void 0),a([d({readOnly:!0,dependsOn:["left","right","top","bottom"]})],q.prototype,"version",null),q=O=a([o("esri.views.layers.support.ClipRect")],q);var x,S=q;const U={base:h,key:"type",typeMap:{extent:u,polygon:y}};let j=x=class extends R{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new x({geometry:this.geometry.clone()})}};a([d({types:U,json:{read:l,write:!0}})],j.prototype,"geometry",void 0),a([d({readOnly:!0,dependsOn:["geometry"]})],j.prototype,"version",null),j=x=a([o("esri.views.layers.support.Geometry")],j);var _=j;let I=class extends R{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};a([d({type:[[[Number]]],json:{write:!0}})],I.prototype,"path",void 0),a([d({readOnly:!0,dependsOn:["path"]})],I.prototype,"version",null),I=a([o("esri.views.layers.support.Path")],I);var L=I;const N=c.ofType({key:"type",base:R,typeMap:{rect:S,path:L,geometry:_}}),E=e=>{let t=class extends e{constructor(){super(...arguments),this.clips=new N,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var e;this.container||(this.container=new w),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([g(this,"suspended",(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),!0),g(this,["layer.opacity","container"],(()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)}),!0),g(this,["layer.blendMode"],(e=>{this.container&&(this.container.blendMode=e)}),!0),g(this,["layer.effect"],(e=>{this.container&&(this.container.effect=e)}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips")}))]),(null==(e=this.view)?void 0:e.whenLayerView)?this.view.whenLayerView(this.layer).then((e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(e){let t=!0;const s=this.layer,i=s.minScale,r=s.maxScale;if(null!=i&&null!=r){let s=!i,n=!r;!s&&e<=i&&(s=!0),!n&&e>=r&&(n=!0),t=s&&n}return t}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return a([d({type:N,set(e){const t=v(e,this._get("clips"),N);this._set("clips",t)}})],t.prototype,"clips",void 0),a([d()],t.prototype,"moving",void 0),a([d()],t.prototype,"attached",void 0),a([d()],t.prototype,"container",void 0),a([d({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),a([d({readOnly:!0})],t.prototype,"updateParameters",void 0),a([d()],t.prototype,"updateRequested",void 0),a([d({dependsOn:["attached","updateRequested","suspended"]})],t.prototype,"updating",null),a([d()],t.prototype,"view",void 0),t=a([o("esri.views.2d.layers.LayerView2D")],t),t};export{E as l,b as p};
