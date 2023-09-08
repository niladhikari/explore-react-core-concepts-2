
import { useState, useEffect } from 'react';
import Friend from './Friend';
export default function Friends() {
    const [friends,setFriends] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (res => res.json())
        .then (data => setFriends(data))
    },[])

    return(
        <div className="friends">
            <h3>Friends:{friends.length}</h3>
            {
                // eslint-disable-next-line react/jsx-key
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}

/**
 * 1. state to hold data
 * 2. use effect with dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the state
 * 5. display data on the component
*/