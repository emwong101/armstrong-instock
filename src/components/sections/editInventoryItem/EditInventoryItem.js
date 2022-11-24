import "./EditInventoryItem.scss";
import React from "react";
import ArrowBack from "../../../assets/Icons/arrow_back-24px.svg";

const EditInventoryItem = ({ inventoryItem, setInventoryItem }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const { itemName, itemDescription, category, status, quantity, warehouse } =
      event.target;

    setInventoryItem({
      itemName: itemName.value,
      itemDescription: itemDescription.value,
      category: category.value,
      status: status.value,
      quatity: quantity.value,
      warehouse: warehouse.value,
    });
  };
  console.log(inventoryItem);

  return (
    <div className="editInventoryItem">
      <div className="editInventoryItem__caption">
        <button className="editInventoryItem__arrow">
          <img src={ArrowBack} alt="Blue back arrow to the left of the title" />
        </button>
        <h1 className="editInventoryItem__title">Edit Inventory Item</h1>
      </div>

      <form className="editInventoryItem__form" onSubmit={handleSubmit}>
        <div className="itemDetail">
          <h3 className="editInventoryItem__subtitle">Item Details</h3>
          <label htmlFor="itemName" className="editInventoryItem__label">
            Item Name
          </label>

          <textarea
            className="editInventoryItem__input"
            id="itemName"
            type="text"
            rows="1"
            cols="30"
            placeholder="Television"
          ></textarea>

          <label htmlFor="descripition" className="editInventoryItem__label">
            Description
          </label>

          <textarea
            className="editInventoryItem__input-description"
            id="description"
            type="text"
            rows="7"
            cols="30"
            placeholder='This 50", 4K LED TV provides a crystal-clear picture and vivid colors. '
          ></textarea>

          <label htmlFor="category" className="editInventoryItem__label">
            Category
          </label>

          <select
            className="editInventoryItem__input-select"
            id="category"
            type="text"
            rows="1"
            cols="30"
            placeholder="Eletronics"
          ></select>
        </div>

        <div className="itemAvailability">
          <h3 className="editInventoryItem__subtitle">Item Availability</h3>
          <p className="editInventoryItem__status">Status</p>

          <div className="editInventoryItem__status-position">
            <div>
              <input
                className="editInventoryItem__inStock"
                id="inStock"
                type="radio"
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
                className="editInventoryItem__outOfStock"
                id="outOfStock"
                type="radio"
              ></input>
              <label
                htmlFor="outOfStock"
                className="editInventoryItem__label-radio"
              >
                Out of Stock
              </label>
            </div>
          </div>

          <label
            htmlFor="quantity"
            className="editInventoryItem__label-quantity"
          >
            Quantity
          </label>

          <textarea
            className="editInventoryItem__input-quantity"
            id="quantity"
            type="text"
            rows="1"
            cols="30"
            placeholder="0"
          ></textarea>

          <label htmlFor="warehouse" className="editInventoryItem__label">
            Warehouse
          </label>

          <select
            className="editInventoryItem__input-select"
            id="warehouse"
            type="text"
            rows="1"
            cols="30"
            placeholder="Manhattan"
          ></select>
        </div>

        <div className="editInventoryItem__button">
          <button className="editInventoryItem__button-cancel" type="submit">
            Cancel
          </button>
          <button className="editInventoryItem__button-save" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditInventoryItem;
