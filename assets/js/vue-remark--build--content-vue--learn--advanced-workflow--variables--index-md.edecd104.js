(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{MOfr:function(e,t,n){"use strict";n.r(t);var o=n("KHd+"),a=n("UQSp"),i=n("Kw5r");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var s={VueRemarkRoot:a.a},p=function(e){var t=e.options.components=e.options.components||{},n=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===r(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?t[e]=s[e]:n[e]=function(){return s[e]}}))},l=i.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",c={excerpt:null};var f=function(e){e.options[u]&&(e.options[u]=c),i.a.util.defineReactive(e.options,u,c),e.options.computed=l.computed({$frontmatter:function(){return e.options[u]}},e.options.computed)},d=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VueRemarkRoot",[e._t("/learn/linkbox"),e._v("\n# Workflow Variables\n"),n("p",[n("a",{attrs:{href:"/learn/advanced-workflow/"}},[e._v("Back to Advanced Workflow")])]),n("h2",{attrs:{id:"where-are-variables-used"}},[n("a",{attrs:{href:"#where-are-variables-used","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Where are variables used?")]),n("p",[e._v('Variables are used in the editor in the far right panel, under the section "Edit Step Actions".')]),n("h2",{attrs:{id:"how-to-identify-the-input-datasets-variables"}},[n("a",{attrs:{href:"#how-to-identify-the-input-datasets-variables","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("How to identify the input datasets variables?")]),n("p",[e._v("The screenshot allows us to visualize that the Tophat2 tool is selected and configured to expect 2 .fastq files. In the far right panel, when we search for 'Data input', the input variables appear right in front of it between quotes. (eg. "),n("strong",[e._v("RNA-Seq FASTQ file, forward reads")]),e._v(" Data input 'input1' (fastqsanger)). Therefore the input variables for .fastq files are input1 and input2.")]),n("div",{staticClass:"img-sizer",staticStyle:{width:"700px"}},[e._v("![workflow editor](/images/learn/workflow_editor_input_variables.png)")]),n("br"),e._v("*workflow editor showing the input variables names*\n"),n("h2",{attrs:{id:"usage"}},[n("a",{attrs:{href:"#usage","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Usage")]),n("p",[e._v("Variable syntax: "),n("code",{pre:!0},[e._v("#{input_name}")])]),n("p",[e._v("Full usage:")]),n("pre",[n("code",{pre:!0},[e._v('Proper syntax is:  #{input_file_variable | option 1 | option n}\n\n      where\n         input_file_variable = is the name of an module input variable ("input_name" is supported)\n         |  = the delimiter for added options. Optional if no options\n\n      options = basename, upper, lower\n         basename = keep all of the file name except the extension\n                    (everything before the final ".")\n         upper = force the file name to upper case\n         lower = force the file name to lower case\n')])]),n("h2",{attrs:{id:"rename-output-based-on-specified-content"}},[n("a",{attrs:{href:"#rename-output-based-on-specified-content","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Rename output based on specified content")]),n("p",[e._v("When you run a tool, the result will be new boxes on the 'History' panel with names like '42 Tophat2 on data 27 and data 26: accepted_hits'. It can be hard to keep track if you're running tens of samples using a workflow. You can rename the output based on the original input file name. In the section "),n("strong",[e._v("Edit Step Actions")]),e._v(", you select 'Rename Dataset', choose the output and provide a new name. The new names can contain variables in order to tag the output. The screenshot shows the "),n("strong",[e._v("accepted_hits")]),e._v(" output being renamed to "),n("strong",[n("code",{pre:!0},[e._v("#{input_name}")])]),e._v(". For example, if your input filename is "),n("strong",[e._v("sample42.fastq")]),e._v(" the accepted_hits output will be named "),n("strong",[e._v("sample42.fastq.bam")]),e._v(".")]),n("br"),n("div",{staticClass:"img-sizer",staticStyle:{width:"700px"}},[e._v("![workflow editor](/images/learn/workflow_editor_input_variables_renaming.png)")]),n("br"),e._v("*workflow editor showing the use of input variables in the renaming tool*\n"),n("h2",{attrs:{id:"source"}},[n("a",{attrs:{href:"#source","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Source")]),n("p",[n("a",{attrs:{href:"https://github.com/galaxyproject/galaxy/blob/dev/lib/galaxy/jobs/actions/post.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/galaxyproject/galaxy/blob/dev/lib/galaxy/jobs/actions/post.py")])])],2)}),[],!1,null,null,null);"function"==typeof p&&p(d),"function"==typeof f&&f(d);t.default=d.exports},UQSp:function(e,t,n){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);