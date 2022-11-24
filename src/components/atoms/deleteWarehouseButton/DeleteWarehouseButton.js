import React, { useState } from "react";
import Modal from "react-modal";
import "./DeleteWarehouseButton.scss";
import closeButton from "../../../assets/Icons/close-24px.svg";
import Trash from "../../../assets/Icons/delete_outline-24px.svg";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const DeleteWarehouseButton = ({ warehouse, onDeleteWarehouse = () => {} }) => {
  const { id, warehouse_name = "Washington" } = warehouse;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function deleteWarehouse() {
    setIsOpen(false);
    onDeleteWarehouse(id);
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
        contentLabel="Delete Warehouse"
      >
        <div className="delete-w">
          <img
            src={closeButton}
            className="delete-w__x-button"
            alt="close button"
            onClick={closeModal}
          ></img>
          <h1 className="delete-w__title">{`Delete ${warehouse_name} warehouse?`}</h1>
          <p className="delete-w__details">
            {`Please confirm that you'd like to delete the ${warehouse_name} from the
            list of warehouses. you won't be able to undo this action.`}
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

export default DeleteWarehouseButton;