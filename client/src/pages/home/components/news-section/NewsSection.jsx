import PropTypes from "prop-types";
import Carousel from "./carousel/Carousel";
import "./newssection.css";


function NewsSection({ data }) {
	return (
		<div className="news-section-container">
			{data.length === 0 && <h1 className="no-news-title text-center text-5xl text-white">No News</h1>}
			{data.length > 0 && <h1 className="news-title underline text-5xl text-white ml-[50vw - 423px]">Latest News</h1>}
			{data.length > 0 && (
				<div className="carousel-container flex justify-center my-[20px] bg-black">
					<Carousel data={data} />
				</div>
			)}
		</div>
	);
}

export default NewsSection;

NewsSection.propTypes = {
	data: PropTypes.arrayOf(Object),
}