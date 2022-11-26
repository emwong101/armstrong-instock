import React, { useEffect, useState } from "react";
import axios from "axios";
import Arrow from "../../../assets/Icons/arrow_back-24px.svg";
import EditWhite from "../../../assets/Icons/edit_white.svg";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./InventoryItemDetails.scss";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";

const InventoryItemDetails = () => {
  const { inventoryID } = useParams();
  const [inventoryItem, setInventoryItem] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/inventory/${inventoryID}`)
      .then(({ data }) => setInventoryItem(data));
  }, [inventoryID]);

  const { item_name, description, category, status, quantity, warehouse_name } =
    inventoryItem;
  return (
    <>
      <div className="IID">
        <section className="IID__title-box">
          <div className="IID__link-box">
            <Link
              onClick={() => {
                navigate(-1);
              }}
            >
              <img className="IID__arrow" src={Arrow} alt="arrow" />
            </Link>
            <h1 className="IID__item-name">{`${item_name}`}</h1>
          </div>
          <img
            src={EditWhite}
            alt="white pencil icon in blue background"
            className="IID__edit-icon"
          />
        </section>
        <section className="item">
          <div className="item__top">
            <span className="item__description-title">ITEM DESCRIPTION:</span>
            <span className="item__description">{`${description}`}</span>
          </div>
          <div className="item__category">
            <div className="item__category-box">
              <span className="item__category-title ">Category: </span>
              <span className="item__category-description">
                {/* //info-box_detail info-box_name */}
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
