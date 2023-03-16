import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
// import "../../index.css";
const navLinks = [
	{
		path: "/home",
		display: "Home",
	},
	{
		path: "/about",
		display: "About",
	},
	{
		path: "/cars",
		display: "Cars",
	},

	{
		path: "/blogs",
		display: "Blog",
	},
	{
		path: "/contact",
		display: "Contact",
	},
];
const Header = () => {
	return (
		<header className="header">
			{/* Header top */}
			<div className="header_top">
				<Container>
					<Row>
						<Col lg="6" md="6" sm="6">
							<div className="header_top_left">
								<span>Need Help?</span>
								<span className="header_top_help">
									<i class="ri-phone-fill"></i> +55 106 294 2258
								</span>
							</div>
						</Col>
						<Col lg="6" md="6" sm="6">
							<div className="header_top_right d-flex align-items-center justify-content-end gap-3">
								<Link to="#">
									<i class="ri-login-circle-line align-items-center gap-1"></i>{" "}
									Login
								</Link>
								<Link to="#">
									<i class="ri-user-line align-items-center gap-1"></i> Register
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			{/* Header middle */}
			<div className="header_middle">
				<Container>
					<Row>
						<Col lg="3" md="3" sm="4">
							<div className="logo">
								<h1>
									<Link
										to="/home"
										className="d-flex align-items-center justify-content-start  gap-3"
									>
										<i class="ri-car-line"></i>
										<span>"logo place"</span>
									</Link>
								</h1>
							</div>
						</Col>
						<Col lg="3" md="3" sm="4">
							<div className="header_location d-flex align-items-center gap-2">
								<span>
									<i class="ri-earth-line"></i>
								</span>
								<div className="header_location_content">
									<h4>Egypt</h4>
									<h6>Cairo, Egypt</h6>
								</div>
							</div>
						</Col>
						<Col lg="3" md="3" sm="4">
							<div className="header_location d-flex align-items-center gap-2">
								<span>
									<i class="ri-time-line"></i>
								</span>
								<div className="header_location_content">
									<h4>Saturday - Wednesday</h4>
									<h6>10Am - 7Pm</h6>
								</div>
							</div>
						</Col>
						<Col
							lg="3"
							md="3"
							sm="4"
							className="d-flex align-items-center justify-content-end text-end "
						>
							<button className="header_btn btn">
								<Link to="/contact">
									<i class="ri-phone-line"></i> Reaquest a call
								</Link>
							</button>
						</Col>
					</Row>
				</Container>
			</div>
			{/* Main Navigation */}
			<div className="main_navbar">
				<Container>
					<div className="navigation_wrapper d-flex align-items-center justify-content-between">
						<span className="mobile-menu">
							<i class="ri-menu-2-line"></i>
						</span>

						<div className="navigation">
							<div className="menu">
								{navLinks.map((item, index) => (
									<NavLink
										to={item.path}
										className={(navClass) =>
											navClass.isActive ? "nav_active" : "nav_item"
										}
										key={index}
									>
										{item.display}
									</NavLink>
								))}
							</div>
						</div>

						<div className="nav-right">
							<div className="search-box">
								<input type="text" placeholder="Search" />
								<span>
									<i class="ri-search-line"></i>
								</span>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</header>
	);
};
export default Header;
