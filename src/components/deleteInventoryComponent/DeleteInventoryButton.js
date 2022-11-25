import React from "react";
import closeButton from "../../assets/Icons/close-24px.svg";
import ReactDOM from "react-dom";
import Modal from "react-modal";

Modal.setAppElement("#root");

const DeleteInventoryButton = ({ warehouse, onDeleteWarehouse = () => {} }) => {

  

const DeleteInventoryButton = () => {
  return (
    <>
      <div className="delete">
        <img
          src={closeButton}
          className="delete__x-button"
          alt="close button"
        ></img>
        <h1 className="delete__title">Delete Television inventory item?</h1>
        <p className="delete__details">
          Please confirm that you'd like to delete Television from the inventory
          list. You won't be able to undo this action.
        </p>
        <div className="delete__button-container">
          <button className="delete__cancel-btn">cancel</button>
          <button className="delete__delete-btn">delete</button>
        </div>
         
      </div>
    </>
  );
};

export default DeleteInventoryButton;
