import{al as e}from"../main.js";import{I as t}from"./Utils-b46864a6.js";import{g as s}from"./WGLContainer-720c8185.js";import{r,d as i}from"./TileContainer-59d09056.js";import{c as a}from"./Bitmap-a30fe19d.js";class n extends r{constructor(e,t,s,r=null){super(e,t,s,s),this.bitmap=new a(r),this.bitmap.coordScale=s,this.bitmap.once("isReady",(()=>this.ready()))}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap.stage=null}}class o extends i{createTile(t){const s=this._tileInfoView.getTileBounds(e(),t);return new n(t,s,this._tileInfoView.tileInfo.size)}destroyTile(){}prepareRenderPasses(e){const r=e.registerRenderPass({name:"bitmap (tile)",brushes:[s.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:t.MAP});return[...super.prepareRenderPasses(e),r]}doRender(e){this.visible&&e.drawPhase===t.MAP&&super.doRender(e)}}export{o};
