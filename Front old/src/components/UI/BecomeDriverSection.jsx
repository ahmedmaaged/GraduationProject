import React from "react";
import "../../styles/car-eavluation.css";
import { Container, Row, Col } from "reactstrap";
import driverImg from "../../assets/all-images/toyota-offer-2.png";
import { Link } from "react-router-dom";

const CarEvaluationSection = () => {
	return (
		<section className="become__driver">
			<Container>
				<Row>
					<Col lg="6" md="6" sm="12" className="become__driver-img">
						<img src={driverImg} alt="" className="w-100" />
					</Col>

					<Col lg="6" md="6" sm="12">
						<h2 className="section__title become__driver-title">
							Do You Want to Evaluate your car price?
						</h2>

						<button className="btn become__driver-btn mt-4">
							<Link to="/carEvaluation">Evaluate your car</Link>
						</button>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default CarEvaluationSection;
