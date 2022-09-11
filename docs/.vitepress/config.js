export default {
    title: 'alphaGrid',
    description: 'Just playing around.',

    themeConfig: {
        nav: [
            { text: 'Quickstart', link: '/guide/quick-start' },
            { text: 'Docs', link: '/syntax/grid', },
            { text: 'Changelog', link: 'https://github.com/...' }
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'Introduction', link: '/guide/what-is-agrid' },
                    {
                        text: 'Getting Started', link: '/guide/quick-start', items: [
                            { text: 'CSS', link: '/guide/css' },
                            { text: 'SASS', link: '/guide/sass' }
                        ]
                    },
                    {
                        text: 'Syntax',
                        items: [
                            { text: 'Grid', link: '/syntax/grid' },
                            { text: 'Gap', link: '/syntax/gap' },
                            { text: 'Offset', link: '/syntax/offset' },
                            { text: 'Order', link: '/syntax/order' }
                        ]
                    }
                ]
            }
        ]
    }
}