(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{387:function(t,e,a){t.exports=a.p+"assets/img/15-47-10.eb5f4120.png"},388:function(t,e,a){t.exports=a.p+"assets/img/15-50-30.695ad126.png"},389:function(t,e,a){t.exports=a.p+"assets/img/15-50-56.5c605f8d.png"},390:function(t,e,a){t.exports=a.p+"assets/img/15-52-18.08b1c1d2.png"},391:function(t,e,a){t.exports=a.p+"assets/img/16-00-03.e4f2dd32.png"},392:function(t,e,a){t.exports=a.p+"assets/img/16-00-38.4d3b8095.png"},393:function(t,e,a){t.exports=a.p+"assets/img/16-01-19.de14c09b.png"},394:function(t,e,a){t.exports=a.p+"assets/img/16-21-55.3bfb0421.png"},395:function(t,e,a){t.exports=a.p+"assets/img/16-23-26.642c9be9.png"},396:function(t,e,a){t.exports=a.p+"assets/img/17-02-33.34bcb102.png"},397:function(t,e,a){t.exports=a.p+"assets/img/00-25-33.495d8214.png"},478:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"install-xilinx-vivado"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-xilinx-vivado"}},[t._v("#")]),t._v(" Install Xilinx Vivado")]),t._v(" "),s("h2",{attrs:{id:"_1-install-vivado"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-install-vivado"}},[t._v("#")]),t._v(" 1.Install Vivado")]),t._v(" "),s("h3",{attrs:{id:"_1-1-download"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-download"}},[t._v("#")]),t._v(" 1.1 Download")]),t._v(" "),s("p",[t._v("Our Vivado version is now 2017.4.")]),t._v(" "),s("p",[t._v("Blow shows the installation method of 2016.4, it is same to 2017.4 version. (Download here:"),s("a",{attrs:{href:"https://www.xilinx.com/support/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.xilinx.com/support/download.html"),s("OutboundLink")],1),t._v(")")]),t._v(" "),s("p",[t._v("Get Phenix Pro Devkit Firmware from github:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git clone https://github.com/RobSenseTech/PhenixPro_Devkit\n")])])]),s("h3",{attrs:{id:"_1-2-install-main-program"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-install-main-program"}},[t._v("#")]),t._v(" 1.2 Install Main Program")]),t._v(" "),s("p",[t._v("First of all, we need to install "),s("strong",[t._v("the latest version")]),t._v("(8u121) of Java SE Development Kit( Download here "),s("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html"),s("OutboundLink")],1),t._v("), then install it:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cd [your download path]\ntar xf jdk-8u121-linux-x64.tar.gz\nvim ~/.bashrc\n")])])]),s("p",[t._v("add these statements:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export JAVA_HOME=[your jdk path]\nexport JRE_HOME=${JAVA_HOME}/jre\nexport CLASSPATH=.:{JAVA_HOME}/lib:${JRE_HOME}/lib\nexport PATH=${JAVA_HOME}/bin:$PATH\n")])])]),s("p",[t._v("use this command to make it work:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("source ~/.bashrc\n")])])]),s("p",[t._v("to comfirm whether jdk is installed properly, use this command:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("java -version\n")])])]),s("p",[t._v("if JDK is installed properly, it will show these information:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('java version "1.8.0_121"\nJava(TM) SE Runtime Environment (build 1.8.0_121-b13)\nJava HotSpot(TM) 64-Bit Server VM (build 25.121-b13, mixed mode)\n')])])]),s("p",[t._v("now, we can install Vivado:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cd [your vivado path]\ntar xf Xilinx_Vivado_SDK_2016.4_0124_1.tar.gz\ncd Xilinx_Vivado_SDK_2016.4_0124_1\nsudo ./xsetup\n")])])]),s("p",[t._v("click Next")]),t._v(" "),s("p",[s("img",{attrs:{src:a(387),alt:"Screenshot from 2017-03-13 15-47-10"}})]),t._v(" "),s("p",[t._v('select three "I Agree" and Next')]),t._v(" "),s("p",[s("img",{attrs:{src:a(388),alt:"Screenshot from 2017-03-13 15-50-30"}})]),t._v(" "),s("p",[t._v("select third one, click Next")]),t._v(" "),s("p",[s("img",{attrs:{src:a(389),alt:"Screenshot from 2017-03-13 15-50-56"}})]),t._v(" "),s("p",[t._v('select "Software Development Kit (SDK)", click Next')]),t._v(" "),s("p",[s("img",{attrs:{src:a(390),alt:"Screenshot from 2017-03-13 15-52-18"}})]),t._v(" "),s("p",[t._v("choose installation directory, click Next")]),t._v(" "),s("p",[s("img",{attrs:{src:a(391),alt:"Screenshot from 2017-03-13 16-00-03"}})]),t._v(" "),s("p",[t._v("click install")]),t._v(" "),s("p",[s("img",{attrs:{src:a(392),alt:"Screenshot from 2017-03-13 16-00-38"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(393),alt:"Screenshot from 2017-03-13 16-01-19"}})]),t._v(" "),s("p",[t._v("after this, we need to load the license:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(394),alt:"Screenshot from 2017-03-13 16-21-55"}})]),t._v(" "),s("p",[t._v('click "Load License" and "Copy License" (You can find lic file in firmware path [phenix_devkit path]/amp_system/)')]),t._v(" "),s("p",[s("img",{attrs:{src:a(395),alt:"Screenshot from 2017-03-13 16-23-26"}})]),t._v(" "),s("p",[t._v("select your license and click open.")]),t._v(" "),s("p",[t._v("the last step, you need to add some enviroment parameter in "),s("strong",[t._v(".bashrc")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("source /opt/Xilinx/Vivado/2016.4/settings64.sh\nsource /opt/Xilinx/SDK/2016.4/settings64.sh\nexport PATH=$PATH:/opt/Xilinx/SDK/2016.4/bin\n")])])]),s("h3",{attrs:{id:"_1-3-install-cable-driver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-install-cable-driver"}},[t._v("#")]),t._v(" 1.3 Install cable driver")]),t._v(" "),s("p",[t._v("On Windows, Install Cable Drivers is an optional selection in the installer.For Linux, because root or sudo access is required to install drivers, this option has been removed from the Linux installer beginning in Vivado 2015.4. The general Vivado installer can now be run on Linux without root or sudo privileges. To install cable drivers on Linux, there is now a script that must be run as root or sudo post installation.")]),t._v(" "),s("p",[t._v("Script Location: /data/xicom/cable_drivers/lin64/install_script/install_drivers/ Script Name: install_drivers")]),t._v(" "),s("p",[s("strong",[t._v("Reference: ug973-vivado-release-notes-install-license")])]),t._v(" "),s("h3",{attrs:{id:"_1-4-add-vivado-sdk-to-dash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-add-vivado-sdk-to-dash"}},[t._v("#")]),t._v(" 1.4 Add Vivado SDK to Dash")]),t._v(" "),s("p",[t._v("After steps from 1.1 to 1.3, Vivado SDK has been installed successfully, but in x64 ubuntu, we still cannot find vivado in Dash, so we have to add it by ourselves:")]),t._v(" "),s("p",[t._v("For Vivado:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo touch /usr/share/applications/vivado.desktop\nsudo vim /usr/share/applications/vivado.desktop\n")])])]),s("p",[t._v("add these statement:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[Desktop Entry]\nEncoding=UTF-8\nName=Vivado 2016.4\nExec=[Vivado Install Dir]/Vivado/2016.4/bin/vivado\nTerminal=false\nType=Application\nIcon=[Vivado Install Dir]/Vivado/2016.4/doc/images/vivado_logo.png\nStartupNotify=true\nCategories=System;\n")])])]),s("p",[t._v("For SDK:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cd [Vivado Install Dir]/SDK/2016.4/eclipse/lnx64.o/\nsudo mkdir jre\ncd jre\nsudo ln -s [your jdk path]/jre/bin\nsudo touch /usr/share/applications/xsdk.desktop\nsudo vim /usr/share/applications/xsdk.desktop\n")])])]),s("p",[t._v("add these statement:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[Desktop Entry]\nEncoding=UTF-8\nName=SDK 2016.4\nExec=xsdk\nTerminal=false\nType=Application\nIcon=[Vivado Install Dir]/SDK/2016.4/data/sdk/images/sdk_logo.png\nStartupNotify=true\nCategories=System;\n")])])]),s("p",[s("strong",[t._v("Note:")])]),t._v(" "),s("p",[s("strong",[t._v('When launch SDK in Dash, it shows this error, it means you have to launch sdk with shell command "xsdk", otherwise, you may find that you can\'t close SDK')]),t._v(":")]),t._v(" "),s("p",[s("img",{attrs:{src:a(396),alt:"Screenshot from 2017-03-14 17-02-33"}})]),t._v(" "),s("p",[s("strong",[t._v('If you launch SDK in terminal with command "xsdk", and there nothing happens, but shows information as follow:')])]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("****** Xilinx Software Development Kit\n****** SDK v2016.4 (64-bit)\n  **** SW Build 1733598 on Wed Dec 14 22:35:42 MST 2016\n    ** Copyright 1986-2016 Xilinx, Inc. All Rights Reserved.\n\nLaunching SDK with command /opt/Xilinx/SDK/2016.4/eclipse/lnx64.o/eclipse -vmargs -Xms64m -Xmx512m -Dorg.eclipse.swt.internal.gtk.cairoGraphics=false\n")])])]),s("p",[s("strong",[t._v('then, you need to add these 2 lines to [Vivado Install Dir]/SDK/2016.4/eclipse/lnx64.o/eclipse.ini before statement "-vmargs"')])]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("--launcher.GTK_version\n2\n")])])]),s("p",[s("strong",[t._v("just like this:")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(397),alt:"Screenshot from 2017-03-15 00-25-33"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);