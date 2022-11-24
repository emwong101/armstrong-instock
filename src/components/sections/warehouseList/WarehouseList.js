import axios from "axios";
import React, { useEffect, useState } from "react";
import Chevron from "../../../assets/Icons/chevron_right-24px.svg";
import Edit from "../../../assets/Icons/edit-24px.svg";
import Search from "../../../assets/Icons/search-24px.svg";
import TagTopBottom from "../../../assets/Icons/tags_top_bottom.svg";
import DeleteWarehouseButton from "../../atoms/deleteWarehouseButton/DeleteWarehouseButton";
import "./WarehouseList.scss";

export const WarehouseList = () => {
  const [warehouses, setWarehouses] = useState([]);

  const deleteWarehouse = async (id) => {
    return axios({
      method: "delete",
      url: `/warehouse/${id}`,
      baseURL: "http://localhost:5050/",
    }).then(() => {
      fetchWarehouses();
    });
  };

  const fetchWarehouses = async () => {
    const { data } = await axios.get(`http://localhost:5050/warehouse`);
    setWarehouses(data);
    // setVideos(data.filter((video) => video.id !== videoId));
    console.log(data);
  };

  useEffect(() => {
    fetchWarehouses();
  }, []);
  return (
    <>
      <div className="wd-container">
        <section className="title-box">
          <div className="title-box-left">
            <h1 className="title-box_title">Warehouses</h1>
          </div>
          <div className="title-box-right">
            <input
              type="text"
              className="title-box_search"
              placeholder="Search..."
            />
            <img src={Search} alt="search icon" className="title-box_icon" />
          </div>
          <div className="title-box_button">
            <span className="title-box_button-text">+ Add New Warehouse</span>
          </div>
        </section>

        <main className="inventory-box">
          <section className="label-box">
            <span className="label-box_label">
              warehouse
              <img
                className="label-box_icon"
                src={TagTopBottom}
                alt="tags top and bottom"
              />
            </span>
            <span className="label-box_label">
              address
              <img
                className="label-box_icon"
                src={TagTopBottom}
                alt="tags top and bottom"
              />
            </span>
            <span className="label-box_label">
              contact name
              <img
                className="label-box_icon"
                src={TagTopBottom}
                alt="tags top and bottom"
              />
            </span>
            <span className="label-box_label">
              contact information
              <img
                className="label-box_icon"
                src={TagTopBottom}
                alt="tags top and bottom"
              />
            </span>
            <span className="label-box_label">actions</span>
          </section>
          {warehouses.map((warehouse) => (
            <section className="item-box" key={warehouse.id}>
              <div className="item-box-top">
                <div className="item-box-top_left">
                  <span className="item-box_label item-box_label-item">
                    warehouse
                  </span>
                  <div className="item-box_name-box">
                    <span className="item-box_name">
                      {warehouse.warehouse_name}
                    </span>
                    <img src={Chevron} alt="closing tag" />
                  </div>
                  <span className="item-box_label item-box_label-category">
                    adress
                  </span>
                  <span className="item-box_adress">
                    {warehouse.address}, {warehouse.city}, {warehouse.country}
                  </span>
                </div>
                <div className="item-box-top_right">
                  <span className="item-box_label item-box_label-contact">
                    contact name
                  </span>
                  <span className="item-box_contact">
                    {warehouse.contact_name}
                  </span>

                  <span className="item-box_label item-box_label-qty">
                    contact information
                  </span>
                  <div className="item-box_info-box">
                    <span className="item-box_info">
                      {warehouse.contact_phone}
                    </span>
                    <span className="item-box_info">
                      {warehouse.contact_email}
                    </span>
                  </div>
                </div>
              </div>
              <div className="item-box_bottom">
                <DeleteWarehouseButton
                  warehouse={warehouse}
                  onDeleteWarehouse={() => deleteWarehouse(warehouse.id)}
                />
                <img className="item-box_bottom-icon" src={Edit} alt="trash" />
              </div>
            </section>
          ))}
        </main>
      </div>
    </>
  );
};
