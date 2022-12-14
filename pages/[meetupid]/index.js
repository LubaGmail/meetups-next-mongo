import { useRouter } from 'next/router'

import MeetupDetail from '../../components/meetups/meetup-detail'
import { getOne, getFeatured } from '../../data/dummy-meetups'

const MeetupPage = () => {
    const router = useRouter()
    const meetupid = router?.query?.meetupid

  return (
    <>
      <div className='center'> 
        <MeetupDetail meetupid={meetupid} />
      </div>
    </>
  )
}

export async function getStaticPaths(context) {

  return {
    fallback: true,
    paths: [
      {params: {meetupid: '6397323351a18dc23f5db511'}}
    ]
  }
}

export async function getStaticProps(context) {
  return {
    props: {
      meetup: {
        id: '6397323351a18dc23f5db511',
        title: 'React Meetup',
        image: '/images/bath.jpg',
        address: 'Bath street 1, Bath UK',
        desc: 'Second meetup',
        isFeatured: true
      }
    }
  }
}

export default MeetupPage
