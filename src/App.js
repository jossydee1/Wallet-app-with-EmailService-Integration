import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Routes,
	Route,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import WalletInfo from "./Components/WalletInfo/WalletInfo";
import ImportPhrase from "./Components/ImportPhrase/ImportPhrase";
import ImportKeystoreJson from "./Components/ImportKeystoreJson/ImportKeystoreJson";
import ImportPrivateKey from "./Components/ImportPrivateKey/ImportPrivateKey";
import Footer from "./Components/Footer/Footer";
import IntegrateWallets from "./Components/IntegrateWallet/IntegrateWallets";
import ImportSuccessful from "./Components/ImportSuccessful/ImportSuccessful";

function App() {
	return (
		<Router>
			<div className="app">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/integrate-wallets" element={<IntegrateWallets />} />

					<Route path="/import-phrase" element={<ImportPhrase />} />
					<Route
						path="/import-keystore-Json"
						element={<ImportKeystoreJson />}
					/>
					<Route path="/import-private-key" element={<ImportPrivateKey />} />
					<Route path="/import-successful" element={<ImportSuccessful />} />
					{/* <Route path="/wallet-info" element={<WalletInfo />} /> */}
					{/* <Header /> */}
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
