(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{453:function(e,t,a){e.exports=a.p+"assets/img/Openthegateway.31e1c838.png"},454:function(e,t,a){e.exports=a.p+"assets/img/Add0001nodetothegateway.58496c0f.png"},455:function(e,t,a){e.exports=a.p+"assets/img/Add0001nodetothegateway01.0fd4f299.png"},456:function(e,t,a){e.exports=a.p+"assets/img/ModifythedroneMACaddress.f8ff135e.png"},457:function(e,t,a){e.exports=a.p+"assets/img/Singledronemanualcontrol.4d1dd9b6.png"},458:function(e,t,a){e.exports=a.p+"assets/img/AutomaticallySwarming.7ddf8c73.png"},459:function(e,t,a){e.exports=a.p+"assets/img/Flightplanfile01.c6a6b870.png"},460:function(e,t,a){e.exports=a.p+"assets/img/Flightplanfile02.aa23a65e.png"},499:function(e,t,a){"use strict";a.r(t);var n=a(26),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"use-cases"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[e._v("#")]),e._v(" Use Cases")]),e._v(" "),n("h2",{attrs:{id:"case-1-mac-address-management"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#case-1-mac-address-management"}},[e._v("#")]),e._v(" Case 1: MAC Address Management")]),e._v(" "),n("p",[e._v("The default MAC address of SwarmLink is FDFD0001, which can be customized changed for the purpose of networking."),n("br"),e._v(" "),n("strong",[e._v("Hardware")]),e._v("：SwarmLink Gateway、SwarmLink Node、PC."),n("br"),e._v(" "),n("strong",[e._v("Software")]),e._v("：EasySwarm2.0."),n("br"),e._v("\nNote: You can only modify one node at a time, multiple nodes, please modify them separately.")]),e._v(" "),n("h3",{attrs:{id:"modify-the-mac-address"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#modify-the-mac-address"}},[e._v("#")]),e._v(" Modify the MAC address：")]),e._v(" "),n("h3",{attrs:{id:"_1-open-the-gateway-serial-port"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-open-the-gateway-serial-port"}},[e._v("#")]),e._v(" 1. Open the gateway serial port")]),e._v(" "),n("p",[n("img",{attrs:{src:a(453),alt:"Open the gateway"}})]),e._v(" "),n("ol",[n("li",[e._v('Click on the "NETWORK" tab')]),e._v(" "),n("li",[e._v("Select the serial port number of the gateway connection")]),e._v(" "),n("li",[e._v('Click "Open" and "Success" is displayed in the lower right corner, indicating that the gateway has successfully accessed. At this point, the factory node can also be powered on.')]),e._v(" "),n("li",[e._v("Click to refresh the list on the left. If the 0001 node appears, skip step 2.")])]),e._v(" "),n("h3",{attrs:{id:"_2-add-0001-node-to-the-gateway-you-can-skip-this-step-if-you-have-added"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-add-0001-node-to-the-gateway-you-can-skip-this-step-if-you-have-added"}},[e._v("#")]),e._v(" 2. Add 0001 node to the gateway (you can skip this step if you have added)")]),e._v(" "),n("p",[n("img",{attrs:{src:a(454),alt:"Add 0001 node to the gateway"}}),e._v(" "),n("img",{attrs:{src:a(455),alt:"Add 0001 node to the gateway01"}}),e._v(' 1. Switch to the "SETTING" tab 2. Click on "Gateway" 3. Enter the node MAC address: 0001, 4. Click "ADD". If you see the 0001 node in the white list below, the addition is successful. At this point, the factory node needs to be powered off and restarted. 5. Click on the "NETWORK" tab 6. Click Refresh to see if online node 0001 appears. If successful, go to step 3.')]),e._v(" "),n("h3",{attrs:{id:"_3-modify-the-drone-mac-address"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-modify-the-drone-mac-address"}},[e._v("#")]),e._v(" 3. Modify the drone MAC address")]),e._v(" "),n("p",[n("img",{attrs:{src:a(456),alt:"Modify the drone MAC address"}}),e._v(' 1. Click on the "SETTING" tab 2. Click on "Drone" 3. Pull down and select the "0001" node 4. Fill in the new 4-digit MAC address 5. Click on "SET" and the prompt "Success" will pop up. Power off and restart the factory node, then refresh the online node list to view the modification. Note: If the new MAC address is not in the gateway whitelist, repeat the Add Gateway Whitelist operation in step 2 and refresh again.')]),e._v(" "),n("h2",{attrs:{id:"case-2-single-drone-manual-control"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#case-2-single-drone-manual-control"}},[e._v("#")]),e._v(" Case 2: Single drone manual control")]),e._v(" "),n("p",[n("strong",[e._v("Hardware")]),e._v("：Phenix Pro DevKit，RobSense RST330 research drone、SwarmLink gateway、SwarmLink node、PC"),n("br"),e._v(" "),n("strong",[e._v("Software")]),e._v("：EasySwarm2.0"),n("br"),e._v("\nNote: Before the drone is controlled by a single unit, you need to perform networking operations. Repeat steps 1 and 2 in Case 1 to complete the node addition. Once the drone node appears in the online list, you can proceed."),n("br"),e._v(" "),n("img",{attrs:{src:a(457),alt:"Single drone manual control"}})]),e._v(" "),n("ol",[n("li",[e._v('Switch to the "SWARM" tab')]),e._v(" "),n("li",[e._v("Click the refresh button")]),e._v(" "),n("li",[e._v("The drone node appears in the list, left click to select")]),e._v(" "),n("li",[e._v("In the map on the right, drag the map area with the left button, zoom in and out on the map, and right click on the map to plan the flight point. When finished, click the flight point No. 1.")]),e._v(" "),n("li",[e._v('Place the drone near the flight point No. 1, click "ARM", wait for the drone to unlock.')]),e._v(" "),n("li",[e._v('Set the takeoff height (m), click "TAKEOFF", wait for the drone to take off to the specified height.')]),e._v(" "),n("li",[e._v('Click on "GOTO" and the drone will fly to the currently selected flight point.')]),e._v(" "),n("li",[e._v('After completing the flight, click on "RTL" and the drone will return to the takeoff location and land automatically.')])]),e._v(" "),n("h2",{attrs:{id:"case-3-automatically-swarming"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#case-3-automatically-swarming"}},[e._v("#")]),e._v(" Case 3: Automatically Swarming")]),e._v(" "),n("p",[n("strong",[e._v("Hardware")]),e._v("：RobSense RST330 research drone，RobSense Phenix Pro DevKit，SwarmLink Gateway,SwarmLink Node,PC(windows)."),n("br"),e._v(" "),n("strong",[e._v("Software")]),e._v("：EasySwarm2.0"),n("br"),e._v("\nNote: Before swarm flight, you need to perform swarmLink networking and single-machine manual take-off and landing control test. For details, see Case 1 and Case 2."),n("br"),e._v(" "),n("img",{attrs:{src:a(458),alt:"Automatically Swarming"}})]),e._v(" "),n("ol",[n("li",[e._v("Fill in the longitude, latitude, and altitude of the base point. The longitude and latitude need to be accurate to 6 digits after the decimal point, and the height is an integer greater than or equal to 0.")]),e._v(" "),n("li",[e._v('Import flight plan file, the format is csv, can be opened with execl, there is "SwarmPlan-3Drones.csv" under the software root directory, which can be used as a test file to directly import flight. You can also write your own flight files according to the flight plan file format specification.')]),e._v(" "),n("li",[e._v('Separate the drones on the ground, pay attention to the order of the drones (for example, the order of the demo files is from north to south, in the order of 1, 2, 3), click the "START" button. The drone will automatically execute the flight plan file at set intervals.')]),e._v(" "),n("li",[e._v('In the process of swarm flight, if there is an accident, please click the "PAUSE" button of the formation function for the first time, then return or land according to the actual situation, and do not support direct return.')])]),e._v(" "),n("p",[e._v("Note: The drone's ARM, TAKEOFF, GOTO, RTL and other operations can be completed in the flight plan file.")]),e._v(" "),n("h3",{attrs:{id:"flight-plan-file-preparation-instructions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flight-plan-file-preparation-instructions"}},[e._v("#")]),e._v(" Flight plan file preparation instructions:")]),e._v(" "),n("p",[n("img",{attrs:{src:a(459),alt:"Flight plan file01"}}),n("br"),e._v("\nDemo flight plan files are stored in the software directory. The following are flight file format specifications:"),n("br"),e._v(" "),n("img",{attrs:{src:a(460),alt:"Flight plan file02"}}),n("br"),e._v("\nColumn A - Serial number: starting from 1 and filling in ascending order."),n("br"),e._v("\nColumn B - Tip: Plain text content, only used to prompt the instruction of the line, improve readability."),n("br"),e._v("\nColumn C - Instruction: Includes ARM, TAKEOFF, GOTO, RTL. Only one flight instruction is allowed in a row."),n("br"),e._v("\nColumn D - Interval (seconds): After the execution of the command is completed, wait for N seconds and execute the next line. If the flight distance is long, it is recommended to increase the time interval."),n("br"),e._v("\nColumn E - Node MAC address (no need to add 0 to fill 4 digits): Fill in the MAC address of the drone node that needs to be in formation flight."),n("br"),e._v("\nColumn F- east (meter): If it is a GOTO command, it represents the offset of the flight point relative to the base point, with a positive integer to the east and a negative integer to the west."),n("br"),e._v("\nColumn G - north(meter):: If it is a GOTO command, it represents the north-south offset of the flight point relative to the base point, with a positive integer to the north and a negative integer to the south."),n("br"),e._v("\nColumn H-height (meter): If it is a TAKEOFF command, it represents the takeoff altitude of the drone; if it is a GOTO command, it represents the up and down offset of the flight point relative to the base point, up to a positive integer, down to Negative integer."),n("br"),e._v("\nColumn Q- terminator: Each line must be filled with an ENDL at the end, indicating the end of the line instruction.")])])}),[],!1,null,null,null);t.default=o.exports}}]);