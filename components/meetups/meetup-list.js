import MeetupItem from './meetup-item'
import styles from './meetup-list.module.css'

const MeetupList = ({ meetups }) => {
  
  return (
    <>
      <div className={styles.list}> 
        {
          meetups.map(el => (
            <li key={el.idStr}>
              <MeetupItem item={el} />
            </li>
          ) )
        }
      </div>
    </>
  )
}

export default MeetupList
