import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "./Logo.png";

function Header() {
	return (
		<div className="header">
			<Link to="/" className="header__link">
				<img src={Logo} alt="" className="logo" />
			</Link>

			{/* <Link to="/" className="header__link">
				<div className="header__text">Connect Wallets</div>
			</Link> */}
		</div>
	);
}

export default Header;
