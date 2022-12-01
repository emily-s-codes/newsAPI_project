import "./NewsSection.css";
import { useState, useEffect } from "react";
import secrets from "../../secrets.json";
import NewsItem from "./singleNewsItemComponent/NewsItemComponent";

const NewsSection = () => {
    const [headlineNews, setNews] = useState([]);
    const apiKeyUse = secrets.apiKey;
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKeyUse}`)
            .then(res => res.json())
            .then((headlineNews) => {
                setNews(headlineNews.articles);
            })
    }, []);
    return (
        <section className='newsItemsSection'>
            {headlineNews.map((newsStory, index) => {
                return (
                    <NewsItem key={index} urlToImage={newsStory.urlToImage} title={newsStory.title} description={newsStory.description} url={newsStory.url} />
                )
            })}
        </section>
    );
}

export default NewsSection;