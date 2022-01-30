import React from "react";
import "./ImportHeader.css";
import { Link } from "react-router-dom";

function ImportHeader() {
	return (
		<div className="importheader">
			<div className="text">
				<p>//IMPORT</p>
			</div>
			<div className="button">
				<Link to="/import-phrase" className="button__link">
					<div className="button__text">Phrase</div>
				</Link>
				<Link to="/import-keystore-Json" className="button__link">
					<div className="button__text">Keystore Json</div>
				</Link>
				<Link to="/import-private-key" className="button__link">
					<div className="button__text">Private Key</div>
				</Link>
			</div>
		</div>
	);
}

export default ImportHeader;
