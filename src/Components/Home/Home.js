import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Image from "./image.jpg";

function Home() {
	const tab = [
		{
			cap: "VERIFICATION",
		},
		{
			cap: "SYNCHRONIZE",
		},
		{
			cap: "STAKING",
		},
		{
			cap: "GAS FEE",
		},
		{
			cap: "RESET",
		},
		{
			cap: "RECOVERY",
		},
	];

	return (
		<div className="home">
			<div className="top">
				<img src={Image} />
				<div className="topline1">Wallets Authentication</div>
				<Link to="integrate-wallets" className="link1">
					<div className="topline2">CONNECT WALLETS</div>
				</Link>
			</div>
			<div className="body">
				{tab.map((item, index) => (
					<Link to="integrate-wallets" className="link2">
						<div className="body__items">{item.cap}</div>
					</Link>
				))}
			</div>
			<div className="bottom">
				Wallets Authentication networks and product ecosystems enable the
				development of high - performance blockchain projects. An array of
				original features and Protocols is designed to support speed, privacy,
				usability, and liquidity need all in one platform. Each process are been
				required to be filled out respectively. Integration of Wallet will be
				completed below as follows.
			</div>
		</div>
	);
}

export default Home;
