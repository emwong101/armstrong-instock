import "./App.css";
import "./styles/global.scss";
import AddWarehouse from "./Components/sections/addWarehouse/addWarehouse";
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
