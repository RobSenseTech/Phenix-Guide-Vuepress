(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{461:function(o,e,t){o.exports=t.p+"assets/img/dronesysmtem.21964fcd.png"},503:function(o,e,t){"use strict";t.r(e);var r=t(26),n=Object(r.a)({},(function(){var o=this,e=o.$createElement,r=o._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[r("h1",{attrs:{id:"drone-system-overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#drone-system-overview"}},[o._v("#")]),o._v(" Drone System Overview")]),o._v(" "),r("p",[o._v("Image below is a overview of the whole system of i800-5G drone.\n"),r("img",{attrs:{src:t(461),alt:"drone system overview"}})]),o._v(" "),r("blockquote",[r("p",[r("strong",[o._v("Mission Computer")]),r("br")])]),o._v(" "),r("p",[o._v("Connected to Internet via 5G CPE, this component is mainly responsible for: control flight\nmission of the drone via cloud (with MQTT protocol), taking pictures and upload to cloud via\nFTP protocol, use OBS software to video streaming and push streaming to user defined platforms.")]),o._v(" "),r("blockquote",[r("p",[r("strong",[o._v("Flight Controller (RST Phenix Mini)")]),r("br")])]),o._v(" "),r("p",[o._v("Can communicate with QGC through image trasmitter. Taking order directly from mission computer,\nis responsible for controlling drone motors.")]),o._v(" "),r("blockquote",[r("p",[r("strong",[o._v("Digital Image Trasmitter")]),r("br")])]),o._v(" "),r("p",[o._v("Responsible for trasmit video from on board camera to QGC in real time and controlling on board\ncamera.")]),o._v(" "),r("blockquote",[r("p",[r("strong",[o._v("On Board Camera")]),r("br")])]),o._v(" "),r("p",[o._v("The function of camera has 3 parts:")]),o._v(" "),r("ul",[r("li",[o._v("trasmit video to QGC in real time, allow GQC to control camera")]),o._v(" "),r("li",[o._v("taking order from mission computer to taking/uploading images to cloud via FTP protocol")]),o._v(" "),r("li",[o._v("allow OBS software in mission computer to video streaming to user defined platforms")])]),o._v(" "),r("blockquote",[r("p",[r("strong",[o._v("Cloud")]),r("br")])]),o._v(" "),r("p",[o._v("Cloud is consist of 2 parts: MQTT server and FTP server. Real time informations are sent to\nMQTT server, MQTT server can controll drone by communicating with mission computer. FTP server\nstores images sent from drone.")])])}),[],!1,null,null,null);e.default=n.exports}}]);