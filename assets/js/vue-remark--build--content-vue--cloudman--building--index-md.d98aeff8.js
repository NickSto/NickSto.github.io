(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"HW/z":function(e,t,a){"use strict";a.r(t);var o=a("KHd+"),n=a("UQSp"),i=a("Kw5r");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var s={VueRemarkRoot:n.a},l=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===r(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?t[e]=s[e]:a[e]=function(){return s[e]}}))},h=i.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",d={excerpt:null,title:"Building Galaxy CloudMan components"};var u=function(e){e.options[c]&&(e.options[c]=d),i.a.util.defineReactive(e.options,c,d),e.options.computed=h.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},p=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VueRemarkRoot",[a("div",{staticClass:"toc-wrapper col-md-3"},[a("ul",[a("li",[a("p",[a("a",{attrs:{href:"#overview"}},[e._v("Overview")])])]),a("li",[a("p",[a("a",{attrs:{href:"#prerequisites"}},[e._v("Prerequisites")])]),a("ul",[a("li",[a("a",{attrs:{href:"#install-cloud-launch-app"}},[e._v("Install Cloud Launch app")])]),a("li",[a("a",{attrs:{href:"#get-your-own-bucket"}},[e._v("Get your own bucket")])])])]),a("li",[a("p",[a("a",{attrs:{href:"#build-a-machine-image"}},[e._v("Build a Machine Image")])])]),a("li",[a("p",[a("a",{attrs:{href:"#build-the-galaxyfs"}},[e._v("Build the galaxyFS")])])]),a("li",[a("p",[a("a",{attrs:{href:"#build-the-galaxyindicesfs"}},[e._v("Build the galaxyIndicesFS")])])]),a("li",[a("p",[a("a",{attrs:{href:"#tie-it-all-together"}},[e._v("Tie it all together")])])]),a("li",[a("p",[a("a",{attrs:{href:"#additional-resources"}},[e._v("Additional resources")])])])])]),a("div",{staticClass:"body-wrapper col-md-9"},[e._t("/cloudman/linkbox-horizontal"),a("p",[e._v("Launching a default version of "),a("a",{attrs:{href:"http://usecloudman.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CloudMan")]),e._v(" and "),a("a",{attrs:{href:"/cloudman/"}},[e._v("Galaxy on the Cloud")]),e._v(" is a pretty straightforward process. "),a("a",{attrs:{href:"http://onlinelibrary.wiley.com/doi/10.1002/cpe.1836/full",target:"_blank",rel:"noopener noreferrer"}},[e._v("The underlying system")]),e._v(", however, is more complex and consists of a number of components. This page describes the steps required to build your own version of the components and deploy the system. You may want to do this if you are deploying the system on your own Cloud. If you would just like to have a custom version of the existing system on AWS, perhaps "),a("a",{attrs:{href:"/cloudman/sharing/"}},[e._v("cluster sharing & cloning")]),e._v(" can help?")]),a("h2",{attrs:{id:"overview"}},[a("a",{attrs:{href:"#overview","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Overview")]),a("p",[e._v("The process of building your own instance of the system is time consuming (although we are continuing to simplify and streamline this) and will require some technical skills and understanding of the process. Before starting this endeavor, it is highly recommended that you read the following papers:")]),a("ol",[a("li",[e._v('"'),a("a",{attrs:{href:"http://www.biomedcentral.com/1471-2105/11/S12/S4",target:"_blank",rel:"noopener noreferrer"}},[e._v("Galaxy CloudMan: delivering cloud compute clusters")]),e._v("\" - which gives you an overview of the ideology behind what's being done here; and")]),a("li",[e._v('"'),a("a",{attrs:{href:"http://figshare.com/articles/Building_and_Provisioning_Bioinformatics_Environments_on_Public_and_Private_Clouds/1424740",target:"_blank",rel:"noopener noreferrer"}},[e._v("Building and Provisioning Bioinformatics Environments on Public and Private Clouds")]),e._v('" - which gives many of the technical details of the overall build process')]),a("li",[e._v('(optional) "'),a("a",{attrs:{href:"http://onlinelibrary.wiley.com/doi/10.1002/cpe.1836/full",target:"_blank",rel:"noopener noreferrer"}},[e._v("A reference model for deploying applications in virtualized environments")]),e._v('" - which gives you the technical background why things are being done they way they are being done.')])]),a("p",[e._v("The process of building the system consists of a number of steps. Each step creates a component that, when joined together, compose the complete system. To have a functional "),a("em",[e._v("Galaxy on the Cloud")]),e._v(" system, it is required to have all the components in place; using CloudMan alone requires only the machine image and an S3 bucket (or a Swift container). The overall process of building the components has been automated via an "),a("a",{attrs:{href:"http://www.ansible.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ansible")]),e._v(" playbook: "),a("a",{attrs:{href:"https://github.com/galaxyproject/galaxy-cloudman-playbook",target:"_blank",rel:"noopener noreferrer"}},[e._v("galaxy-cloudman-playbook")]),e._v(".")]),a("hr"),a("h2",{attrs:{id:"prerequisites"}},[a("a",{attrs:{href:"#prerequisites","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Prerequisites")]),a("h3",{attrs:{id:"install-cloud-launch-app"}},[a("a",{attrs:{href:"#install-cloud-launch-app","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Install Cloud Launch app")]),a("p",[e._v("Throughout this process we will require access to an installation of the Cloud Launch application. This application simplifies the process of launching instances during the build phase and is later used by your users to launch instances of the complete system. A public instance of Cloud Launch is available at "),a("a",{attrs:{href:"https://launch.usegalaxy.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://launch.usegalaxy.org/")]),e._v(" but it is limited for use with the official Galaxy project cloud releases. It is hence necessary for you to install your own version of the application and populate it with the information for your cloud.")]),a("p",[e._v("The installation process is detailed in the "),a("a",{attrs:{href:"https://github.com/galaxyproject/cloudlaunch",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloud Launch README")]),e._v(" so we won't be repeating it here. Once the application is installed, login to the Admin side of it ("),a("em",[a("code",{pre:!0},[e._v("<ip>/admin")])]),e._v(") and add a new entry to the "),a("em",[e._v("Cloud")]),e._v(" table with the details about your cloud and instances types available on that cloud. "),a("a",{attrs:{href:"http://i.imgur.com/FAn3ERV.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here is a screenshot")]),e._v(" of what that looks like for one OpenStack cloud. One particular field to note in that form is the "),a("em",[e._v("Bucket default")]),e._v(" field - see the next section for more details about it.")]),a("h3",{attrs:{id:"get-your-own-bucket"}},[a("a",{attrs:{href:"#get-your-own-bucket","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Get your own bucket")]),a("p",[e._v("Each time someone starts an instance of the system we're building, they automatically retrieve a copy of the CloudMan application that is then run. The application is automatically retrieved at launch time from an S3 bucket. The default S3 bucket is called "),a("em",[e._v("cloudman")]),e._v(" and it contains the latest official CloudMan release. There are two more public buckets: "),a("em",[e._v("cloudman-test")]),e._v(" and "),a("em",[e._v("cloudman-dev")]),e._v(" that contain a pre-release version of the application and the development version of the application, respectively. You can use any of those buckets as the source for the application but keep in mind that the buckets can get updated at any point, potentially changing functionality you depend on. Also note that the "),a("em",[e._v("-dev")]),e._v(" bucket will often contain non-working code.")]),a("p",[e._v("Alternatively, you can supply your own bucket and place the necessary files there. This gives your control of when the CloudMan gets updated and gives you an option to customize the application if you need to. For this option, simply create an S3 bucket and upload CloudMan source code into it. The details on how to do this are available "),a("a",{attrs:{href:"https://galaxyproject.org/cloudman/customizing/#using-custom-cloudman-application",target:"_blank",rel:"noopener noreferrer"}},[e._v("here")]),e._v(".")]),a("p",[e._v("After you’ve decided on the suitable option, specify the bucket name in the Cloud Launch application under "),a("em",[e._v("Cloud -> Bucket default")]),e._v(" field. Note that you can change this value at any point.")]),a("h2",{attrs:{id:"build-a-machine-image"}},[a("a",{attrs:{href:"#build-a-machine-image","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Build a Machine Image")]),a("p",[e._v("The machine image, often called the AMI (for Amazon Machine Image, although other cloud middleware solutions use the same term), represents the base operating system required to run the system; it contains the required system level applications and libraries as well as hooks for starting CloudMan and the rest of the system. Once built, we'll use the machine image to launch instances for building the rest of the components as well to launch instance of the complete system once it's all done.")]),a("p",[e._v("To build your machine image, we need to download the "),a("a",{attrs:{href:"https://github.com/galaxyproject/galaxy-cloudman-playbook",target:"_blank",rel:"noopener noreferrer"}},[e._v("playbook")]),e._v(" and follow the instructions there on how to build the machine image. As things currently stand, the image can be built using a single command: "),a("em",[e._v("packer build [--only amazon-ebs|openstack] image.json")]),e._v(". Before running that command though, just make sure you followed the initial setup/configuration instructions to provide your cloud access credentials.")]),a("h2",{attrs:{id:"build-the-galaxyfs"}},[a("a",{attrs:{href:"#build-the-galaxyfs","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Build the galaxyFS")]),a("p",[e._v("The Galaxy File System ("),a("em",[e._v("galaxyFS")]),e._v(") contains the Galaxy application, the PostgreSQL database, installed Galaxy tools, and the accompanying configurations. The aim here is to create a snapshot of the "),a("em",[e._v("galaxyFS")]),e._v(" that can be replicated when instances of the system are launched while permitting the changes to the file system (e.g., user-uploaded data, analysis results). This replication is realized by CloudMan  at runtime. To build the "),a("em",[e._v("galaxyFS")]),e._v(", we need to do the following:")]),a("ol",[a("li",[e._v("Launch a new instance of the machine image created in Step 1 using Cloud Launch (this will require you have installed your own instance of "),a("a",{attrs:{href:"https://github.com/galaxyproject/cloudlaunch",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloud Launch")]),e._v(" and added access info for your cloud via the Admin interface). When CloudMan comes up, choose the "),a("em",[e._v("Cluster only")]),e._v(" with "),a("em",[e._v("transient storage")]),e._v(" option (under "),a("em",[e._v("Additional startup options")]),e._v(");")]),a("li",[e._v("Follow the instructions from the "),a("a",{attrs:{href:"https://github.com/galaxyproject/galaxy-cloudman-playbook",target:"_blank",rel:"noopener noreferrer"}},[e._v("playbook")]),e._v(" to build the "),a("em",[e._v("galaxyFS")]),e._v("; note that this playbook has an option to automatically install Galaxy tools and create an archive of the file system;")])]),a("p",[e._v("When building the "),a("em",[e._v("galaxyFS")]),e._v(", there are a few things to keep in mind. The technical details are documented in the playbook so we'll only highlight a few high-level concepts here. The "),a("em",[e._v("galaxyFS")]),e._v("-building process can be thought of as a 3-stage process: first, the core components get installed and configured (e.g., Galaxy, the database, etc). Second, Galaxy tools need to be installed. For this, the Galaxy application needs to be started, which can be done from the CloudMan Admin page (note that Postgres needs to be started first, then ProFTPd and only then Galaxy; see the playbook README for more details). Once started, you can install the tools from the Tool Shed by hand or using a role within the playbook to do this automatically. Once it's all been done, the third stage of the "),a("em",[e._v("galaxyFS")]),e._v("-build process is to create a file system archive. Again, the playbook README has more details but the core idea is that we create a tar ball of the entire file system and upload it to an object store so it can be retrieved by launched instances of the overall system.")]),a("h2",{attrs:{id:"build-the-galaxyindicesfs"}},[a("a",{attrs:{href:"#build-the-galaxyindicesfs","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Build the galaxyIndicesFS")]),a("p",[e._v("The "),a("em",[e._v("galaxyIndicesFS")]),e._v(" contains reference data used by various tools. This step of the build process has not been automated and it needs to be done by hand. Take a look at the "),a("a",{attrs:{href:"/admin/tools/data-managers/"}},[e._v("Galaxy Data Managers")]),e._v(" and the "),a("a",{attrs:{href:"/admin/data-integration/"}},[e._v("Data Integration")]),e._v(" instructions on how to proceed with this step.")]),a("p",[e._v("After the desired data has been loaded on the "),a("em",[e._v("galaxyIndicesFS")]),e._v(", it is likely that changes were made to the "),a("em",[e._v("galaxyFS")]),e._v(" as well (e.g., Galaxy's *"),a("em",[e._v(".loc")]),e._v(" files, files edited by the Data Managers, etc.). If that's the case, it is necessary to update the galaxyFS archive. To do this, stop all services on the cluster (i.e., Galaxy, NodeJS, ProFTPd, Postgres) and run the "),a("em",[e._v("galaxyFS")]),e._v(" build playbook as above with only the "),a("em",[e._v("cm.filesystem")]),e._v(" role enabled. This will create a new archive of the galaxyFS and upload it to the object store with the up-to-date settings.")]),a("h2",{attrs:{id:"tie-it-all-together"}},[a("a",{attrs:{href:"#tie-it-all-together","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Tie it all together")]),a("p",[e._v("After all the components have been built, we need to add the details into the Cloud Launch application. Login to the Admin side of the application and add an entry to the "),a("em",[e._v("Images")]),e._v(" table. The "),a("em",[e._v("Image id")]),e._v(" needs to be a "),a("em",[e._v("boto")]),e._v("-compatible ID (e.g., "),a("em",[e._v("ami-03835e68")]),e._v(") while the description is up to you. Next, define a Flavor by specifying a name and a description for it followed by user data. The user data contains pointers to the components we built and should looks like this (of course, with the actual values for "),a("em",[e._v("archive_url")]),e._v(" and "),a("em",[e._v("snap_id")]),e._v(" updated to match the components you built):")]),a("pre",[a("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("cluster_templates:\n  - name: Galaxy\n    filesystem_templates:\n    - name: galaxy\n      roles: galaxyTools,galaxyData\n      archive_url: http://s3.amazonaws.com/cloudman/fs-archives/galaxyFS-latest.tar.gz\n      type: archive\n      size: 10\n    - name: galaxyIndices\n      roles: galaxyIndices\n      snap_id: snap-c332f2b0\n  - name: Data\n    filesystem_templates:\n    - name: galaxy\n")])]),a("p",[e._v("At this point, we are ready to launch an instance of the complete system!")]),a("hr"),a("h2",{attrs:{id:"additional-resources"}},[a("a",{attrs:{href:"#additional-resources","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Additional resources")]),a("p",[e._v("Over time, the community has developed a few more documents and resources that can help with setting up the system and these are aggregated here:")]),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/gvlproject/gvl.ansible.playbook",target:"_blank",rel:"noopener noreferrer"}},[e._v("Genomics Virtual Lab")]),e._v(" ⟶ Build a complete genomics workbench with more applications than Galaxy")]),a("li",[e._v("John Chilton's "),a("a",{attrs:{href:"https://github.com/jmchilton/cloudman_openstack_bootstrap",target:"_blank",rel:"noopener noreferrer"}},[e._v("CloudMan bootstrap")]),e._v(" (outdated)")]),a("li",[a("a",{attrs:{href:"https://github.com/chapmanb/cloudbiolinux/blob/master/deploy/cloudman.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("CloudMan flavor")]),e._v(" in "),a("a",{attrs:{href:"http://cloudbiolinux.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CloudBioLinux")]),e._v(" (outdated)")])])],2)])}),[],!1,null,null,null);"function"==typeof l&&l(p),"function"==typeof u&&u(p);t.default=p.exports},UQSp:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);