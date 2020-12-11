import{o as n}from"../main.js";var r=n((function(n,r){var t,e=(t="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(n){var r,e=void 0!==(n=n||{})?n:{},i={};for(r in e)e.hasOwnProperty(r)&&(i[r]=e[r]);var a,o,u="./this.program";a="object"==typeof window,o="function"==typeof importScripts,"object"==typeof process&&"object"==typeof process.versions&&process.versions.node;var l,c="";(a||o)&&(o?c=self.location.href:document.currentScript&&(c=document.currentScript.src),t&&(c=t),c=0!==c.indexOf("blob:")?c.substr(0,c.lastIndexOf("/")+1):"",o&&(l=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}));var f,s,d=e.print||console.log.bind(console),y=e.printErr||console.warn.bind(console);for(r in i)i.hasOwnProperty(r)&&(e[r]=i[r]);i=null,e.arguments&&e.arguments,e.thisProgram&&(u=e.thisProgram),e.quit&&e.quit,e.wasmBinary&&(f=e.wasmBinary),e.noExitRuntime&&e.noExitRuntime,"object"!=typeof WebAssembly&&y("no native wasm support detected");var m=new WebAssembly.Table({initial:904,maximum:904,element:"anyfunc"}),p=!1,_="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function v(n,r,t){for(var e=r+t,i=r;n[i]&&!(i>=e);)++i;if(i-r>16&&n.subarray&&_)return _.decode(n.subarray(r,i));for(var a="";r<i;){var o=n[r++];if(128&o){var u=63&n[r++];if(192!=(224&o)){var l=63&n[r++];if((o=224==(240&o)?(15&o)<<12|u<<6|l:(7&o)<<18|u<<12|l<<6|63&n[r++])<65536)a+=String.fromCharCode(o);else{var c=o-65536;a+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else a+=String.fromCharCode((31&o)<<6|u)}else a+=String.fromCharCode(o)}return a}function g(n,r){return n?v(A,n,r):""}function h(n,r,t,e){if(!(e>0))return 0;for(var i=t,a=t+e-1,o=0;o<n.length;++o){var u=n.charCodeAt(o);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&n.charCodeAt(++o)),u<=127){if(t>=a)break;r[t++]=u}else if(u<=2047){if(t+1>=a)break;r[t++]=192|u>>6,r[t++]=128|63&u}else if(u<=65535){if(t+2>=a)break;r[t++]=224|u>>12,r[t++]=128|u>>6&63,r[t++]=128|63&u}else{if(t+3>=a)break;r[t++]=240|u>>18,r[t++]=128|u>>12&63,r[t++]=128|u>>6&63,r[t++]=128|63&u}}return r[t]=0,t-i}function w(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e>=55296&&e<=57343&&(e=65536+((1023&e)<<10)|1023&n.charCodeAt(++t)),e<=127?++r:r+=e<=2047?2:e<=65535?3:4}return r}var C,b,A,T,F,E,D,W,S,j="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function P(n){for(var r=n,t=r>>1;T[t];)++t;if((r=t<<1)-n>32&&j)return j.decode(A.subarray(n,r));for(var e=0,i="";;){var a=T[n+2*e>>1];if(0==a)return i;++e,i+=String.fromCharCode(a)}}function k(n,r,t){if(void 0===t&&(t=2147483647),t<2)return 0;for(var e=r,i=(t-=2)<2*n.length?t/2:n.length,a=0;a<i;++a){var o=n.charCodeAt(a);T[r>>1]=o,r+=2}return T[r>>1]=0,r-e}function M(n){return 2*n.length}function R(n){for(var r=0,t="";;){var e=E[n+4*r>>2];if(0==e)return t;if(++r,e>=65536){var i=e-65536;t+=String.fromCharCode(55296|i>>10,56320|1023&i)}else t+=String.fromCharCode(e)}}function O(n,r,t){if(void 0===t&&(t=2147483647),t<4)return 0;for(var e=r,i=e+t-4,a=0;a<n.length;++a){var o=n.charCodeAt(a);if(o>=55296&&o<=57343&&(o=65536+((1023&o)<<10)|1023&n.charCodeAt(++a)),E[r>>2]=o,(r+=4)+4>i)break}return E[r>>2]=0,r-e}function x(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e>=55296&&e<=57343&&++t,r+=4}return r}function I(n){C=n,e.HEAP8=b=new Int8Array(n),e.HEAP16=T=new Int16Array(n),e.HEAP32=E=new Int32Array(n),e.HEAPU8=A=new Uint8Array(n),e.HEAPU16=F=new Uint16Array(n),e.HEAPU32=D=new Uint32Array(n),e.HEAPF32=W=new Float32Array(n),e.HEAPF64=S=new Float64Array(n)}var U=e.INITIAL_MEMORY||16777216;function Y(n){for(;n.length>0;){var r=n.shift();if("function"!=typeof r){var t=r.func;"number"==typeof t?void 0===r.arg?e.dynCall_v(t):e.dynCall_vi(t,r.arg):t(void 0===r.arg?null:r.arg)}else r(e)}}(s=e.wasmMemory?e.wasmMemory:new WebAssembly.Memory({initial:U/65536,maximum:32768}))&&(C=s.buffer),U=C.byteLength,I(C),E[12616]=5293504;var H=[],z=[],V=[],B=[],N=Math.ceil,L=Math.floor,q=0,G=null;function J(n){throw e.onAbort&&e.onAbort(n),d(n+=""),y(n),p=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(n)}function X(n){return r=n,t="data:application/octet-stream;base64,",String.prototype.startsWith?r.startsWith(t):0===r.indexOf(t);var r,t}e.preloadedImages={},e.preloadedAudios={};var Z,$="i3s.wasm";function K(){try{if(f)return new Uint8Array(f);if(l)return l($);throw"both async and sync fetching of the wasm failed"}catch(n){J(n)}}function Q(n){return E[Ln()>>2]=n,n}X($)||(Z=$,$=e.locateFile?e.locateFile(Z,c):c+Z),z.push({func:function(){Vn()}});var nn={mappings:{},buffers:[null,[],[]],printChar:function(n,r){var t=nn.buffers[n];0===r||10===r?((1===n?d:y)(v(t,0)),t.length=0):t.push(r)},varargs:void 0,get:function(){return nn.varargs+=4,E[nn.varargs-4>>2]},getStr:function(n){return g(n)},get64:function(n,r){return n}},rn={};function tn(n){for(;n.length;){var r=n.pop();n.pop()(r)}}function en(n){return this.fromWireType(D[n>>2])}var an={},on={},un={};function ln(n){if(void 0===n)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?"_"+n:n}function cn(n,r){return n=ln(n),new Function("body","return function "+n+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)}function fn(n,r){var t=cn(r,(function(n){this.name=r,this.message=n;var t=new Error(n).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},t}var sn=void 0;function dn(n){throw new sn(n)}function yn(n,r,t){function e(r){var e=t(r);e.length!==n.length&&dn("Mismatched type converter count");for(var i=0;i<n.length;++i)hn(n[i],e[i])}n.forEach((function(n){un[n]=r}));var i=new Array(r.length),a=[],o=0;r.forEach((function(n,r){on.hasOwnProperty(n)?i[r]=on[n]:(a.push(n),an.hasOwnProperty(n)||(an[n]=[]),an[n].push((function(){i[r]=on[n],++o===a.length&&e(i)})))})),0===a.length&&e(i)}function mn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}var pn=void 0;function _n(n){for(var r="",t=n;A[t];)r+=pn[A[t++]];return r}var vn=void 0;function gn(n){throw new vn(n)}function hn(n,r,t){if(t=t||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=r.name;if(n||gn('type "'+e+'" must have a positive integer typeid pointer'),on.hasOwnProperty(n)){if(t.ignoreDuplicateRegistrations)return;gn("Cannot register type '"+e+"' twice")}if(on[n]=r,delete un[n],an.hasOwnProperty(n)){var i=an[n];delete an[n],i.forEach((function(n){n()}))}}var wn=[],Cn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function bn(n){n>4&&0==--Cn[n].refcount&&(Cn[n]=void 0,wn.push(n))}function An(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=wn.length?wn.pop():Cn.length;return Cn[r]={refcount:1,value:n},r}}function Tn(n){if(null===n)return"null";var r=typeof n;return"object"===r||"array"===r||"function"===r?n.toString():""+n}function Fn(n,r){switch(r){case 2:return function(n){return this.fromWireType(W[n>>2])};case 3:return function(n){return this.fromWireType(S[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function En(n,r){n=_n(n);var t=function(t){for(var e=[],i=1;i<n.length;++i)e.push("a"+i);var a="return function dynCall_"+n+"_"+r+"("+e.join(", ")+") {\n";return a+="    return dynCall(rawFunction"+(e.length?", ":"")+e.join(", ")+");\n",a+="};\n",new Function("dynCall","rawFunction",a)(t,r)}(e["dynCall_"+n]);return"function"!=typeof t&&gn("unknown function pointer with signature "+n+": "+r),t}var Dn=void 0;function Wn(n){var r=qn(n),t=_n(r);return Nn(r),t}function Sn(n,r,t){switch(r){case 0:return t?function(n){return b[n]}:function(n){return A[n]};case 1:return t?function(n){return T[n>>1]}:function(n){return F[n>>1]};case 2:return t?function(n){return E[n>>2]}:function(n){return D[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}var jn={};function Pn(n){try{return s.grow(n-C.byteLength+65535>>>16),I(s.buffer),1}catch(n){}}var kn={};function Mn(){if(!Mn.strings){var n={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:u||"./this.program"};for(var r in kn)n[r]=kn[r];var t=[];for(var r in n)t.push(r+"="+n[r]);Mn.strings=t}return Mn.strings}function Rn(n){return n%4==0&&(n%100!=0||n%400==0)}function On(n,r){for(var t=0,e=0;e<=r;t+=n[e++]);return t}var xn=[31,29,31,30,31,30,31,31,30,31,30,31],In=[31,28,31,30,31,30,31,31,30,31,30,31];function Un(n,r){for(var t=new Date(n.getTime());r>0;){var e=Rn(t.getFullYear()),i=t.getMonth(),a=(e?xn:In)[i];if(!(r>a-t.getDate()))return t.setDate(t.getDate()+r),t;r-=a-t.getDate()+1,t.setDate(1),i<11?t.setMonth(i+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1))}return t}sn=e.InternalError=fn(Error,"InternalError"),function(){for(var n=new Array(256),r=0;r<256;++r)n[r]=String.fromCharCode(r);pn=n}(),vn=e.BindingError=fn(Error,"BindingError"),e.count_emval_handles=function(){for(var n=0,r=5;r<Cn.length;++r)void 0!==Cn[r]&&++n;return n},e.get_first_emval=function(){for(var n=5;n<Cn.length;++n)if(void 0!==Cn[n])return Cn[n];return null},Dn=e.UnboundTypeError=fn(Error,"UnboundTypeError");var Yn={__cxa_allocate_exception:function(n){return Bn(n)},__cxa_atexit:function(n,r){},__cxa_throw:function(n,r,t){throw n},__map_file:function(n,r){return Q(63),-1},__sys_munmap:function(n,r){return function(n,r){if(-1==(0|n)||0===r)return-28;var t=nn.mappings[n];return t?(r===t.len&&(nn.mappings[n]=null,t.allocated&&Nn(t.malloc)),0):0}(n,r)},_embind_finalize_value_object:function(n){var r=rn[n];delete rn[n];var t=r.rawConstructor,e=r.rawDestructor,i=r.fields;yn([n],i.map((function(n){return n.getterReturnType})).concat(i.map((function(n){return n.setterArgumentType}))),(function(n){var a={};return i.forEach((function(r,t){var e=r.fieldName,o=n[t],u=r.getter,l=r.getterContext,c=n[t+i.length],f=r.setter,s=r.setterContext;a[e]={read:function(n){return o.fromWireType(u(l,n))},write:function(n,r){var t=[];f(s,n,c.toWireType(t,r)),tn(t)}}})),[{name:r.name,fromWireType:function(n){var r={};for(var t in a)r[t]=a[t].read(n);return e(n),r},toWireType:function(n,r){for(var i in a)if(!(i in r))throw new TypeError("Missing field");var o=t();for(i in a)a[i].write(o,r[i]);return null!==n&&n.push(e,o),o},argPackAdvance:8,readValueFromPointer:en,destructorFunction:e}]}))},_embind_register_bool:function(n,r,t,e,i){var a=mn(t);hn(n,{name:r=_n(r),fromWireType:function(n){return!!n},toWireType:function(n,r){return r?e:i},argPackAdvance:8,readValueFromPointer:function(n){var e;if(1===t)e=b;else if(2===t)e=T;else{if(4!==t)throw new TypeError("Unknown boolean type size: "+r);e=E}return this.fromWireType(e[n>>a])},destructorFunction:null})},_embind_register_emval:function(n,r){hn(n,{name:r=_n(r),fromWireType:function(n){var r=Cn[n].value;return bn(n),r},toWireType:function(n,r){return An(r)},argPackAdvance:8,readValueFromPointer:en,destructorFunction:null})},_embind_register_float:function(n,r,t){var e=mn(t);hn(n,{name:r=_n(r),fromWireType:function(n){return n},toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+Tn(r)+'" to '+this.name);return r},argPackAdvance:8,readValueFromPointer:Fn(r,e),destructorFunction:null})},_embind_register_function:function(n,r,t,i,a,o){var u=function(n,r){for(var t=[],e=0;e<n;e++)t.push(E[(r>>2)+e]);return t}(r,t);n=_n(n),a=En(i,a),function(n,r,t){e.hasOwnProperty(n)?((void 0===t||void 0!==e[n].overloadTable&&void 0!==e[n].overloadTable[t])&&gn("Cannot register public name '"+n+"' twice"),function(n,r,t){if(void 0===n[r].overloadTable){var e=n[r];n[r]=function(){return n[r].overloadTable.hasOwnProperty(arguments.length)||gn("Function '"+t+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[r].overloadTable+")!"),n[r].overloadTable[arguments.length].apply(this,arguments)},n[r].overloadTable=[],n[r].overloadTable[e.argCount]=e}}(e,n,n),e.hasOwnProperty(t)&&gn("Cannot register multiple overloads of a function with the same number of arguments ("+t+")!"),e[n].overloadTable[t]=r):(e[n]=r,void 0!==t&&(e[n].numArguments=t))}(n,(function(){!function(n,r){var t=[],e={};throw r.forEach((function n(r){e[r]||on[r]||(un[r]?un[r].forEach(n):(t.push(r),e[r]=!0))})),new Dn(n+": "+t.map(Wn).join([", "]))}("Cannot call "+n+" due to unbound types",u)}),r-1),yn([],u,(function(t){var i=[t[0],null].concat(t.slice(1));return function(n,r,t){e.hasOwnProperty(n)||dn("Replacing nonexistant public symbol"),void 0!==e[n].overloadTable&&void 0!==t?e[n].overloadTable[t]=r:(e[n]=r,e[n].argCount=t)}(n,function(n,r,t,e,i){var a=r.length;a<2&&gn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var o=null!==r[1]&&null!==t,u=!1,l=1;l<r.length;++l)if(null!==r[l]&&void 0===r[l].destructorFunction){u=!0;break}var c="void"!==r[0].name,f="",s="";for(l=0;l<a-2;++l)f+=(0!==l?", ":"")+"arg"+l,s+=(0!==l?", ":"")+"arg"+l+"Wired";var d="return function "+ln(n)+"("+f+") {\nif (arguments.length !== "+(a-2)+") {\nthrowBindingError('function "+n+" called with ' + arguments.length + ' arguments, expected "+(a-2)+" args!');\n}\n";u&&(d+="var destructors = [];\n");var y=u?"destructors":"null",m=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],p=[gn,e,i,tn,r[0],r[1]];for(o&&(d+="var thisWired = classParam.toWireType("+y+", this);\n"),l=0;l<a-2;++l)d+="var arg"+l+"Wired = argType"+l+".toWireType("+y+", arg"+l+"); // "+r[l+2].name+"\n",m.push("argType"+l),p.push(r[l+2]);if(o&&(s="thisWired"+(s.length>0?", ":"")+s),d+=(c?"var rv = ":"")+"invoker(fn"+(s.length>0?", ":"")+s+");\n",u)d+="runDestructors(destructors);\n";else for(l=o?1:2;l<r.length;++l){var _=1===l?"thisWired":"arg"+(l-2)+"Wired";null!==r[l].destructorFunction&&(d+=_+"_dtor("+_+"); // "+r[l].name+"\n",m.push(_+"_dtor"),p.push(r[l].destructorFunction))}return c&&(d+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),d+="}\n",m.push(d),function(n,r){if(!(n instanceof Function))throw new TypeError("new_ called with constructor type "+typeof n+" which is not a function");var t=cn(n.name||"unknownFunctionName",(function(){}));t.prototype=n.prototype;var e=new t,i=n.apply(e,r);return i instanceof Object?i:e}(Function,m).apply(null,p)}(n,i,null,a,o),r-1),[]}))},_embind_register_integer:function(n,r,t,e,i){r=_n(r),-1===i&&(i=4294967295);var a=mn(t),o=function(n){return n};if(0===e){var u=32-8*t;o=function(n){return n<<u>>>u}}var l=-1!=r.indexOf("unsigned");hn(n,{name:r,fromWireType:o,toWireType:function(n,t){if("number"!=typeof t&&"boolean"!=typeof t)throw new TypeError('Cannot convert "'+Tn(t)+'" to '+this.name);if(t<e||t>i)throw new TypeError('Passing a number "'+Tn(t)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+e+", "+i+"]!");return l?t>>>0:0|t},argPackAdvance:8,readValueFromPointer:Sn(r,a,0!==e),destructorFunction:null})},_embind_register_memory_view:function(n,r,t){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function i(n){var r=D,t=r[n>>=2],i=r[n+1];return new e(C,i,t)}hn(n,{name:t=_n(t),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},_embind_register_std_string:function(n,r){var t="std::string"===(r=_n(r));hn(n,{name:r,fromWireType:function(n){var r,e=D[n>>2];if(t){var i=A[n+4+e],a=0;0!=i&&(a=i,A[n+4+e]=0);for(var o=n+4,u=0;u<=e;++u){var l=n+4+u;if(0==A[l]){var c=g(o);void 0===r?r=c:(r+=String.fromCharCode(0),r+=c),o=l+1}}0!=a&&(A[n+4+e]=a)}else{var f=new Array(e);for(u=0;u<e;++u)f[u]=String.fromCharCode(A[n+4+u]);r=f.join("")}return Nn(n),r},toWireType:function(n,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var e="string"==typeof r;e||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||gn("Cannot pass non-string to std::string");var i=(t&&e?function(){return w(r)}:function(){return r.length})(),a=Bn(4+i+1);if(D[a>>2]=i,t&&e)h(r,A,a+4,i+1);else if(e)for(var o=0;o<i;++o){var u=r.charCodeAt(o);u>255&&(Nn(a),gn("String has UTF-16 code units that do not fit in 8 bits")),A[a+4+o]=u}else for(o=0;o<i;++o)A[a+4+o]=r[o];return null!==n&&n.push(Nn,a),a},argPackAdvance:8,readValueFromPointer:en,destructorFunction:function(n){Nn(n)}})},_embind_register_std_wstring:function(n,r,t){var e,i,a,o,u;t=_n(t),2===r?(e=P,i=k,o=M,a=function(){return F},u=1):4===r&&(e=R,i=O,o=x,a=function(){return D},u=2),hn(n,{name:t,fromWireType:function(n){var t,i=D[n>>2],o=a(),l=o[n+4+i*r>>u],c=0;0!=l&&(c=l,o[n+4+i*r>>u]=0);for(var f=n+4,s=0;s<=i;++s){var d=n+4+s*r;if(0==o[d>>u]){var y=e(f);void 0===t?t=y:(t+=String.fromCharCode(0),t+=y),f=d+r}}return 0!=c&&(o[n+4+i*r>>u]=c),Nn(n),t},toWireType:function(n,e){"string"!=typeof e&&gn("Cannot pass non-string to C++ string type "+t);var a=o(e),l=Bn(4+a+r);return D[l>>2]=a>>u,i(e,l+4,a+r),null!==n&&n.push(Nn,l),l},argPackAdvance:8,readValueFromPointer:en,destructorFunction:function(n){Nn(n)}})},_embind_register_value_object:function(n,r,t,e,i,a){rn[n]={name:_n(r),rawConstructor:En(t,e),rawDestructor:En(i,a),fields:[]}},_embind_register_value_object_field:function(n,r,t,e,i,a,o,u,l,c){rn[n].fields.push({fieldName:_n(r),getterReturnType:t,getter:En(e,i),getterContext:a,setterArgumentType:o,setter:En(u,l),setterContext:c})},_embind_register_void:function(n,r){hn(n,{isVoid:!0,name:r=_n(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,r){}})},_emval_decref:bn,_emval_incref:function(n){n>4&&(Cn[n].refcount+=1)},_emval_new_cstring:function(n){return An(void 0===(t=jn[r=n])?_n(r):t);var r,t},_emval_take_value:function(n,r){var t,e;return"_emval_take_value",void 0===(e=on[t=n])&&gn("_emval_take_value has unknown type "+Wn(t)),An((n=e).readValueFromPointer(r))},abort:function(){J()},emscripten_get_sbrk_ptr:function(){return 50464},emscripten_memcpy_big:function(n,r,t){A.copyWithin(n,r,r+t)},emscripten_resize_heap:function(n){n>>>=0;var r=A.length,t=2147483648;if(n>t)return!1;for(var e,i=1;i<=4;i*=2){var a=r*(1+.2/i);if(a=Math.min(a,n+100663296),Pn(Math.min(t,((e=Math.max(16777216,n,a))%65536>0&&(e+=65536-e%65536),e))))return!0}return!1},environ_get:function(n,r){var t=0;return Mn().forEach((function(e,i){var a=r+t;E[n+4*i>>2]=a,function(n,r,t){for(var e=0;e<n.length;++e)b[r++>>0]=n.charCodeAt(e);b[r>>0]=0}(e,a),t+=e.length+1})),0},environ_sizes_get:function(n,r){var t=Mn();E[n>>2]=t.length;var e=0;return t.forEach((function(n){e+=n.length+1})),E[r>>2]=e,0},fd_close:function(n){return 0},fd_seek:function(n,r,t,e,i){},fd_write:function(n,r,t,e){for(var i=0,a=0;a<t;a++){for(var o=E[r+8*a>>2],u=E[r+(8*a+4)>>2],l=0;l<u;l++)nn.printChar(n,A[o+l]);i+=u}return E[e>>2]=i,0},memory:s,raise:function(n){return Q(52),-1},round:function(n){return(n=+n)>=0?+L(n+.5):+N(n-.5)},roundf:function(n){return(n=+n)>=0?+L(n+.5):+N(n-.5)},setTempRet0:function(n){},strftime_l:function(n,r,t,e){return function(n,r,t,e){var i=E[e+40>>2],a={tm_sec:E[e>>2],tm_min:E[e+4>>2],tm_hour:E[e+8>>2],tm_mday:E[e+12>>2],tm_mon:E[e+16>>2],tm_year:E[e+20>>2],tm_wday:E[e+24>>2],tm_yday:E[e+28>>2],tm_isdst:E[e+32>>2],tm_gmtoff:E[e+36>>2],tm_zone:i?g(i):""},o=g(t),u={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var l in u)o=o.replace(new RegExp(l,"g"),u[l]);var c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],f=["January","February","March","April","May","June","July","August","September","October","November","December"];function s(n,r,t){for(var e="number"==typeof n?n.toString():n||"";e.length<r;)e=t[0]+e;return e}function d(n,r){return s(n,r,"0")}function y(n,r){function t(n){return n<0?-1:n>0?1:0}var e;return 0===(e=t(n.getFullYear()-r.getFullYear()))&&0===(e=t(n.getMonth()-r.getMonth()))&&(e=t(n.getDate()-r.getDate())),e}function m(n){switch(n.getDay()){case 0:return new Date(n.getFullYear()-1,11,29);case 1:return n;case 2:return new Date(n.getFullYear(),0,3);case 3:return new Date(n.getFullYear(),0,2);case 4:return new Date(n.getFullYear(),0,1);case 5:return new Date(n.getFullYear()-1,11,31);case 6:return new Date(n.getFullYear()-1,11,30)}}function p(n){var r=Un(new Date(n.tm_year+1900,0,1),n.tm_yday),t=new Date(r.getFullYear(),0,4),e=new Date(r.getFullYear()+1,0,4),i=m(t),a=m(e);return y(i,r)<=0?y(a,r)<=0?r.getFullYear()+1:r.getFullYear():r.getFullYear()-1}var _={"%a":function(n){return c[n.tm_wday].substring(0,3)},"%A":function(n){return c[n.tm_wday]},"%b":function(n){return f[n.tm_mon].substring(0,3)},"%B":function(n){return f[n.tm_mon]},"%C":function(n){return d((n.tm_year+1900)/100|0,2)},"%d":function(n){return d(n.tm_mday,2)},"%e":function(n){return s(n.tm_mday,2," ")},"%g":function(n){return p(n).toString().substring(2)},"%G":function(n){return p(n)},"%H":function(n){return d(n.tm_hour,2)},"%I":function(n){var r=n.tm_hour;return 0==r?r=12:r>12&&(r-=12),d(r,2)},"%j":function(n){return d(n.tm_mday+On(Rn(n.tm_year+1900)?xn:In,n.tm_mon-1),3)},"%m":function(n){return d(n.tm_mon+1,2)},"%M":function(n){return d(n.tm_min,2)},"%n":function(){return"\n"},"%p":function(n){return n.tm_hour>=0&&n.tm_hour<12?"AM":"PM"},"%S":function(n){return d(n.tm_sec,2)},"%t":function(){return"\t"},"%u":function(n){return n.tm_wday||7},"%U":function(n){var r=new Date(n.tm_year+1900,0,1),t=0===r.getDay()?r:Un(r,7-r.getDay()),e=new Date(n.tm_year+1900,n.tm_mon,n.tm_mday);if(y(t,e)<0){var i=On(Rn(e.getFullYear())?xn:In,e.getMonth()-1)-31,a=31-t.getDate()+i+e.getDate();return d(Math.ceil(a/7),2)}return 0===y(t,r)?"01":"00"},"%V":function(n){var r,t=new Date(n.tm_year+1900,0,4),e=new Date(n.tm_year+1901,0,4),i=m(t),a=m(e),o=Un(new Date(n.tm_year+1900,0,1),n.tm_yday);return y(o,i)<0?"53":y(a,o)<=0?"01":(r=i.getFullYear()<n.tm_year+1900?n.tm_yday+32-i.getDate():n.tm_yday+1-i.getDate(),d(Math.ceil(r/7),2))},"%w":function(n){return n.tm_wday},"%W":function(n){var r=new Date(n.tm_year,0,1),t=1===r.getDay()?r:Un(r,0===r.getDay()?1:7-r.getDay()+1),e=new Date(n.tm_year+1900,n.tm_mon,n.tm_mday);if(y(t,e)<0){var i=On(Rn(e.getFullYear())?xn:In,e.getMonth()-1)-31,a=31-t.getDate()+i+e.getDate();return d(Math.ceil(a/7),2)}return 0===y(t,r)?"01":"00"},"%y":function(n){return(n.tm_year+1900).toString().substring(2)},"%Y":function(n){return n.tm_year+1900},"%z":function(n){var r=n.tm_gmtoff,t=r>=0;return r=(r=Math.abs(r)/60)/60*100+r%60,(t?"+":"-")+String("0000"+r).slice(-4)},"%Z":function(n){return n.tm_zone},"%%":function(){return"%"}};for(var l in _)o.indexOf(l)>=0&&(o=o.replace(new RegExp(l,"g"),_[l](a)));var v,C,A,T=(C=w(v=o)+1,h(v,A=new Array(C),0,A.length),A);return T.length>r?0:(function(n,r){b.set(n,r)}(T,n),T.length-1)}(n,r,t,e)},table:m},Hn=function(){var n={env:Yn,wasi_snapshot_preview1:Yn};function r(n,r){var t=n.exports;e.asm=t,function(n){if(q--,e.monitorRunDependencies&&e.monitorRunDependencies(q),0==q&&G){var r=G;G=null,r()}}()}function t(n){r(n.instance)}function i(r){return(f||!a&&!o||"function"!=typeof fetch?new Promise((function(n,r){n(K())})):fetch($,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+$+"'";return n.arrayBuffer()})).catch((function(){return K()}))).then((function(r){return WebAssembly.instantiate(r,n)})).then(r,(function(n){y("failed to asynchronously prepare wasm: "+n),J(n)}))}if(q++,e.monitorRunDependencies&&e.monitorRunDependencies(q),e.instantiateWasm)try{return e.instantiateWasm(n,r)}catch(n){return y("Module.instantiateWasm callback failed with error: "+n),!1}return function(){if(f||"function"!=typeof WebAssembly.instantiateStreaming||X($)||"function"!=typeof fetch)return i(t);fetch($,{credentials:"same-origin"}).then((function(r){return WebAssembly.instantiateStreaming(r,n).then(t,(function(n){y("wasm streaming compile failed: "+n),y("falling back to ArrayBuffer instantiation"),i(t)}))}))}(),{}}();e.asm=Hn;var zn,Vn=e.___wasm_call_ctors=function(){return(Vn=e.___wasm_call_ctors=e.asm.__wasm_call_ctors).apply(null,arguments)},Bn=e._malloc=function(){return(Bn=e._malloc=e.asm.malloc).apply(null,arguments)},Nn=e._free=function(){return(Nn=e._free=e.asm.free).apply(null,arguments)},Ln=e.___errno_location=function(){return(Ln=e.___errno_location=e.asm.__errno_location).apply(null,arguments)},qn=(e._setThrew=function(){return(e._setThrew=e.asm.setThrew).apply(null,arguments)},e.___getTypeName=function(){return(qn=e.___getTypeName=e.asm.__getTypeName).apply(null,arguments)});function Gn(n){function r(){zn||(zn=!0,e.calledRun=!0,p||(Y(z),Y(V),e.onRuntimeInitialized&&e.onRuntimeInitialized(),function(){if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)n=e.postRun.shift(),B.unshift(n);var n;Y(B)}()))}q>0||(function(){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)n=e.preRun.shift(),H.unshift(n);var n;Y(H)}(),q>0||(e.setStatus?(e.setStatus("Running..."),setTimeout((function(){setTimeout((function(){e.setStatus("")}),1),r()}),1)):r()))}if(e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.__embind_register_native_and_builtin_types).apply(null,arguments)},e.stackSave=function(){return(e.stackSave=e.asm.stackSave).apply(null,arguments)},e.stackAlloc=function(){return(e.stackAlloc=e.asm.stackAlloc).apply(null,arguments)},e.stackRestore=function(){return(e.stackRestore=e.asm.stackRestore).apply(null,arguments)},e.__growWasmMemory=function(){return(e.__growWasmMemory=e.asm.__growWasmMemory).apply(null,arguments)},e.dynCall_ii=function(){return(e.dynCall_ii=e.asm.dynCall_ii).apply(null,arguments)},e.dynCall_i=function(){return(e.dynCall_i=e.asm.dynCall_i).apply(null,arguments)},e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.dynCall_vi).apply(null,arguments)},e.dynCall_dii=function(){return(e.dynCall_dii=e.asm.dynCall_dii).apply(null,arguments)},e.dynCall_viid=function(){return(e.dynCall_viid=e.asm.dynCall_viid).apply(null,arguments)},e.dynCall_fii=function(){return(e.dynCall_fii=e.asm.dynCall_fii).apply(null,arguments)},e.dynCall_viif=function(){return(e.dynCall_viif=e.asm.dynCall_viif).apply(null,arguments)},e.dynCall_iii=function(){return(e.dynCall_iii=e.asm.dynCall_iii).apply(null,arguments)},e.dynCall_viii=function(){return(e.dynCall_viii=e.asm.dynCall_viii).apply(null,arguments)},e.dynCall_vii=function(){return(e.dynCall_vii=e.asm.dynCall_vii).apply(null,arguments)},e.dynCall_viiiii=function(){return(e.dynCall_viiiii=e.asm.dynCall_viiiii).apply(null,arguments)},e.dynCall_viiii=function(){return(e.dynCall_viiii=e.asm.dynCall_viiii).apply(null,arguments)},e.dynCall_iiiiiiiiidiii=function(){return(e.dynCall_iiiiiiiiidiii=e.asm.dynCall_iiiiiiiiidiii).apply(null,arguments)},e.dynCall_iiiiiiiidiii=function(){return(e.dynCall_iiiiiiiidiii=e.asm.dynCall_iiiiiiiidiii).apply(null,arguments)},e.dynCall_iiii=function(){return(e.dynCall_iiii=e.asm.dynCall_iiii).apply(null,arguments)},e.dynCall_v=function(){return(e.dynCall_v=e.asm.dynCall_v).apply(null,arguments)},e.dynCall_vij=function(){return(e.dynCall_vij=e.asm.dynCall_vij).apply(null,arguments)},e.dynCall_iiiiiiii=function(){return(e.dynCall_iiiiiiii=e.asm.dynCall_iiiiiiii).apply(null,arguments)},e.dynCall_iiiii=function(){return(e.dynCall_iiiii=e.asm.dynCall_iiiii).apply(null,arguments)},e.dynCall_iif=function(){return(e.dynCall_iif=e.asm.dynCall_iif).apply(null,arguments)},e.dynCall_viijii=function(){return(e.dynCall_viijii=e.asm.dynCall_viijii).apply(null,arguments)},e.dynCall_iiiiii=function(){return(e.dynCall_iiiiii=e.asm.dynCall_iiiiii).apply(null,arguments)},e.dynCall_viiiiiiddi=function(){return(e.dynCall_viiiiiiddi=e.asm.dynCall_viiiiiiddi).apply(null,arguments)},e.dynCall_iiiiiii=function(){return(e.dynCall_iiiiiii=e.asm.dynCall_iiiiiii).apply(null,arguments)},e.dynCall_jiji=function(){return(e.dynCall_jiji=e.asm.dynCall_jiji).apply(null,arguments)},e.dynCall_iidiiii=function(){return(e.dynCall_iidiiii=e.asm.dynCall_iidiiii).apply(null,arguments)},e.dynCall_iiiiiiiii=function(){return(e.dynCall_iiiiiiiii=e.asm.dynCall_iiiiiiiii).apply(null,arguments)},e.dynCall_iiiiij=function(){return(e.dynCall_iiiiij=e.asm.dynCall_iiiiij).apply(null,arguments)},e.dynCall_iiiiid=function(){return(e.dynCall_iiiiid=e.asm.dynCall_iiiiid).apply(null,arguments)},e.dynCall_iiiiijj=function(){return(e.dynCall_iiiiijj=e.asm.dynCall_iiiiijj).apply(null,arguments)},e.dynCall_iiiiiijj=function(){return(e.dynCall_iiiiiijj=e.asm.dynCall_iiiiiijj).apply(null,arguments)},e.dynCall_viiiiii=function(){return(e.dynCall_viiiiii=e.asm.dynCall_viiiiii).apply(null,arguments)},e.asm=Hn,e.then=function(n){if(zn)n(e);else{var r=e.onRuntimeInitialized;e.onRuntimeInitialized=function(){r&&r(),n(e)}}return e},G=function n(){zn||Gn(),zn||(G=n)},e.run=Gn,e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();return Gn(),n});n.exports=e})),t=Object.freeze(Object.assign(Object.create(null),r,{default:r}));export{t as i};
