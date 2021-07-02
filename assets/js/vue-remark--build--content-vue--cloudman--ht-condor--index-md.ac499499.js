(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{UQSp:function(o,e,n){"use strict";e.a={name:"VueRemarkRoot",render:function(o){return o("div",null,this.$slots.default)}}},okXl:function(o,e,n){"use strict";n.r(e);var t=n("KHd+"),r=n("UQSp"),i=n("Kw5r");function s(o){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}i.a.config.optionMergeStrategies;var a={VueRemarkRoot:r.a},l=function(o){var e=o.options.components=o.options.components||{},n=o.options.computed=o.options.computed||{};Object.keys(a).forEach((function(o){"object"===s(a[o])&&"function"==typeof a[o].render||"function"==typeof a[o]&&"function"==typeof a[o].options.render?e[o]=a[o]:n[o]=function(){return a[o]}}))},c=i.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",d={excerpt:null};var _=function(o){o.options[u]&&(o.options[u]=d),i.a.util.defineReactive(o.options,u,d),o.options.computed=c.computed({$frontmatter:function(){return o.options[u]}},o.options.computed)},p=Object(t.a)({},(function(){var o=this,e=o.$createElement,n=o._self._c||e;return n("VueRemarkRoot",[o._t("/cloudman/header"),o._t("/cloudman/linkbox-horizontal"),n("p",[o._v("This page will provide details on how HTCondor has been integrated into CloudMan. Examples on how to use HTCondor through CloudMan will be provided for the enduser.")]),n("h1",{attrs:{id:"installation-configuration"}},[n("a",{attrs:{href:"#installation-configuration","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),o._v("Installation Configuration")]),n("p",[o._v("HTCondor has been pre-installed on linux images using through CloudMan. The deployment detail is as follow:")]),n("ul",[n("li",[o._v("bin                          /usr/bin")]),n("li",[o._v("etc                          /etc/condor/")]),n("li",[o._v("etc/examples                 /usr/share/doc/condor/etc/examples")]),n("li",[o._v("examples                     /usr/share/doc/condor/examples")]),n("li",[o._v("include                      /usr/include/condor")]),n("li",[o._v("lib                          /usr/lib/condor")]),n("li",[o._v("libexec                      /usr/lib/condor/libexec")]),n("li",[o._v("local/condor_config.local    /etc/condor/")]),n("li",[o._v("condor_config                /etc/condor/condor_config")]),n("li",[o._v("local/execute                /var/lib/condor/execute")]),n("li",[o._v("local/spool                  /var/lib/condor/spool")]),n("li",[o._v("man                          /usr/share/man")]),n("li",[o._v("sbin                         /usr/sbin")]),n("li",[o._v("sql                          /usr/share/condor/sql")]),n("li",[o._v("src                          /usr/src")]),n("li",[o._v("INIT                         /etc/init.d/condor")]),n("li",[o._v("PID                          /var/run/condor")]),n("li",[o._v("LOGS                         /var/log/condor")]),n("li",[o._v("LOCK                         /var/lock/condor")])]),n("p",[o._v("Please note that the configuration is taken place only in "),n("strong",[o._v("condor_config")]),o._v(" global file. The online configuration is based on the functionality of the HTCondor where only the last configuration value is used. Therefore, for finding any specific configuration in /etc/condor/condor_configuration please find the last key in the file.")]),n("p",[o._v('HTCondor requires the ping port "ICMP" and the range specified through '),n("strong",[o._v("HIGHPORT")]),o._v(" and "),n("strong",[o._v("LOWPORT")]),o._v(" in the condor_configuration to be open. To do so please refer to the firewall options.")]),n("h1",{attrs:{id:"htcondor-flocking"}},[n("a",{attrs:{href:"#htcondor-flocking","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),o._v("HTCondor Flocking")]),n("p",[o._v("HTCondor has been used to achieve federated computing resource manager over the remote computing resources. In this scenario HTCondor will receive the remote computing public IP or DNS and try to use remote resources by claiming the resource from remote HTCondor pool. This has happened by setting the "),n("strong",[o._v("FLOCK_TO")]),o._v(" variable in the condor_config file to be the remote IP or DNS. It worth noting that the remote Condor should have provided enough acces to the CloudMan HTCondor by setting "),n("strong",[o._v("FLOCK_FROM")]),o._v(" and "),n("strong",[o._v("ALLOW_WRITE")]),o._v(" variable in their condor_config file (This setting requires HTCondor to be restarted. To restart HTCondor manually in CloudMan use "),n("em",[o._v("/etc/init.d/condor restart")]),o._v(" command).")]),n("h1",{attrs:{id:"big-pool"}},[n("a",{attrs:{href:"#big-pool","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),o._v("Big Pool")]),n("p",[o._v("To be able to utilize local resource through HTCondor any worker node's pool added to the system through CloudMan console will be joint to the master's pool to create a big shared pool. This happen by setting the workers' **CONDOR_HOST ** variable to point to the master IP and set the  "),n("strong",[o._v("DAEMON_LIST")]),o._v(" to only run "),n("strong",[o._v("MASTER, STARTD and SCHEDD")]),o._v(" processes.")]),n("h1",{attrs:{id:"example"}},[n("a",{attrs:{href:"#example","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),o._v("Example")]),n("p",[o._v("For an example please follow the following procedure:")]),n("p",[o._v("1- $mkdir test"),n("br"),o._v("\n2- $cd test"),n("br"),o._v("\n3- $cat > python"),n("em",[o._v("random_lines.sh"),n("br"),o._v("\n#! /bin/sh"),n("br"),o._v('\necho "I\'m process id $$ on" '),n("code",{pre:!0},[o._v("hostname")]),n("br"),o._v('\npython random_lines_two_pass.py "dataset_$2.dat" "output_$2.dat" "3"'),n("br"),o._v("\ndate"),n("br"),o._v("\nexit 42"),n("br"),n("em",[o._v("ctrl+D")]),n("br"),o._v("\n4- $cat > job.submit "),n("br"),o._v("\nexecutable=python_random_lines.sh"),n("br"),o._v("\nuniverse=vanilla"),n("br"),o._v("\narguments=Example.$(Cluster).$(Process) [file_number] "),n("br"),o._v("\ntransfer_input_files = dataset")]),o._v("[file"),n("em",[o._v("number].dat"),n("br"),o._v("\ntransfer_output_files = output")]),o._v("[file_number].dat"),n("br"),o._v("\noutput=results.output.$(Process).$(Cluster)"),n("br"),o._v("\nerror=results.error.$(Process).$(Cluster)"),n("br"),o._v("\nlog=results.log"),n("br"),o._v("\nnotification=never"),n("br"),o._v("\nshould_transfer_files=YES"),n("br"),o._v("\nwhen_to_transfer_output = ON_EXIT"),n("br"),o._v("\nqueue"),n("br"),n("em",[o._v("Ctrl+D")]),n("br"),n("strong",[o._v("Note that for running the above script you need to have random_lines_two_pass.py and the dataset available")]),n("br"),n("strong",[o._v("The job.submit should be run multiple times [once for each input file]")]),n("br"),o._v("\n5- chmod a+x python_random_lines.sh"),n("br"),o._v("\n6- condor_submit job.submit"),n("br"),n("strong",[o._v("condor_submit should be run multiple times [once for each input]")])])],2)}),[],!1,null,null,null);"function"==typeof l&&l(p),"function"==typeof _&&_(p);e.default=p.exports}}]);