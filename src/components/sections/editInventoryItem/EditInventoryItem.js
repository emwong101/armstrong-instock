import "./EditInventoryItem.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ArrowBack from "../../../assets/Icons/arrow_back-24px.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const EditInventoryItem = () => {
  const params = useParams();
  const [inventoryItem, setInventoryItem] = useState([]);
  const [inventoryCategoriesList, setCategoriesList] = useState([]);
  const [warehouse, setWarehouse] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedWarehouseId, setSelectedWarehouseId] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

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

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      item_name: event.target.itemName.value,
      description: event.target.description.value,
      category: selectedCategory,
      status: selectedStatus,
      quantity: quantity,
      warehouse_id: selectedWarehouseId,
    };
    
    console.log(newItem);

  
      const updateItem = async () => {
        try {
          const { data } = await axios.put(
            `${BASE_URL}/inventory/${params.inventoryID}`
            ,
            newItem
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
          setInventoryItem(data);
        } catch {
          console.log("error");
        }
      };
      updateItem();
    
    
  };

  useEffect(() => {
    const fetchInventoryId = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/inventory/${params.inventoryID}`
        );
        setInventoryItem(data);
        setSelectedCategory(data.category);
        setSelectedWarehouseId(data.warehouse_id);
        setSelectedStatus(data.status);
        setQuantity(data.quantity);
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
    <div className="editInventoryItem">
      <div className="editInventoryItem__caption">
        <Link to="/inventory">
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
            Item Name
          </label>
          <React.Fragment key={inventoryItem.id}>
            <textarea
              defaultValue={inventoryItem.item_name}
              className="editInventoryItem__input"
              id="itemName"
              type="text"
              rows="1"
              cols="30"
            ></textarea>
            <label htmlFor="description" className="editInventoryItem__label">
              Description
            </label>

            <textarea
              defaultValue={inventoryItem.description}
              className="editInventoryItem__input-description"
              id="description"
              type="text"
              rows="7"
              cols="30"
            ></textarea>

            <label htmlFor="category" className="editInventoryItem__label">
              Category
            </label>

            <select
              onChange={handleSelectedCategory}
              className="editInventoryItem__input-select"
              defaultValue={selectedCategory}
            >
              {inventoryCategoriesList &&
                inventoryCategoriesList.map((inventoryCategory, index) => {
                  return <option key={index}>{inventoryCategory}</option>;
                })}
            </select>
          </React.Fragment>
        </div>

        <div className="itemAvailability">
          <h3 className="editInventoryItem__subtitle">Item Availability</h3>
          <p className="editInventoryItem__status">Status</p>

          <div className="editInventoryItem__status-position">
            <div className="inStock">
              <input
                onChange={handleRadioChange}
                checked={selectedStatus === "In Stock"}
                className="editInventoryItem__inStock"
                id="inStock"
                type="radio"
                name="radio"
                value="In Stock"
              ></input>
              <label
                htmlFor="inStock"
                className="editInventoryItem__label-radio"
              >
                In Stock
              </label>
            </div>

            <div className="outOfStock">
              <input
                onChange={handleRadioChange}
                checked={selectedStatus === "Out of Stock"}
                className="editInventoryItem__outOfStock"
                id="outOfStock"
                type="radio"
                name="radio"
                value="Out of Stock"
              ></input>
              <label
                htmlFor="outOfStock"
                className="editInventoryItem__label-radio"
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
          <label htmlFor="warehouse" className="editInventoryItem__label">
            Warehouse
          </label>

          <select
            onChange={handleSelectedWarehouse}
            className="editInventoryItem__input-select"
            // value={selectedWarehouseId}
          >
            {warehouse &&
              warehouse.map((warehouseinfo) => {
                return (
                  <option
                    key={warehouseinfo.id}
                    data-warehouseid={warehouseinfo.id}
                    selected={
                      warehouseinfo.warehouse_name ===
                      inventoryItem.warehouse_name
                    }
                  >
                    {warehouseinfo.warehouse_name}
                  </option>
                );
              })}
          </select>
        </div>

        <div className="editInventoryItem__button">
          <Link to="/inventory">
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
