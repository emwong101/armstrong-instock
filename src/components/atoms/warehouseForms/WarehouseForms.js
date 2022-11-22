import React from "react";
import backArrow from "../../../assets/Icons/arrow_back-24px.svg";
import "./WarehouseForms.scss";

function WarehouseForms({ title, handleSubmit }) {
  return (
    <>
      <div className="warehouseForm__heading">
        <button className="warehouseForm__back">
          <img src={backArrow} alt="back-arrow" />
        </button>
        <h1 className="warehouseForm__title">{title}</h1>
      </div>
      <form className="warehouseForm__form" onSubmit={handleSubmit}>
        <div className="warehouse">
          <h2 className="warehouseForm__subheading">Warehouse Details</h2>
          <label htmlFor="warehouseName" className="warehouseForm__label">
            Warehouse Name
          </label>
          <input
            className="warehouseForm__input"
            id="warehouseName"
            type="text"
            placeholder="Warehouse Name"
          ></input>
          <label htmlFor="warehouseAddress" className="warehouseForm__label">
            Street Address
          </label>
          <input
            id="warehouseAddress"
            className="warehouseForm__input"
            placeholder="Street Address"
            type="text"
          ></input>
          <label htmlFor="warehouseCity" className="warehouseForm__label">
            City
          </label>
          <input
            id="warehouseCity"
            className="warehouseForm__input"
            type="text"
            placeholder="City"
          ></input>
          <label htmlFor="warehouseCountry" className="warehouseForm__label">
            Country
          </label>
          <input
            id="warehouseCountry"
            className="warehouseForm__input"
            type="text"
            placeholder="Country"
          ></input>
        </div>
        <div className="contact">
          <h2 className="warehouseForm__subheading">Contact Details</h2>
          <label htmlFor="contactName" className="warehouseForm__label">
            Contact Name
          </label>
          <input
            id="contactName"
            type="text"
            className="warehouseForm__input"
            placeholder="Contact Name"
          ></input>
          <label htmlFor="contactPosition" className="warehouseForm__label">
            Position
          </label>
          <input
            id="contactPosition"
            type="text"
            className="warehouseForm__input"
            placeholder="Position"
          ></input>
          <label htmlFor="contactPhone" className="warehouseForm__label">
            Phone Number
          </label>
          <input
            id="contactPhone"
            type="text"
            className="warehouseForm__input"
            placeholder="Phone Number"
          ></input>
          <label htmlFor="contactEmail" className="warehouseForm__label">
            Email
          </label>
          <input
            id="contactEmail"
            type="text"
            className="warehouseForm__input"
            placeholder="Email"
          ></input>
        </div>
        <div className="warehouseForm__buttons">
          <input
            type="button"
            value="Cancel"
            className="warehouseForm__cancel button"
          ></input>
          <input
            type="submit"
            value="+ Add Warehouse"
            className="warehouseForm__submit button"
          ></input>
        </div>
      </form>
    </>
  );
}

export default WarehouseForms;
