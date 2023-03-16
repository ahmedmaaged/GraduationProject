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
			{/* ------cars for sell section-------- */}
			<section>
				<Container>
					<Row className="">
						<Col lg="12" className="text-center mb-5">
							<h6 className="section-subtittle">
								{" "}
								You can find used cars here{" "}
							</h6>
							<h2 className="section-tittle">Used cars</h2>
						</Col>
						{carData.slice(0, 6).map((item) => (
							<CarItem item={item} key={item.id} />
						))}
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};
export default Home;
