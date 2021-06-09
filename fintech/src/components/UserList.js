import React, {useState} from 'react'


const UserList = () => {
    const [carList, setcarList] =useState([
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
            {carList.map(car => {
                return(<p>자동차 이름은 {car.name}</p>)
            })}
        </div>
    )
}

export default UserList
