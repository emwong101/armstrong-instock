import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import closeButton from "../../../assets/Icons/close-24px.svg";
import Trash from "../../../assets/Icons/delete_outline-24px.svg";

Modal.setAppElement("#root"); //whatisroot

const DeleteInventoryButton = ({ item, onDeleteInventory = () => {} }) => {
  const { item_name = "blah" } = item;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function deleteItem() {
    setIsOpen(false);
    onDeleteInventory();
  }

  return (
    <>
      <img
        className="item-box_bottom-icon"
        src={Trash}
        alt="trash"
        onClick={openModal}
      />
      <Modal
        isOpen={modalIsOpen}
        //onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        //style={customStyles}
        contentLabel="Delete Inventory"
      >
        <div className="delete">
          <img
            src={closeButton}
            className="delete-w__x-button"
            alt="close button"
            onClick={closeModal}
          />
          <h1 className="delete__title">
            {`Delete ${item_name}inventory item?`}{" "}
          </h1>
          <p className="delete__details">
            Please confirm that you'd like to delete Television//add item_name
            from the inventory list. You won't be able to undo this action.
          </p>
          <div className="delete__button-container">
            <button className="delete-w__cancel-btn" onClick={closeModal}>
              cancel
            </button>
            <button className="delete-w__delete-btn" onClick={deleteItem}>
              delete
            </button>
          </div>
           
        </div>
      </Modal>
    </>
  );
};

export default DeleteInventoryButton;
