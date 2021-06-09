import React from 'react'
import axios from 'axios'

const NewsPage = () => {
    const getNews = () =>{
        //버튼을 클릭한 이후에 뉴스데이터를 가져오는것
        // axios.get("{주소}")
        let apiKey = "" //여러분들의 APIkEY
        let newsApiUrl = "https://newsapi.org/v2/everything?q=삼성&from=2021-05-09&sortBy=publishedAt&apiKey="+apiKey+"&language=ko";
        axios.get(newsApiUrl).then((response)=>{
            console.log(response)
        })
    }


    return (
        <div>
            <button onClick={getNews}>뉴스 가져오기</button>            
        </div>
    )
}

export default NewsPage
