import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import closeButton from "../../../assets/Icons/close-24px.svg";
import Trash from "../../../assets/Icons/delete_outline-24px.svg";
import "./DeleteInventoryButton.scss";

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
        className="modal-d"
        overlayClassName="overlay-d
        //onAfterOpen={afterOpenModal}"
        onRequestClose={closeModal}
        contentLabel="Delete Inventory"
      >
        <div className="delete-i">
          <img
            src={closeButton}
            className="delete-i__x-button"
            alt="close button"
            onClick={closeModal}
          />
          <h1 className="delete-i__title">
            {`Delete ${item_name} inventory item?`}{" "}
          </h1>
          <p className="delete-i__details">
            {`Please confirm that you'd like to delete ${item_name} from the inventory list. You won't be able to undo this action.`}
          </p>
          <div className="delete-i__button-container">
            <button className="delete-i__cancel-btn" onClick={closeModal}>
              cancel
            </button>
            <button className="delete-i__delete-btn" onClick={deleteItem}>
              delete
            </button>
          </div>
           
        </div>
      </Modal>
    </>
  );
};

export default DeleteInventoryButton;
