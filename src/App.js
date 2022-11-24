import "./App.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/sections/header/Header";
import Footer from "./components/sections/footer/Footer";
import AddWarehouse from "./components/sections/addWarehouse/AddWarehouse";
import { WarehouseDetailsComponent } from "./components/sections/warehouseDetails/WarehouseDetailsComponent";
import { WarehouseList } from "./components/sections/warehouseList/WarehouseList";
import EditInventoryItem from "./components/sections/editInventoryItem/EditInventoryItem";
import EditWarehouse from "./components/sections/editWarehouse/EditWarehouse";

function App() {

const [inventoryItem, setInventoryItem] = useState({});

useEffect(() => {
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/inventory/9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3/`
      );
      setInventoryItem(data);
    } catch (error) {
      console.log("error");
    }
  };
  fetchData();
}, []);



  return (
    <div className="main">
      <Header />
      <div className="components">
        <WarehouseDetailsComponent />
        <EditInventoryItem
          inventoryItem={inventoryItem}
          setInventoryItem={setInventoryItem}
        />
        <AddWarehouse />
        <WarehouseList />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );

}
export default App;
