import Head from 'next/head'
import Image from 'next/image'

const POST_API = '/api/new-meetup'

import MeetupForm from '../../components/meetups/meetup-form'

const NewMeetupPage = () => {
  const onAddMeetup = async(obj) => {
    const response = await fetch(POST_API, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    console.log('data', data)
  }
  return (
    <>
      <div className='center'> 
        <MeetupForm  onAddMeetup={ onAddMeetup}
        />
      </div>
    </>
  )
}

export default NewMeetupPage
