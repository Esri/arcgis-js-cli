import{d1 as e,ag as t,dZ as i,d2 as s,d3 as a,d4 as r,T as l,p as n,y as h,q as o}from"../main.js";import"./featureConversionUtils-0e5f7c52.js";import"./definitions-5e24d82a.js";import"./RenderingContext-81847018.js";import"./Utils-b46864a6.js";import"./earcut-69661edf.js";import"./GeometryUtils-2b0c8e16.js";import"./VertexArrayObject-17b5c9bd.js";import"./ShaderCompiler-2335fa5a.js";import"./Container-c6c95dc1.js";import"./mat4f32-a7ddfa75.js";import"./WGLContainer-720c8185.js";import"./MaterialKey-a89f5ca3.js";import"./TileContainer-59d09056.js";import{l as u,p as d}from"./LayerView2D-6e7585a5.js";import"./Bitmap-a30fe19d.js";import"./BitmapTileContainer-85f286ed.js";import{i as c}from"./BitmapTileLayerView2D-91707130.js";const f=[102113,102100,3857,3785,900913];let p=class extends(e(c(u(d)))){constructor(){super(...arguments),this._handles=new t,this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(this.layer.activeLayer.tileMatrixSetId=e.id,e):null}hitTest(){return null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")}attach(){const e=this.layer.activeLayer,t=this.tileMatrixSet;if(!t)return;const l=t.tileInfo.spatialReference;let n=e.fullExtent&&e.fullExtent.clone();l.isWebMercator?n=i(n):l.isWGS84||(n=t.fullExtent),this._tileInfoView=new s(t.tileInfo,n),this._fetchQueue=new a({tileInfoView:this._tileInfoView,process:e=>this.fetchTile(e)}),this._tileStrategy=new r({cachePolicy:"keep",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this._handles.add(this.watch("layer.activeLayer.styleId, tileMatrixSet",(()=>this._refresh()))),super.attach()}detach(){super.detach(),this._handles.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}async doRefresh(){this.updateRequested||this.suspended||this._refresh()}isUpdating(){return this._fetchQueue.length>0}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;[i.x,i.y]=this._tileInfoView.getTileCoords([0,0],t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._tileInfoView.getTileCoords(i,t.key);const s={id:e.id,fulfilled:!1,promise:this._fetchQueue.push(t.key).then((e=>{t.bitmap.source=e,t.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(t)})).catch((e=>{l(e)||(t.bitmap.source=null,t.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(t))}))};return s.promise.finally((()=>s.fulfilled=!0)),this._tileRequests.set(t,s),this.requestUpdate(),t}releaseTile(e){const t=this._tileRequests.get(e);t.fulfilled||this._fetchQueue.abort(t.id),this._tileRequests.delete(e),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}async fetchTile(e){return this.layer.fetchTile(e.level,e.row,e.col)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>{if(!e.bitmap.source)return;e.bitmap.source=null;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then((t=>{e.bitmap.source=t,e.requestRender(),this.notifyChange("updating")}))};t.promise.then((()=>t.fulfilled=!0),(()=>t.fulfilled=!0)),this._tileRequests.set(e,t)})),this.notifyChange("updating")}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>e.tileInfo.spatialReference.wkid===t.wkid));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>f.indexOf(e.tileInfo.spatialReference.wkid)>-1))),i}};n([h({dependsOn:["tileMatrixSet"]})],p.prototype,"suspended",void 0),n([h({readOnly:!0,dependsOn:["view.spatialReference","layer.activeLayer"]})],p.prototype,"tileMatrixSet",null),p=n([o("esri.views.2d.layers.WMTSLayerView2D")],p);var y=p;export default y;
