import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Arrow from "../../../assets/Icons/arrow_back-24px.svg";
import EditWhite from "../../../assets/Icons/edit_white.svg";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";

const InventoryItemDetails = () => {
  const inventoryItemId = "3ce124a4-78b0-4d80-91b9-11f9ced631a7"; //CHANGEROute?:this from route
  const [inventoryItem, setInventoryItem] = useState({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}/inventory/${inventoryItemId}`)
      .then(({ data }) => setInventoryItem(data));
  }, [inventoryItemId]);

  const { item_name, description, category, status, quantity, warehouse_name } =
    inventoryItem;

  return (
    <>
      <div className="wd-container">
        <section className="title-box">
          <div className="title-box-left">
            <img className="title-box_arrow" src={Arrow} alt="arrow" />
            <h1 className="title-box_title">{`${item_name}`}</h1>
          </div>
          <img src={EditWhite} alt="edit" className="title-box_editing" />
        </section>
        <section className="info-box">
          <div className="info-box-top">
            <span className="info-box_label info-box_label-adress">
              ITEM DESCRIPTION:
            </span>
            <span className="info-box_detail info-box_address">
              {`${description}`}
            </span>
          </div>
          <div className="info-box-bottom">
            <div className="info-box-bottom_left">
              <span className="info-box_label info-box_label-name">
                Category:{" "}
              </span>
              <span className="info-box_detail info-box_name">
                {`${category}`}
              </span>
            </div>
          </div>
        </section>
        <section className="item-box">
          <div className="item-box-top">
            <div className="item-box-top_left">
              <span className="item-box_label item-box_label-item">
                STATUS:
              </span>
              <span className="item-box_status">{`${status}`}</span>
              <span className="item-box_label item-box_label-category">
                Warehouse
              </span>
              <span className="item-box_category">{`${warehouse_name}`}</span>
            </div>
            <div className="item-box-top_right">
              <span className="item-box_label item-box_label-status">
                QUANTITY:
              </span>
              <span className="item-box_qty">{`${quantity}`}</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InventoryItemDetails;
