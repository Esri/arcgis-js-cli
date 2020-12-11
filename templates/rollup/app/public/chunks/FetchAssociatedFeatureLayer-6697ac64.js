import{t,a as r,L as s,cg as e,fh as o,eI as a,v as n,bU as i,c3 as p}from"../main.js";const u={attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsStatistics:!1,tileMaxRecordCount:0}};class l{constructor(t,r,s){this.parsedUrl=t,this.portalItem=r,this.signal=s,this.rootDocument=null;const e=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);e&&(this.urlParts={root:e[1],layerId:parseInt(e[2],10)})}async fetch(){var r;if(!this.urlParts)return null;const s=null!=(r=this.portalItem)?r:await this.portalItemFromServiceItemId();if(t(s))return this.loadFromUrl();const e=await this.findAndLoadRelatedPortalItem(s);return t(e)?null:this.loadFeatureLayerFromPortalItem(e)}async fetchPortalItem(){var r;if(!this.urlParts)return null;const s=null!=(r=this.portalItem)?r:await this.portalItemFromServiceItemId();return t(s)?null:this.findAndLoadRelatedPortalItem(s)}async fetchRootDocument(){if(r(this.rootDocument))return this.rootDocument;if(t(this.urlParts))return this.rootDocument={},{};const e={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},o=this.urlParts.root+"/SceneServer";try{const t=await s(o,e);this.rootDocument=t.data}catch{this.rootDocument={}}return this.rootDocument}async fetchServiceOwningPortalUrl(){var t;const r=null==(t=e)?void 0:t.findServerInfo(this.parsedUrl.path);if(null==r?void 0:r.owningSystemUrl)return r.owningSystemUrl;const a=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const t=(await s(a,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(t)return t}catch(t){o(t)}return null}async findAndLoadRelatedPortalItem(t){try{return(await t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((t=>"Feature Service"===t.type))||null}catch(t){return o(t),null}}async loadFeatureLayerFromPortalItem(t){await t.load({signal:this.signal});const r=await this.findMatchingAssociatedSublayerUrl(t.url);return new a({url:r,portalItem:t}).load({signal:this.signal})}async loadFromUrl(){const t=await this.findMatchingAssociatedSublayerUrl(this.urlParts.root+"/FeatureServer");return new a({url:t}).load({signal:this.signal})}async findMatchingAssociatedSublayerUrl(t){const r=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),e={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},o=this.urlParts.layerId,a=this.fetchRootDocument(),i=s(r,e),[p,u]=await n([i,a]),l=u&&u.layers,c=p.data&&p.data.layers;if(!Array.isArray(c))throw new Error("expected layers array");if(Array.isArray(l)){for(let t=0;t<Math.min(l.length,c.length);t++)if(l[t].id===o)return`${r}/${c[t].id}`}else if(o<c.length)return`${r}/${c[o].id}`;throw new Error("could not find matching associated sublayer")}async portalItemFromServiceItemId(){const t=(await this.fetchRootDocument()).serviceItemId;if(!t)return null;const s=new i({id:t}),e=await this.fetchServiceOwningPortalUrl();r(e)&&(s.portal=new p({url:e}));try{return s.load({signal:this.signal})}catch(t){return o(t),null}}}export{l as c,u as s};
