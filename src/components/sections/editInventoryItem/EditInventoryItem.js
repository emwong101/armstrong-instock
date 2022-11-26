import "./EditInventoryItem.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ArrowBack from "../../../assets/Icons/arrow_back-24px.svg";
import { Link, useNavigate, useParams } from "react-router-dom";


// const setWarehouse = () => {};
// const warehouse = {};
//delete before merge for it to work!!!
const EditInventoryItem = ({
  // inventoryItem,
  // setInventoryItem,
  setShowList,
  setDisplayEdit,
}) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const {inventoryItemId} = useParams();
  const [inventoryItem, setInventoryItem] = useState({});
  const [warehouse, setWarehouse] = useState({});

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

    setWarehouse({
      id: event.target.value,
      warehouse_name: event.target.value,
      address: event.target.value,
      city: event.target.value,
      country: event.target.value,
      contact_name: event.target.value,
      contact_position: event.target.value,
      contact_phone: event.target.value,
      contact_email: event.target.value,
    });
  };

useEffect(() => {
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/inventory/9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3/"
      );
      setInventoryItem(data);
    } catch (error) {
      console.log("error");
    }
  };
  fetchData();
}, []);

  useEffect(() => {
    const fetchWarehouse = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/warehouse/2922c286-16cd-4d43-ab98-c79f698aeab0"
        );
        setWarehouse(data);
      } catch {
        console.log("error");
      }
    };
    fetchWarehouse();
  }, []);

  return (
    <div className="editInventoryItem">
      <div className="editInventoryItem__caption">
        <Link to={`/inventory/${inventoryItem?.id}`}>
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
            placeholder="Item Name"
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
          {inventoryItemId?.map((inventoryItem) => {
            return (
              <select className="editInventoryItem__input-select">
                <option value="">{inventoryItem?.category}</option>
              </select>
            );
          })}
          ;
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
              inventoryItem?.status !== "In Stock" ? "In Stock" : "label__show"
            }`}
          >
            Quantity
          </label>

          <textarea
            className={`hide ${
              inventoryItem?.status !== "In Stock" ? "In Stock" : "input__show"
            }`}
            // defaultValue={inventoryItem?.quantity}
            id="quantity"
            type="text"
            rows="1"
            cols="30"
          ></textarea>

          <label htmlFor="warehouse" className="editInventoryItem__label">
            Warehouse
          </label>

          <select className="editInventoryItem__input-select">
            <option>{warehouse?.warehouse_name}</option>
            {/* defaultValue= id="warehouse" type="text" rows="1" cols="30" */}
          </select>
        </div>
        {/* ))}; */}

        <div className="editInventoryItem__button">
          <Link to={`/inventory/${inventoryItem?.id}`}>
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
