import React, { useState } from "react";
import Modal from "react-modal";
import "./DeleteWarehouseButton.scss";
import closeButton from "../../../assets/Icons/close-24px.svg";
import Trash from "../../../assets/Icons/delete_outline-24px.svg";

//Accessibility if needed- Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const DeleteWarehouseButton = ({ warehouse, onDeleteWarehouse = () => {} }) => {
  const { warehouse_name = "Washington" } = warehouse;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function deleteWarehouse() {
    setIsOpen(false);
    onDeleteWarehouse();
  }

  return (
    <>
      <img
        className="item-box_bottom-icon"
        src={Trash}
        alt="trash"
        onClick={openModal}
      />
      {/* const modal=( */}
      <Modal
        isOpen={modalIsOpen}
        className="modal"
        overlayClassName="overlay"
        //onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        //style={customStyles}
        contentLabel="Delete Warehouse"
      >
        <div className="delete-w">
          <div className="delete__container">
            <div className="delete__x-container">
              <img
                src={closeButton}
                className="delete-w__x-button"
                alt="close button"
                onClick={closeModal}
              />
            </div>
            <h1 className="delete-w__title">{`Delete ${warehouse_name} warehouse?`}</h1>
            <p className="delete-w__details">
              {`Please confirm that you'd like to delete the ${warehouse_name} from the
            list of warehouses. You won't be able to undo this action.`}
            </p>

            <div className="delete__buttons-container">
              <div className="delete-w__button-container">
                <button className="delete-w__cancel-btn" onClick={closeModal}>
                  cancel
                </button>
              </div>
              <div className="delete-l__container">
                <button
                  className="delete-l__delete-btn"
                  onClick={deleteWarehouse}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
           
        </div>
      </Modal>
      {/* ) */}
    </>
  );
};

export default DeleteWarehouseButton;
