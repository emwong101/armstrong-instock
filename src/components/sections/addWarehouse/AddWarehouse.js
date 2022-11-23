import React from "react";
import { useState } from "react";
import WarehouseForms from "../../atoms/warehouseForms/WarehouseForms";

function AddWarehouse() {
  const [warehouseDetails, setWarehouseDetails] = useState(null);

  console.log(warehouseDetails);
  return (
    <>
      <WarehouseForms
        title="Add New Warehouse"
        //   handleSubmit={handleSubmit}
        setWarehouseDetails={setWarehouseDetails}
        warehouseDetails={warehouseDetails}
      />
    </>
  );
}

export default AddWarehouse;
