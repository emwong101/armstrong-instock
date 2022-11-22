import "./App.css";
import AddWarehouse from "./components/sections/addWarehouse/addWarehouse";
import { WarehouseDetailsComponent } from "./components/sections/Warehouse-Details/WarehouseDetailsComponent";

function App() {
  return (
    <>
      <AddWarehouse />
      <WarehouseDetailsComponent />
    </>
  );
}

export default App;
