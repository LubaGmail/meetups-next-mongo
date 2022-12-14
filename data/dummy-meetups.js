const DUMMY_MEETUPS = [
    {
        id: '639731fd51a18dc23f5db510',
        title: 'NextJS Meetup',
        image: '/images/naples.jpg',
        address: 'Naples street 1, Naples Italy',
        desc: 'First meetup',
        isFeatured: false
    },
    {
        id: '6397323351a18dc23f5db511',
        title: 'React Meetup',
        image: '/images/bath.jpg',
        address: 'Bath street 1, Bath UK',
        desc: 'Second meetup',
        isFeatured: true
    },
    {
        id: '6397325e51a18dc23f5db512',
        title: 'Modern JavaScript',
        image: '/images/orleans.jpg',
        address: 'Leon street 1, Leon France',
        desc: 'Third meetup',
        isFeatured: false
    },
]

export function getOne(id) {
    console.log('dummy', id)
    const meetup = DUMMY_MEETUPS.find(el => el.id === id)
   
    return meetup
}

export function getFeatured() {
    const featured = DUMMY_MEETUPS.filter(el => el.isFeatured)
    return featured
}

export default DUMMY_MEETUPS