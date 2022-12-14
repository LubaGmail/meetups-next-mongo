const DUMMY_MEETUPS = [
    {
        id: '639731fd51a18dc23f5db510',
        title: 'NextJS Meetup',
        image: '/images/naples.jpg',
        address: 'Naples street 1, Naples Italy',
        desc: 'First meetup',
        featured: false
    },
    {
        id: '6397323351a18dc23f5db511',
        title: 'React Meetup',
        image: '/images/bath.jpg',
        address: 'Bath street 1, Bath UK',
        desc: 'Second meetup',
        featured: true
    },
    {
        id: '639b9ec51114bea2f3670c7a',
        title: 'Modern JavaScript',
        image: '/images/orleans.jpg',
        address: 'Leon street 1, Leon France',
        desc: 'Third meetup',
        featured: false
    },
]

export function getOne(id) {
    const meetup = DUMMY_MEETUPS.find(el => el.id === id)
    return meetup
}

export function getFeatured() {
    const featured = DUMMY_MEETUPS.filter(el => el.featured)
    return featured
}

export default DUMMY_MEETUPS