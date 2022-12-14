import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from './meetup-item.module.css'

const MeetupItem = ({ item }) => {
  const router = useRouter()
  const meetupid = item.idStr;

  const toMeetupDetail = () => {
    // router.push('/' + meetupid)
  }

  return (
    <section className={styles.item}>
      meetupid: {meetupid}
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
