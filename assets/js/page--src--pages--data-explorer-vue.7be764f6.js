(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"M+GB":function(t,e,a){},T1wy:function(t,e,a){"use strict";a("M+GB")},ZD8Q:function(t,e,a){"use strict";var s={props:{article:{type:Object,required:!0}}},l=a("KHd+"),r=Object(l.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"date text-nowrap"},[t._v(t._s(t.article.date))]),a("td",{staticClass:"title"},[t.article.external_url?a("a",{attrs:{href:t.article.external_url}},[t._v(t._s(t.article.title))]):a("g-link",{staticClass:"read",attrs:{to:t.article.path}},[t._v(t._s(t.article.title))])],1),a("td",{staticClass:"tease"},[t._v(t._s(t.article.tease))])])}),[],!1,null,null,null);e.a=r.exports},jLHJ:function(t,e,a){"use strict";a.r(e);var s={components:{ArticleTable:a("ZD8Q").a},metaInfo:{title:"Standalones"}},l=(a("T1wy"),a("KHd+")),r=null,n=Object(l.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("h1",{attrs:{id:"page-title"}},[t._v("Data explorer")]),a("p",[t._v("Test different queries and examine the results.")]),a("table",{staticClass:"table-striped"},[a("thead",[a("tr",[a("th",[t._v("Category")]),a("th",[t._v("Date")]),a("th",[t._v("Path")]),a("th",[t._v("Title")])])]),a("tbody",t._l(t.$page.allArticle.edges,(function(e){return a("tr",{key:e.node.id},[a("td",{staticClass:"category"},[t._v(t._s(e.node.category))]),a("td",{staticClass:"date text-nowrap"},[t._v(t._s(e.node.date))]),a("td",{staticClass:"path"},[a("g-link",{attrs:{to:e.node.path}},[t._v(t._s(e.node.path))])],1),a("td",{staticClass:"title"},[e.node.external_url?a("a",{attrs:{href:e.node.external_url}},[t._v(t._s(e.node.title))]):a("g-link",{staticClass:"read",attrs:{to:e.node.path}},[t._v(t._s(e.node.title))])],1),a("td",{staticClass:"tease"},[t._v(t._s(e.node.tease))])])})),0)])])}),[],!1,null,"91372f02",null);"function"==typeof r&&r(n);e.default=n.exports}}]);