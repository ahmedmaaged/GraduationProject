import React from "react";
import "../Componants/UI/HeroSlider";
import "../Componants/Helmet/Helmet";
import Helmet from "../Componants/Helmet/Helmet";
import HeroSlider from "../Componants/UI/HeroSlider";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../Componants/UI/FindCarForm";
import CarItem from "./../Componants/UI/CarItem";
import "../assets/data/carData";
import carData from "../assets/data/carData";
import { Link } from "react-router-dom";
import AboutSection from "../Componants/UI/AboutSection";
import Services from "../Componants/UI/Services";
import CarEvaluation from "../Componants/UI/CarEvaluation";
const Home = () => {
	return (
		<Helmet tittle="Home">
			<section className="p-0 hero_slider_section">
				<HeroSlider />
				{/* ------Search Form Section-------- */}
				<div className="hero-form">
					<Container>
						<Row className="form-row">
							<Col lg="4" md="4">
								<div className="find-car-left">
									<h2>Find a car</h2>
								</div>
							</Col>
							<Col lg="8" md="8" sm="12">
								<FindCarForm />
							</Col>
						</Row>
					</Container>
				</div>
			</section>
			{/* ----------About Us section---------- */}
			<div className="">
				<AboutSection />
			</div>
			{/* --------Services section----------- */}
			<section>
				<Container>
					<Row>
						<Col lg="12" className="text-center mb-5">
							<h3 className="section__subtittle">See Our</h3>
							<h2 className="section__tittle">Popular Services</h2>
						</Col>
						<Services />
					</Row>
				</Container>
			</section>
			{/* ------cars for sell section-------- */}
			<section>
				<Container>
					<Row>
						<Col lg="12" className="text-center mb-5">
							<h3 className="section-subtittle">You can find used cars here</h3>
							<Link to="/usedCars" className="section-tittle">
								Used cars
							</Link>
						</Col>
						{carData.slice(0, 6).map((item) => (
							<CarItem item={item} key={item.id} />
						))}
					</Row>
				</Container>
			</section>
			{/* ----------Car Evalution------------ */}
			<CarEvaluation />
		</Helmet>
	);
};
export default Home;
