import React, { useEffect, useState } from "react";
import axios from "axios";
import Arrow from "../../../assets/Icons/arrow_back-24px.svg";
import EditWhite from "../../../assets/Icons/edit_white.svg";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./InventoryItemDetails.scss";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";

const InventoryItemDetails = () => {
  const { inventoryID } = useParams();
  const navigate = useNavigate();
  const [inventoryItem, setInventoryItem] = useState({});

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
          <Link to={`/inventory/${inventoryID}/edit`}>
            <div className="IID__icon-container">
              <img
                src={EditWhite}
                alt="white pencil icon in blue background"
                className="IID__edit-icon"
              />
              <span className="IID__edit-text">Edit</span>
            </div>
          </Link>
        </section>

        <div className="IID__page-container">
          <section className="item">
            <div className="item__top">
              <span className="item__description-title">ITEM DESCRIPTION:</span>
              <span className="item__description">{`${description}`}</span>
            </div>
            <div className="item__category">
              <div className="item__category-box">
                <span className="item__category-title ">CATEGORY: </span>
                <span className="item__category-description">
                  {`${category}`}
                </span>
              </div>
            </div>
          </section>
          <section className="item__status-container">
            <div className="item__status-container">
              <div className="item__status-title">
                <span className="item__status">STATUS:</span>
                <span className="item__status-field">{`${status}`}</span>
                <span className="item__warehouse-title">WAREHOUSE</span>
                <span className="item__warehouse-name">{`${warehouse_name}`}</span>
              </div>
              <div className="item__quantity-container">
                <span className="item__quantity-title">QUANTITY:</span>
                <span className="item__quantity-number">{`${quantity}`}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default InventoryItemDetails;
