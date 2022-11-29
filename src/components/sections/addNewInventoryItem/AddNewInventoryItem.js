import "./AddNewInventoryItem.scss";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ArrowBack from "../../../assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AddNewInventoryItem = ({ setShowList, setDisplayAdd }) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [inventoryList, setInventoryList] = useState([]);
  const [warehouse, setWarehouse] = useState([]);
  const [inventoryCategoriesList, setCategoriesList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedWarehouseId, setSelectedWarehouseId] = useState("");
  const navigate = useNavigate();

  const handleSelectedCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleRadioChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSelectedWarehouse = (event) => {
    setSelectedWarehouseId(
      event.target[event.target.selectedIndex].getAttribute("data-warehouseid")
    );
  };

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/inventory`);
        setInventoryList(data);
        const list = data.map((item) => item.category);
        setCategoriesList(
          list.filter((item, index) => list.indexOf(item) === index)
        );
      } catch (error) {
        console.log("error");
      }
    };
    fetchInventory();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("event", event);

    const newInventoryItem = {
      item_name: event.target.itemName.value,
      description: event.target.description.value,
      category: selectedCategory,
      status: selectedStatus,
      quantity: quantity,
      warehouse_id: selectedWarehouseId,
    };

    const addNewItem = async () => {
      try {
        const { data } = await axios.post(
          `${BASE_URL}/inventory`,
          newInventoryItem
        );
        toast.success("Inventory updated succesfully!", {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "colored",
          hideProgressBar: true,
          autoClose: 1000,
          onClose: setTimeout(() => {
            navigate("/inventory");
          }, 1500),
        });
        setInventoryList(data);
      } catch {
        console.log("error");
      }
    };

    addNewItem();
  };

  useEffect(() => {
    const fetchWarehouse = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/warehouse/`);
        setWarehouse(data);
      } catch {
        console.log("error");
      }
    };
    fetchWarehouse();
  }, []);

  return (
    <div className="addInventoryItem">
      <div className="addInventoryItem__caption">
        <Link
          to="/inventory"
          onClick={() => {
            navigate(-1);
            setDisplayAdd(false);
            setShowList(true);
          }}
        >
          <button className="addInventoryItem__arrow">
            <img
              src={ArrowBack}
              alt="Blue back arrow to the left of the title"
            />
          </button>
        </Link>
        <h1 className="addInventoryItem__title">Add New Inventory Item</h1>
      </div>

      <form className="addInventoryItem__form" onSubmit={handleSubmit}>
        <div className="itemDetail">
          <h3 className="addInventoryItem__subtitle">Item Details</h3>
          <label htmlFor="itemName" className="addInventoryItem__label">
            Item Name
          </label>

          <textarea
            value={inventoryList.item_name}
            className="addInventoryItem__input"
            id="itemName"
            type="text"
            rows="1"
            cols="30"
            placeholder="Item Name"
          ></textarea>

          <label htmlFor="descripition" className="addInventoryItem__label">
            Description
          </label>

          <textarea
            value={inventoryList.description}
            className="addInventoryItem__input-description"
            id="description"
            type="text"
            rows="7"
            cols="30"
            placeholder="Please enter a brief item description..."
          ></textarea>

          <label htmlFor="category" className="addInventoryItem__label">
            Category
          </label>

          <select
            value={selectedCategory}
            onChange={handleSelectedCategory}
            className="addInventoryItem__input-select"
            placeholder="Please select"
          >
            {inventoryCategoriesList &&
              inventoryCategoriesList.map((inventoryCategory, index) => {
                return <option key={index}>{inventoryCategory}</option>;
              })}
          </select>
        </div>

        <div className="itemAvailability">
          <h3 className="addInventoryItem__subtitle">Item Availability</h3>
          <p className="addInventoryItem__status">Status</p>

          <div className="addInventoryItem__status-position">
            <div className="inStock">
              <input
                onChange={handleRadioChange}
                checked={selectedStatus === "In Stock"}
                className="addInventoryItem__inStock"
                id="inStock"
                type="radio"
                name="radio"
                value="In Stock"
              ></input>
              <label
                htmlFor="inStock"
                className="addInventoryItem__label-radio"
              >
                In Stock
              </label>
            </div>

            <div className="outOfStock">
              <input
                onChange={handleRadioChange}
                checked={selectedStatus === "Out of Stock"}
                className="addInventoryItem__outOfStock"
                id="outOfStock"
                type="radio"
                name="radio"
                value="Out of Stock"
              ></input>
              <label
                htmlFor="outOfStock"
                className="addInventoryItem__label-radio"
              >
                Out of Stock
              </label>
            </div>
          </div>

          {selectedStatus === "In Stock" && (
            <>
              <label htmlFor="quantity" className="label__show">
                Quantity
              </label>

              <textarea
                className="input__show"
                id="quantity"
                type="text"
                rows="1"
                cols="30"
                value={quantity}
                onChange={handleQuantityChange}
              ></textarea>
            </>
          )}

          <label htmlFor="warehouse" className="addInventoryItem__label">
            Warehouse
          </label>

          <select
            onChange={handleSelectedWarehouse}
            className="editInventoryItem__input-select"
          >
            {warehouse &&
              warehouse.map((warehouseinfo) => {
                return (
                  <option
                    key={warehouseinfo.id}
                    data-warehouseid={warehouseinfo.id}
                    selected={
                      warehouseinfo.warehouse_name ===
                      inventoryList.warehouse_name
                    }
                  >
                    {warehouseinfo.warehouse_name}
                  </option>
                );
              })}
          </select>
        </div>

        <div className="addInventoryItem__button">
          <Link
            to="/inventory"
            onClick={() => {
              setShowList(true);
              setDisplayAdd(false);
            }}
          >
            <button className="editInventoryItem__button-cancel" type="submit">
              Cancel
            </button>
          </Link>
          <button className="editInventoryItem__button-save" type="submit">
            + Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewInventoryItem;
