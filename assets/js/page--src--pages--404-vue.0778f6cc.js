(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"7l0S":function(e,t,n){"use strict";n.r(t);var r,i=n("h4VS"),o=(n("Kz25"),n("07d7"),n("PKPk"),n("3bBZ"),n("Al62")),a={metaInfo:function(){return{title:this.$page.main.title}},mounted:function(){var e=new URL(window.location.href);e.pathname=Object(o.gridifyPath)(e.pathname),window.location.href!==e.href&&(console.log(Object(o.repr)(r||(r=Object(i.a)(["Redirecting to slugified url ",""])),e.href)),Object(o.doRedirect)(e.href))}},s=n("KHd+"),c=null,l=Object(s.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("Layout",[t("h1",{staticClass:"page-title"},[this._v(this._s(this.$page.main.title))]),t("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"markdown",domProps:{innerHTML:this._s(this.$page.main.content)}})])}),[],!1,null,null,null);"function"==typeof c&&c(l);t.default=l.exports},Al62:function(e,t,n){var r,i,o,a=n("lwsE").default,s=n("W8MJ").default,c=n("cDf5").default,l=n("J4zp").default,u=n("Y3SK").default,f=n("VkAN").default,h=n("RIqP").default;n("oVuX"),n("yXV3"),n("YGK4"),n("07d7"),n("PKPk"),n("3bBZ"),n("ma9I"),n("TeQF"),n("EnZy"),n("rB9j"),n("DQNa"),n("+2oP"),n("rMz7"),n("SYor"),n("2B1R"),n("LKBx"),n("hDyC"),n("sMBO"),n("T63A"),n("QWBl"),n("FZtP");var g,p=n("Po9p"),d=n("33yf"),v=n("MCLT"),m=n("X0/w"),y=n("v2xc"),x=n("FDkO");function w(e){if(void 0===e.length&&0==(arguments.length<=1?0:arguments.length-1))return v.inspect(e);for(var t=[],n=0;n<e.length||n<(arguments.length<=1?0:arguments.length-1);n++)n<e.length&&t.push(e[n]),n<(arguments.length<=1?0:arguments.length-1)&&t.push(v.inspect(n+1<1||arguments.length<=n+1?void 0:arguments[n+1]));return t.join("")}function S(e){return new Date(e+"T00:00:00")}function k(){if(g&&g.locale)return g.locale;if("undefined"!=typeof Intl&&Intl.DateTimeFormat){var e=Intl.DateTimeFormat();if(e.resolvedOptions){var t=e.resolvedOptions();if(t.locale)return t.locale}}if("undefined"!=typeof navigator){if(navigator.languages&&navigator.languages.length>0)return navigator.languages[0];for(var n=0,r=["userLanguage","browserLanguage","systemLanguage","language"];n<r.length;n++){var i=r[n];if(navigator[i])return navigator[i]}}return"en-US"}function b(e,t){return 0===e.indexOf(t)?e.slice(t.length):e}function M(e,t){var n=e.length-t.length;return e.slice(n)===t?e.slice(0,n):e}function O(e,t){return 0===e.indexOf(t)}function D(e,t){return e.indexOf(t)===e.length-t.length}function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,n=t*(1+Math.floor(e.length/t));return e.padEnd(n)}p&&p.existsSync&&p.existsSync("config.json")&&(g=JSON.parse(p.readFileSync("config.json","utf8"))),e.exports.repr=w,e.exports.contains=function(e,t){return!!(e.indexOf(t)>-1)},e.exports.getUnion=function(e,t){var n=new Set([].concat(h(e),h(t)));return h(n)},e.exports.getIntersection=function(e,t){var n=new Set(e),r=new Set(t),i=new Set(h(n).filter((function(e){return r.has(e)})));return h(i)},e.exports.splitlines=function(e){return e.split(/\r\n|\r|\n/)},e.exports.strToDate=S,e.exports.dateToStr=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"iso",n=k(),r={};switch(t){case"iso":return e.toISOString().slice(0,10);case"long":r={year:"numeric",month:"long",day:"numeric"};break;case"D MMMM YYYY":n="en-GB",r={year:"numeric",month:"long",day:"numeric"};break;case"D MMMM":r={month:"long",day:"numeric"};break;case"MMMM":r={month:"long"};break;case"MMMM YYYY":r={year:"numeric",month:"long"}}return e.toLocaleDateString(n,r)},e.exports.dateStrDiff=function(e,t){var n=S(e),r=S(t);return Math.round((n-r)/1e3/60/60/24)},e.exports.getLocale=k,e.exports.getImage=function(e,t){if(!e)return e;if(O(e,"/src/images/"))return e.substring(4);if(O(e,"/images/"))return e;var n=e.split("/"),i=n[n.length-1],o=t[i];return o||(console.error(w(r||(r=f(["Image "," not found in asset store."])),i)),e)},e.exports.mdToHtml=function(e){var t;return m().use(y).process(e,(function(e,n){e?console.error(e):t=String(n)})),b(M(t.trim(),"</p>"),"<p>")},e.exports.gridifyPath=function(e){var t=e.split(d.sep),n=t[t.length-1];return D(n,".html")&&(t[t.length-1]=M(n,".html"),t.push("")),t.map(x).join(d.sep)},e.exports.matchesPrefixes=function(e,t){var n,r=u(t);try{for(r.s();!(n=r.n()).done;){var i=n.value;if(0===e.indexOf(i))return!0}}catch(e){r.e(e)}finally{r.f()}return!1},e.exports.ensurePrefix=function(e,t){return e.startsWith(t)?e:t+e},e.exports.rmPrefix=b,e.exports.rmSuffix=M,e.exports.startswith=O,e.exports.endswith=D,e.exports.titlecase=function(e){return e.charAt(0).toUpperCase()+e.substring(1,e.length)},e.exports.spaceTab=L,e.exports.rmPathPrefix=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=e.startsWith("/");r&&t++,null===n&&(n=r);var i=e.split("/"),o=i.slice(t).join("/");return n?"/"+o:o},e.exports.getFilesDeep=function e(t){var n,r=[],i=p.readdirSync(t,{withFileTypes:!0}),o=u(i);try{for(o.s();!(n=o.n()).done;){var a=n.value,s=d.join(t,a.name);if(a.isDirectory()){var c=e(s);r=r.concat(c)}else a.isFile()&&r.push(s)}}catch(e){o.e(e)}finally{o.f()}return r},e.exports.getFilesShallow=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=[],i=p.readdirSync(e,{withFileTypes:!0}),o=u(i);try{for(o.s();!(t=o.n()).done;){var a=t.value;(a.isFile()||a.isSymbolicLink())&&(null!==n&&d.parse(a.name).ext===n||r.push(a.name))}}catch(e){o.e(e)}finally{o.f()}return r},e.exports.doRedirect=function(e){window.location.href=e},e.exports.describeObject=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,r=0,i=Object.entries(e);r<i.length;r++){var o=l(i[r],2),a=o[0],s=o[1],u=c(s),f=void 0;f="string"===u?v.inspect(s):"number"===u||"boolean"===u||null===s?s:"(".concat(u,")");var h=L(a+":"),g="".concat(t).concat(h).concat(f),p=void 0;p=g.length>n?g.substring(0,n-1)+"…":g,console.log(p)}};var P={}.toString;function j(e){var t=P.call(e),n=t.split(" ");return 2!==n.length?(console.error(w(i||(i=f(["Wrong number of fields in toString: ",""])),n)),null):D(n[1],"]")?n[1].slice(0,n[1].length-1):(console.error(w(o||(o=f(["Unexpected toString value - no ending ']': ",""])),t)),null)}e.exports.getType=j,e.exports.findKey=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;if(!(r<=0))for(var i=0,o=Object.entries(t);i<o.length;i++){var a=l(o[i],2),s=a[0],c=a[1];if(s===n)return c;if("Object"===j(c))return e(c,n,r-1);if("Array"===j(c)){var f,h=u(c);try{for(h.s();!(f=h.n()).done;){var g=f.value,p=e(g,n,r-1);if("Undefined"!==j(p))return p}}catch(e){h.e(e)}finally{h.f()}}}},e.exports.logTree=function e(t,n,r){var i="";t.id&&(i=' id="'.concat(t.id));var o="";t.className&&(o=' class="'.concat(t.className,'"')),console.log("".concat(r,"<").concat(t.tagName.toLowerCase()).concat(i).concat(o,">")),r="  "+r,(n-=1)>0?t.children.forEach((function(t){return e(t,n,r)})):console.log("".concat(r,"  (recursion limit)"))};var T=function(){"use strict";function e(t){a(this,e),this.path=t}return s(e,[{key:"exists",value:function(){if(p.existsSync(this.path))return!0;try{return p.lstatSync(this.path),!0}catch(e){return!1}}},{key:"type",value:function(){if(!this.exists())return"nonexistent";var e;try{e=p.statSync(this.path)}catch(e){if("ENOENT"===e.code){if(this.isLink())return"brokenlink";throw console.error("Unexpected filesystem entry ".concat(this.path)),e}throw e}if(e.isFile())return"file";if(e.isDirectory())return"dir";if(e.isSocket())return"socket";if(e.isBlockDevice())return"block";if(e.isCharacterDevice())return"char";if(e.isFIFO())return"fifo";throw"Unexpected path type: ".concat(this.path)}},{key:"isLink",value:function(){if(this.exists()&&p.lstatSync(this.path).isSymbolicLink())return!0;return!1}},{key:"mtime",value:function(){return this.exists()?p.lstatSync(this.path).mtimeMs:null}},{key:"size",value:function(){return this.exists()?p.lstatSync(this.path).size:null}}],[{key:"exists",value:function(e){return new this(e).exists()}},{key:"type",value:function(e){return new this(e).type()}},{key:"isLink",value:function(e){return new this(e).isLink()}},{key:"mtime",value:function(e){return new this(e).mtime()}},{key:"size",value:function(e){return new this(e).size()}}]),e}();e.exports.PathInfo=T}}]);