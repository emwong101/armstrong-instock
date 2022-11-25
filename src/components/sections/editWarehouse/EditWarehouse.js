import React, { useState, useEffect } from "react";
import WarehouseForms from "../../atoms/warehouseForms/WarehouseForms";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditWarehouse({ setDisplayEdit, setShowList, setShowDetails }) {
  const [fetchWarehouseDetails, setFetchWarehouseDetails] = useState({});
  const [warehouseDetails, setWarehouseDetails] = useState(null);
  const params = useParams();
  const { warehouseID } = params;
  const navigate = useNavigate();
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

  useEffect(() => {
    if (warehouseDetails !== null) {
      const edit = async () => {
        try {
          await axios.put(`${BASE_URL}/warehouse/${warehouseID}`, {
            warehouse_name: warehouseDetails.warehouse_name,
            address: warehouseDetails.address,
            city: warehouseDetails.city,
            country: warehouseDetails.country,
            contact_name: warehouseDetails.contact_name,
            contact_position: warehouseDetails.contact_position,
            contact_phone: warehouseDetails.contact_phone,
            contact_email: warehouseDetails.contact_email,
          });
          toast.success("Warehouse added succesfully!", {
            position: toast.POSITION.BOTTOM_RIGHT,
            theme: "colored",
            hideProgressBar: true,
            autoClose: 1000,
            onClose: setTimeout(() => {
              setDisplayEdit(false);
              setShowList(true);
              navigate("/warehouse");
            }, 1500),
          });
          await axios.get(`${BASE_URL}/warehouse`);
        } catch {
          console.log("error");
        }
      };
      edit();
    }
  }, [warehouseDetails]);

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
