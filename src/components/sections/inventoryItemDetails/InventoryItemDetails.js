import React from "react";
import Arrow from "../../../assets/Icons/arrow_back-24px.svg";

import EditWhite from "../../../assets/Icons/edit_white.svg";

const inventoryItemDetails = () => {
  return (
    <>
      <div className="wd-container">
        <section className="title-box">
          <div className="title-box-left">
            <img className="title-box_arrow" src={Arrow} alt="arrow" />
            <h1 className="title-box_title">Television</h1>
          </div>
          <img src={EditWhite} alt="edit" className="title-box_editing" />
        </section>
        <section className="info-box">
          <div className="info-box-top">
            <span className="info-box_label info-box_label-adress">
              ITEM DESCRIPTION:
            </span>
            <span className="info-box_detail info-box_address">
              This 50", 4K LED TV provides a crystal-clear picture and vivid
              colors.
            </span>
          </div>
          <div className="info-box-bottom">
            <div className="info-box-bottom_left">
              <span className="info-box_label info-box_label-name">
                Category:{" "}
              </span>
              <span className="info-box_detail info-box_name">Electronics</span>
            </div>
          </div>
        </section>
        <section className="item-box">
          <div className="item-box-top">
            <div className="item-box-top_left">
              <span className="item-box_label item-box_label-item">
                STATUS:
              </span>
              <span className="item-box_status">in stock</span>
              <span className="item-box_label item-box_label-category">
                Warehouse
              </span>
              <span className="item-box_category">Manhattan</span>
            </div>
            <div className="item-box-top_right">
              <span className="item-box_label item-box_label-status">
                QUANTITY:
              </span>
              <span className="item-box_qty">500</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default inventoryItemDetails;
