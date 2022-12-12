import Head from 'next/head'
import Image from 'next/image'

import { useRef, useState } from 'react'

import styles from './meetup-form.module.css'

const POST_API = '/api/new-meetup'

const MeetupForm = () => {
  let titleRef = useRef()
  let imageRef = useRef()
  let addressRef = useRef()
  let descRef = useRef()
  const [featured, setFeatured] = useState(false)
  const [result, setResult] = useState({})

  const clearForm = () => {
    titleRef.current.value = ''
    imageRef.current.value = ''
    addressRef.current.value = ''
    descRef.current.value = ''
    setFeatured(false)
  }

  const handleCheckbox = (ev) => {
    setFeatured(!featured)
  }

  const handleSubmit = async(ev) => {
    ev.preventDefault()
    const obj = {
      title: titleRef.current.value.trim(),
      image: imageRef.current.value.trim(),
      address: addressRef.current.value.trim(),
      desc: descRef.current.value,
      featured: featured
    }
    const response = await fetch(POST_API, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    setResult({
      statusCode: response.status,
      appStatus: data.appStatus,
      detail: data.detail
    })

    response.status === 200 ? clearForm() : null
  }

  return (
    <>
      Result: {JSON.stringify(result)}
      <div> 
        <form className={styles.form} onSubmit={handleSubmit} onReset={clearForm}>
          <div className={styles.control}>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title'
              required minLength={2}
              ref={titleRef}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor='image'>Image URL</label>
            <input type='text' id='image' name='image'
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
          <div className={styles.control}>
            <label htmlFor='featured'>Featured</label>
            <input type='checkbox' id='featured' name='featured'  
              onClick={handleCheckbox}  checked={featured}
            />
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
