import "./NewsItemComponent.css";
import ReadMore from "../../button/ReadMoreButton";

const NewsItem = (props) => {
    return (
        <div className="singleNewsItem">
            <img src={props.urlToImage} alt="news story" />
            <div className="singleNewsItemContentDiv">
                <p className="singleNewsItemTitle">{props.title}</p>
                <a href={props.url} target="_blank" rel="noreferrer"><ReadMore /></a>
            </div>
        </div >
    );
}

export default NewsItem;