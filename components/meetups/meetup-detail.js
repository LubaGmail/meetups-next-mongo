import { useRouter } from 'next/router'

import styles from './meetup-detail.module.css'

const MeetupDetail = ({ meetup }) => {
    const router = useRouter()

    const featuredEl = meetup.featured ? 'Featured meetup' : 'Regular meetup'
  
    return (
        <section className={styles.item}>
            <h2>Meetup Detail</h2>
            <table> 
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>{meetup.id}</td>
                    </tr>
                    <tr>
                        <th>Title</th>
                        <td>{meetup.title}</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>{meetup.address}</td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>{meetup.desc}</td>
                    </tr>
                    <tr>
                        <th>Featured</th>
                        <td>{featuredEl}</td>
                    </tr>
                </tbody>

            </table>

            <button onClick={() =>router.back()}>Back</button>
        </section>
    )
}

export default MeetupDetail
