import "./EditInventoryItem.scss";
import React from "react";
import ArrowBack from "../../../assets/Icons/arrow_back-24px.svg";

const EditInventoryItem = ({ inventoryItem, setInventoryItem }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // const {
    //   itemName,
    //   itemDescription,
    //   itemCategory,
    //   itemStatus,
    //   itemQuantity,
    //   warehouseId,
    // } = event.target;

    setInventoryItem({
      item_name: event.target.itemName.value,
      description: event.target.itemDescription.value,
      category: event.target.itemCategory.value,
      status: event.target.itemStatus.value,
      quantity: event.target.itemQuantity.value,
      warehouse_id: event.target.warehouseId.value,
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
            placeholder={inventoryItem?.item_name}
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
            placeholder={inventoryItem?.description}
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
            placeholder={inventoryItem?.category}
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
                {inventoryItem?.status}
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
                {inventoryItem?.status}
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
            placeholder={inventoryItem?.quantity}
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
            placeholder={inventoryItem?.warehouse_id}
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
