import "./DeleteWarehouses.scss";
import closeButton from "../../assets/Icons/close-24px.svg";

import React from "react";

const DeleteWarehouses = () => {
  return (
    <>
      <div className="delete-w">
        <img
          src={closeButton}
          className="delete-w__x-button"
          alt="close button"
        ></img>
        <h1 className="delete-w__title">Delete Washington warehouse?</h1>
        <p className="delete-w__details">
          Please confirm that you'd like to delete the Washington from the list
          of warehouses. you won't be able to undo this action.
        </p>
        <div className="delete-w__button-container">
          <button className="delete-w__cancel-btn">cancel</button>
          <button className="delete-w__delete-btn">delete</button>
        </div>
         
      </div>
    </>
  );
};

export default DeleteWarehouses;
