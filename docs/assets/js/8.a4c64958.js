(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{414:function(t,e,a){t.exports=a.p+"assets/img/-dev-sda-GParted_001.cd6c7660.png"},415:function(t,e,a){t.exports=a.p+"assets/img/-dev-sda-GParted_006.2b5c7de9.png"},416:function(t,e,a){t.exports=a.p+"assets/img/CreatenewPartition_009.d0335d2e.png"},417:function(t,e,a){t.exports=a.p+"assets/img/CreatenewPartition_010.87f3bae2.png"},418:function(t,e,a){t.exports=a.p+"assets/img/-dev-sda-GParted_012.404494d8.png"},419:function(t,e,a){t.exports=a.p+"assets/img/15-36-14.3d6d1382.png"},420:function(t,e,a){t.exports=a.p+"assets/img/16-29-13.74ffa174.png"},421:function(t,e,a){t.exports=a.p+"assets/img/16-34-57.a19fed51.png"},422:function(t,e,a){t.exports=a.p+"assets/img/19-26-44.893b1b23.png"},423:function(t,e,a){t.exports=a.p+"assets/img/16-59-21.98ba6421.png"},482:function(t,e,a){"use strict";a.r(e);var s=a(42),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_3-ros-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-ros-environment"}},[t._v("#")]),t._v(" 3.ROS Environment")]),t._v(" "),s("p",[t._v("This section will show you how to install ROS on devkit, please make sure you have understand the first two sections before read this one.")]),t._v(" "),s("h2",{attrs:{id:"_3-1-install-ubuntu-core-rootfs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-install-ubuntu-core-rootfs"}},[t._v("#")]),t._v(" 3.1 Install Ubuntu Core Rootfs")]),t._v(" "),s("p",[t._v("Robsense has built an ubuntu rootfs (base on "),s("a",{attrs:{href:"http://cdimages.ubuntu.com/ubuntu-base/releases/16.04/release/ubuntu-base-16.04-core-armhf.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://cdimages.ubuntu.com/ubuntu-base/releases/16.04/release/ubuntu-base-16.04-core-armhf.tar.gz"),s("OutboundLink")],1),t._v("), you can find it at:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("PhenixPro_Devkit/amp_system/linux_images/ubuntu-core-16.04-robsense.tar.bz2\n")])])]),s("p",[t._v("ubuntu core username: robsense")]),t._v(" "),s("p",[t._v("ubuntu core password: robsense")]),t._v(" "),s("h3",{attrs:{id:"_3-1-1-partition-sd-card"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-partition-sd-card"}},[t._v("#")]),t._v(" 3.1.1 Partition SD Card")]),t._v(" "),s("p",[t._v("We use gparted to partiton sd card, which is easy to manage patition. Install it with apt:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo apt-get install gparted\n")])])]),s("p",[t._v("Umount SD card:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("umount /media/[PC username]/[sd label]\n")])])]),s("p",[t._v("Open gparted, and select SD:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(414),alt:"-dev-sda - GParted_001"}})]),t._v(" "),s("p",[t._v("Select current fat32 parition, and delete it:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(415),alt:"-dev-sda - GParted_006"}})]),t._v(" "),s("p",[t._v("Create two new partiton:")]),t._v(" "),s("p",[t._v('First, fat32 partition, 200M, Primary Partition, Free space preceding is 4M, Label is "boot"')]),t._v(" "),s("p",[s("img",{attrs:{src:a(416),alt:"Create new Partition_009"}})]),t._v(" "),s("p",[t._v('Second, ext4 partition, Primary Partition, Free space preceding is 0, Label is "rootfs"')]),t._v(" "),s("p",[s("img",{attrs:{src:a(417),alt:"Create new Partition_010"}})]),t._v(" "),s("p",[t._v("Finish with button below")]),t._v(" "),s("p",[s("img",{attrs:{src:a(418),alt:"-dev-sda - GParted_012"}})]),t._v(" "),s("h3",{attrs:{id:"_3-1-2-install-rootfs-to-sd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-install-rootfs-to-sd"}},[t._v("#")]),t._v(" 3.1.2 Install Rootfs To SD")]),t._v(" "),s("p",[t._v("Copy Boot.bin, uImage, devicetree.dtb to boot partition:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cd PhenixPro_Devkit\ncp BOOT.bin /media/[PC username]/boot/\ncd amp_system/linux_images/\ncp devicetree.dtb uImage /media/[PC username]/boot/\n")])])]),s("p",[t._v("Extract rootfs to SD card:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cd PhenixPro_Devkit/amp_system/linux_images\nsudo tar -xpf ubuntu-core-16.04-robsense.tar.bz2 -C /media/[PC username]/rootfs\n")])])]),s("p",[t._v("Umount SD card:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("umount /media/[PC username]/*\n")])])]),s("h3",{attrs:{id:"_3-1-3-configure-u-boot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-configure-u-boot"}},[t._v("#")]),t._v(" 3.1.3 Configure u-boot")]),t._v(" "),s("p",[t._v("u-boot will default to load ramdisk, we need to tell it to stop load ramdisk:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("set sdboot 'if mmcinfo; then run uenvboot; echo Copying Linux from SD to RAM... && load mmc 0 ${kernel_load_address} ${kernel_images} && load mmc 0 ${devicetree_load_address} ${devicetree_images} && bootm ${kernel_load_address} - ${devicetree_load_address}; fi'\n")])])]),s("p",[t._v("Tell it to load filesystem from sd card:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("set bootargs 'console=ttyPS0,115200 maxcpus=1 root=/dev/mmcblk0p2 rw earlyprintk rootfstype=ext4 rootwait devtmpfs.mount=0'\n")])])]),s("p",[t._v("Boot system:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(419),alt:"Screenshot from 2017-06-23 15-36-14"}})]),t._v(" "),s("h2",{attrs:{id:"_3-2-install-ros-kinetic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-install-ros-kinetic"}},[t._v("#")]),t._v(" 3.2 Install ROS Kinetic")]),t._v(" "),s("h3",{attrs:{id:"_3-2-1-configure-network"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-configure-network"}},[t._v("#")]),t._v(" 3.2.1 Configure Network")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo vim /etc/network/interfaces\n")])])]),s("p",[t._v("Add:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("auto eth0\niface eth0 inet static\naddress 192.168.0.234\ngateway 192.168.0.1\nnetmask 255.255.255.0\ndns-nameservers 114.114.114.114\n")])])]),s("p",[t._v("Restart network:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo ifdown eth0 && sudo ifup eth0\n")])])]),s("p",[t._v("Test:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ping www.baidu.com\n")])])]),s("p",[s("img",{attrs:{src:a(420),alt:"Screenshot from 2017-06-23 16-29-13"}})]),t._v(" "),s("h3",{attrs:{id:"_3-2-2-setup-sources-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-setup-sources-list"}},[t._v("#")]),t._v(" 3.2.2 Setup sources.list")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo sh -c 'echo \"deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main\" > /etc/apt/sources.list.d/ros-latest.list'\n")])])]),s("h3",{attrs:{id:"_3-2-3-setup-keys"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-setup-keys"}},[t._v("#")]),t._v(" 3.2.3 Setup keys")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo apt-key adv --keyserver hkp://ha.pool.sks-keyservers.net:80 --recv-key 421C365BD9FF1F717815A3895523BAEEB01FA116\n")])])]),s("h3",{attrs:{id:"_3-2-4-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-installation"}},[t._v("#")]),t._v(" 3.2.4 Installation")]),t._v(" "),s("p",[t._v("Update Ubuntu repositories:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo apt-get update\n")])])]),s("p",[t._v("Install Ros-Base:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo apt-get install ros-kinetic-ros-base\n")])])]),s("p",[s("img",{attrs:{src:a(421),alt:"Screenshot from 2017-06-23 16-34-57"}})]),t._v(" "),s("h3",{attrs:{id:"_3-2-5-initialize-rosdep"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-5-initialize-rosdep"}},[t._v("#")]),t._v(" 3.2.5 Initialize rosdep")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo rosdep init\nrosdep update\n")])])]),s("h3",{attrs:{id:"_3-2-6-environment-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-6-environment-setup"}},[t._v("#")]),t._v(" 3.2.6 Environment setup")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('echo "source /opt/ros/kinetic/setup.bash" >> ~/.bashrc\nsource ~/.bashrc\n')])])]),s("h3",{attrs:{id:"_3-2-7-getting-rosinstall"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-7-getting-rosinstall"}},[t._v("#")]),t._v(" 3.2.7 Getting rosinstall")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://wiki.ros.org/rosinstall",target:"_blank",rel:"noopener noreferrer"}},[t._v("rosinstall"),s("OutboundLink")],1),t._v(" is a frequently used command-line tool in ROS that is distributed separately. It enables you to easily download many source trees for ROS packages with one command.")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo apt-get install python-rosinstall\n")])])]),s("h3",{attrs:{id:"_3-2-8-check"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-8-check"}},[t._v("#")]),t._v(" 3.2.8 Check")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("printenv | grep ROS\n")])])]),s("p",[s("img",{attrs:{src:a(422),alt:"Screenshot from 2017-06-23 19-26-44"}})]),t._v(" "),s("h2",{attrs:{id:"_3-3-wakeup-cpu1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-wakeup-cpu1"}},[t._v("#")]),t._v(" 3.3 Wakeup CPU1")]),t._v(" "),s("p",[t._v("Insert SD card to PC, copy binary tools to ubuntu core user home:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo cp linux/ocm_master/ocmfs_master /media/[PC username]/rootfs/home/robsense\nsudo cp linux/pilot_cmd/pilot_cmd /media/[PC username]/rootfs/home/robsense\nsudo cp linux/rwmem/rwmem.elf /media/[PC username]/rootfs/home/robsense\n")])])]),s("p",[t._v("Modify .bashrc:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo vim /media/[PC username]/rootfs/home/robsense/.bashrc\n")])])]),s("p",[t._v("Add")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('echo "robsense" | sudo -S ./ocmfs_master &\necho "robsense" | sudo -S ./rwmem.elf  0xfffffff0 0x1a000000\n')])])]),s("p",[t._v("Insert SD card to devkit, and power on:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(423),alt:"Screenshot from 2017-06-26 16-59-21"}})])])}),[],!1,null,null,null);e.default=r.exports}}]);