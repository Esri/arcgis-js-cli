import{p as t,q as e,U as i}from"../main.js";import"./featureConversionUtils-0e5f7c52.js";import"./definitions-5e24d82a.js";import"./RenderingContext-81847018.js";import"./Utils-b46864a6.js";import"./earcut-69661edf.js";import"./GeometryUtils-2b0c8e16.js";import"./VertexArrayObject-17b5c9bd.js";import"./ShaderCompiler-2335fa5a.js";import"./Container-c6c95dc1.js";import"./mat4f32-a7ddfa75.js";import"./WGLContainer-720c8185.js";import"./MaterialKey-a89f5ca3.js";import"./TileContainer-59d09056.js";import"./Bitmap-a30fe19d.js";import{o as n}from"./BitmapTileContainer-85f286ed.js";import{a as s,r}from"./heatmapUtils-b0650e1d.js";import{o as a}from"./BaseTileRenderer-896985d7.js";class o{constructor(){this.gradient=null,this.height=512,this.width=512}render(t){s(t,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)}}let l=class extends a{constructor(t){super(t),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new n(t.tileInfoView)}createTile(t){const e=this._container.createTile(t);return this.tileInfoView.getTileCoords(e.bitmap,t),e.bitmap.resolution=this.tileInfoView.getTileResolution(t),e}onConfigUpdate(){const t=this.layer.renderer;if("heatmap"===t.type){const{minPixelIntensity:e,maxPixelIntensity:i}=t;this._intensityInfo.minPixelIntensity=e,this._intensityInfo.maxPixelIntensity=i,this._gradient=r(t.toJSON()),this.tiles.forEach((t=>{const n=t.bitmap.source;n&&(n.minPixelIntensity=e,n.maxPixelIntensity=i,n.gradient=this._gradient,t.bitmap.invalidateTexture())}))}}hitTest(){return i([])}install(t){t.addChild(this._container)}uninstall(t){this._container.removeAllChildren(),t.removeChild(this._container)}disposeTile(t){this._container.removeChild(t),t.destroy()}supportsRenderer(t){return t&&"heatmap"===t.type}onTileData(t){const e=this.tiles.get(t.tileKey);if(!e)return;const i=t.intensityInfo,{minPixelIntensity:n,maxPixelIntensity:s}=this._intensityInfo,r=e.bitmap.source||new o;r.intensities=i&&i.matrix||null,r.minPixelIntensity=n,r.maxPixelIntensity=s,r.gradient=this._gradient,e.bitmap.source=r,this._container.addChild(e),this.requestUpdate()}onTileError(t){console.error(t)}lockGPUUploads(){}unlockGPUUploads(){}};l=t([e("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],l);var m=l;export default m;
