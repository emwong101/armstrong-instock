import React, { useState, useEffect } from "react";
import WarehouseForms from "../../atoms/warehouseForms/WarehouseForms";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditWarehouse({ setDisplayEdit, setShowList, setShowDetails }) {
  const [fetchWarehouseDetails, setFetchWarehouseDetails] = useState({});
  const [warehouseDetails, setWarehouseDetails] = useState({});
  const params = useParams();
  const { warehouseID } = params;
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    const getWarehouses = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/warehouse/${warehouseID}`
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
