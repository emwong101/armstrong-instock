import "./App.scss";
import Header from "./components/sections/header/Header";
import Footer from "./components/sections/footer/Footer";
import AddWarehouse from "./components/sections/addWarehouse/AddWarehouse";
import { WarehouseDetailsComponent } from "./components/sections/warehouseDetails/WarehouseDetailsComponent";
import EditInventoryItem from "./components/sections/editInventoryItem/EditInventoryItem";
import { WarehouseList } from "./components/sections/warehouseList/WarehouseList";

function App() {
	return (
		<div className="main">
			<Header />
			<div className="components">
				<WarehouseDetailsComponent />
				<EditInventoryItem />
				<AddWarehouse />
			</div>
			<div className="footer">
				<Footer />
			</div>
		</div>
	);
}
export default App;
