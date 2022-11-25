import React, { useState, useEffect } from "react";
import WarehouseForms from "../../atoms/warehouseForms/WarehouseForms";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditWarehouse({ setDisplayEdit, setShowList, setShowDetails }) {
  const [fetchWarehouseDetails, setFetchWarehouseDetails] = useState({});
  const [warehouseDetails, setWarehouseDetails] = useState({});
  const params = useParams();
  const { warehouseID } = params;
  useEffect(() => {
    const getWarehouses = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/warehouse/${warehouseID}`
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
        back="/warehouse"
        nav={() => {
          setDisplayEdit(false);
          setShowList(true);
        }}
      />
    </>
  );
}

export default EditWarehouse;
