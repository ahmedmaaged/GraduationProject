import React from "react";
import { Col } from "reactstrap";
import serviceData from "../../assets/data/serviceData";
import "../../styles/Services.css";
const Services = () => {
	return (
		<>
			{serviceData.map((item) => (
				<ServiceItem item={item} key={item.id} />
			))}
		</>
	);
};
const ServiceItem = ({ item }) => (
	<Col lg="4" md="4" sm="6" className="mb-3">
		<div className="sevice-item">
			<span className="mb-3 d-inline-block">
				<i className={item.icon} />
			</span>
			<h6>{item.title}</h6>
			<p className="section-description">{item.desc}</p>
		</div>
	</Col>
);
export default Services;
