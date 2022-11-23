import "./App.css";
import Header from "./components/sections/header/Header";
import Footer from "./components/sections/footer/Footer";
import AddWarehouse from "./components/sections/addWarehouse/AddWarehouse";
import { WarehouseDetailsComponent } from "./components/sections/warehouseDetails/WarehouseDetailsComponent";
import EditInventoryItem from "./components/sections/editInventoryItem/EditInventoryItem";

function App() {
  return (
    <>
      <Header />
      <AddWarehouse />
      <WarehouseDetailsComponent />
      <EditInventoryItem  />
      <Footer />
    </>
  );
}
export default App;
