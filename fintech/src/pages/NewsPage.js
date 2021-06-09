import React, { useState } from 'react'
import axios from 'axios'

const NewsPage = () => {
    const [newsList, setNewsList] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const getNews = () =>{
        //버튼을 클릭한 이후에 뉴스데이터를 가져오는것
        // axios.get("{주소}")
        let apiKey = "78bc6ddd8cdb48ceac76f5f9b9dfc4c5" //여러분들의 APIkEY
        let newsApiUrl = "https://newsapi.org/v2/everything?q="+searchInput+"&from=2021-05-09&sortBy=publishedAt&apiKey="+apiKey+"&language=ko";
        axios.get(newsApiUrl).then((response)=>{
            let resultNewsList = response.data.articles;
            setNewsList(resultNewsList)
            console.log(newsList);
        })
    }
    const changeSearch = (e) =>{
        const {value, name} = e.target;
        setSearchInput(value);
    }
    return (
        <div>
            <input onChange={changeSearch}></input>
            <button onClick={getNews}>뉴스 가져오기</button>
            {newsList.map( (news) =>{
                return(
                <>
                    <h1>{news.title}</h1>
                    <p>{news.description}</p>
                </>
                )
            })}            
        </div>
    )
}

export default NewsPage
