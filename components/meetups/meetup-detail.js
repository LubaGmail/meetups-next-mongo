import Image from 'next/image'
import { useRouter } from 'next/router'

import {getOne} from '../../data/dummy-meetups'
import styles from './meetup-detail.module.css'

const MeetupDetail = ({ meetupid }) => {
    const router = useRouter()
    let queryMeetupid = router?.query?.meetupid
    let meetup = {}

    meetupid ? meetup = getOne(meetupid) : meetup = getOne(queryMeetupid)
   
    return (
        <section className={styles.item}>
            <h2>Meetup Detail</h2>
            <table> 
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>{meetup?.id}</td>
                    </tr>
                    <tr>
                        <th>Title</th>
                        <td>{meetup?.title}</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>{meetup?.address}</td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>{meetup?.desc}</td>
                    </tr>
                </tbody>

            </table>

            <button onClick={() =>router.back()}>Back</button>
        </section>
    )
}

export default MeetupDetail
