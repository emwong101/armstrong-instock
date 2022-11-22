import "./App.css";
import AddWarehouse from "./Components/sections/addWarehouse/AddWarehouse";
import { WarehouseDetailsComponent } from "./Components/sections/Warehouse-Details/WarehouseDetailsComponent";

function App() {
	return (
		<>
			<AddWarehouse />
			<WarehouseDetailsComponent />
		</>
	);
}

export default App;
