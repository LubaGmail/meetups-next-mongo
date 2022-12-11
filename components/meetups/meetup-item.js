import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from './meetup-item.module.css'

const MeetupItem = ({ item }) => {
  const router = useRouter()
  const id = item.id;

  const toMeetupDetail = () => {
    router.push('/' + id)
  }

  return (
    <section  className={styles.item}>
      <div> 
        <p className={styles.title}>
          {item.title}
        </p>
        <p className={styles.image}>
          <Image src={item.image} width={500} height={320}
            alt={item.title} 
          />
        </p>

        <p>
          <button onClick={toMeetupDetail}>See Details</button>
        </p>

      </div>
    </section>
  )
}

export default MeetupItem
