"use strict";(self.webpackChunkdexert=self.webpackChunkdexert||[]).push([[474],{54474:(e,a,t)=>{t.r(a),t.d(a,{default:()=>w,validate:()=>s});var r=t(82284),s=w,i=t(87210).default,n=new RegExp("^[\\w ]+$","u"),m=new RegExp("^[\\w]+$","u"),o=new RegExp("^[ \\w]+$","u"),p=new RegExp("^[ \\w\\.,:]+$","u"),h=t(23071).U9["date-time"],f=t(23071).U9.uri,d=new RegExp("^0x[a-fA-F0-9]{40}$","u"),c=new RegExp("^[ \\w.'+\\-%/\xc0-\xd6\xd8-\xf6\xf8-\xff:&\\[\\]\\(\\)]+$","u"),u=new RegExp("^[a-zA-Z0-9+\\-%/$.]+$","u");function y(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.instancePath,r=void 0===t?"":t;a.parentData,a.parentDataProperty,a.rootData;var s=null,n=0,m=n,o=!1,p=n,h=n,f=!1,d=n;if(n===d)if("string"===typeof e){if(i(e)>42){var c={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",keyword:"maxLength",params:{limit:42},message:"must NOT have more than 42 characters"};null===s?s=[c]:s.push(c),n++}else if(i(e)<1){var u={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"};null===s?s=[u]:s.push(u),n++}}else{var l={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/type",keyword:"type",params:{type:"string"},message:"must be string"};null===s?s=[l]:s.push(l),n++}var g=d===n;if(!(f=f||g)){var P=n;if("boolean"!==typeof e){var v={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/1/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"};null===s?s=[v]:s.push(v),n++}g=P===n;if(!(f=f||g)){var w=n;if("number"!=typeof e||!isFinite(e)){var k={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/2/type",keyword:"type",params:{type:"number"},message:"must be number"};null===s?s=[k]:s.push(k),n++}g=w===n;if(!(f=f||g)){var b=n;if(null!==e){var x={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/3/type",keyword:"type",params:{type:"null"},message:"must be null"};null===s?s=[x]:s.push(x),n++}g=b===n;f=f||g}}}if(f)n=h,null!==s&&(h?s.length=h:s=null);else{var N={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};null===s?s=[N]:s.push(N),n++}if(!(o=o||p===n)){var O={instancePath:r,schemaPath:"#/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};return null===s?s=[O]:s.push(O),n++,y.errors=s,!1}return n=m,null!==s&&(m?s.length=m:s=null),y.errors=s,0===n}function l(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.instancePath,s=void 0===t?"":t;a.parentData,a.parentDataProperty;var n=a.rootData,o=void 0===n?e:n,p=null,h=0,f=h,d=!1,c=h,u=h,g=!1,P=h;if(h===P)if("string"===typeof e){if(i(e)>42){var v={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",keyword:"maxLength",params:{limit:42},message:"must NOT have more than 42 characters"};null===p?p=[v]:p.push(v),h++}else if(i(e)<1){var w={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"};null===p?p=[w]:p.push(w),h++}}else{var k={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/type",keyword:"type",params:{type:"string"},message:"must be string"};null===p?p=[k]:p.push(k),h++}var b=P===h;if(!(g=g||b)){var x=h;if("boolean"!==typeof e){var N={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/1/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"};null===p?p=[N]:p.push(N),h++}b=x===h;if(!(g=g||b)){var O=h;if("number"!=typeof e||!isFinite(e)){var $={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/2/type",keyword:"type",params:{type:"number"},message:"must be number"};null===p?p=[$]:p.push($),h++}b=O===h;if(!(g=g||b)){var T=h;if(null!==e){var I={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/3/type",keyword:"type",params:{type:"null"},message:"must be null"};null===p?p=[I]:p.push(I),h++}b=T===h;g=g||b}}}if(g)h=u,null!==p&&(u?p.length=u:p=null);else{var L={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};null===p?p=[L]:p.push(L),h++}var z=c===h;if(!(d=d||z)){var D=h;if(h===D)if(e&&"object"==(0,r.A)(e)&&!Array.isArray(e))if(Object.keys(e).length>10){var j={instancePath:s,schemaPath:"#/anyOf/1/maxProperties",keyword:"maxProperties",params:{limit:10},message:"must NOT have more than 10 properties"};null===p?p=[j]:p.push(j),h++}else{for(var A in e){var E=h;if(h===h)if("string"===typeof A){if(i(A)>40){var V={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters",propertyName:A};null===p?p=[V]:p.push(V),h++}else if(i(A)<1){var _={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:A};null===p?p=[_]:p.push(_),h++}else if(!m.test(A)){var R={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:A};null===p?p=[R]:p.push(R),h++}}else{var U={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:A};null===p?p=[U]:p.push(U),h++}var F=E===h;if(!F){var q={instancePath:s,schemaPath:"#/anyOf/1/propertyNames",keyword:"propertyNames",params:{propertyName:A},message:"property name must be valid"};null===p?p=[q]:p.push(q),h++;break}}if(F)for(var Z in e){var C=h;if(y(e[Z],{instancePath:s+"/"+Z.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:e,parentDataProperty:Z,rootData:o})||(h=(p=null===p?y.errors:p.concat(y.errors)).length),!(C===h))break}}else{var M={instancePath:s,schemaPath:"#/anyOf/1/type",keyword:"type",params:{type:"object"},message:"must be object"};null===p?p=[M]:p.push(M),h++}z=D===h;d=d||z}if(!d){var S={instancePath:s,schemaPath:"#/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};return null===p?p=[S]:p.push(S),h++,l.errors=p,!1}return h=f,null!==p&&(f?p.length=f:p=null),l.errors=p,0===h}function g(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.instancePath,s=void 0===t?"":t;a.parentData,a.parentDataProperty;var n=a.rootData,o=void 0===n?e:n,p=null,h=0,f=h,d=!1,c=h,u=h,y=!1,P=h;if(h===P)if("string"===typeof e){if(i(e)>42){var v={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",keyword:"maxLength",params:{limit:42},message:"must NOT have more than 42 characters"};null===p?p=[v]:p.push(v),h++}else if(i(e)<1){var w={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"};null===p?p=[w]:p.push(w),h++}}else{var k={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/type",keyword:"type",params:{type:"string"},message:"must be string"};null===p?p=[k]:p.push(k),h++}var b=P===h;if(!(y=y||b)){var x=h;if("boolean"!==typeof e){var N={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/1/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"};null===p?p=[N]:p.push(N),h++}b=x===h;if(!(y=y||b)){var O=h;if("number"!=typeof e||!isFinite(e)){var $={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/2/type",keyword:"type",params:{type:"number"},message:"must be number"};null===p?p=[$]:p.push($),h++}b=O===h;if(!(y=y||b)){var T=h;if(null!==e){var I={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/3/type",keyword:"type",params:{type:"null"},message:"must be null"};null===p?p=[I]:p.push(I),h++}b=T===h;y=y||b}}}if(y)h=u,null!==p&&(u?p.length=u:p=null);else{var L={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};null===p?p=[L]:p.push(L),h++}var z=c===h;if(!(d=d||z)){var D=h;if(h===D)if(e&&"object"==(0,r.A)(e)&&!Array.isArray(e))if(Object.keys(e).length>10){var j={instancePath:s,schemaPath:"#/anyOf/1/maxProperties",keyword:"maxProperties",params:{limit:10},message:"must NOT have more than 10 properties"};null===p?p=[j]:p.push(j),h++}else{for(var A in e){var E=h;if(h===h)if("string"===typeof A){if(i(A)>40){var V={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters",propertyName:A};null===p?p=[V]:p.push(V),h++}else if(i(A)<1){var _={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:A};null===p?p=[_]:p.push(_),h++}else if(!m.test(A)){var R={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:A};null===p?p=[R]:p.push(R),h++}}else{var U={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:A};null===p?p=[U]:p.push(U),h++}var F=E===h;if(!F){var q={instancePath:s,schemaPath:"#/anyOf/1/propertyNames",keyword:"propertyNames",params:{propertyName:A},message:"property name must be valid"};null===p?p=[q]:p.push(q),h++;break}}if(F)for(var Z in e){var C=h;if(l(e[Z],{instancePath:s+"/"+Z.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:e,parentDataProperty:Z,rootData:o})||(h=(p=null===p?l.errors:p.concat(l.errors)).length),!(C===h))break}}else{var M={instancePath:s,schemaPath:"#/anyOf/1/type",keyword:"type",params:{type:"object"},message:"must be object"};null===p?p=[M]:p.push(M),h++}z=D===h;d=d||z}if(!d){var S={instancePath:s,schemaPath:"#/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};return null===p?p=[S]:p.push(S),h++,g.errors=p,!1}return h=f,null!==p&&(f?p.length=f:p=null),g.errors=p,0===h}function P(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.instancePath,s=void 0===t?"":t;a.parentData,a.parentDataProperty;var n=a.rootData,o=void 0===n?e:n,p=null,h=0;if(0===h){if(!e||"object"!=(0,r.A)(e)||Array.isArray(e))return P.errors=[{instancePath:s,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;if(Object.keys(e).length>10)return P.errors=[{instancePath:s,schemaPath:"#/maxProperties",keyword:"maxProperties",params:{limit:10},message:"must NOT have more than 10 properties"}],!1;for(var f in e){var d=h;if(h===h)if("string"===typeof f){if(i(f)>40){var c={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters",propertyName:f};null===p?p=[c]:p.push(c),h++}else if(i(f)<1){var u={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:f};null===p?p=[u]:p.push(u),h++}else if(!m.test(f)){var y={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:f};null===p?p=[y]:p.push(y),h++}}else{var l={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:f};null===p?p=[l]:p.push(l),h++}var v=d===h;if(!v){var w={instancePath:s,schemaPath:"#/propertyNames",keyword:"propertyNames",params:{propertyName:f},message:"property name must be valid"};return null===p?p=[w]:p.push(w),h++,P.errors=p,!1}}if(v)for(var k in e){var b=h;if(g(e[k],{instancePath:s+"/"+k.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:e,parentDataProperty:k,rootData:o})||(h=(p=null===p?g.errors:p.concat(g.errors)).length),!(b===h))break}}return P.errors=p,0===h}function v(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.instancePath,s=void 0===t?"":t;a.parentData,a.parentDataProperty;var n=a.rootData,o=void 0===n?e:n,p=null,h=0;if(0===h){if(!e||"object"!=(0,r.A)(e)||Array.isArray(e))return v.errors=[{instancePath:s,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;var y;if(void 0===e.chainId&&(y="chainId")||void 0===e.address&&(y="address")||void 0===e.decimals&&(y="decimals")||void 0===e.name&&(y="name")||void 0===e.symbol&&(y="symbol"))return v.errors=[{instancePath:s,schemaPath:"#/required",keyword:"required",params:{missingProperty:y},message:"must have required property '"+y+"'"}],!1;var l=h;for(var g in e)if("chainId"!==g&&"address"!==g&&"decimals"!==g&&"name"!==g&&"symbol"!==g&&"logoURI"!==g&&"tags"!==g&&"extensions"!==g)return v.errors=[{instancePath:s,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:g},message:"must NOT have additional properties"}],!1;if(l===h){if(void 0!==e.chainId){var w=e.chainId,k=h;if("number"!=typeof w||w%1||isNaN(w)||!isFinite(w))return v.errors=[{instancePath:s+"/chainId",schemaPath:"#/properties/chainId/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(h===k&&"number"==typeof w&&isFinite(w)&&(w<1||isNaN(w)))return v.errors=[{instancePath:s+"/chainId",schemaPath:"#/properties/chainId/minimum",keyword:"minimum",params:{comparison:">=",limit:1},message:"must be >= 1"}],!1;var b=k===h}else b=!0;if(b){if(void 0!==e.address){var x=e.address,N=h;if(h===N){if("string"!==typeof x)return v.errors=[{instancePath:s+"/address",schemaPath:"#/properties/address/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(!d.test(x))return v.errors=[{instancePath:s+"/address",schemaPath:"#/properties/address/pattern",keyword:"pattern",params:{pattern:"^0x[a-fA-F0-9]{40}$"},message:'must match pattern "^0x[a-fA-F0-9]{40}$"'}],!1}b=N===h}else b=!0;if(b){if(void 0!==e.decimals){var O=e.decimals,$=h;if("number"!=typeof O||O%1||isNaN(O)||!isFinite(O))return v.errors=[{instancePath:s+"/decimals",schemaPath:"#/properties/decimals/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(h===$&&"number"==typeof O&&isFinite(O)){if(O>255||isNaN(O))return v.errors=[{instancePath:s+"/decimals",schemaPath:"#/properties/decimals/maximum",keyword:"maximum",params:{comparison:"<=",limit:255},message:"must be <= 255"}],!1;if(O<0||isNaN(O))return v.errors=[{instancePath:s+"/decimals",schemaPath:"#/properties/decimals/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1}b=$===h}else b=!0;if(b){if(void 0!==e.name){var T=e.name,I=h;if(h===I){if("string"!==typeof T)return v.errors=[{instancePath:s+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(i(T)>40)return v.errors=[{instancePath:s+"/name",schemaPath:"#/properties/name/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters"}],!1;if(i(T)<1)return v.errors=[{instancePath:s+"/name",schemaPath:"#/properties/name/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!c.test(T))return v.errors=[{instancePath:s+"/name",schemaPath:"#/properties/name/pattern",keyword:"pattern",params:{pattern:"^[ \\w.'+\\-%/\xc0-\xd6\xd8-\xf6\xf8-\xff:&\\[\\]\\(\\)]+$"},message:'must match pattern "^[ \\w.\'+\\-%/\xc0-\xd6\xd8-\xf6\xf8-\xff:&\\[\\]\\(\\)]+$"'}],!1}b=I===h}else b=!0;if(b){if(void 0!==e.symbol){var L=e.symbol,z=h;if(h===z){if("string"!==typeof L)return v.errors=[{instancePath:s+"/symbol",schemaPath:"#/properties/symbol/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(i(L)>20)return v.errors=[{instancePath:s+"/symbol",schemaPath:"#/properties/symbol/maxLength",keyword:"maxLength",params:{limit:20},message:"must NOT have more than 20 characters"}],!1;if(i(L)<1)return v.errors=[{instancePath:s+"/symbol",schemaPath:"#/properties/symbol/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!u.test(L))return v.errors=[{instancePath:s+"/symbol",schemaPath:"#/properties/symbol/pattern",keyword:"pattern",params:{pattern:"^[a-zA-Z0-9+\\-%/$.]+$"},message:'must match pattern "^[a-zA-Z0-9+\\-%/$.]+$"'}],!1}b=z===h}else b=!0;if(b){if(void 0!==e.logoURI){var D=e.logoURI,j=h;if(h===j&&h===j){if("string"!==typeof D)return v.errors=[{instancePath:s+"/logoURI",schemaPath:"#/properties/logoURI/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(!f(D))return v.errors=[{instancePath:s+"/logoURI",schemaPath:"#/properties/logoURI/format",keyword:"format",params:{format:"uri"},message:'must match format "uri"'}],!1}b=j===h}else b=!0;if(b){if(void 0!==e.tags){var A=e.tags,E=h;if(h===E){if(!Array.isArray(A))return v.errors=[{instancePath:s+"/tags",schemaPath:"#/properties/tags/type",keyword:"type",params:{type:"array"},message:"must be array"}],!1;if(A.length>10)return v.errors=[{instancePath:s+"/tags",schemaPath:"#/properties/tags/maxItems",keyword:"maxItems",params:{limit:10},message:"must NOT have more than 10 items"}],!1;for(var V=A.length,_=0;_<V;_++){var R=A[_],U=h;if(h===h){if("string"!==typeof R)return v.errors=[{instancePath:s+"/tags/"+_,schemaPath:"#/definitions/TagIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(i(R)>10)return v.errors=[{instancePath:s+"/tags/"+_,schemaPath:"#/definitions/TagIdentifier/maxLength",keyword:"maxLength",params:{limit:10},message:"must NOT have more than 10 characters"}],!1;if(i(R)<1)return v.errors=[{instancePath:s+"/tags/"+_,schemaPath:"#/definitions/TagIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!m.test(R))return v.errors=[{instancePath:s+"/tags/"+_,schemaPath:"#/definitions/TagIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"'}],!1}if(!(U===h))break}}b=E===h}else b=!0;if(b)if(void 0!==e.extensions){var F=h;P(e.extensions,{instancePath:s+"/extensions",parentData:e,parentDataProperty:"extensions",rootData:o})||(h=(p=null===p?P.errors:p.concat(P.errors)).length);b=F===h}else b=!0}}}}}}}}return v.errors=p,0===h}function w(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.instancePath,s=void 0===t?"":t;a.parentData,a.parentDataProperty;var d=a.rootData,c=void 0===d?e:d,u=null,y=0;if(0===y){if(!e||"object"!=(0,r.A)(e)||Array.isArray(e))return w.errors=[{instancePath:s,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;var l;if(void 0===e.tokens&&(l="tokens"))return w.errors=[{instancePath:s,schemaPath:"#/required",keyword:"required",params:{missingProperty:l},message:"must have required property '"+l+"'"}],!1;var g=y;for(var P in e)if("name"!==P&&"timestamp"!==P&&"version"!==P&&"tokens"!==P&&"keywords"!==P&&"tags"!==P&&"logoURI"!==P)return w.errors=[{instancePath:s,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:P},message:"must NOT have additional properties"}],!1;if(g===y){if(void 0!==e.name){var k=e.name,b=y;if(y===b){if("string"!==typeof k)return w.errors=[{instancePath:s+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(i(k)>30)return w.errors=[{instancePath:s+"/name",schemaPath:"#/properties/name/maxLength",keyword:"maxLength",params:{limit:30},message:"must NOT have more than 30 characters"}],!1;if(i(k)<1)return w.errors=[{instancePath:s+"/name",schemaPath:"#/properties/name/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!n.test(k))return w.errors=[{instancePath:s+"/name",schemaPath:"#/properties/name/pattern",keyword:"pattern",params:{pattern:"^[\\w ]+$"},message:'must match pattern "^[\\w ]+$"'}],!1}var x=b===y}else x=!0;if(x){if(void 0!==e.timestamp){var N=e.timestamp,O=y;if(y===O&&y===O){if("string"!==typeof N)return w.errors=[{instancePath:s+"/timestamp",schemaPath:"#/properties/timestamp/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(!h.validate(N))return w.errors=[{instancePath:s+"/timestamp",schemaPath:"#/properties/timestamp/format",keyword:"format",params:{format:"date-time"},message:'must match format "date-time"'}],!1}x=O===y}else x=!0;if(x){if(void 0!==e.version){var $=e.version,T=y;if(y===y){if(!$||"object"!=(0,r.A)($)||Array.isArray($))return w.errors=[{instancePath:s+"/version",schemaPath:"#/definitions/Version/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;var I;if(void 0===$.major&&(I="major")||void 0===$.minor&&(I="minor")||void 0===$.patch&&(I="patch"))return w.errors=[{instancePath:s+"/version",schemaPath:"#/definitions/Version/required",keyword:"required",params:{missingProperty:I},message:"must have required property '"+I+"'"}],!1;var L=y;for(var z in $)if("major"!==z&&"minor"!==z&&"patch"!==z)return w.errors=[{instancePath:s+"/version",schemaPath:"#/definitions/Version/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:z},message:"must NOT have additional properties"}],!1;if(L===y){if(void 0!==$.major){var D=$.major,j=y;if("number"!=typeof D||D%1||isNaN(D)||!isFinite(D))return w.errors=[{instancePath:s+"/version/major",schemaPath:"#/definitions/Version/properties/major/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(y===j&&"number"==typeof D&&isFinite(D)&&(D<0||isNaN(D)))return w.errors=[{instancePath:s+"/version/major",schemaPath:"#/definitions/Version/properties/major/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1;var A=j===y}else A=!0;if(A){if(void 0!==$.minor){var E=$.minor,V=y;if("number"!=typeof E||E%1||isNaN(E)||!isFinite(E))return w.errors=[{instancePath:s+"/version/minor",schemaPath:"#/definitions/Version/properties/minor/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(y===V&&"number"==typeof E&&isFinite(E)&&(E<0||isNaN(E)))return w.errors=[{instancePath:s+"/version/minor",schemaPath:"#/definitions/Version/properties/minor/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1;A=V===y}else A=!0;if(A)if(void 0!==$.patch){var _=$.patch,R=y;if("number"!=typeof _||_%1||isNaN(_)||!isFinite(_))return w.errors=[{instancePath:s+"/version/patch",schemaPath:"#/definitions/Version/properties/patch/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(y===R&&"number"==typeof _&&isFinite(_)&&(_<0||isNaN(_)))return w.errors=[{instancePath:s+"/version/patch",schemaPath:"#/definitions/Version/properties/patch/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1;A=R===y}else A=!0}}}x=T===y}else x=!0;if(x){if(void 0!==e.tokens){var U=e.tokens,F=y;if(y===F){if(!Array.isArray(U))return w.errors=[{instancePath:s+"/tokens",schemaPath:"#/properties/tokens/type",keyword:"type",params:{type:"array"},message:"must be array"}],!1;if(U.length>1e4)return w.errors=[{instancePath:s+"/tokens",schemaPath:"#/properties/tokens/maxItems",keyword:"maxItems",params:{limit:1e4},message:"must NOT have more than 10000 items"}],!1;if(U.length<1)return w.errors=[{instancePath:s+"/tokens",schemaPath:"#/properties/tokens/minItems",keyword:"minItems",params:{limit:1},message:"must NOT have fewer than 1 items"}],!1;for(var q=U.length,Z=0;Z<q;Z++){var C=y;if(v(U[Z],{instancePath:s+"/tokens/"+Z,parentData:U,parentDataProperty:Z,rootData:c})||(y=(u=null===u?v.errors:u.concat(v.errors)).length),!(C===y))break}}x=F===y}else x=!0;if(x){if(void 0!==e.keywords){var M=e.keywords,S=y;if(y===S){if(!Array.isArray(M))return w.errors=[{instancePath:s+"/keywords",schemaPath:"#/properties/keywords/type",keyword:"type",params:{type:"array"},message:"must be array"}],!1;if(M.length>20)return w.errors=[{instancePath:s+"/keywords",schemaPath:"#/properties/keywords/maxItems",keyword:"maxItems",params:{limit:20},message:"must NOT have more than 20 items"}],!1;for(var H=!0,W=M.length,Y=0;Y<W;Y++){var B=M[Y],G=y;if(y===G){if("string"!==typeof B)return w.errors=[{instancePath:s+"/keywords/"+Y,schemaPath:"#/properties/keywords/items/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(i(B)>20)return w.errors=[{instancePath:s+"/keywords/"+Y,schemaPath:"#/properties/keywords/items/maxLength",keyword:"maxLength",params:{limit:20},message:"must NOT have more than 20 characters"}],!1;if(i(B)<1)return w.errors=[{instancePath:s+"/keywords/"+Y,schemaPath:"#/properties/keywords/items/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!n.test(B))return w.errors=[{instancePath:s+"/keywords/"+Y,schemaPath:"#/properties/keywords/items/pattern",keyword:"pattern",params:{pattern:"^[\\w ]+$"},message:'must match pattern "^[\\w ]+$"'}],!1}if(!(H=G===y))break}if(H){var J,K=M.length;if(K>1)for(var Q={};K--;){var X=M[K];if("string"===typeof X){if("number"==typeof Q[X])return J=Q[X],w.errors=[{instancePath:s+"/keywords",schemaPath:"#/properties/keywords/uniqueItems",keyword:"uniqueItems",params:{i:K,j:J},message:"must NOT have duplicate items (items ## "+J+" and "+K+" are identical)"}],!1;Q[X]=K}}}}x=S===y}else x=!0;if(x){if(void 0!==e.tags){var ee=e.tags,ae=y;if(y===ae){if(!ee||"object"!=(0,r.A)(ee)||Array.isArray(ee))return w.errors=[{instancePath:s+"/tags",schemaPath:"#/properties/tags/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;if(Object.keys(ee).length>20)return w.errors=[{instancePath:s+"/tags",schemaPath:"#/properties/tags/maxProperties",keyword:"maxProperties",params:{limit:20},message:"must NOT have more than 20 properties"}],!1;for(var te in ee){var re=y;if(y===y)if("string"===typeof te){if(i(te)>10){var se={instancePath:s+"/tags",schemaPath:"#/definitions/TagIdentifier/maxLength",keyword:"maxLength",params:{limit:10},message:"must NOT have more than 10 characters",propertyName:te};null===u?u=[se]:u.push(se),y++}else if(i(te)<1){var ie={instancePath:s+"/tags",schemaPath:"#/definitions/TagIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:te};null===u?u=[ie]:u.push(ie),y++}else if(!m.test(te)){var ne={instancePath:s+"/tags",schemaPath:"#/definitions/TagIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:te};null===u?u=[ne]:u.push(ne),y++}}else{var me={instancePath:s+"/tags",schemaPath:"#/definitions/TagIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:te};null===u?u=[me]:u.push(me),y++}var oe=re===y;if(!oe){var pe={instancePath:s+"/tags",schemaPath:"#/properties/tags/propertyNames",keyword:"propertyNames",params:{propertyName:te},message:"property name must be valid"};return null===u?u=[pe]:u.push(pe),y++,w.errors=u,!1}}if(oe)for(var he in ee){var fe=ee[he],de=y;if(y===y){if(!fe||"object"!=(0,r.A)(fe)||Array.isArray(fe))return w.errors=[{instancePath:s+"/tags/"+he.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/definitions/TagDefinition/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;var ce=void 0;if(void 0===fe.name&&(ce="name")||void 0===fe.description&&(ce="description"))return w.errors=[{instancePath:s+"/tags/"+he.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/definitions/TagDefinition/required",keyword:"required",params:{missingProperty:ce},message:"must have required property '"+ce+"'"}],!1;var ue=y;for(var ye in fe)if("name"!==ye&&"description"!==ye)return w.errors=[{instancePath:s+"/tags/"+he.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/definitions/TagDefinition/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:ye},message:"must NOT have additional properties"}],!1;if(ue===y){if(void 0!==fe.name){var le=fe.name,ge=y;if(y===ge){if("string"!==typeof le)return w.errors=[{instancePath:s+"/tags/"+he.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(i(le)>20)return w.errors=[{instancePath:s+"/tags/"+he.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/maxLength",keyword:"maxLength",params:{limit:20},message:"must NOT have more than 20 characters"}],!1;if(i(le)<1)return w.errors=[{instancePath:s+"/tags/"+he.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!o.test(le))return w.errors=[{instancePath:s+"/tags/"+he.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/pattern",keyword:"pattern",params:{pattern:"^[ \\w]+$"},message:'must match pattern "^[ \\w]+$"'}],!1}var Pe=ge===y}else Pe=!0;if(Pe)if(void 0!==fe.description){var ve=fe.description,we=y;if(y===we){if("string"!==typeof ve)return w.errors=[{instancePath:s+"/tags/"+he.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(i(ve)>200)return w.errors=[{instancePath:s+"/tags/"+he.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/maxLength",keyword:"maxLength",params:{limit:200},message:"must NOT have more than 200 characters"}],!1;if(i(ve)<1)return w.errors=[{instancePath:s+"/tags/"+he.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!p.test(ve))return w.errors=[{instancePath:s+"/tags/"+he.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/pattern",keyword:"pattern",params:{pattern:"^[ \\w\\.,:]+$"},message:'must match pattern "^[ \\w\\.,:]+$"'}],!1}Pe=we===y}else Pe=!0}}if(!(de===y))break}}x=ae===y}else x=!0;if(x)if(void 0!==e.logoURI){var ke=e.logoURI,be=y;if(y===be&&y===be){if("string"!==typeof ke)return w.errors=[{instancePath:s+"/logoURI",schemaPath:"#/properties/logoURI/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(!f(ke))return w.errors=[{instancePath:s+"/logoURI",schemaPath:"#/properties/logoURI/format",keyword:"format",params:{format:"uri"},message:'must match format "uri"'}],!1}x=be===y}else x=!0}}}}}}}return w.errors=u,0===y}},23071:(e,a)=>{function t(e,a){return{validate:e,compare:a}}a.U9=void 0,a.U9={date:t(i,n),time:t(o,p),"date-time":t((function(e){const a=e.split(h);return 2===a.length&&i(a[0])&&o(a[1],!0)}),f),duration:/^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,uri:function(e){return d.test(e)&&c.test(e)},"uri-reference":/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,"uri-template":/^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,url:/^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,email:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,hostname:/^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,regex:function(e){if(P.test(e))return!1;try{return new RegExp(e),!0}catch(a){return!1}},uuid:/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,"json-pointer":/^(?:\/(?:[^~/]|~0|~1)*)*$/,"json-pointer-uri-fragment":/^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,"relative-json-pointer":/^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,byte:function(e){return u.lastIndex=0,u.test(e)},int32:{type:"number",validate:function(e){return Number.isInteger(e)&&e<=l&&e>=y}},int64:{type:"number",validate:function(e){return Number.isInteger(e)}},float:{type:"number",validate:g},double:{type:"number",validate:g},password:!0,binary:!0},a.U9,t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/,n),t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,p),t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,f),Object.keys(a.U9);const r=/^(\d\d\d\d)-(\d\d)-(\d\d)$/,s=[0,31,28,31,30,31,30,31,31,30,31,30,31];function i(e){const a=r.exec(e);if(!a)return!1;const t=+a[1],i=+a[2],n=+a[3];return i>=1&&i<=12&&n>=1&&n<=(2===i&&function(e){return e%4===0&&(e%100!==0||e%400===0)}(t)?29:s[i])}function n(e,a){if(e&&a)return e>a?1:e<a?-1:0}const m=/^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;function o(e,a){const t=m.exec(e);if(!t)return!1;const r=+t[1],s=+t[2],i=+t[3],n=t[5];return(r<=23&&s<=59&&i<=59||23===r&&59===s&&60===i)&&(!a||""!==n)}function p(e,a){if(!e||!a)return;const t=m.exec(e),r=m.exec(a);return t&&r?(e=t[1]+t[2]+t[3]+(t[4]||""))>(a=r[1]+r[2]+r[3]+(r[4]||""))?1:e<a?-1:0:void 0}const h=/t|\s/i;function f(e,a){if(!e||!a)return;const[t,r]=e.split(h),[s,i]=a.split(h),m=n(t,s);return void 0!==m?m||p(r,i):void 0}const d=/\/|:/,c=/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;const u=/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;const y=-(2**31),l=2**31-1;function g(){return!0}const P=/[^\\]\\Z/},87210:(e,a)=>{function t(e){const a=e.length;let t,r=0,s=0;for(;s<a;)r++,t=e.charCodeAt(s++),t>=55296&&t<=56319&&s<a&&(t=e.charCodeAt(s),56320===(64512&t)&&s++);return r}Object.defineProperty(a,"__esModule",{value:!0}),a.default=t,t.code='require("ajv/dist/runtime/ucs2length").default'}}]);