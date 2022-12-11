const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'NextJS Meetup',
        image: '/images/naples.jpg',
        address: 'Naples street 1, Naples Italy',
        desc: 'First meetup',
        isFeatured: false
    },
    {
        id: 'm2',
        title: 'React Meetup',
        image: '/images/bath.jpg',
        address: 'Bath street 1, Bath UK',
        desc: 'Second meetup',
        isFeatured: true
    },
    {
        id: 'm3',
        title: 'Modern JavaScript',
        image: '/images/orleans.jpg',
        address: 'Leon street 1, Leon France',
        desc: 'Third meetup',
        isFeatured: false
    },
]

export function getOne(id) {
    const meetup = DUMMY_MEETUPS.find(el => el.id === id)
    return meetup
}

export function getFeatured() {
    const featured = DUMMY_MEETUPS.filter(el => el.isFeatured)
    return featured
}

export default DUMMY_MEETUPS