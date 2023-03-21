import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/aboust-section.css";
import aboutImage from "../../assets/all-images/cars-img/bmw-offer.png";
const AboutSection = () => {
	return (
		<section>
			<Container>
				<Row>
					<Col lg="6" md="6">
						<div className="about-section-content">
							<h2 className="section-subtittle">About Us</h2>
							<h4 className="section-tittle">Welcome to our Website</h4>
							<p className="section-description">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
						<div className="about-section-item d-flex align-items-center">
							<p className="section-description d-flex align-items-center gap-2">
								<i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
								amet
							</p>
							<p className="section-description d-flex align-items-center gap-2">
								<i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
								amet
							</p>
						</div>
						<div className="about-section-item d-flex align-items-center">
							<p className="section-description d-flex align-items-center gap-2">
								<i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
								amet
							</p>
							<p className="section-description d-flex align-items-center gap-2">
								<i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
								amet
							</p>
						</div>
					</Col>
					<Col lg="6" md="6">
						<div className="about-img">
							<img src={aboutImage} alt="" className="w-100" />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default AboutSection;
