import React from "react";
import styles from './users.module.css'

let Users = (props) => {

if (props.users.length ===0) {
    props.setUsers([{
        id: 1,
        photoUrl: 'https://i.pinimg.com/474x/db/65/48/db654830b510091b321a4d4d0160ee9e.jpg',
        followed: false,
        fullName: 'Vladimir',
        status: 'I am boss',
        location: {city: 'Minsk', country: 'Belarus'}
    },
        {
            id: 2,
            photoUrl: 'https://i.pinimg.com/474x/06/84/e3/0684e340839cc8b22d3d3a481ed162ea.jpg',
            followed: true,
            fullName: 'Dmitry',
            status: 'Hello React',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://as1.ftcdn.net/jpg/01/92/48/10/500_F_192481078_9pweL73rF0X5RFhPk5NFtpwmXvM0DpDC.jpg',
            followed: false,
            fullName: 'Lusi',
            status: 'Super',
            location: {city: 'New York', country: 'USA'}
        }])
}

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
                </span>
                </span>
            </div>)
        }

    </div>
}

export default Users;