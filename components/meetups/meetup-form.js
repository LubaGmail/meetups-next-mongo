import Head from 'next/head'
import Image from 'next/image'

import { useRef } from 'react'

import styles from './meetup-form.module.css'

const MeetupForm = ({onAddMeetup}) => {
  const titleRef = useRef()
  const imageRef = useRef()
  const addressRef = useRef()
  const descRef = useRef()

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const obj = {
      title: titleRef.current.value.trim(),
      image: imageRef.current.value.trim(),
      address: addressRef.current.value.trim(),
      desc: descRef.current.value
    }
    onAddMeetup(obj)
  }

  return (
    <>
      <div> 
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.control}>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title'
              required minLength={2}
              ref={titleRef}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor='image'>Image URL</label>
            <input type='url' id='image' name='image'
              required
              ref={imageRef}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor='address'>Address</label>
            <input type='text' id='address' name='address'
              required minLength={2}
              ref={addressRef}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor='desc'>Description</label>
            <textarea id='desc' name='desc'
              required minLength={2}
              ref={descRef}
            ></textarea>
          </div>

          <div className={styles.actions}>
            <button>Submit</button>
            <button type='reset'>Clear</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default MeetupForm
