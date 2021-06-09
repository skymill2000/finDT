import React, {useState} from 'react'


const UserList = () => {
    const [userList, setUserList] =useState([
        {
            name : "bmw",
            ph : 500,
        },
        {
            name : "sonata",
            ph : 122,
        },
        {
            name : "tico",
            ph : 12,
        },

    ])
    return (
        <div>
            <p>차이름은 : {userList[0].name}</p>
            <p>차이름은 : {userList[1].name}</p>
            <p>차이름은 : {userList[2].name}</p>
        </div>
    )
}

export default UserList
