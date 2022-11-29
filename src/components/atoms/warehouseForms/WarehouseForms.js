import React from "react";
import { Link } from "react-router-dom";
import backArrow from "../../../assets/Icons/arrow_back-24px.svg";
import errorIcon from "../../../assets/Icons/error-24px.svg";
import "./WarehouseForms.scss";

function WarehouseForms({
  title,
  setWarehouseDetails,
  warehouseDetails,
  fetchDetails,
  back,
  nav,
  submit,
}) {
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
  return (
    <>
      <div className="warehouseForm__heading">
        <Link to={back} onClick={nav} className="warehouseForm__back">
          <img src={backArrow} alt="back-arrow" />
        </Link>
        <h1 className="warehouseForm__title">{title}</h1>
      </div>
      <form className="warehouseForm__form" onSubmit={handleSubmit}>
        <div className="warehouse">
          <h2 className="warehouseForm__subheading">Warehouse Details</h2>
          <label htmlFor="warehouseName" className="warehouseForm__label">
            Warehouse Name
          </label>
          <input
            defaultValue={fetchDetails?.warehouse_name}
            className={`warehouseForm__input 
            ${warehouseDetails?.warehouse_name !== "" ? "" : "error"}
            `}
            id="warehouseName"
            type="text"
            placeholder="Warehouse Name"
          ></input>
          <label
            htmlFor="warehouseName"
            className={`hide 
            ${warehouseDetails?.warehouse_name !== "" ? "" : "show"} `}
          >
            <img alt="error" src={errorIcon} className="error__icon" />
            This field is required
          </label>
          <label htmlFor="warehouseAddress" className="warehouseForm__label">
            Street Address
          </label>
          <input
            defaultValue={fetchDetails?.address}
            id="warehouseAddress"
            className={`warehouseForm__input ${
              warehouseDetails?.address !== "" ? "" : "error"
            }`}
            placeholder="Street Address"
            type="text"
          ></input>
          <label
            htmlFor="warehouseAddress"
            className={`hide ${warehouseDetails?.address !== "" ? "" : "show"}`}
          >
            <img alt="error" src={errorIcon} className="error__icon" />
            This field is required
          </label>
          <label htmlFor="warehouseCity" className="warehouseForm__label">
            City
          </label>
          <input
            defaultValue={fetchDetails?.city}
            id="warehouseCity"
            className={`warehouseForm__input ${
              warehouseDetails?.city !== "" ? "" : "error"
            }`}
            type="text"
            placeholder="City"
          ></input>
          <label
            htmlFor="warehouseCity"
            className={`hide ${warehouseDetails?.city !== "" ? "" : "show"}`}
          >
            <img alt="error" src={errorIcon} className="error__icon" />
            This field is required
          </label>
          <label htmlFor="warehouseCountry" className="warehouseForm__label">
            Country
          </label>
          <input
            defaultValue={fetchDetails?.country}
            id="warehouseCountry"
            className={`warehouseForm__input ${
              warehouseDetails?.country !== "" ? "" : "error"
            }`}
            type="text"
            placeholder="Country"
          ></input>
          <label
            htmlFor="warehouseCountry"
            className={`hide ${warehouseDetails?.country !== "" ? "" : "show"}`}
          >
            <img alt="error" src={errorIcon} className="error__icon" />
            This field is required
          </label>
        </div>
        <div className="contact">
          <h2 className="warehouseForm__subheading">Contact Details</h2>
          <label htmlFor="contactName" className="warehouseForm__label">
            Contact Name
          </label>
          <input
            defaultValue={fetchDetails?.contact_name}
            id="contactName"
            type="text"
            className={`warehouseForm__input ${
              warehouseDetails?.contact_name !== "" ? "" : "error"
            }`}
            placeholder="Contact Name"
          ></input>{" "}
          <label
            htmlFor="contactName"
            className={`hide ${
              warehouseDetails?.contact_name !== "" ? "" : "show"
            }`}
          >
            <img alt="error" src={errorIcon} className="error__icon" />
            This field is required
          </label>
          <label htmlFor="contactPosition" className="warehouseForm__label">
            Position
          </label>
          <input
            defaultValue={fetchDetails?.contact_position}
            htmlFor="contactPosition"
            id="contactPosition"
            type="text"
            className={`warehouseForm__input ${
              warehouseDetails?.contact_position !== "" ? "" : "error"
            }`}
            placeholder="Position"
          ></input>
          <label
            htmlFor="contactPosition"
            className={`hide ${
              warehouseDetails?.contact_position !== "" ? "" : "show"
            }`}
          >
            <img alt="error" src={errorIcon} className="error__icon" />
            This field is required
          </label>
          <label htmlFor="contactPhone" className="warehouseForm__label">
            Phone Number
          </label>
          <input
            defaultValue={fetchDetails?.contact_phone}
            id="contactPhone"
            type="text"
            className={`warehouseForm__input ${
              warehouseDetails?.contact_phone !== "" ? "" : "error"
            }`}
            placeholder="Phone Number"
          ></input>{" "}
          <label
            htmlFor="contactPhone"
            className={`hide ${
              warehouseDetails?.contact_phone !== "" ? "" : "show"
            }`}
          >
            <img alt="error" src={errorIcon} className="error__icon" />
            This field is required
          </label>
          <label htmlFor="contactEmail" className="warehouseForm__label">
            Email
          </label>
          <input
            defaultValue={fetchDetails?.contact_email}
            id="contactEmail"
            type="text"
            className={`warehouseForm__input ${
              warehouseDetails?.contact_email !== "" ? "" : "error"
            }`}
            placeholder="Email"
          ></input>{" "}
          <label
            htmlFor="contactEmail"
            className={`hide ${
              warehouseDetails?.contact_email !== "" ? "" : "show"
            }`}
          >
            <img alt="error" src={errorIcon} className="error__icon" />
            This field is required
          </label>
        </div>
        <div className="warehouseForm__buttons">
          <Link
            to={back}
            onClick={nav}
            className="warehouseForm__cancel button"
          >
            Cancel
          </Link>
          <input
            type="submit"
            value={submit}
            className="warehouseForm__submit button"
          ></input>
        </div>
      </form>
    </>
  );
}

export default WarehouseForms;
