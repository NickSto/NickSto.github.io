(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{C6hI:function(e,t,o){"use strict";o.r(t);var i=o("KHd+"),a=o("UQSp"),n=o("Kw5r");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.a.config.optionMergeStrategies;var r={VueRemarkRoot:a.a},l=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(r).forEach((function(e){"object"===s(r[e])&&"function"==typeof r[e].render||"function"==typeof r[e]&&"function"==typeof r[e].options.render?t[e]=r[e]:o[e]=function(){return r[e]}}))},c=n.a.config.optionMergeStrategies,h="__vueRemarkFrontMatter",p={excerpt:null,title:"Data Splitting and Parallelism"};var u=function(e){e.options[h]&&(e.options[h]=p),n.a.util.defineReactive(e.options,h,p),e.options.computed=c.computed({$frontmatter:function(){return e.options[h]}},e.options.computed)},d=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("div",{staticClass:"toc-wrapper col-md-3"},[o("ul",[o("li",[o("a",{attrs:{href:"#description"}},[e._v("Description")])]),o("li",[o("a",{attrs:{href:"#audience"}},[e._v("Audience")])]),o("li",[o("a",{attrs:{href:"#when-and-where"}},[e._v("When and Where")])]),o("li",[o("a",{attrs:{href:"#who-is-participating"}},[e._v("Who is Participating")])]),o("li",[o("a",{attrs:{href:"#conclusions"}},[e._v("Conclusions")])]),o("li",[o("a",{attrs:{href:"#questions"}},[e._v("Questions?")])])])]),o("div",{staticClass:"body-wrapper col-md-9"},[e._t("/events/gcc2015/header"),o("div",{staticClass:"left"},[o("a",{attrs:{href:"/events/gcc2015/bofs/"}},[o("img",{attrs:{src:"/images/logos/GCC2015BoFs300.png",alt:"GCC2015 BoFs!",width:"160"}})])]),o("p",[e._v("This page describes the "),o("strong",[e._v("Data Splitting and Parallelism")]),o("a",{attrs:{href:"/events/gcc2015/bofs/"}},[e._v("Birds of a Feather")]),e._v(" meetup being held at "),o("a",{attrs:{href:"http://gcc2015.tsl.ac.uk/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GCC2015")]),e._v(".")]),o("p",[e._v("When: Tuesday, 7 July, 12:30 (lunch)")]),o("p",[e._v("Where:: Watson Room, JICCC")]),o("p",[e._v("Contact:: Peter Cock "),o("a",{attrs:{href:"http://twitter.com/pjacock",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://twitter.com/pjacock")])]),o("h2",{attrs:{id:"description"}},[o("a",{attrs:{href:"#description","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Description")]),o("p",[e._v("Galaxy has basic support for task parallelism (not enabled by default) which is transparent to the user, where a single job is split up into child jobs, and whose output is then merged. This works at the datatype level with split and merge methods.")]),o("p",[e._v("Galaxy now also has support for dataset collections, where many similar ideas apply for dividing large files into collections of smaller files, and merging collections of small files into single large files.")]),o("p",[e._v("This will be an informal gathering of developers to brainstorm this topic and expand on past galaxy-dev mailing list discussions.")]),o("h2",{attrs:{id:"audience"}},[o("a",{attrs:{href:"#audience","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Audience")]),o("p",[e._v("Developers")]),o("h2",{attrs:{id:"when-and-where"}},[o("a",{attrs:{href:"#when-and-where","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("When and Where")]),o("p",[e._v("We will meet on Tuesday, 7 July, at 12:30 (lunch) in the Watson Room, inside JICCC.")]),o("h2",{attrs:{id:"who-is-participating"}},[o("a",{attrs:{href:"#who-is-participating","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Who is Participating")]),o("p",[e._v("If you are interested, please add your name below and/or send an email to "),o("a",{attrs:{href:"mailto:p.j.a.cock@googlemail.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Peter Cock")]),e._v(".")]),o("ul",[o("li",[e._v("Peter Cock")]),o("li",[e._v("John Chilton")]),o("li",[e._v("Marco Albuquerque")]),o("li",[e._v("Jorrit Boekel")]),o("li",[e._v("Antonio Miguel Espinosa Morales")]),o("li",[e._v("Gonzalo Vera")]),o("li",[e._v("Dustin Cram")]),o("li",[e._v("Dannon Baker")]),o("li",[e._v("James E Johnson")]),o("li",[e._v("Tazro Ohta")]),o("li",[e._v("David Kovalic")]),o("li",[e._v("Aaron Petkau")]),o("li",[e._v("(plus about five more people whose names didn't get recorded)")])]),o("h2",{attrs:{id:"conclusions"}},[o("a",{attrs:{href:"#conclusions","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Conclusions")]),o("p",[e._v("Existing basic parallelism:")]),o("ul",[o("li",[e._v("Lots of people in the room are using the existing basic parallelism already (good news!)")]),o("li",[e._v("The benefits depend on the tools and the cluster usage. The Galaxy Main cluster is under full load, so using it there would only slow things down, and therefore it gets less tested.")]),o("li",[e._v("However, there are some functional test for this so it shouldn't break with an official Galaxy Release.")]),o("li",[e._v("needs to be better documented on the wiki (for both admins, and tool authors).")]),o("li",[e._v("Should be easy to enable parallelism in the Cloud images (to max out your cluster).")]),o("li",[e._v("Automatic retries on  error would be particularly useful with the child jobs.")]),o("li",[e._v("child jobs should be done as cluster array jobs if possible.")]),o("li",[e._v("John Chilton and Dannon Baker are effectively responsible for this area of the code, and would look at pull requests.")]),o("li",[e._v("Dynamic job splitting rules like those for Dynamics Job Destination feature might be nice, but complicated - and in non-trivial cases splitting can change the results. The tool author should be able to limit this (e.g. provide a range of splitting options).")])]),o("p",[e._v("Collections offer similar splitting and merging but this is explicit to the user (the existing parallelism is transparent to the user). This might be used with the wish-list workflow within a workflow?")]),o("p",[e._v("Note that because the parallelism functionality means each tool does a split/run/merge, a long workflow means repeated splitting and merging (with associated disk IO overhead). On the other hand, with the collection approach there would be one split at the start to convert to a collection, and at the end one merge to reduce the collection back to a single file.")]),o("p",[e._v("Much like existing format conversion, where datatypes have split and merge methods, it would be nice to export this as pseudo tools within the Galaxy interface. See also similar functionality with collections.")]),o("h2",{attrs:{id:"questions"}},[o("a",{attrs:{href:"#questions","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Questions?")]),o("p",[e._v("Send them to "),o("a",{attrs:{href:"mailto:p.j.a.cock@googlemail.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Peter Cock")]),e._v(".")])],2)])}),[],!1,null,null,null);"function"==typeof l&&l(d),"function"==typeof u&&u(d);t.default=d.exports},UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);