import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../assets/data/carData";
import "../../styles/CarItem.css";
const CarItem = (props) => {
	const { imgUrl, model, carName, automatic, speed, price } = props.item;
	return (
		<Col lg="4" md="4" sm="6" className="mb-5">
			<div className="car-item">
				<div className="car-image">
					<img src={imgUrl} alt="" className="w-100" />
				</div>
				<div className="car-item-content mt-4">
					<h4 className="secction-tittle text-center">{carName}</h4>
					<h6 className="secction-price text-center">{price}</h6>
					<div className="car-item-info d-flex align-items-center justify-content-between mt-3 mb-4">
						<span className="d-flex align-items-center gap-1">
							<i class="ri-car-line">{model}</i>
						</span>
						<span className="d-flex align-items-center gap-1">
							<i class="ri-settings-3-line">{automatic}</i>
						</span>
						<span className="d-flex align-items-center gap-1">
							<i class="ri-timer-flash-line">{speed}</i>
						</span>
					</div>
					<button className="w-50 car-item-btn car-item-buy">
						<Link to={`/cars/${carName}`}>Buy</Link>
					</button>
					<button className="w-50 car-item-btn car-item-deatails">
						<Link to={`/cars/${carName}`}>Deatails</Link>
					</button>
				</div>
			</div>
		</Col>
	);
};
export default CarItem;
