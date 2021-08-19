(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{UQSp:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},bm5C:function(t,e,o){"use strict";o.r(e);var a=o("KHd+"),n=o("UQSp"),i=o("Kw5r");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.a.config.optionMergeStrategies;var s={VueRemarkRoot:n.a},l=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(s).forEach((function(t){"object"===r(s[t])&&"function"==typeof s[t].render||"function"==typeof s[t]&&"function"==typeof s[t].options.render?e[t]=s[t]:o[t]=function(){return s[t]}}))},d=i.a.config.optionMergeStrategies,v="__vueRemarkFrontMatter",_={excerpt:null,title:"Basic Workflow Editing"};var c=function(t){t.options[v]&&(t.options[v]=_),i.a.util.defineReactive(t.options,v,_),t.options.computed=d.computed({$frontmatter:function(){return t.options[v]}},t.options.computed)},h=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[o("div",{staticClass:"toc-wrapper col-md-3"},[o("ul",[o("li",[o("p",[o("a",{attrs:{href:"#why-edit-a-workflow"}},[t._v("Why edit a workflow?")])])]),o("li",[o("p",[o("a",{attrs:{href:"#where-is-the-option"}},[t._v("Where is the option?")])])]),o("li",[o("p",[o("a",{attrs:{href:"#editor-layout"}},[t._v("Editor Layout")])]),o("ul",[o("li",[o("a",{attrs:{href:"#workflow-canvas"}},[t._v("Workflow Canvas")])]),o("li",[o("a",{attrs:{href:"#navigation"}},[t._v("Navigation")])]),o("li",[o("a",{attrs:{href:"#editor-menu"}},[t._v("Editor Menu")])]),o("li",[o("a",{attrs:{href:"#left-tools-panel"}},[t._v("Left Tools Panel")])]),o("li",[o("a",{attrs:{href:"#toolbox-details"}},[t._v("ToolBox Details")])]),o("li",[o("a",{attrs:{href:"#right-details-panel"}},[t._v("Right Details Panel")])])])]),o("li",[o("p",[o("a",{attrs:{href:"#key-functions"}},[t._v("Key Functions")])]),o("ul",[o("li",[o("a",{attrs:{href:"#adding-inputs"}},[t._v("Adding Inputs")])]),o("li",[o("a",{attrs:{href:"#noodle-y-connections"}},[t._v("Noodle-y Connections")])])])]),o("li",[o("p",[o("a",{attrs:{href:"#3-most-useful-edits"}},[t._v("3 Most Useful Edits")])]),o("ul",[o("li",[o("a",{attrs:{href:"#label-inputs"}},[t._v("Label Inputs")])]),o("li",[o("a",{attrs:{href:"#hidden-datasets"}},[t._v("Hidden Datasets")])]),o("li",[o("a",{attrs:{href:"#assign-datatype"}},[t._v("Assign Datatype")])])])])])]),o("div",{staticClass:"body-wrapper col-md-9"},[t._t("/learn/linkbox"),o("br"),t._v("\n[Back to Advanced Workflow](/src/learn/advanced-workflow/index.md)\n"),o("br"),o("h2",{attrs:{id:"why-edit-a-workflow"}},[o("a",{attrs:{href:"#why-edit-a-workflow","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Why edit a workflow?")]),o("p",[t._v("In many cases, a workflow can be directly "),o("a",{attrs:{href:"/learn/advanced-workflow/extract/"}},[t._v("extracted from a history")]),t._v(" and run without any changes.")]),o("p",[t._v("However, in certain cases, tools require that small changes are edited in to ensure proper output → input connections. Plus creating a new workflow from an existing workflow is a quick way to develop a new, but similar, process. Knowing how to perform "),o("em",[t._v("basic workflow editing")]),t._v(" is a valuable skill for all "),o("a",{attrs:{href:"/use/"}},[t._v("Galaxy")]),t._v(" users.")]),o("p",[o("strong",[t._v("In short")]),t._v(": even just learning how to make small changes makes workflows accessible to everyone")]),o("h2",{attrs:{id:"where-is-the-option"}},[o("a",{attrs:{href:"#where-is-the-option","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Where is the option?")]),o("div",{staticClass:"left"},[o("img",{attrs:{src:"/images/learn/workflow_menu_edit_nav.png",alt:"workflow menu edit",width:"500"}})]),o("p",[t._v("Open "),o("strong",[o("a",{attrs:{href:"http://usegalaxy.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("usegalaxy.org")])]),t._v(" (or any "),o("a",{attrs:{href:"/use/"}},[t._v("Galaxy")]),t._v(") from any view.\n"),o("br"),o("br"),o("br"),o("strong",[t._v("1.")]),t._v(" Click on "),o("strong",[t._v("Workflow")]),t._v(" in the top menu bar.\n"),o("br"),o("br"),o("strong",[t._v("2.")]),t._v(" Click on any existing workflow's button to reveal the workflow pull-down menu.\n"),o("br"),o("br"),o("strong",[t._v("3.")]),t._v(" Select "),o("strong",[t._v("Edit")]),t._v(" from the menu.\n"),o("br"),o("br"),o("br"),o("em",[t._v("Select "),o("strong",[t._v("Copy")]),t._v(" first, then "),o("strong",[t._v("Rename")]),t._v(" and "),o("strong",[t._v("Edit")]),t._v(" the copy if you are using an existing workflow to create a new workflow.")]),o("br")]),o("br"),o("h2",{attrs:{id:"editor-layout"}},[o("a",{attrs:{href:"#editor-layout","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Editor Layout")]),o("p",[t._v("Selecting "),o("strong",[t._v("Edit")]),t._v(" opens the workflow editor view. Each of the major landmarks is used for a specific purpose and is defined on this wiki page. Below is the "),o("em",[t._v("annotated")]),t._v(" view. For a look at the view "),o("em",[t._v("without annotation")]),t._v(", click "),o("strong",[o("a",{attrs:{href:"/learn/advanced-workflow/basic-editing/workflow-editor-unannotated/"}},[t._v("here")])]),t._v(".\n"),o("br"),o("br")]),o("div",{staticClass:"img-sizer",staticStyle:{width:"900px"}},[t._v("![workflow editor view annotated](/images/learn/workflow_editor_overview_annotated.png)")]),o("br"),o("br"),o("h3",{attrs:{id:"workflow-canvas"}},[o("a",{attrs:{href:"#workflow-canvas","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Workflow Canvas")]),o("p",[t._v("The "),o("em",[t._v("canvas")]),t._v(" is where "),o("em",[t._v("inputs")]),t._v(", "),o("em",[t._v("tools")]),t._v(", and "),o("em",[t._v("noodles")]),t._v(" are added and connected as you build and modify your workflow. If content is on your canvas, it is in your workflow.\n(annotated top center "),o("em",[t._v("red")]),t._v(" panel in the "),o("a",{attrs:{href:"/learn/advanced-workflow/basic-editing/#editor-layout"}},[t._v("Editor Layout")]),t._v(" above)\n"),o("br")]),o("h3",{attrs:{id:"navigation"}},[o("a",{attrs:{href:"#navigation","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Navigation")]),o("p",[t._v("The "),o("em",[t._v("navigator")]),t._v(" provides a full view of your workflow in a condensed format. Slide the blue box around to bring sections of your workflow into "),o("em",[t._v("focus")]),t._v(" within the canvas where the contents can be added, deleted, examined, or edited. If it is in the way of your work, toggle the size of the window with the the lower right corner "),o("em",[t._v("hide")]),t._v(" function.\n(annotated bottom center panel "),o("em",[t._v("red")]),t._v(" in the "),o("a",{attrs:{href:"/learn/advanced-workflow/basic-editing/#editor-layout"}},[t._v("Editor Layout")]),t._v(" above)\n"),o("br")]),o("h3",{attrs:{id:"editor-menu"}},[o("a",{attrs:{href:"#editor-menu","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Editor Menu")]),o("div",{staticClass:"right"},[o("img",{attrs:{src:"/images/learn/workflow_editor_menu_detail.png",alt:"workflow editor menu detail",width:"300"}})]),o("p",[t._v("Accessed by clicking on the gear icon on the right side of the center "),o("em",[t._v("Workflow Canvas")]),t._v(" upper bar, the "),o("em",[t._v("workflow editor menu")]),t._v(" is for global editor actions. (annotated "),o("em",[t._v("orange")]),t._v(" in the "),o("a",{attrs:{href:"/learn/advanced-workflow/basic-editing/#editor-layout"}},[t._v("Editor Layout")]),t._v(" above)")]),o("ul",[o("li",[o("strong",[t._v("Save")]),t._v(" - Be sure to save your changes before leaving the editor or they will be lost! If you do try to navigate away from the page without saving, you will be reminded with a pop-up warning (see "),o("em",[t._v("Close")]),t._v(" below) - choose "),o("em",[t._v("Save Changes")]),t._v(" to apply modifications to the workflow.")]),o("li",[o("strong",[t._v("Run")]),t._v(" - After saving, you can choose to start a run with your new workflow directly from the editor.")]),o("li",[o("strong",[t._v("Edit Attributes")]),t._v(" - Edit the name of your workflow and add in a description. Both will be displayed with the workflow is executed and if published (a "),o("em",[t._v("Sharing")]),t._v(" option), part of the information listed on the "),o("em",[t._v("Published Workflows")]),t._v(" page.")]),o("li",[o("strong",[t._v("Auto Re-layout")]),t._v(" - Have your datasets and noodle connections become tangled and confused? Try this option to clean things up!")]),o("li",[o("strong",[t._v("Close")]),t._v(" - Saved and are done? Or, made changes that you'd rather leave behind? Close it up and choose "),o("em",[t._v("Don't save")]),t._v(" when this pop-up warning appears.")])]),o("div",{staticClass:"center"},[o("img",{attrs:{src:"/images/learn/workflow_editor_menu_close.png",alt:"workflow editor menu pop-up",width:"500"}}),o("br"),o("p",[o("em",[t._v("save changes or don't save?")])])]),o("br"),o("h3",{attrs:{id:"left-tools-panel"}},[o("a",{attrs:{href:"#left-tools-panel","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Left Tools Panel")]),o("div",{staticClass:"right"},[o("img",{attrs:{src:"/images/learn/workflow_editor_toolpanel_detail.png",alt:"workflow editor toolpanel detail",width:"200"}})]),o("p",[t._v("Located at the far left in the editor layout, the "),o("em",[t._v("Tools")]),t._v(" panel contains all the the tools available on the instance plus a special group for "),o("em",[t._v("input datasets")]),t._v(". (annotated left panel top "),o("em",[t._v("red")]),t._v(' and underneath "blue" in the '),o("a",{attrs:{href:"/learn/advanced-workflow/basic-editing/#editor-layout"}},[t._v("Editor Layout")]),t._v(" above and "),o("em",[t._v("Tool Panel Detail")]),t._v(" to the right)")]),o("ul",[o("li",[o("strong",[t._v("tool search")]),t._v(" - Search for tools by name")]),o("li",[o("strong",[t._v("1: tool groups")]),t._v(" - Click to open tool groups to reveal tools. Click on a "),o("em",[t._v("tool")]),t._v(" to add it to your "),o("em",[t._v("workflow canvas")]),t._v(". More about "),o("em",[t._v("toolbox")]),t._v(" features below in "),o("a",{attrs:{href:"/learn/advanced-workflow/basic-editing/#toolbox-details"}},[t._v("ToolBox Details")]),t._v(". "),o("br"),o("div",{staticClass:"img-sizer",staticStyle:{width:"500px"}},[o("img",{attrs:{src:"/images/learn/workflow_editor_add_tool.png",alt:"workflow editor add tool"}})])]),o("li",[o("strong",[t._v("workflow control")]),t._v(" - Scroll down to the bottom of the panel to locate this special section of workflow-editing specific canvas items.")]),o("li",[o("strong",[t._v("2: input dataset")]),t._v(" - Click to add to your "),o("em",[t._v("workflow canvas")]),t._v(" same as adding a tool. More about "),o("em",[t._v("inputs")]),t._v(" below, see "),o("a",{attrs:{href:"/learn/advanced-workflow/basic-editing/#adding-inputs"}},[t._v("Key Edits: Adding Inputs")]),t._v(".")]),o("li",[o("strong",[t._v("3: input dataset collection")]),t._v(" - Click to add to your "),o("em",[t._v("workflow canvas")]),t._v(" same as adding a tool. More about how "),o("em",[t._v("dataset collections")]),t._v(" differ from "),o("em",[t._v("datasets")]),t._v(" is pending wiki documentation (brand-new!).")])]),o("br"),o("h3",{attrs:{id:"toolbox-details"}},[o("a",{attrs:{href:"#toolbox-details","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("ToolBox Details")]),o("div",{staticClass:"right"},[o("img",{attrs:{src:"/images/learn/workflow_editor_toolbox_detail-A.png",alt:"workflow editor toolbox detail-A",width:"300"}})]),o("p",[t._v("A "),o("em",[t._v("toolbox")]),t._v(" on the "),o("em",[t._v("workflow canvas")]),t._v(" represents a "),o("em",[t._v("tool")]),t._v(" action or "),o("em",[t._v("job")]),t._v(" performed on dataset(s) as they pass through a workflow. On the "),o("em",[t._v("canvas")]),t._v(", "),o("em",[t._v("input and tool")]),t._v(" connections and hidden status are set. Specific settings for a "),o("em",[t._v("tool")]),t._v(" are made in the far right "),o("a",{attrs:{href:"/learn/advanced-workflow/basic-editing/#right-details-panel"}},[t._v("Details")]),t._v(' panel, explained below. (annotated center panel "purple" in the '),o("a",{attrs:{href:"/learn/advanced-workflow/basic-editing/#editor-layout"}},[t._v("Editor Layout")]),t._v(" above and "),o("em",[t._v('toolbox detail "A"')]),t._v(" to the right)\n"),o("br")]),o("ul",[o("li",[o("strong",[t._v("1: tool name")]),t._v(" - Exact tool name.")]),o("li",[o("strong",[t._v("2: tool description")]),t._v(" - Short portion of the tool description or actions.")]),o("li",[o("strong",[t._v("3: output name/datatype")]),t._v(" - Name given to the output and the datatype when it is specified by the tool.")]),o("li",[o("strong",[t._v("4: delete")]),t._v(' - Click the "X" to remove (delete) the tool from your workflow.')]),o("li",[o("strong",[t._v("5: input connection(s)")]),t._v(" - Where the input for the tool is supplied through a connecting "),o("em",[t._v("noodle")]),t._v(" from an upstream "),o("em",[t._v("tool")]),t._v(" output or "),o("em",[t._v("input")]),t._v(" dataset.")]),o("li",[o("strong",[t._v("6: output connection(s)")]),t._v(" - Where the output from a tool exists the tool and is sent through a connecting "),o("em",[t._v("noodle")]),t._v(" to a downstream "),o("em",[t._v("tool")]),t._v(" (unless this tool produces a final output dataset).")]),o("li",[o("strong",[t._v("7: noodle(s)")]),t._v(" - How "),o("em",[t._v("input")]),t._v(" datasets and "),o("em",[t._v("tool")]),t._v(" boxes are connected. More about "),o("em",[t._v("noodle")]),t._v(" connections is below in "),o("a",{attrs:{href:"/learn/advanced-workflow/basic-editing/#noodle-y_connections"}},[t._v("Key Functions: Noodle-y Connections")]),t._v(".")]),o("li",[o("strong",[t._v("8: hide toggle")]),t._v(" - Datasets that result from tool execution can be displayed in a history or hidden. More about "),o("em",[t._v("hidden")]),t._v(" datasets is below in "),o("a",{attrs:{href:"/learn/advanced-workflow/basic-editing/#hidden-datasets"}},[t._v("Most Useful Edits: Hidden Datasets")]),t._v(".")])]),o("br"),o("br"),o("h3",{attrs:{id:"right-details-panel"}},[o("a",{attrs:{href:"#right-details-panel","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Right Details Panel")]),o("p",[t._v("The "),o("em",[t._v("details")]),t._v(" panel is where tool settings are made and adjusted for the selected "),o("em",[o("a",{attrs:{href:"/learn/advanced-workflow/basic-editing/#toolbox-details"}},[t._v("toolbox")])]),t._v(" on the "),o("em",[t._v("workflow canvas")]),t._v(". Some settings are the same as those made when a "),o("em",[t._v("tool")]),t._v(" is executed from a history (the settings on the "),o("em",[t._v("tool form")]),t._v("). Others are workflow-specific options. (annotated right top "),o("em",[t._v("red")]),t._v(" panel and underneath "),o("em",[t._v("purple")]),t._v(" in the "),o("a",{attrs:{href:"/learn/advanced-workflow/basic-editing/#editor-layout"}},[t._v("Editor Layout")]),t._v(" above and "),o("em",[t._v('toolbox detail "B-1 & B-2"')]),t._v(" below)")]),o("ul",[o("li",[o("strong",[t._v("tool: tool name")]),t._v(" - The exact name of the "),o("em",[t._v("tool")]),t._v(" being edited. Same as in the "),o("em",[t._v("toolbox")]),t._v(".")]),o("li",[o("strong",[t._v("1: version")]),t._v(" - The Galaxy "),o("em",[t._v("wrapper version")]),t._v(" for the tool. Note that this is "),o("strong",[t._v("not")]),t._v(" the same as the underlying "),o("em",[t._v("tool executable")]),t._v(" version (both are available on the "),o("img",{attrs:{src:"/images/icons/HistoryInfo.png"}}),o("em",[t._v("info form")]),t._v(" for a completed job).")]),o("li",[o("strong",[t._v("2: tool description")]),t._v(" - Short portion of the tool description or actions. Same as in the "),o("em",[t._v("toolbox")]),t._v(".")]),o("li",[o("strong",[t._v("3: edit step actions")]),t._v(" - Workflow-specific actions that can be applied when a "),o("em",[t._v("tool")]),t._v(" is executed and are sometimes necessary to create appropriate "),o("em",[o("a",{attrs:{href:"/learn/advanced-workflow/basic-editing/#noodle-y_connections"}},[t._v("noodle connections")])]),t._v(" between tools (such as "),o("em",[o("a",{attrs:{href:"/learn/advanced-workflow/basic-editing/#assign-datatype"}},[t._v("datatype")])]),t._v(" assignments). All pull-down menu options are explained in: "),o("strong",[o("a",{attrs:{href:"/learn/advanced-workflow/adv-editing/"}},[t._v("Advanced Editing")])]),t._v(" and "),o("strong",[o("a",{attrs:{href:"/learn/advanced-workflow/variables/"}},[t._v("Using Variables")])]),t._v(".")]),o("li",[o("strong",[t._v("4: edit step attributes")]),t._v(" - Workflow-specific annotation/info that can be provided to describe what a tool's purpose is, expected input content (if an "),o("em",[t._v("input")]),t._v(" dataset box), and other communications directed to users of the workflow. This annotation is displayed when a workflow is "),o("em",[t._v("viewed")]),t._v(" or when it is "),o("em",[t._v("run")]),t._v(".")]),o("li",[o("strong",[t._v("5: tool form info contents")]),t._v(" - Exact contents displayed on a tool's "),o("em",[t._v("tool form")]),t._v(" underneath the settings. This is provided in the "),o("em",[t._v("workflow editor")]),t._v(" to assist with correct setting and connections for included "),o("em",[t._v("tools")]),t._v(".")])]),o("div",{staticClass:"img-sizer",staticStyle:{width:"400px"}},[t._v("![workflow editor toolbox detail-B1](/images/learn/workflow_editor_toolbox_detail-B1.png)")]),t._v(" continued on....\n"),o("div",{staticClass:"img-sizer",staticStyle:{width:"400px"}},[t._v("![workflow editor toolbox detail-B2](/images/learn/workflow_editor_toolbox_detail-B2.png)")]),o("br"),o("h2",{attrs:{id:"key-functions"}},[o("a",{attrs:{href:"#key-functions","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Key Functions")]),o("h3",{attrs:{id:"adding-inputs"}},[o("a",{attrs:{href:"#adding-inputs","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Adding Inputs")]),o("p",[o("strong",[t._v("Inputs")]),t._v(" in your workflow are a special class of object. When a workflow is "),o("em",[t._v("run")]),t._v(", the "),o("em",[t._v("inputs")]),t._v(' are selected by the user from datasets in the current history. The generation of original inputs cannot be added to a workflow - through the use of "Get Data" tool functions or otherwise. Add '),o("em",[t._v("input")]),t._v(" datasets as boxes to your "),o("em",[t._v("workflow")]),t._v(" canvas the same way as you do tools:")]),o("ul",[o("li",[t._v("click on "),o("em",[t._v("input dataset")]),t._v(" in the far left "),o("em",[t._v("Tools")]),t._v(" panel (scroll to bottom to locate)")]),o("li",[t._v("once on your "),o("em",[t._v("canvas")]),t._v(", drag a "),o("em",[t._v("noodle")]),t._v(" from the "),o("em",[t._v("output")]),t._v(" connection over to the downstream tool's "),o("em",[t._v("input")]),t._v(" connection.")]),o("li",[o("strong",[t._v("save")]),t._v(" your work!")])]),o("div",{staticClass:"center"},[o("img",{attrs:{src:"/images/learn/workflow_editor_input_canvas.png",alt:"workflow editor input canvas",width:"700"}}),o("br"),t._v(" adding and connecting *inputs*")]),o("br"),o("h3",{attrs:{id:"noodle-y-connections"}},[o("a",{attrs:{href:"#noodle-y-connections","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Noodle-y Connections")]),o("p",[o("em",[t._v("Noodles")]),t._v(" represents the flow of data from one step in a workflow analysis to the next. These will link input-output connections with compatible datatypes.")]),o("ul",[o("li",[t._v("When dragging a "),o("em",[t._v("noodle")]),t._v(" from a tool's "),o("em",[t._v("output connection")]),t._v(", tools with available "),o("em",[t._v("input connections")]),t._v(" will highlight as "),o("em",[t._v("green")]),t._v(" on the "),o("em",[t._v("workflow canvas")]),t._v(". See the graphic above in the section "),o("a",{attrs:{href:"/learn/advanced-workflow/basic-editing/#adding-inputs"}},[t._v("Adding Inputs")]),t._v(" for an example.")]),o("li",[t._v("When you want to remove a connection, hover the pointer over the "),o("em",[t._v("noodle")]),t._v(' until an "X" appears. Click on it to delete the '),o("em",[t._v("noodle")]),t._v(".")]),o("li",[t._v("Some tools have more than one "),o("em",[t._v("input connection")]),t._v(", some have more that one "),o("em",[t._v("output connection")]),t._v(". Each may be of a different "),o("em",[o("a",{attrs:{href:"/learn/datatypes/"}},[t._v("datatype")])]),t._v(". Confused? Click on the "),o("em",[t._v("toolbox")]),t._v(" then review that tool's help at the bottom of the far right "),o("em",[t._v("Details")]),t._v(" panel.")]),o("li",[t._v("If your connection is broken or will not link, see the help below "),o("a",{attrs:{href:"/learn/advanced-workflow/basic-editing/#assign-datatype"}},[t._v("Most Useful Edits: Assign Datatype")]),t._v(". This will not resolve all connection problems (the data must be compatible between tools!), but the most common.")])]),o("h2",{attrs:{id:"3-most-useful-edits"}},[o("a",{attrs:{href:"#3-most-useful-edits","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("3 Most Useful Edits")]),o("h3",{attrs:{id:"label-inputs"}},[o("a",{attrs:{href:"#label-inputs","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Label Inputs")]),o("div",{staticClass:"right"},[o("img",{attrs:{src:"/images/learn/workflow_editor_input_renaming.png",alt:"workflow editor input renaming",width:"300"}})]),t._v("\nWhen a workflow is *run*, the user selects a dataset from the history to be used for each *input* in your workflow. Give them a label to make sure that the correct dataset is selected. \n"),o("br"),o("br"),t._v("\nA good label may include:\n"),o("br"),o("br"),t._v("\n* the expected *content* of the dataset (reference annotation, gene bound coordinates, ...)\n* the expected *format* of the dataset (BAM, BED, GTF, ...)\n* the *exact name* of a dataset. When? If it is provided in a library or Page (as a shared history with datasets).\n"),o("p",[t._v("To label an input:")]),o("ul",[o("li",[t._v("click on the "),o("em",[t._v("input")]),t._v(" box on the "),o("em",[t._v("workflow canvas")]),t._v(" to bring it up in the far right "),o("em",[t._v("Details")]),t._v(" panel")]),o("li",[t._v("type in the new name that you would like to be displayed to the user.")]),o("li",[t._v("include extra annotation if the dataset needs to be created in a specific way or has other important details")]),o("li",[o("strong",[t._v("save")]),t._v(" your work!")])]),o("br"),o("h3",{attrs:{id:"hidden-datasets"}},[o("a",{attrs:{href:"#hidden-datasets","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Hidden Datasets")]),o("p",[o("em",[t._v("Hidden")]),t._v(" datasets are a useful way to avoid displaying intermediate datasets from longer workflows in histories. The general usage is to only display final outputs. To do this:")]),o("ul",[o("li",[t._v("click on this toggle on output datasets - any not set will be hidden.")]),o("li",[t._v("by default all datasets are displayed, even with the toggle unset.")]),o("li",[t._v("hover over the "),o("em",[t._v("hide toggle")]),t._v(" to view the help pop-up, shown below.")]),o("li",[o("strong",[t._v("save")]),t._v(" your work!")])]),o("div",{staticClass:"center"},[o("img",{attrs:{src:"/images/learn/workflow_editor_hide_toggle.png",alt:"workflow editor hide toggle",width:"400"}}),o("br"),t._v(" *hide toggle* location in *toolbox*")]),o("br"),o("h3",{attrs:{id:"assign-datatype"}},[o("a",{attrs:{href:"#assign-datatype","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Assign Datatype")]),o("p",[t._v("A "),o("em",[t._v("tool")]),t._v(" may require a specific "),o("em",[t._v("input")]),o("strong",[o("a",{attrs:{href:"/learn/datatypes/"}},[t._v("datatype")])]),t._v(" in order for it to be used correctly. In some cases, you will find out about this after extracting a workflow, viewing it, and noticing a missing "),o("em",[t._v("noodle")]),t._v(" connection. Other times it will come up during creating or editing when a downstream "),o("em",[t._v("input connector")]),t._v(" is not accepting a "),o("em",[t._v("noodle")]),t._v(" from an upstream tool's "),o("em",[t._v("output connector")]),t._v(" (not turning green). This can indicate a true data incompatibility or a formatting problem. But sometimes just reassigning the "),o("strong",[o("a",{attrs:{href:"/learn/datatypes/"}},[t._v("datatype")])]),t._v(" for the output in the upstream tool is enough to resolve the issue.\nExample:")]),o("ul",[o("li",[t._v("calculations were performed on a "),o("a",{attrs:{href:"/learn/datatypes/#bed"}},[t._v("bed")]),t._v(" file adding extra fields")]),o("li",[t._v("the result data was then processed by the "),o("em",[t._v("Cut")]),t._v(" tool to create an "),o("a",{attrs:{href:"/learn/datatypes/#interval"}},[t._v("interval")]),t._v(" dataset for further analysis")]),o("li",[t._v("however, the "),o("em",[t._v("Cut")]),t._v(" tool always breaks metadata column assignments, resulting in a "),o("a",{attrs:{href:"/learn/datatypes/#tabular_28tab_delimited29"}},[t._v("tabular")]),o("em",[t._v("datatype")]),t._v(" assignment")]),o("li",[t._v("the "),o("em",[t._v("output connector's noodle")]),t._v(" from the "),o("em",[t._v("Cut")]),t._v(" tool will not connect with a tool that requires "),o("em",[t._v("interval")]),t._v(" format, such as a tool from the group "),o("em",[t._v("Operate on Genomic Intervals")])]),o("li",[t._v("what to do? answer = "),o("em",[t._v("reassign the datatype")]),t._v(" for the output from the "),o("em",[t._v("Cut")]),t._v(" tool in your workflow")])]),o("div",{staticClass:"center"},[o("img",{attrs:{src:"/images/learn/workflow_editor_datatype_before.png",alt:"workflow editor datatype before",width:"650"}}),o("br"),o("p",[t._v("before "),o("em",[t._v("datatype")]),t._v(" reassignment, no connection")])]),o("div",{staticClass:"left"},[o("img",{attrs:{src:"/images/learn/workflow_editor_datatype_edit.png",alt:"workflow editor datatype edit",width:"200"}}),o("br"),o("p",[t._v("editing "),o("em",[t._v("datatype")])])]),o("br"),t._v("\n**How to edit the *datatype* assignment:**\n"),o("ul",[o("li",[t._v("click on the "),o("em",[t._v("Cut toolbox")]),t._v(" in the "),o("em",[t._v("workflow canvas")]),t._v(" to bring it up in the far right "),o("em",[t._v("Details")]),t._v(" panel")]),o("li",[o("strong",[t._v("1")]),t._v(" - under "),o("em",[t._v("Edit Step Attributes")]),t._v(" select "),o("em",[t._v("Change Datatype")]),t._v(" from the pull-down menu")]),o("li",[o("strong",[t._v("2")]),t._v(" - click on create to open the edit options for the section")]),o("li",[o("strong",[t._v("3")]),t._v(" - choose "),o("em",[t._v("interval")]),t._v(" as the new "),o("em",[t._v("datatype")]),t._v(" assignment for the tool output")]),o("li",[o("strong",[t._v("4")]),t._v(" - optionally, add a comment to this workflow step to remind yourself and any other users you share it with what was done as an extra data manipulation")]),o("li",[o("strong",[t._v("save")]),t._v(" your work!")])]),o("br"),o("br"),o("br"),o("br"),o("br"),o("p",[t._v("When changes are complete, click on any other tool to internally refresh the setting for this tool, then try the "),o("em",[t._v("noodle")]),t._v(" connection again.")]),o("div",{staticClass:"center"},[o("img",{attrs:{src:"/images/learn/workflow_editor_datatype_after.png",alt:"workflow editor datatype after",width:"600"}}),o("br"),o("p",[t._v("after "),o("em",[t._v("datatype")]),t._v(" reassignment, "),o("strong",[t._v("connected!!")])])]),o("br"),o("br")],2)])}),[],!1,null,null,null);"function"==typeof l&&l(h),"function"==typeof c&&c(h);e.default=h.exports}}]);