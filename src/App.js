import "./App.css";
import Header from "./components/header/Header";
import AddWarehouse from "./components/sections/addWarehouse/addWarehouse";
import { WarehouseDetailsComponent } from "./components/sections/Warehouse-Details/WarehouseDetailsComponent";

function App() {
  return (
    <>
    <Header />
      <AddWarehouse />
      <WarehouseDetailsComponent />
    </>
  );
}

export default App;
