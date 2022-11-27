import "./EditInventoryItem.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ArrowBack from "../../../assets/Icons/arrow_back-24px.svg";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditInventoryItem = ({
  // inventoryItem,
  // setInventoryItem,
  setShowList,
  setDisplayEdit,
}) => {
  // const { inventoryID } = useParams();
  const params = useParams();
  const [inventoryItem, setInventoryItem] = useState([]);
  const [warehouse, setWarehouse] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    setInventoryItem({
      item_name: event.target.value,
      description: event.target.value,
      category: event.target.value,
      status: event.target.value,
      quantity: event.target.value,
      warehouse_id: event.target.value,
    });
  };

  useEffect(() => {
    const fetchInventoryId = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/inventory/${params.inventoryID}`
        );
        setInventoryItem(data);
        console.log("inventoryID", data);
      } catch (error) {
        console.log("error");
      }
    };
    fetchInventoryId();
  }, []);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/inventory/`);
        setInventoryItem(data);
        // console.log("inventory", data);
      } catch (error) {
        console.log("error");
      }
    };
    fetchInventory();
  }, []);

  useEffect(() => {
    const fetchWarehouse = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/warehouse/`);
        setWarehouse(data);
        console.log("warehouseData", data);
      } catch {
        console.log("error");
      }
    };
    fetchWarehouse();
  }, []);

  // useEffect(() => {
  //   const updateItem = async () => {
  //     try {
  //       const { data } = await axios.put(
  //         `${BASE_URL}/inventory/${params.inventoryID}`
  //       );
  //       setWarehouse(data);
  //     } catch {
  //       console.log("error");
  //     }
  //   };
  //   updateItem();
  // }, []);
  console.log("warehouse", warehouse);
  return (
    <div className="editInventoryItem">
      <div className="editInventoryItem__caption">
        <Link
          to="/inventory"
          onClick={() => {
            navigate(-1);
            setDisplayEdit(false);
            setShowList(true);
          }}
        >
          <button className="editInventoryItem__arrow">
            <img
              src={ArrowBack}
              alt="Blue back arrow to the left of the title"
            />
          </button>
        </Link>
        <h1 className="editInventoryItem__title">Edit Inventory Item</h1>
      </div>

      <form className="editInventoryItem__form" onSubmit={handleSubmit}>
        <div className="itemDetail">
          <h3 className="editInventoryItem__subtitle">Item Details</h3>
          <label htmlFor="itemName" className="editInventoryItem__label">
            {/* Item Name */}
          </label>
          <textarea
            defaultValue={inventoryItem?.item_name}
            className="editInventoryItem__input"
            id="itemName"
            type="text"
            rows="1"
            cols="30"
            // placeholder="Item Name"
          ></textarea>
          <label htmlFor="descripition" className="editInventoryItem__label">
            {/* Description */}
          </label>
          <textarea
            defaultValue={inventoryItem?.description}
            className="editInventoryItem__input-description"
            id="description"
            type="text"
            rows="7"
            cols="30"
            placeholder="Item description"
          ></textarea>
          <label htmlFor="category" className="editInventoryItem__label">
            Category
          </label>

          <select className="editInventoryItem__input-select">
            {inventoryItem.map((inventoryItemInfo) => {
              return (
                <option value="" key={inventoryItemInfo.id}>
                  {inventoryItemInfo.category}
                </option>
              );
            })}
          </select>
        </div>

        <div className="itemAvailability">
          <h3 className="editInventoryItem__subtitle">Item Availability</h3>
          <p className="editInventoryItem__status">Status</p>

          <div className="editInventoryItem__status-position">
            <div className="inStock">
              <input
                defaultValue={inventoryItem?.status}
                className="editInventoryItem__inStock"
                id="inStock"
                type="radio"
                name="radio"
              ></input>
              <label
                htmlFor="inStock"
                className="editInventoryItem__label-radio"
              >
                In Stock
                {/* {inventoryItem?.status} */}
              </label>
            </div>

            <div className="outOfStock">
              <input
                defaultValue={inventoryItem?.status}
                className="editInventoryItem__outOfStock"
                id="outOfStock"
                type="radio"
                name="radio"
              ></input>
              <label
                htmlFor="outOfStock"
                className="editInventoryItem__label-radio"
              >
                Out of Stock
                {/* {inventoryItem?.status} */}
              </label>
            </div>
          </div>

          <label
            htmlFor="quantity"
            className={`hide ${
              inventoryItem?.status === "In Stock" ? "In Stock" : "label__show"
            }`}
          >
            Quantity
          </label>

          <textarea
            className={`hide ${
              inventoryItem?.status === "In Stock" ? "In Stock" : "input__show"
            }`}
            id="quantity"
            type="text"
            rows="1"
            cols="30"
          ></textarea>

          <label htmlFor="warehouse" className="editInventoryItem__label">
            Warehouse
          </label>

          <select className="editInventoryItem__input-select">
            {warehouse.map((warehouseinfo) => {
              // console.log("warehouseeinfo",warehouseinfo);
              return (
                <option key={warehouseinfo.id}>
                  {warehouseinfo.warehouse_name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="editInventoryItem__button">
          <Link
            to="/inventory"
            onClick={() => {
              setShowList(true);
              setDisplayEdit(false);
            }}
          >
            <button className="editInventoryItem__button-cancel" type="submit">
              Cancel
            </button>
          </Link>
          <button className="editInventoryItem__button-save" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditInventoryItem;
