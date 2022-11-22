import "./App.css";
import Footer from "./Components/footer/footer";
import "./styles/global.scss";
import AddWarehouse from "./Components/sections/addWarehouse/addWarehouse";
import { WarehouseDetailsComponent } from "./Components/sections/Warehouse-Details/WarehouseDetailsComponent";

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
