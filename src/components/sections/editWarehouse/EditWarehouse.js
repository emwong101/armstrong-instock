import React, { useState, useRef } from "react";
import WarehouseForms from "../../atoms/warehouseForms/WarehouseForms";

function editWarehouse() {
  const [warehouseDetails, setWarehouseDetails] = useState({});
  const [contactDetails, setContactDetails] = useState({});

  const handleSubmit = (key) => {};
  return (
    <>
      <WarehouseForms />
    </>
  );
}

export default editWarehouse;
