import{p as e,y as r,bO as t,q as s,cf as o,cz as i,cA as a,bM as n,U as l,L as p,cB as u}from"../main.js";import{c,n as y,e as m}from"./NAMessage-74834804.js";import{c as h}from"./DirectionsFeatureSet-15de9052.js";import"./GPMessage-0b666089.js";let f=class extends o{constructor(e){super(e),this.directions=null,this.route=null,this.routeName=null,this.stops=null}};e([r({type:h,json:{write:!0}})],f.prototype,"directions",void 0),e([r({type:t,json:{write:!0}})],f.prototype,"route",void 0),e([r({type:String,json:{write:!0}})],f.prototype,"routeName",void 0),e([r({type:[t],json:{write:!0}})],f.prototype,"stops",void 0),f=e([s("esri.tasks.support.RouteResult")],f);var d=f;function B(e){return e&&a.fromJSON(e).features.map((e=>e))}let g=class extends o{constructor(e){super(e),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(e,r){return B(r.barriers||r.pointBarriers)}readPolylineBarriers(e){return B(e)}readPolygonBarriers(e){return B(e)}};e([r({aliasOf:"pointBarriers"})],g.prototype,"barriers",void 0),e([r({type:[c]})],g.prototype,"messages",void 0),e([r({type:[t]})],g.prototype,"pointBarriers",void 0),e([i("pointBarriers",["barriers","pointBarriers"])],g.prototype,"readPointBarriers",null),e([r({type:[t]})],g.prototype,"polylineBarriers",void 0),e([i("polylineBarriers")],g.prototype,"readPolylineBarriers",null),e([r({type:[t]})],g.prototype,"polygonBarriers",void 0),e([i("polygonBarriers")],g.prototype,"readPolygonBarriers",null),e([r({type:[d]})],g.prototype,"routeResults",void 0),g=e([s("esri.tasks.support.RouteResultsContainer")],g);var R=g;const b=m({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});let v=class extends(y(u)){constructor(e){super(e)}solve(e,r){const t=[],s=[],o={},i={};return e.stops&&e.stops.features&&this._collectGeometries(e.stops.features,s,"stops.features",o),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,s,"pointBarriers.features",o),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,s,"polylineBarriers.features",o),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,s,"polygonBarriers.features",o),n(s).then((e=>{for(const r in o){const s=o[r];t.push(r),i[r]=e.slice(s[0],s[1])}return this._isInputGeometryZAware(i,t)?this.getServiceDescription():l({dontCheck:!0})})).then((s=>{("dontCheck"in s?s.dontCheck:s.hasZ)||this._dropZValuesOffInputGeometry(i,t);for(const r in i)i[r].forEach(((t,s)=>{e.get(r)[s].geometry=t}));let o={query:{...this.parsedUrl.query,f:"json",...b.toQueryParams(e)}};(this.requestOptions||r)&&(o={...this.requestOptions,...r,...o});const{path:a}=this.parsedUrl,n="/solve",l=a.endsWith(n)?a:a+n;return p(l,o)})).then((e=>this._handleSolveResponse(e)))}_collectGeometries(e,r,t,s){s[t]=[r.length,r.length+e.length],e.forEach((e=>{r.push(e.geometry)}))}_handleSolveResponse(e){const r=[],t=[],{directions:s=[],routes:{features:o=[],spatialReference:i=null}={},stops:{features:a=[],spatialReference:n=null}={},barriers:l,polygonBarriers:p,polylineBarriers:u,messages:c}=e.data,y="esri.tasks.RouteTask.NULL_ROUTE_NAME";let m,h,f=!0;const d=o&&i||a&&n||l&&l.spatialReference||p&&p.spatialReference||u&&u.spatialReference;s.forEach((e=>{r.push(m=e.routeName),t[m]={directions:e}})),o.forEach((e=>{-1===r.indexOf(m=e.attributes.Name)&&(r.push(m),t[m]={}),e.geometry&&(e.geometry.spatialReference=d),t[m].route=e})),a.forEach((e=>{h=e.attributes,-1===r.indexOf(m=h.RouteName||y)&&(r.push(m),t[m]={}),m!==y&&(f=!1),e.geometry&&(e.geometry.spatialReference=d),null==t[m].stops&&(t[m].stops=[]),t[m].stops.push(e)})),a.length>0&&!0===f&&(t[r[0]].stops=t[y].stops,delete t[y],r.splice(r.indexOf(y),1));const B=r.map((e=>(t[e].routeName=e===y?null:e,t[e])));return R.fromJSON({routeResults:B,pointBarriers:l,polygonBarriers:p,polylineBarriers:u,messages:c})}};v=e([s("esri.tasks.RouteTask")],v);var N=v;export default N;
