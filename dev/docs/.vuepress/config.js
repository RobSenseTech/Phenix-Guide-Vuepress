
module.exports = {
    title: 'Phenix Guide',
    // base: '/Phenix-Guide-Vuepress/',
    plugins: ['@vuepress/back-to-top','@vuepress/medium-zoom'],
    themeConfig: {
        smoothScroll: true,
        nav: [
            { text: 'Github', link: 'https://github.com/RobSenseTech/Phenix-Guide-Vuepress'},
            { text: 'Robsense', link: 'http://www.robsense.com'}
        ],
        sidebarDepth: 0, // optional, defaults to 1
        sidebar: [
            {
                title: 'Introducing Phenix Personal Edition',   // Homepage
                path: '/'
            },
            {
                title: 'Your First Flight With Phenix',   //Chapter 1
                path: '/chapter1/',   
                 
                children: [
                    { title: 'Purchase a Phenix Pro', path: '/chapter1/purchase-a-devkit' },
                    { title: 'Build your Quadcopter', path: '/chapter1/build-your-quadcopter' },
                    { title: 'Download the codebase', path: '/chapter1/download-the-codebase' },
                    { title: 'Build the Firmware', path: '/chapter1/build-the-firmware' },
                    { title: 'Program the controller', path: '/chapter1/program-the-controller' },
                    { title: 'Configure with Mission Planner', path: '/chapter1/configure-with-mission-planner' },
                    { title: 'Release Note', path: '/chapter1/release-note' },
                    { title: 'Become a Developer', path: '/chapter1/become-a-developer' }
                ],
                
            },
            {
                title: 'Basis of SW/HW co-design with Phenix',  //Chapter 2
                path: '/chapter2/',     
                children: [
                    {
                        title: 'Develop Enviroment',   
                        path: '/chapter2/developenv/',
                        children: [
                            { title: 'Install Ubuntu', path: '/chapter2/developenv/install-ubuntu' },
                            { title: 'Install Xilinx Vivado', path: '/chapter2/developenv/install-xilinx-vivado' },
                            { title: 'Install Mission Planner', path: '/chapter2/developenv/mission-planner' }
                        ]
                    },
                    {
                        title: 'Get Started',   
                        path: '/chapter2/getstart/',
                        children: [
                            { title: 'Build Hardware', path: '/chapter2/getstart/build-hardware' },
                            { title: 'Build Software', path: '/chapter2/getstart/build-software' },
                            { title: 'ROS Environment', path: '/chapter2/getstart/ros-environment' }
                        ]
                    },
                    {
                        title: 'Hardware Insight',   
                        path: '/chapter2/hardware/',
                        children: [
                            { title: 'Zynq Soc', path: '/chapter2/hardware/zynq-soc' },
                            { title: 'PS', path: '/chapter2/hardware/ps' },
                            { title: 'PL', path: '/chapter2/hardware/pl' }
                        ]
                    },
                    { title: 'Software Insight', path: '/chapter2/software-insight'}
                ],
                
            },
            {
                title: 'Robotics Control Stacks', //Chapter 3
                path: '/chapter3/',     
                children: [
                    { title: 'Unmanned Aerial Vehicle', path: '/chapter3/unmanned-aerial-vehicle-control' },
                    { title: 'Unmanned Ground Vehicle', path: '/chapter3/unmanned-ground-vehicle-control' },
                    { title: 'Unmanned Underwater Vehicle', path: '/chapter3/unmanned-underwater-vehicle-control'},
                    { title: 'Unmanned Boat', path: '/chapter3/unmanned-boat-control' }
                ],
                
            },
            {
                title: 'Robotics Intelligence and IoT',  //Chapter 3-1
                path: '/chapter3-1/',
                children: [
                    { title: 'Machine Vision', path: '/chapter3-1/machine-vision'},
                    {
                        title: 'Communication',   
                        path: '/chapter3-1/communication/',
                        children: [
                            { title: 'EasySwarm', path: '/chapter3-1/communication/easyswarm' },
                            { title: 'Function Introduction', path: '/chapter3-1/communication/function-introduction' },
                            { title: 'Quick Connections', path: '/chapter3-1/communication/quick-connections' },
                            { title: 'Use Cases', path: '/chapter3-1/communication/use-cases' },
                            { title: 'FAQ', path: '/chapter3-1/communication/faq'}
                        ],
                        
                    },
                    { title: 'Machine Learning', path: '/chapter3-1/machine-learning'},
                    { title: 'Edge Computing', path: '/chapter3-1/edge-computing'}
                ],
                
            }
        ]
    }
}

