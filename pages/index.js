import MeetupList from '../components/meetups/meetup-list'
// const { MongoClient, ObjectId } = require('mongodb');
import {connectMongo, allRecords} from '../lib/db'

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
  let client
  try {
      client = await connectMongo()
  } catch (error) {
      throw new Error(error.toString())
  }

  let meetups
  try {
      meetups = await allRecords(client)
  } catch (error) {
      if (client) client.close()
      throw new Error(req.method + 'error.toString()')
  }
  if (client) client.close()

  return {
      props: {
        meetups: meetups.map((el) => ({
          title: el.title,
          image: el.image,
          address: el.address,
          desc: el.desc,
          idStr: el._id.toString()
        }) )
      },
      revalidate: 2
  }
}

export default HomePage
