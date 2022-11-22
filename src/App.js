import "./App.css";
import AddWarehouse from "./components/sections/addWarehouse/addWarehouse";
import { WarehouseDetailsComponent } from "./Components/Warehouse-Details/WarehouseDetailsComponent";

function App() {
  return (
    <>
      <AddWarehouse />
      <WarehouseDetailsComponent />
    </>
  );
}

export default App;
