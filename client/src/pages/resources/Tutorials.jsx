import PropTypes from "prop-types";
import { useState } from "react";
// import Youtube from "react-youtube";
import { tutorialsMap } from "./fakeData";
import "./resources.css";
//import Iframe from 'react-iframe';

// tags is currently unused
function ToggleItem({ id, title, description, url, tags }) {
	const [showButton, setShowButton] = useState(false);
    
	let ytURL;
	const startIndex = url.indexOf("=");
	let endIndex = startIndex + 1;
	let done = false
	while(!done && endIndex < url.length)
	{
        if(url[endIndex] === "&" || url[endIndex] === "?")
		{
            endIndex--;
			done = true; 
		}
		endIndex++;
	}

	ytURL = "https://www.youtube-nocookie.com/embed/" + url.substring(startIndex + 1, endIndex) + "?origin=http://127.0.0.1:5173/";
	return (
		<li className="resource-list-item" key={id}>
			<button
				type="button"
				className={`resource-list-title ${showButton && "active"}`}
				onClick={() => setShowButton(prevState => !prevState)}
			>
				{title}
			</button>

			<div className={`resource-list-description ${showButton && "active"}`}>
				<p>{description}</p>
				{/*<a
					className="resource-link"
					href={url}
					target="_blank"
					rel="noopener noreferrer"
	>
					Watch the video here.*/} {/* Will open link in new tab*/}
				{/*</a>*/}
	            <iframe width="50%" height="90%" src={ytURL} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
				<p>Tags: {tags.join(", ")}</p>
			</div>
		</li>
	);
}

ToggleItem.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Tutorials() {
	return (
		<ul className="resource-list">
			{tutorialsMap.map(tutorial => (
				<ToggleItem
					key={tutorial.id}
					id={tutorial.id}
					title={tutorial.title}
					description={tutorial.description}
					url={tutorial.url}
					tags={tutorial.tags}
				/>
			))}
		</ul>
	);
}

export default Tutorials;
