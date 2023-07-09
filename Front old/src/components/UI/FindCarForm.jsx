import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
	return (
		<Form className="form">
			<div className=" d-flex align-items-center justify-content-between flex-wrap">
				<FormGroup className="select__group">
					<select>
						<option value="used">Used Cars</option>
						<option value="new">New Cars</option>
					</select>
				</FormGroup>

				<FormGroup className="select__group">
					<select>
						<option value="Toyota">Toyota</option>
						<option value="Volkswagen">Volkswagen</option>
						<option value="Ford">Ford</option>
						<option value="Honda">Honda</option>
						<option value="Nissan">Nissan</option>
						<option value="Chevrolet">Chevrolet</option>
						<option value="Hyundai">Hyundai</option>
						<option value="Kia">Kia</option>
						<option value="Mercedes-Benz">Mercedes-Benz</option>
						<option value="BMW">BMW</option>
						<option value="Tesla">Tesla</option>
					</select>
				</FormGroup>

				<FormGroup className="select__group">
					<select>
						<option value="used">Model</option>
					</select>
				</FormGroup>

				<FormGroup className="select__group">
					<select>
						<option value="used">No Max Price</option>
						<option value="50,000 LE">50,000 LE</option>
						<option value="100,000 LE">100,000 LE</option>
						<option value="200,000 LE">200,000 LE</option>
						<option value="400,000 LE">400,000 LE</option>
						<option value="800,000 LE">800,000 LE</option>
						<option value="1,600,000 LE">1,600,000 LE</option>
						<option value="3,200,000 LE">3,200,000 LE</option>
						<option value="5,000,000 LE">5,000,000 LE</option>
					</select>
				</FormGroup>

				<FormGroup className="select__group">
					<select>
						<option value="used">All Distance</option>
						<option value="15 KM">15 KM</option>
						<option value="30 KM">30 KM</option>
						<option value="60 KM">60 KM</option>
						<option value="120 KM">120 KM</option>
						<option value="240 KM">240 KM</option>
						<option value="480 KM">480 KM</option>
						<option value="600 KM">600 KM</option>
						<option value="800KM">800KM</option>
					</select>
				</FormGroup>

				<FormGroup className="form__group">
					<button className="btn find__car-btn">Find Car</button>
				</FormGroup>
			</div>
		</Form>
	);
};

export default FindCarForm;
