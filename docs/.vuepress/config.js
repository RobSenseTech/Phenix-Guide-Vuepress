module.exports = {
    title: 'Phenix Guide',
    themeConfig: {
        smoothScroll: true,
        nav: [
            //{ text: 'Guide', link: '/'},
            { text: 'Github', link: 'https://github.com/RobSenseTech/Phenix-Guide-Vuepress'},
            { text: 'Robsense', link: 'http://www.robsense.com'}
        ],
        sidebarDepth: 0, // optional, defaults to 1
        sidebar: [
            {
                title: 'Introducing Phenix Personal Edition',   
                path: '/',      // optional, link of the title, which should be an absolute path and must exist
                collapsable: true, // optional, defaults to true
                //sidebarDepth: 1,    // optional, defaults to 1
            },
            {
                title: 'Your First Flight With Phenix',   
                path: '/chapter1/',     
                children: [
                    '/chapter1/purchase-a-devkit',
                    '/chapter1/build-your-quadcopter',
                    '/chapter1/download-the-codebase'
                ]
            },
            {
                title: 'Robotics Intelligence and IoT',
                path: '/chapter3-1/',
                children: [
                    { 
                        title: 'Machine Vision', path: '/chapter3-1/machine-vision'
                    },
                    {
                        title: 'Communication',   
                        path: '/chapter3-1/communication/',
                        children: [
                            '/chapter3-1/communication/quick-connections'
                        ]
                    }
                    
                ],
            }
           
        ]
    }
}