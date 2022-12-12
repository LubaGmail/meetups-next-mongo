import Head from 'next/head'
import Image from 'next/image'
import {useState} from 'react'

import MeetupForm from '../../components/meetups/meetup-form'

const NewMeetupPage = () => {

  return (
    <>
      <div className='center'> 
        <MeetupForm />
      </div>
    </>
  )
}

export default NewMeetupPage
