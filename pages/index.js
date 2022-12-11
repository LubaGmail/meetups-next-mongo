import Head from 'next/head'
import Image from 'next/image'

import DUMMY_MEETUPS from '../data/dummy-meetups'
import MeetupList from '../components/meetups/meetup-list'

const HomePage = (props) => {

  return (
    <>
      <div> 
        <MeetupList meetups={props.meetups} />
      </div>
    </>
  )
}

export async function getStaticProps() {

  return {
      props: {
          meetups: DUMMY_MEETUPS
      },
      revalidate: 2
  }
}

export default HomePage
