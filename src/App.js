import "./App.css";
import AddWarehouse from "./components/sections/addWarehouse/addWarehouse";
import { WarehouseDetailsComponent } from "./components/sections/Warehouse-Details/WarehouseDetailsComponent";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <AddWarehouse />
      <WarehouseDetailsComponent />
      <Footer />
    </>
  );
}

export default App;
