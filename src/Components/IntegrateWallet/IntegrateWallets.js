import React from "react";
import { Link } from "react-router-dom";
import "./IntegrateWallets.css";

function IntegrateWallets() {
	const wallets = [
		{
			image: require("./Wallets Images/Aktionariat.png"),
			text: "Aktionariat",
		},
		{
			image: require("./Wallets Images/Alice.png"),
			text: "Alice",
		},
		{
			image: require("./Wallets Images/AlphaWallet.png"),
			text: "AlphaWallet",
		},
		{
			image: require("./Wallets Images/Argent.png"),
			text: "Argent",
		},
		{
			image: require("./Wallets Images/Atomic.png"),
			text: "Atomic",
		},
		{
			image: require("./Wallets Images/Authereum.png"),
			text: "Authereum",
		},
		{
			image: require("./Wallets Images/Binance Smart Chain.png"),
			text: "Binance Smart Chain",
		},
		{
			image: require("./Wallets Images/BitKeep.png"),
			text: "BitKeep",
		},
		{
			image: require("./Wallets Images/Bitpay.png"),
			text: "Bitpay",
		},
		{
			image: require("./Wallets Images/Blockchain.png"),
			text: "Blockchain",
		},
		{
			image: require("./Wallets Images/Brigde Wallet.png"),
			text: "Brigde Wallet",
		},
		{
			image: require("./Wallets Images/Coin98.png"),
			text: "Coin98",
		},
		{
			image: require("./Wallets Images/Coinomi.png"),
			text: "Coinomi",
		},
		{
			image: require("./Wallets Images/CoolWallet S.png"),
			text: "CoolWallet S",
		},
		{
			image: require("./Wallets Images/Crypto.com DeFi Wallet.png"),
			text: "Crypto.com DeFi Wallet",
		},
		{
			image: require("./Wallets Images/Cybavo.png"),
			text: "Cybavo",
		},
		{
			image: require("./Wallets Images/Dok Wallet.png"),
			text: "Dok Wallet",
		},
		{
			image: require("./Wallets Images/EasyPocket.png"),
			text: "EasyPocket",
		},
		{
			image: require("./Wallets Images/Eidoo.png"),
			text: "Eidoo",
		},
		{
			image: require("./Wallets Images/Ellipal.png"),
			text: "Ellipal",
		},
		{
			image: require("./Wallets Images/Equal.png"),
			text: "Equal",
		},
		{
			image: require("./Wallets Images/Exodus.png"),
			text: "Exodus",
		},
		{
			image: require("./Wallets Images/Gnosis Safe Multisig.png"),
			text: "Gnosis Safe Multisig",
		},
		{
			image: require("./Wallets Images/GridPlue.png"),
			text: "GridPlue",
		},
		{
			image: require("./Wallets Images/Huobi Wallet.png"),
			text: "Huobi Wallet",
		},
		{
			image: require("./Wallets Images/imToken.png"),
			text: "imToken",
		},
		{
			image: require("./Wallets Images/Infinito.png"),
			text: "Infinito",
		},
		{
			image: require("./Wallets Images/Infinity Wallet.png"),
			text: "Infinity Wallet",
		},
		{
			image: require("./Wallets Images/Keyring pro.png"),
			text: "Keyring pro",
		},
		{
			image: require("./Wallets Images/Ledger live.png"),
			text: "Ledger live",
		},
		{
			image: require("./Wallets Images/Ledger.png"),
			text: "Ledger",
		},
		{
			image: require("./Wallets Images/Loopring Wallet.png"),
			text: "Loopring Wallet",
		},
		{
			image: require("./Wallets Images/Maiar.png"),
			text: "Maiar",
		},
		{
			image: require("./Wallets Images/MathWallet.png"),
			text: "MathWallet",
		},
		{
			image: require("./Wallets Images/MetaMask.png"),
			text: "MetaMask",
		},
		{
			image: require("./Wallets Images/Mew Wallet.png"),
			text: "Mew Wallet",
		},
		{
			image: require("./Wallets Images/Midas Wallet.png"),
			text: "Midas Wallet",
		},
		{
			image: require("./Wallets Images/MoriX Wallet.png"),
			text: "MoriX Wallet",
		},
		{
			image: require("./Wallets Images/MYKEY.png"),
			text: "MYKEY",
		},
		{
			image: require("./Wallets Images/Nash.png"),
			text: "Nash",
		},
		{
			image: require("./Wallets Images/ONTO.png"),
			text: "ONTO",
		},
		{
			image: require("./Wallets Images/Ownbit.png"),
			text: "Ownbit",
		},
		{
			image: require("./Wallets Images/Parity Signer.png"),
			text: "Parity Signer",
		},
		{
			image: require("./Wallets Images/PeakDeFi Wallet.png"),
			text: "PeakDeFi Wallet",
		},
		{
			image: require("./Wallets Images/Pillar.png"),
			text: "Pillar",
		},
		{
			image: require("./Wallets Images/Polkadot.png"),
			text: "Polkadot",
		},
		{
			image: require("./Wallets Images/Rainbow.png"),
			text: "Rainbow",
		},
		{
			image: require("./Wallets Images/SafePal.png"),
			text: "SafePal",
		},
		{
			image: require("./Wallets Images/Solana.png"),
			text: "Solana",
		},
		{
			image: require("./Wallets Images/SparkPoint.png"),
			text: "SparkPoint",
		},
		{
			image: require("./Wallets Images/Spatium.png"),
			text: "Spatium",
		},
		{
			image: require("./Wallets Images/Stellar.png"),
			text: "Stellar",
		},
		{
			image: require("./Wallets Images/SWFT Wallet.png"),
			text: "SWFT Wallet",
		},
		{
			image: require("./Wallets Images/Tezos.png"),
			text: "Tezos",
		},
		{
			image: require("./Wallets Images/Theta.png"),
			text: "Theta",
		},
		{
			image: require("./Wallets Images/Tokenary.png"),
			text: "Tokenary",
		},
		{
			image: require("./Wallets Images/TokenPocket.png"),
			text: "TokenPocket",
		},
		{
			image: require("./Wallets Images/TronLink.png"),
			text: "TronLink",
		},
		{
			image: require("./Wallets Images/Trust.png"),
			text: "Trust",
		},
		{
			image: require("./Wallets Images/TrustVault.png"),
			text: "TrustVault",
		},
		{
			image: require("./Wallets Images/Unstoppable Wallet.png"),
			text: "Unstoppable Wallet",
		},
		{
			image: require("./Wallets Images/ViaWallet.png"),
			text: "ViaWallet",
		},
		{
			image: require("./Wallets Images/Vision.png"),
			text: "Vision",
		},
		{
			image: require("./Wallets Images/Wallet.io.png"),
			text: "Wallet.io",
		},
		{
			image: require("./Wallets Images/Walleth.png"),
			text: "Walleth",
		},
		{
			image: require("./Wallets Images/XDC.png"),
			text: "XDC",
		},
		{
			image: require("./Wallets Images/Xrp.png"),
			text: "Xrp",
		},
		{
			image: require("./Wallets Images/ZelCore.png"),
			text: "ZelCore",
		},
	];
	return (
		<div className="integratewallets">
			<div className="integratewallets__top">
				{/* <div className="home__top1">Wallets</div> */}
				<div className="integratewallets__top2">
					<p>INTEGRATE WALLET</p>
					<h3>Choose your wallet</h3>
				</div>
			</div>

			<div className="integratewallets__body">
				{wallets.map((wallet, index) => (
					<div className="wallet">
						<Link to="/import-phrase" className="wallet__link">
							<img className="wallet__img" src={wallet.image} />

							<p className="wallet__name">{wallet.text} </p>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default IntegrateWallets;
