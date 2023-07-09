import React from "react";
import { Container } from "reactstrap";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../../styles/heroSlider.css";
const HeroSlider = () => {
	const settings = {
		fade: true,
		speed: 2000,
		autoplaySpeed: 3000,
		infinite: true,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
	};
	return (
		<Slider {...settings} className="main-slider">
			<div className="slider_item slider_item-01 mt0">
				<Container>
					<div className="slider-content">
						<h6 className="text-light mb-3">Gladly you can sell your car</h6>
						<h1 className="text-light mb-4">SELL NOW</h1>
						<button className="btn reserve-btn mt-4">
							<Link to="/sellMyCar">Add Post </Link>
						</button>
					</div>
				</Container>
			</div>
			<div className="slider_item slider_item-02 mt0">
				<Container>
					<div className="slider-content">
						<h6 className="text-light mb-3">Gladly you can sell your car</h6>
						<h1 className="text-light mb-4">SELL NOW</h1>
						<button className="btn reserve-btn mt-4">
							<Link to="/sellMyCar">Add Post</Link>
						</button>
					</div>
				</Container>
			</div>
			<div className="slider_item slider_item-03 mt0">
				<Container>
					<div className="slider-content">
						<h6 className="text-light mb-3">Gladly you can sell your car</h6>
						<h1 className="text-light mb-4">SELL NOW</h1>
						<button className="btn reserve-btn mt-4">
							<Link to="/sellMyCar">Add Post</Link>
						</button>
					</div>
				</Container>
			</div>
		</Slider>
	);
};
export default HeroSlider;
