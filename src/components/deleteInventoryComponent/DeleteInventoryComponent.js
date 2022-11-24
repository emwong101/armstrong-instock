import React from "react";
import closeButton from "../../assets/Icons/close-24px.svg";

const DeleteInventoryComponent = () => {
  return (
    <>
      <div className="delete">
        <img
          src={closeButton}
          className="delete__x-button"
          alt="close button"
        ></img>
        <h1 className="delete__title">Delete Washington warehouse?</h1>
        <p className="delete__details">
          Please confirm that you'd like to delete the Washington from the list
          of warehouses. you won't be able to undo this action.
        </p>
        <div className="delete__button-container">
          <button className="delete__cancel-btn">cancel</button>
          <button className="delete__delete-btn">delete</button>
        </div>
         
      </div>
    </>
  );
};

export default DeleteInventoryComponent;
