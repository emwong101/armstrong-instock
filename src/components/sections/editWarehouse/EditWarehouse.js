import React, { useState, useEffect } from "react";
import WarehouseForms from "../../atoms/warehouseForms/WarehouseForms";
import axios from "axios";

function EditWarehouse() {
  const [fetchWarehouseDetails, setFetchWarehouseDetails] = useState({});
  const [warehouseDetails, setWarehouseDetails] = useState({});

  useEffect(() => {
    const getWarehouses = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/warehouse/150a36cf-f38e-4f59-8e31-39974207372d"
        );
        setFetchWarehouseDetails(data);
      } catch {
        console.log("error");
      }
    };
    getWarehouses();
  }, []);

  return (
    <>
      <WarehouseForms
        fetchDetails={fetchWarehouseDetails}
        setWarehouseDetails={setWarehouseDetails}
        title="Edit Warehouse"
      />
    </>
  );
}

export default EditWarehouse;
