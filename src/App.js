import "./App.css";
import WarehouseForms from "./components/atoms/warehouseForms/WarehouseForms";
// import Header from "./components/sections/header/Header";
// import Footer from "./components/sections/footer/Footer";
import AddWarehouse from "./components/sections/addWarehouse/AddWarehouse";
// import { WarehouseDetailsComponent } from "./components/sections/warehouseDetails/WarehouseDetailsComponent";
import { WarehouseList } from "./components/sections/warehouseList/WarehouseList";

function App() {
	return (
		<>
			{/* <WarehouseForms /> */}
			{/* <AddWarehouse /> */}
			<WarehouseList />
		</>
	);
}
export default App;
