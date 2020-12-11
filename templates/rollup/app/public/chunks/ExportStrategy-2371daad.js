import{al as t,d as e,p as i,y as o,q as a,r,du as s,aF as n,U as p,aT as h,cK as d,d2 as l,v as m}from"../main.js";import{c}from"./Bitmap-a30fe19d.js";const u=Math.PI/180;function g(t,e){const i=e.rotation*u,o=Math.abs(Math.cos(i)),a=Math.abs(Math.sin(i)),[r,s]=e.size;return t[0]=Math.round(s*a+r*o),t[1]=Math.round(s*o+r*a),t}const x=t(),f=[0,0],y=new e(0,0,0,0);let M=class extends r{constructor(t){super(t),this._imagePromise=null,this.hidpi=false,this.imageMaxWidth=2048,this.imageMaxHeight=2048,this.imageRotationSupported=false,this.imageNormalizationSupported=false,this.update=s((async(t,e)=>{const i=t.state,o=n(i.spatialReference),a=this.hidpi?t.pixelRatio:1;if(!t.stationary||this.destroyed)return;this.imageRotationSupported?(f[0]=i.size[0],f[1]=i.size[1]):g(f,i);const r=Math.floor(f[0]*a)>this.imageMaxWidth||Math.floor(f[1]*a)>this.imageMaxHeight,s=o&&(i.extent.xmin<o.valid[0]||i.extent.xmax>o.valid[1]),p=!this.imageNormalizationSupported&&s,h=!r&&!p,d=this.imageRotationSupported?i.rotation:0;if(h)this._imagePromise=this._singleExport(i,f,d,a,e);else{let t=Math.min(this.imageMaxWidth,this.imageMaxHeight);p&&(t=Math.min(i.worldScreenWidth,t)),this._imagePromise=this._tiledExport(i,t,d,a,e)}return this._imagePromise.then((async t=>{this._imagePromise=null,await Promise.all(t.map((t=>(this.container.addChild(t),t.fadeIn()))));for(const e of this.container.children)t.includes(e)||e.fadeOut().then((()=>{this.container.removeChild(e)}))})).catch((t=>{throw this._imagePromise=null,t}))}),5e3)}destroy(){}get updating(){return null!==this._imagePromise}updateExports(t){for(const e of this.container.children){if(!e.visible||!e.stage)return;t(e)?console.error("ExportStrategy.updateExports doesn't support promise yet"):(e.invalidateTexture(),e.requestRender())}}_export(t,e,i,o,a,r){return p().then((()=>this.fetchSource(t,Math.floor(e*a),Math.floor(i*a),{rotation:o,pixelRatio:a,signal:r}))).then((i=>{const r=new c(i);return r.x=t.xmin,r.y=t.ymax,r.resolution=t.width/e,r.rotation=o,r.pixelRatio=a,r}))}_singleExport(t,e,i,o,a){!function(t,e,i,o){const[a,r]=e,[s,n]=o,p=.5*i;t[0]=a-p*s,t[1]=r-p*n,t[2]=a+p*s,t[3]=r+p*n}(x,t.center,t.resolution,e);const r=new h(x[0],x[1],x[2],x[3],t.spatialReference);return this._export(r,e[0],e[1],i,o,a).then((t=>[t]))}_tiledExport(t,e,i,o,a){const r=d.create({size:e,spatialReference:t.spatialReference,scales:[t.scale]}),s=new l(r),n=s.getTileCoverage(t);if(!n)return null;const p=[];return n.forEach(((r,n,d,l)=>{y.set(r,n,d,l),s.getTileBounds(x,y);const m=new h(x[0],x[1],x[2],x[3],t.spatialReference);p.push(this._export(m,e,e,i,o,a))})),m(p)}};i([o()],M.prototype,"_imagePromise",void 0),i([o()],M.prototype,"container",void 0),i([o()],M.prototype,"fetchSource",void 0),i([o()],M.prototype,"hidpi",void 0),i([o()],M.prototype,"imageMaxWidth",void 0),i([o()],M.prototype,"imageMaxHeight",void 0),i([o()],M.prototype,"imageRotationSupported",void 0),i([o()],M.prototype,"imageNormalizationSupported",void 0),i([o()],M.prototype,"requestUpdate",void 0),i([o({dependsOn:["_imagePromise"]})],M.prototype,"updating",null),M=i([a("esri.views.2d.layers.support.ExportStrategy")],M);var v=M;export{v as w};
