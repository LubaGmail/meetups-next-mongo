import Head from 'next/head'
import Image from 'next/image'
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

export async function getStaticPaths() {
  const featured = getFeatured()

  return {
    fallback: true,
    paths:
        [
            { params: { meetupid: featured[0].id } },
        ],

   }
}

export async function getStaticProps(context) {
  const meetupid = context.params.meetupid
  const meetup = getOne(meetupid)
  // console.log('getStaticProps', context.params)

  return {
    props: {
      meetup: meetup
    }
  }
}

export default MeetupPage
