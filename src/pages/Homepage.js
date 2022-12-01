import NewsSection from "../components/newsSection/NewsSection";
import SelectCountry from '../components/selectCountry/SelectCountry';

const Homepage = () => {
    return (<section className="homepageSection">
        <h1>Top News</h1>
        {/* <h3>Or: see the news you want with the selections below</h3>
        <SelectCountry placeHolder="select..." /> */}
        <NewsSection />
    </section>
    );
}

export default Homepage;