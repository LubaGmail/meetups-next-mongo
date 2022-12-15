// issues with import from /pages/[dynamic]/index;  ok importing from /pages/api/[dynamic]
// import {connectMongo} from '../../lib/db'

import MeetupDetail from '../../components/meetups/meetup-detail'

const GET_API = 'http://localhost:3000/api/'

const MeetupPage = (props) => {
  return (
    <>
      <div className='center'> 
        <MeetupDetail meetup={props.meetup} />
      </div>
    </>
  ) 
}

export async function getStaticPaths() {
  const response = await fetch(GET_API + 'featured')
  const data = await response.json()

  const idStr = data.detail[0]._id.toString()

  return {
    fallback: true,
    paths: [
      {params: {meetupid: idStr}}
    ]
  }
}

export async function getStaticProps(context) {
  const paramsMeetupid = context.params.meetupid
  const response = await fetch(GET_API + paramsMeetupid)
  const data = await response.json()
  const record = data.detail

  return {
    props: {
      meetup: {
        id: record._id.toString(),
        title: record.title,
        image: '/images/bath.jpg',
        address: record.address,
        desc: record.desc,
        featured: record.featured
      }
    }
  }
}

export default MeetupPage
