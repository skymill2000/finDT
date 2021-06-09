import React, {useState} from 'react'
import styled from "styled-components";

const Title = styled.div`
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: red;
    border: 2px solid white;
`

const MyButton = styled.button`
    border : solid 1px #ff0000;
    padding : 30px;
    background : blue;
`


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
                return(<Title>자동차 이름은 {car.name}</Title>)
            })}
            <MyButton>버튼입니다</MyButton>
        </div>
    )
}

export default UserList
