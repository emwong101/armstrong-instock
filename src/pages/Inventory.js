// import "./app.scss";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import AddNewInventoryItem from "../components/sections/addNewInventoryItem/AddNewInventoryItem";
import EditInventoryItem from "../components/sections/editInventoryItem/EditInventoryItem";

const Inventories = () => {
  const [displayAdd, setDisplayAdd] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showList, setShowList] = useState(true);
  return (
    <>
      <Routes>
        <Route path="/inventory/add" element={<AddNewInventoryItem />} />
        <Route path="/inventory/:inventoryID" element={<EditInventoryItem />} />
        {/* <Route path="/inventory/:id" element={<InventoryItemDetails />} */}
      </Routes>
    </>
  );
};

export default Inventories;
