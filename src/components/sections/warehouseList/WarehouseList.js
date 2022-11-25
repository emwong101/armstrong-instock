import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Chevron from "../../../assets/Icons/chevron_right-24px.svg";
import Edit from "../../../assets/Icons/edit-24px.svg";
import Search from "../../../assets/Icons/search-24px.svg";
import TagTopBottom from "../../../assets/Icons/tags_top_bottom.svg";
import DeleteWarehouseButton from "../../atoms/deleteWarehouseButton/DeleteWarehouseButton";
import "./WarehouseList.scss";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";

export const WarehouseList = () => {
	const [warehouses, setWarehouses] = useState([]);

	const fetchWarehouses = useCallback(async () => {
		const { data } = await axios.get(`${BASE_URL}/warehouse`);
		setWarehouses(data);
		console.log(data);
	}, []);

	const deleteWarehouse = async (id) => {
		return axios({
			method: "delete",
			url: `/warehouse/${id}`,
			baseURL: BASE_URL,
		}).then(() => {
			fetchWarehouses();
		});
	};

	useEffect(() => {
		fetchWarehouses();
	}, [fetchWarehouses]);
	return (
		<>
			<div className="wh-container">
				<section className="title-container">
					<div className="title-container-left">
						<h1 className="title-container_title">Warehouses</h1>
					</div>
					<div className="title-container-right">
						<input
							type="text"
							className="title-container_search"
							placeholder="Search..."
						/>
						<img
							src={Search}
							alt="search icon"
							className="title-container_icon"
						/>
					</div>
					<div className="title-container_button">
						<span className="title-container_button-text">
							+ Add New Warehouse
						</span>
					</div>
				</section>

				<main className="warehouse-list_box">
					<section className="warehouse-list_label-box">
						<span className="warehouse-list_label">
							warehouse
							<img
								className="warehouse-list_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="warehouse-list_label">
							address
							<img
								className="warehouse-list_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="warehouse-list_label">
							contact name
							<img
								className="warehouse-list_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="warehouse-list_label">
							contact information
							<img
								className="warehouse-list_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="warehouse-list_label">actions</span>
					</section>
					{warehouses.map((warehouse) => (
						<section
							className="warehouse-item"
							key={warehouse.id}
						>
							<div className="warehouse-item_top">
								<div className="warehouse-item_top-left">
									<span className="warehouse-item_label warehouse-item_label-item">
										warehouse
									</span>
									<div className="warehouse-item_name-box">
										<span className="warehouse-item_name">
											{warehouse.warehouse_name}
										</span>
										<img
											src={Chevron}
											alt="closing tag"
										/>
									</div>
									<span className="warehouse-item_label warehouse-item_label-category">
										adress
									</span>
									<span className="warehouse-item_adress">
										{warehouse.address}, {warehouse.city}, {warehouse.country}
									</span>
								</div>
								<div className="warehouse-item_top-right">
									<span className="warehouse-item_label warehouse-item_label-contact">
										contact name
									</span>
									<span className="warehouse-item_contact">
										{warehouse.contact_name}
									</span>

									<span className="warehouse-item_label warehouse-item_label-qty">
										contact information
									</span>
									<div className="warehouse-item_info-box">
										<span className="warehouse-item_info">
											{warehouse.contact_phone}
										</span>
										<span className="warehouse-item_info">
											{warehouse.contact_email}
										</span>
									</div>
								</div>
							</div>
							<div className="warehouse-item_bottom">
								<DeleteWarehouseButton
									warehouse={warehouse}
									onDeleteWarehouse={() => deleteWarehouse(warehouse.id)}
								/>
								<img
									className="warehouse-item_bottom-icon"
									src={Edit}
									alt="trash"
								/>
							</div>
						</section>
					))}
				</main>
			</div>
		</>
	);
};
