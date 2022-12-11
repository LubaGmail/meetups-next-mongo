import Head from 'next/head'
import Image from 'next/image'

import DUMMY_MEETUPS from '../../data/dummy-meetups'
import MeetupItem from './meetup-item'
import styles from './meetup-list.module.css'

const MeetupList = () => {

  return (
    <>
      <div className={styles.list}> 
        {
          DUMMY_MEETUPS.map(el => (
            <li key={el.id}>
              <MeetupItem item={el} />
            </li>
          ) )
        }
      </div>
    </>
  )
}

export default MeetupList
