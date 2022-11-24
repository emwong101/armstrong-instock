// import "./app.scss";
import { Routes, Route } from "react-router-dom";
import React from "react";
import AddNewInventoryItem from "../components/sections/addNewInventoryItem/AddNewInventoryItem";
import EditInventoryItem from "../components/sections/editInventoryItem/EditInventoryItem";

const Inventories = () => {
  return (
    <>
      <Routes>
        <Route path="/inventory" element={<AddNewInventoryItem />} />

        <Route path="/inventory/:id" element={<EditInventoryItem />} />

        {/* <Route path="/inventory/:id" element={<InventoryItemDetails />} */}

      </Routes>
    </>
  );
};

export default Inventories;
