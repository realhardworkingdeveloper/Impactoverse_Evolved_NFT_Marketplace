const menus = [
    {
        id: 1,
        name: 'Create',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Do It Yourself',
                links: '/diy'
            },
            {
                id: 2,
                sub: 'Done For You',
                links: '/dfy'
            }
        ]
    },
    {
        id: 2,
        name: 'Explore',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'For Sale',
                links: '/sales'
            },
            {
                id: 2,
                sub: 'Gallery',
                links: '/gallery'
            }
        ],
    },{
        id: 3,
        name: 'Campaigns',
        links: '/campaign'
    },
    {
        id: 4,
        name: 'Community',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Blog',
                links: '/blog'
            },
            {
                id: 2,
                sub: 'Public Vote',
                links: '/vote'
            }
        ],
    },
    {
        id: 5,
        name: 'HowTo',
        links: '/howto'
    }
]

export default menus;