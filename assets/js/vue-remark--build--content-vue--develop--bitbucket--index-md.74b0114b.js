(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},vIgg:function(e,t,o){"use strict";o.r(t);var n=o("KHd+"),r=o("UQSp"),a=o("Kw5r");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var s={VueRemarkRoot:r.a},u=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===i(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?t[e]=s[e]:o[e]=function(){return s[e]}}))},l=a.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",c={excerpt:null,title:"Bitbucket repositories"};var f=function(e){e.options[p]&&(e.options[p]=c),a.a.util.defineReactive(e.options,p,c),e.options.computed=l.computed({$frontmatter:function(){return e.options[p]}},e.options.computed)},y=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[e._t("/develop/linkbox"),o("p",[e._v("Galaxy Team maintains two main repositories of Galaxy for different purposes:")]),o("ul",[o("li",[o("a",{attrs:{href:"https://bitbucket.org/galaxy/galaxy-central",target:"_blank",rel:"noopener noreferrer"}},[e._v("galaxy-central")]),e._v(" which is the main development repository and Galaxy Team members commit their work here. It should not contain any major errors but is definitely discouraged for running in a production environment. If you have created piece of code for Galaxy that you would like to share with the community please create a "),o("a",{attrs:{href:"https://bitbucket.org/galaxy/galaxy-central/pull-requests",target:"_blank",rel:"noopener noreferrer"}},[e._v("pull request")]),e._v(" in the galaxy-central repository and the Galaxy Team members will review your code and eventually merge it with the code base.")]),o("li",[o("a",{attrs:{href:"https://bitbucket.org/galaxy/galaxy-dist",target:"_blank",rel:"noopener noreferrer"}},[e._v("galaxy-dist")]),e._v(" is the distribution repository that is being updated every release and the only things that are going in the repo in between the releases are major bugfixes. Run this version of galaxy if you want stability and confident support. Please don't create pull requests here.")])])],2)}),[],!1,null,null,null);"function"==typeof u&&u(y),"function"==typeof f&&f(y);t.default=y.exports}}]);