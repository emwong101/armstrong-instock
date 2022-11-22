import React from "react";
import { useState } from "react";
import WarehouseForms from "../../atoms/warehouseForms/warehouseForms";

function AddWarehouse() {
  const [warehouseDetails, setWarehouseDetails] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      warehouseName,
      warehouseAddress,
      warehouseCity,
      warehouseCountry,
      contactName,
      contactPosition,
      contactPhone,
      contactEmail,
    } = event.target;

    setWarehouseDetails({
      warehouse_name: warehouseName.value,
      address: warehouseAddress.value,
      city: warehouseCity.value,
      country: warehouseCountry.value,
      contact_name: contactName.value,
      contact_position: contactPosition.value,
      contact_phone: contactPhone.value,
      contact_email: contactEmail.value,
    });
  };
  console.log(warehouseDetails);
  return (
    <>
      <WarehouseForms title="Add New Warehouse" handleSubmit={handleSubmit} />
    </>
  );
}

export default AddWarehouse;
