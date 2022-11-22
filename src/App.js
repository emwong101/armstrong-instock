import "./App.css";
import Footer from "./Components/footer/footer";
import "./styles/global.scss";
import { WarehouseDetailsComponent } from "./Components/sections/Warehouse-Details/WarehouseDetailsComponent";

function App() {
	return (
		<>
			<WarehouseDetailsComponent />
			<Footer />
		</>
	);
}

export default App;
