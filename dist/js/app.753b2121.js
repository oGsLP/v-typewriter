(function(t){function e(e){for(var a,o,i=e[0],l=e[1],p=e[2],u=0,d=[];u<i.length;u++)o=i[u],n[o]&&d.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(d.length)d.shift()();return s.push.apply(s,p||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,i=1;i<r.length;i++){var l=r[i];0!==n[l]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},n={app:0},s=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var p=0;p<i.length;p++)e(i[p]);var c=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("9b82"),n=r.n(a);n.a},"43fd":function(t,e,r){e=t.exports=r("690e")(!1),e.push([t.i,"#app-for-example{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;font-weight:700;font-size:24px;width:90%;margin:20px 5% 0;height:auto}#tw-title{width:60%;margin-left:20%;font-weight:700;height:50px;padding-bottom:20px;margin-bottom:20px;border-bottom:2px solid #000}#tw-title h1{margin:0;width:auto}.tw-part{padding:15px;width:20%;height:220px;margin:15px;display:inline-block;vertical-align:middle;border:2px solid #000;border-radius:10px}.comments{color:green}.keyword{color:#639}.highlight{color:#2a859b}#tw-author{border:2px solid #00008b}#tw-api,#tw-author{height:200px;width:100%}#tw-api{border:2px solid #a9a9a9}",""])},"56d7":function(t,e,r){"use strict";r.r(e);r("dac5"),r("6e26"),r("9604"),r("df67");var a=r("6e6d"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app-for-example"}},[r("div",{attrs:{id:"tw-title"}},[r("v-typewriter",{attrs:{interval:250,delay:1e3,align:"center",loop:"",cursor:"|"}},[r("h1",[t._v("V-typewriter")])])],1),t._m(0),r("v-typewriter",{staticClass:"tw-part"},[r("span",{staticClass:"comments"},[t._v("// Simple Example")]),r("br"),r("br"),r("span",{staticClass:"keyword"},[t._v("I'm v-typewriter")]),r("br"),r("span",{staticClass:"keyword"},[t._v("Type")]),r("span",[t._v(" Type")]),r("span",{staticClass:"highlight"},[t._v(" Type!")])]),r("v-typewriter",{staticClass:"tw-part",attrs:{align:"center",cursor:"$",rollback:""}},[r("span",{staticClass:"comments"},[t._v("// Rollback Example")]),r("br"),r("br"),r("span",{staticClass:"keyword"},[t._v("I'm v-typewriter")]),r("br"),r("span",{staticClass:"keyword"},[t._v("Type")]),r("span",[t._v(" Type")]),r("span",{staticClass:"highlight"},[t._v(" Rollback!")])]),r("v-typewriter",{staticClass:"tw-part",attrs:{align:"center",cursor:"~",loop:""}},[r("span",{staticClass:"comments"},[t._v("// Loop Example")]),r("br"),r("br"),r("span",{staticClass:"keyword"},[t._v("I'm v-typewriter")]),r("br"),r("span",{staticClass:"keyword"},[t._v("Type")]),r("span",[t._v(" Type")]),r("span",{staticClass:"highlight"},[t._v(" Loop!")])]),r("v-typewriter",{staticClass:"tw-part",attrs:{interval:60,delay:5e3,cursor:"_",align:"right",rollback:"",loop:""}},[r("span",{staticClass:"comments"},[t._v("/**")]),r("br"),r("span",{staticClass:"comments"},[t._v("* It will rollback")]),r("br"),r("span",{staticClass:"comments"},[t._v("* and loop")]),r("br"),r("span",{staticClass:"comments"},[t._v("*/")]),r("br"),r("br"),r("span",{staticClass:"keyword"},[t._v("Loopppp...")]),r("span",[t._v(" Start")]),r("br"),r("span",{staticClass:"keyword"},[t._v("Begin")]),r("span",[t._v(" Rollbackkkk...")])]),t._m(1)],1)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"tw-author"}},[r("h1",[t._v("author info ..")]),r("h1",[t._v("to do..")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"tw-api"}},[r("h1",[t._v("api ..")]),r("h1",[t._v("to do..")])])}],o={name:"app"},i=o,l=(r("034f"),r("6691")),p=Object(l["a"])(i,n,s,!1,null,null,null),c=p.exports,u=r("f671"),d=r.n(u);a["a"].config.productionTip=!1,a["a"].use(d.a),new a["a"]({render:function(t){return t(c)}}).$mount("#app")},"9b82":function(t,e,r){var a=r("43fd");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=r("85cb").default;n("25f97e18",a,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.753b2121.js.map