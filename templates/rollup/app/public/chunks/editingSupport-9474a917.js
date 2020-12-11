import{A as e,bo as t,k as a,bL as s,bM as r,aR as d,a as i,bN as l,bO as n}from"../main.js";function o(e){var t,a;return!0===(null==e||null==(t=e.capabilities)||null==(a=t.operations)?void 0:a.supportsEditing)}async function u(i,l,n,o){let u,m;const y={edits:n,result:e(((e,t)=>{u=e,m=t}))};i.emit("apply-edits",y);try{const{results:e,edits:m}=await async function(e,d,i,l){if(await e.load(),!function(e){return e&&null!=e.applyEdits}(d))return t(new a(e.type+"-layer:no-editing-support","Layer source does not support applyEdits capability",{layer:e}));if(!e.editingEnabled)throw new a(e.type+"-layer:editing-disabled","Editing is disabled for layer",{layer:e});const n=await function(e,t,d){const i=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),l=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments);if(!t||!i&&!l)throw new a(e.type+"-layer:missing-parameters","'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&d&&d.gdbVersion)throw new a(e.type+"-layer:invalid-parameter","'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&d&&d.rollbackOnFailureEnabled)throw new a(e.type+"-layer:invalid-parameter","This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&d&&d.globalIdUsed)throw new a(e.type+"-layer:invalid-parameter","This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&l)throw new a(e.type+"-layer:invalid-parameter","'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!d||!d.globalIdUsed)&&l)throw new a(e.type+"-layer:invalid-parameter","When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const n={...t};if(n.addFeatures=t&&s.isCollection(t.addFeatures)?t.addFeatures.toArray():n.addFeatures||[],n.updateFeatures=t&&s.isCollection(t.updateFeatures)?t.updateFeatures.toArray():n.updateFeatures||[],n.deleteFeatures=t&&s.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():n.deleteFeatures||[],n.addFeatures.length&&!e.capabilities.operations.supportsAdd)throw new a(e.type+"-layer:unsupported-operation","Layer does not support adding features.");if(n.updateFeatures.length&&!e.capabilities.operations.supportsUpdate)throw new a(e.type+"-layer:unsupported-operation","Layer does not support updating features.");if(n.deleteFeatures.length&&!e.capabilities.operations.supportsDelete)throw new a(e.type+"-layer:unsupported-operation","Layer does not support deleting features.");n.addAttachments=n.addAttachments||[],n.updateAttachments=n.updateAttachments||[],n.deleteAttachments=n.deleteAttachments||[],n.addFeatures=n.addFeatures.map(c),n.updateFeatures=n.updateFeatures.map(c);const o=d&&d.globalIdUsed;return n.addFeatures.forEach((t=>p(t,e,o))),n.updateFeatures.forEach((t=>p(t,e,o))),n.deleteFeatures.forEach((t=>p(t,e,o))),n.addAttachments.forEach((t=>h(t,e))),n.updateAttachments.forEach((t=>h(t,e))),async function(e){const t=e.addFeatures,a=e.updateFeatures,s=t.concat(a).map((e=>e.geometry)),d=await r(s),i=t.length,l=a.length;return d.slice(0,i).forEach(((t,a)=>{e.addFeatures[a].geometry=t})),d.slice(i,i+l).forEach(((t,a)=>{e.updateFeatures[a].geometry=t})),e}(n)}(e,i,l);return n.addFeatures.length||n.updateFeatures.length||n.deleteFeatures.length||n.addAttachments.length||n.updateAttachments.length||n.deleteAttachments.length?{edits:n,results:await d.applyEdits(n,l)}:{edits:n,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(i,l,n,o),y=e=>e.filter((e=>!e.error)).map(d),b={edits:m,addedFeatures:y(e.addFeatureResults),updatedFeatures:y(e.updateFeatureResults),deletedFeatures:y(e.deleteFeatureResults),addedAttachments:y(e.addAttachmentResults),updatedAttachments:y(e.updateAttachmentResults),deletedAttachments:y(e.deleteAttachmentResults)};return(b.addedFeatures.length||b.updatedFeatures.length||b.deletedFeatures.length||b.addedAttachments.length||b.updatedAttachments.length||b.deletedAttachments.length)&&i.emit("edits",b),u(b),e}catch(e){throw m(e),e}}function p(e,t,s){if(s){if("attributes"in e&&!e.attributes[t.globalIdField])throw new a(t.type+"-layer:invalid-parameter","Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new a(t.type+"-layer:invalid-parameter","'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&i(e.geometry)){if(!t.capabilities.editing.supportsGeometryUpdate)throw new a(t.type+"-layer:unsupported-operation","Layer does not support geometry updates.");if(e.geometry.hasZ&&!1===t.capabilities.data.supportsZ)throw new a(t.type+"-layer:z-unsupported","Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities.data.supportsM)throw new a(t.type+"-layer:m-unsupported","Layer does not support m values while feature has m values.")}}function h(e,t){const{feature:s,attachment:r}=e;if(!s||"attributes"in s&&!s.attributes[t.globalIdField])throw new a(t.type+"-layer:invalid-parameter","Attachment should have reference to a feature with 'globalId'");if(!("attributes"in s)&&!s.globalId)throw new a(t.type+"-layer:invalid-parameter","Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new a(t.type+"-layer:invalid-parameter","Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new a(t.type+"-layer:invalid-parameter","Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name||r.name))throw new a(t.type+"-layer:invalid-parameter","'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&r.uploadId)throw new a(t.type+"-layer:invalid-parameter","This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof r.data){const e=l(r.data);if(e&&!e.isBase64)throw new a(t.type+"-layer:invalid-parameter","Attachment 'data' should be a Blob, File or Base64 encoded string")}}function c(e){const t=new n;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}export{u as applyEdits,o as isEditableLayer};
