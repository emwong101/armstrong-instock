import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AddWarehouse from "./components/sections/addWarehouse/AddWarehouse";
import { WarehouseDetailsComponent } from "./components/sections/warehouseDetails/WarehouseDetailsComponent";

function App() {
	return (
		<>
			<Header />
			<AddWarehouse />
			<WarehouseDetailsComponent />
			<Footer />
		</>
	);
}
export default App;
