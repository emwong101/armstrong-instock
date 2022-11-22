import "./Header.scss";
import React from "react";
// import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo/InStock-Logo.svg";

const Header = () => {
	return (
		<header className="header">
			<div
				to={"#"}
				className="header__company-logo"
			>
				<img
					className="header__logo"
					src={Logo}
					alt="Company logo: 2 blue arrows in a square shaped to the left and company name (INSTOCK) in white to the right"
				></img>
			</div>

			<div className="header__buttons-container">
				<button
					className="header__button"
					type="text"
				>
					Warehouses
				</button>

				<button
					className="header__button"
					type="text"
				>
					Inventory
				</button>
			</div>
		</header>
	);
};

export default Header;
