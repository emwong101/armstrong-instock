import "./DeleteWarehouses.scss";
import closeButton from "../../assets/Icons/close-24px.svg";
import React, { useState } from "react";
import Modal from "react-modal";

const DeleteWarehouses = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function deleteWarehouse() {
    // API call
    Promise.resolve().then(() => setIsOpen(false));
  }

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        //onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        //style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="delete-w">
          <img
            src={closeButton}
            className="delete-w__x-button"
            alt="close button"
            onClick={closeModal}
          ></img>
          <h1 className="delete-w__title">Delete Washington warehouse?</h1>
          <p className="delete-w__details">
            Please confirm that you'd like to delete the Washington from the
            list of warehouses. you won't be able to undo this action.
          </p>
          <div className="delete-w__button-container">
            <button className="delete-w__cancel-btn" onClick={closeModal}>
              cancel
            </button>
            <button className="delete-w__delete-btn" onClick={deleteWarehouse}>
              delete
            </button>
          </div>
           
        </div>
      </Modal>
    </>
  );
};

export default DeleteWarehouses;
