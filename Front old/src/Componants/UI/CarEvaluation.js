import React from "react";
import "../../styles/CarEvaluation.css";
import { Container, Col, Row } from "reactstrap";
import sideImage from "../../assets/all-images/cars-img/nissan-offer.png";
const CarEvaluation = () => (
	<section className="carEvaluation-section">
		<Container>
			<Row>
				<Col lg="6" md="6" sm="12">
					<img src={sideImage} alt="" className="w-100" />
				</Col>
				<Col lg="6" md="6" sm="12">
					<h2 className="section_tittle">
						Do you want to evaluate your car price?
					</h2>
					<button className="btn eval-btn mt-4">Evaluate</button>
				</Col>
			</Row>
		</Container>
	</section>
);
export default CarEvaluation;
