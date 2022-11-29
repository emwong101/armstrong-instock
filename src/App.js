import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Header from "./components/sections/header/Header";
import Footer from "./components/sections/footer/Footer";
import AddWarehouse from "./components/sections/addWarehouse/AddWarehouse";
import AddNewInventoryItem from "./components/sections/addNewInventoryItem/AddNewInventoryItem";
import EditInventoryItem from "./components/sections/editInventoryItem/EditInventoryItem";
import EditWarehouse from "./components/sections/editWarehouse/EditWarehouse";
import { WarehouseList } from "./components/sections/warehouseList/WarehouseList";
import { WarehouseDetailsComponent } from "./components/sections/warehouseDetails/WarehouseDetailsComponent";
import { InventoryList } from "./components/sections/inventoryList/InventoryList";
import InventoryItemDetails from "./components/sections/inventoryItemDetails/InventoryItemDetails";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="main">
      <Header />

      <div className="components">
        <Routes>
          <Route path="/" element={<Navigate to="/warehouse" />} />
          <Route path="/inventory" element={<InventoryList />} />{" "}
          <Route path="/inventory/add" element={<AddNewInventoryItem />} />
          <Route
            path="/inventory/:inventoryID"
            element={<InventoryItemDetails />}
          />
          <Route
            path="/inventory/:inventoryID/edit"
            element={<EditInventoryItem />}
          />
          <Route path="/warehouse" element={<WarehouseList />} />
          <Route path="/warehouse/add" element={<AddWarehouse />} />
          <Route
            path="/warehouse/:warehouseID"
            element={<WarehouseDetailsComponent />}
          />
          <Route
            path="/warehouse/:warehouseID/edit"
            element={<EditWarehouse />}
          />
          <Route
            path="*"
            element={
              <>
                <h1>Page not found</h1>
              </>
            }
          />
        </Routes>{" "}
        <ToastContainer />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
export default App;
