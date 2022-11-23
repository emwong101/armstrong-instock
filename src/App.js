import "./App.css";
import Header from "./components/sections/header/Header";
import Footer from "./components/sections/footer/Footer";
import AddWarehouse from "./components/sections/addWarehouse/AddWarehouse";
import { WarehouseDetailsComponent } from "./components/sections/warehouseDetails/WarehouseDetailsComponent";
import InventoryItemDetails from "./components/sections/inventoryItemDetails/InventoryItemDetails";

function App() {
  return (
    <>
      <Header />
      <WarehouseDetailsComponent />
      <AddWarehouse />
      <InventoryItemDetails />
      <Footer />
    </>
  );
}
export default App;
