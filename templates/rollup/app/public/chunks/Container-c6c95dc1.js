import{x as t,J as e,aL as r,aM as n,aN as s,o as i,k as a,aO as c,aP as o,aQ as u,aR as l,aS as h}from"../main.js";import{r as f}from"./mat4f32-a7ddfa75.js";const p=1/t("mapview-transitions-duration");class d extends e{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}get stage(){return this._stage}set stage(t){if(this._stage===t)return;const e=this._stage;this._stage=t,t?this._stage.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e.trashDisplayObject(this)}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender())}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=r(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=r(),this.requestRender()),this._fadeOutResolver.promise}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale)}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this.onDetach(),this.emit("detach")}updateTransitionProperties(t,e){if(this.fadeTransitionEnabled){const e=this._fadeOutResolver||!this.visible?0:this.opacity,r=this.computedOpacity;if(r===e)this.computedVisible=this.visible;else{const n=t*p;this.computedOpacity=r>e?Math.max(e,r-n):Math.min(e,r+n),this.computedVisible=this.computedOpacity>0;const s=e===this.computedOpacity;this.inFadeTransition=!s,s||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}function g(t){return"colorMatrix"in t}class m{constructor(t,e,r){this.strength=t,this.radius=e,this.threshold=r,this.type="bloom"}interpolate(t,e,r){this.strength=x(t.strength,e.strength,r),this.radius=x(t.radius,e.radius,r),this.threshold=x(t.threshold,e.threshold,r)}clone(){return new m(this.strength,this.radius,this.threshold)}}class _{constructor(t){this.radius=t,this.type="blur"}interpolate(t,e,r){this.radius=Math.round(x(t.radius,e.radius,r))}clone(){return new _(this.radius)}}class v{constructor(t,e){this.type=t,this.amount=e,"invert"!==this.type&&"grayscale"!==this.type&&"sepia"!==this.type||(this.amount=Math.min(this.amount,1))}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(t,e,r){this.amount=x(t.amount,e.amount,r),this._updateMatrix()}clone(){return new v(this.type,this.amount)}_updateMatrix(){const t=this._colorMatrix||f();switch(this.type){case"brightness":this._colorMatrix=((t,e)=>{const r=s(t,e,0,0,0,0,e,0,0,0,0,e,0,0,0,0,1);return n(r,r)})(t,this.amount);break;case"contrast":this._colorMatrix=((t,e)=>{const r=s(t,e,0,0,.5-.5*e,0,e,0,.5-.5*e,0,0,e,.5-.5*e,0,0,0,1);return n(r,r)})(t,this.amount);break;case"grayscale":this._colorMatrix=((t,e)=>{const r=1-e,i=s(t,.2126+.7874*r,.7152-.7152*r,.0722-.0722*r,0,.2126-.2126*r,.7152+.2848*r,.0722-.0722*r,0,.2126-.2126*r,.7152-.7152*r,.0722+.9278*r,0,0,0,0,1);return n(i,i)})(t,this.amount);break;case"invert":this._colorMatrix=((t,e)=>{const r=1-2*e,i=s(t,r,0,0,e,0,r,0,e,0,0,r,e,0,0,0,1);return n(i,i)})(t,this.amount);break;case"saturate":this._colorMatrix=((t,e)=>{const r=s(t,.213+.787*e,.715-.715*e,.072-.072*e,0,.213-.213*e,.715+.285*e,.072-.072*e,0,.213-.213*e,.715-.715*e,.072+.928*e,0,0,0,0,1);return n(r,r)})(t,this.amount);break;case"sepia":this._colorMatrix=((t,e)=>{const r=1-e,i=s(t,.393+.607*r,.769-.769*r,.189-.189*r,0,.349-.349*r,.686+.314*r,.168-.168*r,0,.272-.272*r,.534-.534*r,.131+.869*r,0,0,0,0,1);return n(i,i)})(t,this.amount)}}}class y{constructor(t,e,r,n){this.offsetX=t,this.offsetY=e,this.blurRadius=r,this.color=n,this.type="drop-shadow"}interpolate(t,e,r){this.offsetX=x(t.offsetX,e.offsetX,r),this.offsetY=x(t.offsetY,e.offsetY,r),this.blurRadius=x(t.blurRadius,e.blurRadius,r),this.color[0]=Math.round(x(t.color[0],e.color[0],r)),this.color[1]=Math.round(x(t.color[1],e.color[1],r)),this.color[2]=Math.round(x(t.color[2],e.color[2],r)),this.color[3]=x(t.color[3],e.color[3],r)}clone(){return new y(this.offsetX,this.offsetY,this.blurRadius,[...this.color])}}class b{constructor(t){this.angle=t,this.type="hue-rotate"}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(t,e,r){this.angle=x(t.angle,e.angle,r),this._updateMatrix()}clone(){return new b(this.angle)}_updateMatrix(){const t=this._colorMatrix||f();this._colorMatrix=((t,e)=>{const r=Math.sin(e*Math.PI/180),i=Math.cos(e*Math.PI/180),a=s(t,.213+.787*i-.213*r,.715-.715*i-.715*r,.072-.072*i+.928*r,0,.213-.213*i+.143*r,.715+.285*i+.14*r,.072-.072*i-.283*r,0,.213-.213*i-.787*r,.715-.715*i+.715*r,.072+.928*i+.072*r,0,0,0,0,1);return n(a,a)})(t,this.angle)}}class w{constructor(t){this.amount=t,this.type="opacity",this.amount=Math.min(this.amount,1)}interpolate(t,e,r){this.amount=x(t.amount,e.amount,r)}clone(){return new w(this.amount)}}function x(t,e,r){return t+(e-t)*r}var A=i((function(t){t.exports&&(t.exports=function(){function t(e,r,n,s){this.message=e,this.expected=r,this.found=n,this.location=s,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,t)}return function(t,e){function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r}(t,Error),t.buildMessage=function(t,e){var r={literal:function(t){return'"'+s(t.text)+'"'},class:function(t){var e,r="";for(e=0;e<t.parts.length;e++)r+=t.parts[e]instanceof Array?i(t.parts[e][0])+"-"+i(t.parts[e][1]):i(t.parts[e]);return"["+(t.inverted?"^":"")+r+"]"},any:function(t){return"any character"},end:function(t){return"end of input"},other:function(t){return t.description}};function n(t){return t.charCodeAt(0).toString(16).toUpperCase()}function s(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function i(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function a(t){return r[t.type](t)}return"Expected "+function(t){var e,r,n=new Array(t.length);for(e=0;e<t.length;e++)n[e]=a(t[e]);if(n.sort(),n.length>0){for(e=1,r=1;e<n.length;e++)n[e-1]!==n[e]&&(n[r]=n[e],r++);n.length=r}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(t)+" but "+function(t){return t?'"'+s(t)+'"':"end of input"}(e)+" found."},{SyntaxError:t,parse:function(e,r){r=void 0!==r?r:{};var n,s={},i={start:ot},a=ot,c=st("none"),o="none",u=rt("none",!1),l=rt(")",!1),h=",",f=rt(",",!1),p=function(t,e){return e.length>0?function(t,e,r){return[t].concat(function(t,e){return t.map((function(t){return t[e]}))}(e,r))}(t,e,3):[t]},d=st("whitespace"),g=/^[ \t\n\r]/,m=nt([" ","\t","\n","\r"],!1,!1),_=st("function"),v=rt("(",!1),y=st("identifier"),b=/^[a-z\-]/,w=nt([["a","z"],"-"],!1,!1),x=st("percentage"),A=rt("%",!1),R=st("length"),M=rt("px",!1),O=rt("cm",!1),C=rt("mm",!1),T=rt("in",!1),F=rt("pt",!1),E=rt("pc",!1),q=st("angle"),I=rt("deg",!1),S=rt("rad",!1),k="grad",L=rt("grad",!1),P="turn",j=rt("turn",!1),D=st("number"),$=st("color"),V=rt("#",!1),X=/^[0-9a-fA-F]/,Y=nt([["0","9"],["a","f"],["A","F"]],!1,!1),z=/^[+\-]/,N=nt(["+","-"],!1,!1),J=/^[0-9]/,Q=nt([["0","9"]],!1,!1),U=rt(".",!1),B=rt("e",!1),G=0,H=0,K=[{line:1,column:1}],W=0,Z=[],tt=0;if("startRule"in r){if(!(r.startRule in i))throw new Error("Can't start parsing from rule \""+r.startRule+'".');a=i[r.startRule]}function et(){return e.substring(H,G)}function rt(t,e){return{type:"literal",text:t,ignoreCase:e}}function nt(t,e,r){return{type:"class",parts:t,inverted:e,ignoreCase:r}}function st(t){return{type:"other",description:t}}function it(t){var r,n=K[t];if(n)return n;for(r=t-1;!K[r];)r--;for(n={line:(n=K[r]).line,column:n.column};r<t;)10===e.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return K[t]=n,n}function at(t,e){var r=it(t),n=it(e);return{start:{offset:t,line:r.line,column:r.column},end:{offset:e,line:n.line,column:n.column}}}function ct(t){G<W||(G>W&&(W=G,Z=[]),Z.push(t))}function ot(){var t;return(t=ut())===s&&(t=function(){var t,e;if(t=[],(e=lt())!==s)for(;e!==s;)t.push(e),e=lt();else t=s;return t}()),t}function ut(){var t,r;return tt++,t=G,ft()!==s?(e.substr(G,4)===o?(r=o,G+=4):(r=s,0===tt&&ct(u)),r!==s&&ft()!==s?(H=t,t=[]):(G=t,t=s)):(G=t,t=s),tt--,t===s&&0===tt&&ct(c),t}function lt(){var t,r,n,i;return t=G,ft()!==s&&(r=function(){var t,r,n;return tt++,t=G,(r=pt())!==s?(40===e.charCodeAt(G)?(n="(",G++):(n=s,0===tt&&ct(v)),n!==s?(H=t,t=r=r):(G=t,t=s)):(G=t,t=s),tt--,t===s&&(r=s,0===tt&&ct(_)),t}())!==s&&ft()!==s?((n=function(){var t,r,n,i,a,c,o,u;if(t=G,(r=ht())!==s){for(n=[],i=G,(a=ft())!==s?(44===e.charCodeAt(G)?(c=h,G++):(c=s,0===tt&&ct(f)),c===s&&(c=null),c!==s&&(o=ft())!==s&&(u=ht())!==s?i=a=[a,c,o,u]:(G=i,i=s)):(G=i,i=s);i!==s;)n.push(i),i=G,(a=ft())!==s?(44===e.charCodeAt(G)?(c=h,G++):(c=s,0===tt&&ct(f)),c===s&&(c=null),c!==s&&(o=ft())!==s&&(u=ht())!==s?i=a=[a,c,o,u]:(G=i,i=s)):(G=i,i=s);n!==s?(H=t,t=r=p(r,n)):(G=t,t=s)}else G=t,t=s;return t}())===s&&(n=null),n!==s&&ft()!==s?(41===e.charCodeAt(G)?(i=")",G++):(i=s,0===tt&&ct(l)),i!==s&&ft()!==s?(H=t,t=function(t,e){return{type:"function",name:t,parameters:e||[]}}(r,n)):(G=t,t=s)):(G=t,t=s)):(G=t,t=s),t}function ht(){var t,e;return t=G,(e=dt())===s&&(e=gt())===s&&(e=mt())===s&&(e=function(){var t,e;return tt++,t=G,ft()!==s&&(e=vt())!==s?(H=t,t=function(t){return{value:t,unit:null}}(e)):(G=t,t=s),tt--,t===s&&0===tt&&ct(D),t}()),e!==s&&(H=t,e=function(t){return{type:"quantity",value:t.value,unit:t.unit}}(e)),(t=e)===s&&(t=G,(e=_t())!==s&&(H=t,e=function(t){return{type:"color",colorType:t.type,value:t.value}}(e)),t=e),t}function ft(){var t,r;for(tt++,t=[],g.test(e.charAt(G))?(r=e.charAt(G),G++):(r=s,0===tt&&ct(m));r!==s;)t.push(r),g.test(e.charAt(G))?(r=e.charAt(G),G++):(r=s,0===tt&&ct(m));return tt--,t===s&&(r=s,0===tt&&ct(d)),t}function pt(){var t,r,n;if(tt++,t=G,r=[],b.test(e.charAt(G))?(n=e.charAt(G),G++):(n=s,0===tt&&ct(w)),n!==s)for(;n!==s;)r.push(n),b.test(e.charAt(G))?(n=e.charAt(G),G++):(n=s,0===tt&&ct(w));else r=s;return r!==s&&(H=t,r=et()),tt--,(t=r)===s&&(r=s,0===tt&&ct(y)),t}function dt(){var t,r,n;return tt++,t=G,ft()!==s&&(r=vt())!==s?(37===e.charCodeAt(G)?(n="%",G++):(n=s,0===tt&&ct(A)),n!==s?(H=t,t=function(t){return{value:t,unit:"%"}}(r)):(G=t,t=s)):(G=t,t=s),tt--,t===s&&0===tt&&ct(x),t}function gt(){var t,r,n;return tt++,t=G,ft()!==s&&(r=vt())!==s?("px"===e.substr(G,2)?(n="px",G+=2):(n=s,0===tt&&ct(M)),n!==s?(H=t,t=function(t){return{value:t,unit:"px"}}(r)):(G=t,t=s)):(G=t,t=s),t===s&&(t=G,ft()!==s&&(r=vt())!==s?("cm"===e.substr(G,2)?(n="cm",G+=2):(n=s,0===tt&&ct(O)),n!==s?(H=t,t=function(t){return{value:t,unit:"cm"}}(r)):(G=t,t=s)):(G=t,t=s),t===s&&(t=G,ft()!==s&&(r=vt())!==s?("mm"===e.substr(G,2)?(n="mm",G+=2):(n=s,0===tt&&ct(C)),n!==s?(H=t,t=function(t){return{value:t,unit:"mm"}}(r)):(G=t,t=s)):(G=t,t=s),t===s&&(t=G,ft()!==s&&(r=vt())!==s?("in"===e.substr(G,2)?(n="in",G+=2):(n=s,0===tt&&ct(T)),n!==s?(H=t,t=function(t){return{value:t,unit:"in"}}(r)):(G=t,t=s)):(G=t,t=s),t===s&&(t=G,ft()!==s&&(r=vt())!==s?("pt"===e.substr(G,2)?(n="pt",G+=2):(n=s,0===tt&&ct(F)),n!==s?(H=t,t=function(t){return{value:t,unit:"pt"}}(r)):(G=t,t=s)):(G=t,t=s),t===s&&(t=G,ft()!==s&&(r=vt())!==s?("pc"===e.substr(G,2)?(n="pc",G+=2):(n=s,0===tt&&ct(E)),n!==s?(H=t,t=function(t){return{value:t,unit:"pc"}}(r)):(G=t,t=s)):(G=t,t=s)))))),tt--,t===s&&0===tt&&ct(R),t}function mt(){var t,r,n;return tt++,t=G,(r=vt())!==s?("deg"===e.substr(G,3)?(n="deg",G+=3):(n=s,0===tt&&ct(I)),n!==s?(H=t,t=r=function(t){return{value:t,unit:"deg"}}(r)):(G=t,t=s)):(G=t,t=s),t===s&&(t=G,(r=vt())!==s?("rad"===e.substr(G,3)?(n="rad",G+=3):(n=s,0===tt&&ct(S)),n!==s?(H=t,t=r=function(t){return{value:t,unit:"rad"}}(r)):(G=t,t=s)):(G=t,t=s),t===s&&(t=G,(r=vt())!==s?(e.substr(G,4)===k?(n=k,G+=4):(n=s,0===tt&&ct(L)),n!==s?(H=t,t=r=function(t){return{value:t,unit:"grad"}}(r)):(G=t,t=s)):(G=t,t=s),t===s&&(t=G,(r=vt())!==s?(e.substr(G,4)===P?(n=P,G+=4):(n=s,0===tt&&ct(j)),n!==s?(H=t,t=r=function(t){return{value:t,unit:"turn"}}(r)):(G=t,t=s)):(G=t,t=s)))),tt--,t===s&&(r=s,0===tt&&ct(q)),t}function _t(){var t,r,n,i;if(tt++,t=G,35===e.charCodeAt(G)?(r="#",G++):(r=s,0===tt&&ct(V)),r!==s){if(n=[],X.test(e.charAt(G))?(i=e.charAt(G),G++):(i=s,0===tt&&ct(Y)),i!==s)for(;i!==s;)n.push(i),X.test(e.charAt(G))?(i=e.charAt(G),G++):(i=s,0===tt&&ct(Y));else n=s;n!==s?(H=t,t=r={type:"hex",value:et()}):(G=t,t=s)}else G=t,t=s;return t===s&&(t=G,(r=lt())!==s&&(H=t,r=function(t){return{type:"function",value:t}}(r)),(t=r)===s&&(t=G,(r=pt())!==s&&(H=t,r={type:"named",value:et()}),t=r)),tt--,t===s&&(r=s,0===tt&&ct($)),t}function vt(){var t,r,n,i,a,c,o,u;if(t=G,z.test(e.charAt(G))?(r=e.charAt(G),G++):(r=s,0===tt&&ct(N)),r===s&&(r=null),r!==s){for(n=G,i=[],J.test(e.charAt(G))?(a=e.charAt(G),G++):(a=s,0===tt&&ct(Q));a!==s;)i.push(a),J.test(e.charAt(G))?(a=e.charAt(G),G++):(a=s,0===tt&&ct(Q));if(i!==s)if(46===e.charCodeAt(G)?(a=".",G++):(a=s,0===tt&&ct(U)),a!==s){if(c=[],J.test(e.charAt(G))?(o=e.charAt(G),G++):(o=s,0===tt&&ct(Q)),o!==s)for(;o!==s;)c.push(o),J.test(e.charAt(G))?(o=e.charAt(G),G++):(o=s,0===tt&&ct(Q));else c=s;c!==s?n=i=[i,a,c]:(G=n,n=s)}else G=n,n=s;else G=n,n=s;if(n===s)if(n=[],J.test(e.charAt(G))?(i=e.charAt(G),G++):(i=s,0===tt&&ct(Q)),i!==s)for(;i!==s;)n.push(i),J.test(e.charAt(G))?(i=e.charAt(G),G++):(i=s,0===tt&&ct(Q));else n=s;if(n!==s){if(i=G,101===e.charCodeAt(G)?(a="e",G++):(a=s,0===tt&&ct(B)),a!==s)if(z.test(e.charAt(G))?(c=e.charAt(G),G++):(c=s,0===tt&&ct(N)),c===s&&(c=null),c!==s){if(o=[],J.test(e.charAt(G))?(u=e.charAt(G),G++):(u=s,0===tt&&ct(Q)),u!==s)for(;u!==s;)o.push(u),J.test(e.charAt(G))?(u=e.charAt(G),G++):(u=s,0===tt&&ct(Q));else o=s;o!==s?i=a=[a,c,o]:(G=i,i=s)}else G=i,i=s;else G=i,i=s;i===s&&(i=null),i!==s?(H=t,t=r=parseFloat(et())):(G=t,t=s)}else G=t,t=s}else G=t,t=s;return t}if((n=a())!==s&&G===e.length)return n;throw n!==s&&G<e.length&&ct({type:"end"}),function(e,r,n){return new t(t.buildMessage(e,r),e,r,n)}(Z,W<e.length?e.charAt(W):null,W<e.length?at(W,W+1):at(W,W))}}}())}));function R(t){let e;try{e=t?A.parse(t):[]}catch(e){return{input:t,parsedFunctions:[],effects:[],error:new a("effect:invalid-syntax","Invalid effect syntax",{input:t,error:e})}}const r={input:t,parsedFunctions:e,effects:[],error:null};try{for(const t of e)r.effects.push(M(t))}catch(t){r.effects.length=0,r.error=t}return r}function M(t){try{switch(t.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return function(t){let e=1;return O(t.parameters,1),1===t.parameters.length&&(e=q(t.parameters[0])),new v(t.name,e)}(t);case"opacity":return function(t){let e=1;return O(t.parameters,1),1===t.parameters.length&&(e=q(t.parameters[0])),new w(e)}(t);case"hue-rotate":return function(t){let e=0;var r;return O(t.parameters,1),1===t.parameters.length&&(function(t){if("quantity"!==t.type||(0!==t.value||null!==t.unit)&&null==F[t.unit])throw new a("effect:type-error","Expected <angle>, Actual: "+C(t),{term:t})}(r=t.parameters[0]),e=r.value*F[r.unit]||0),new b(e)}(t);case"blur":return function(t){let e=0;return O(t.parameters,1),1===t.parameters.length&&(e=I(t.parameters[0]),T(e,t.parameters[0])),new _(e)}(t);case"drop-shadow":return function(t){const e=[];let r;for(const n of t.parameters)if("color"===n.type){if(e.length&&Object.freeze(e),r)throw new a("effect:type-error","Accepts only one color",{});r=S(n)}else{const t=I(n);if(Object.isFrozen(e))throw new a("effect:type-error","<length> parameters not consecutive",{lengths:e});e.push(t),3===e.length&&T(t,n)}if(e.length<2||e.length>3)throw new a("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${e.length}}`,{lengths:e});return new y(e[0],e[1],e[2]||0,r||k("black"))}(t);case"bloom":return function(t){let e=1,r=0,n=0;return O(t.parameters,3),t.parameters[0]&&(e=q(t.parameters[0])),t.parameters[1]&&(r=I(t.parameters[1]),T(r,t.parameters[1])),t.parameters[2]&&(n=q(t.parameters[2])),new m(e,r,n)}(t)}}catch(e){throw e.details.filter=t,e}throw new a("effect:unknown-effect",`Effect '${t.name}' is not supported`,{effect:t})}function O(t,e){if(t.length>e)throw new a("effect:type-error",`Function supports up to ${e} parameters, Actual: ${t.length}`,{parameters:t})}function C(t){return"color"===t.type?"<color>":E[t.unit]?"<length>":F[t.unit]?"<angle>":"%"===t.unit?"<percentage>":"<double>"}function T(t,e){if(t<0)throw new a("effect:type-error","Negative values are not allowed, Actual: "+t,{term:e})}const F={deg:1,grad:.9,rad:180/Math.PI,turn:360},E={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/73};function q(t){!function(t){if("quantity"!==t.type||null!==t.unit&&"%"!==t.unit)throw new a("effect:type-error","Expected <double> or <percentage>, Actual: "+C(t),{term:t})}(t);const e=t.value;return T(e,t),"%"===t.unit?.01*e:e}function I(t){return function(t){if("quantity"!==t.type||(0!==t.value||null!==t.unit)&&null==E[t.unit])throw new a("effect:type-error","Expected <length>, Actual: "+C(t),{term:t})}(t),t.value*E[t.unit]||0}function S(t){switch(t.colorType){case"hex":return o(t.value);case"named":return k(t.value);case"function":return function(t){if(O(t.parameters,4),L.test(t.name))return[q(t.parameters[0]),q(t.parameters[1]),q(t.parameters[2]),t.parameters[3]?q(t.parameters[3]):1];if(P.test(t.name))return c(function(t){return function(t){if("quantity"!==t.type||null!==t.unit)throw new a("effect:type-error","Expected <double>, Actual: "+C(t),{term:t})}(t),T(t.value,t),t.value}(t.parameters[0]),q(t.parameters[1]),q(t.parameters[2]),t.parameters[3]?q(t.parameters[3]):1);throw new a("effect:syntax-error",`Invalid color function '${t.name}'`,{colorFunction:t})}(t.value)}}function k(t){const e=u(t);if(!e)throw new a("effect:unknown-color",`color '${t}' isn't valid`,{namedColor:t});return e}const L=/^rgba?/i,P=/^hsla?/i;function j(t){switch(t.type){case"grayscale":case"sepia":case"invert":return new v(t.type,0);case"saturate":case"brightness":case"contrast":return new v(t.type,1);case"opacity":return new w(1);case"hue-rotate":return new b(0);case"blur":return new _(0);case"drop-shadow":return new y(0,0,0,[...h("transparent")]);case"bloom":return new m(0,0,0)}}function D(t,e){const r=t.length>e.length?t:e;return(t.length>e.length?e:t).every(((t,e)=>t.type===r[e].type))}function $(t,e){const r=t.length>e.length?t:e,n=t.length>e.length?e:t;for(let t=n.length;t<r.length;t++)n.push(j(r[t]))}function V(t,e,r){return t+(e-t)*r}class X{constructor(t=200){this.duration=t,this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this._effect="",this._effects=[],this._scale=0}get effect(){return this._effect}set effect(t){this._effect=t;const e=function(t){if(!t)return[];if("string"==typeof t){const e=R(t);return e.error?e.error:[{scale:-1,effects:e.effects}]}const e=[];for(const r of t){if(!isFinite(r.scale)||r.scale<=0)return new a("effect:invalid-scale","scale must be finite and greater than 0",{stop:r});const t=R(r.value);if(t.error)return t.error;e.push({scale:r.scale,effects:t.effects})}e.sort(((t,e)=>e.effects.length-t.effects.length));for(let t=0;t<e.length-1;t++){if(!D(e[t].effects,e[t+1].effects))return new a("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:e[t].effects,b:e[t+1].effects});$(e[t].effects,e[t+1].effects)}return e.sort(((t,e)=>e.scale-t.scale)),e}(t);Array.isArray(e)?this._transitionTo(e):this._transitionTo([])}get effects(){return this._effects}get scale(){return this._scale}get transitioning(){return null!==this._to}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}_transitionTo(t){this.scale>0&&function(t,e,r){var n,s,i,a;return!(null==(n=t[0])?void 0:n.effects)||!(null==(s=e[0])?void 0:s.effects)||!((-1===(null==(i=t[0])?void 0:i.scale)||-1===(null==(a=e[0])?void 0:a.scale))&&(t.length>1||e.length>1)&&r<=0)&&D(t[0].effects,e[0].effects)}(this._current,t,this.scale)?(this._final=t,this._to=l(t),function(t,e,r){var n,s;const i=t.length>e.length?t:e,a=t.length>e.length?e:t,c=a[a.length-1],o=null!=(n=null==c?void 0:c.scale)?n:r,u=null!=(s=null==c?void 0:c.effects)?s:[];for(let t=a.length;t<i.length;t++)a.push({scale:o,effects:[...u]});for(let t=0;t<i.length;t++)a[t].scale=-1===a[t].scale?r:a[t].scale,i[t].scale=-1===i[t].scale?r:i[t].scale,$(a[t].effects,i[t].effects)}(this._current,this._to,this.scale),this._from=l(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._effects=this._current[0]?l(this._current[0].effects):[]}_applyTimeTransition(t){if(!this._to)return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let t=0;t<this._current.length;t++){const r=this._current[t],n=this._from[t],s=this._to[t];r.scale=V(n.scale,s.scale,e);for(let t=0;t<r.effects.length;t++){const i=r.effects[t],a=n.effects[t],c=s.effects[t];i.interpolate(a,c,e)}}1===e&&(this._current=this._final,this._effects=this._current[0]?l(this._current[0].effects):[],this._from=this._to=this._final=null)}_updateForScale(t){if(0===this._current.length)return;this._scale=t;const e=this._current,r=this._current.length-1;let n,s,i=1;if(1===e.length||t>=e[0].scale)s=n=e[0].effects;else if(t<=e[r].scale)s=n=e[r].effects;else for(let a=0;a<r;a++){const r=e[a],c=e[a+1];if(r.scale>=t&&c.scale<=t){i=(t-r.scale)/(c.scale-r.scale),n=r.effects,s=c.effects;break}}for(let t=0;t<this._effects.length;t++)this._effects[t].interpolate(n[t],s[t],i)}}const Y=t("mapview-transitions-duration");class z extends d{constructor(){super(...arguments),this._childrenSet=new Set,this.children=[],this._effectList=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach((e=>e.clips=t))}get computedEffects(){var t,e;return null!=(t=null==(e=this._effectList)?void 0:e.effects)?t:null}get effect(){var t,e;return null!=(t=null==(e=this._effectList)?void 0:e.effect)?t:""}set effect(t){(this._effectList||t)&&(this._effectList||(this._effectList=new X(Y)),this._effectList.effect=t,this.requestRender())}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._effectList&&(this._effectList.transitionStep(t,e),this._effectList.transitioning&&this.requestRender())}doRender(t){const e=this.createRenderParams(t);this.renderChildren(e)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,e=this.children.length){if(!t)return t;if(this.contains(t))return t;const r=t.parent;return r&&r!==this&&r.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}removeAllChildren(){this._childrenSet.clear();for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){let e;return t<0||t>=this.children.length?null:(e=this.children.splice(t,1)[0],this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e)}sortChildren(t){return this.children.sort(t)}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.beforeRender(t);for(const e of this.children)e.processRender(t);for(const e of this.children)e.afterRender(t)}createRenderParams(t){return{...t,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition}}}export{d as a,R as h,g as n,z as r};
