export default {
    title: 'alphaGrid',
    description: 'Simple utility-first CSS library for implemeting Grid layouts',

    themeConfig: {
        nav: [
            { text: 'Quickstart', link: '/guide/quick-start' },
            { text: 'Docs', link: '/utils/grid', },
            { text: 'Changelog', link: 'https://github.com/icanteven-code/alpha-grid' }
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'Introduction', link: '/guide/what-is-agrid' },
                    {
                        text: 'Getting Started', link: '/guide/quick-start', items: [
                            { text: 'CSS', link: '/guide/css' },
                            { text: 'SASS', link: '/guide/sass' },
                            { text: 'Customization', link: '/guide/customization' },
                        ]
                    },
                    {
                        text: 'Utilities',
                        items: [
                            { text: 'Grid', link: '/utils/grid' },
                            { text: 'Order', link: '/utils/order' },
                            { text: 'Offset', link: '/utils/offset' },
                            { text: 'Gap', link: '/utils/gap' },
                        ]
                    }
                ]
            }
        ]
    }
}