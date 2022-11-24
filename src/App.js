import "./App.css";
import { useState } from "react";
import Header from "./components/sections/header/Header";
import Footer from "./components/sections/footer/Footer";
import AddWarehouse from "./components/sections/addWarehouse/AddWarehouse";
import { WarehouseDetailsComponent } from "./components/sections/warehouseDetails/WarehouseDetailsComponent";
import EditInventoryItem from "./components/sections/editInventoryItem/EditInventoryItem";

function App() {
const [inventoryItem, setInventoryItem] = useState({});

  return (
    <>
      <Header />
      <WarehouseDetailsComponent />
      <EditInventoryItem
        inventoryItem={inventoryItem}
        setInventoryItem={setInventoryItem}
      />
      <AddWarehouse />
      <Footer />
    </>
  );
}
export default App;
