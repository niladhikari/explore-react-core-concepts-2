/* eslint-disable react/prop-types */
export default function Friend({friend}){
    // eslint-disable-next-line react/prop-types
    const {name, email ,username,website} = friend;
    return (
        <div className="friends">
            <h4>Name: {name} </h4>
            <p>Email: {email}</p>
            <p>Username: {username}</p>
            <p>Website: {website}</p>
        </div>
    )
}