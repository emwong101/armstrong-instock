import { Routes, Route } from "react-router-dom";
import React from "react";
import React from 'react'
import AddWarehouse from "../components/sections/addWarehouse/AddWarehouse";
import EditWarehouse from "../components/sections/editWarehouse/EditWarehouse";
import WarehouseDetails from "../components/sections/warehouseDetails/WarehouseDetailsComponent";
import WarehouseList from "../components/sections/warehouseList/WarehouseList"






const Warehouse = () => {
  return (
    <Routes>
      <Route path="/warehouse" element={<AddWarehouse />} />
      <Route path="/warehouse" element={<WarehouseList />} />
      <Route path="/warehouse/:id" element={<EditWarehouse />} />
      <Route path="/warehouse/:id" element={<WarehouseDetails />} />
    </Routes>
  );
}

export default Warehouse