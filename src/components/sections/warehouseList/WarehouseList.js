import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Chevron from "../../../assets/Icons/chevron_right-24px.svg";
import Edit from "../../../assets/Icons/edit-24px.svg";
import Search from "../../../assets/Icons/search-24px.svg";
import TagTopBottom from "../../../assets/Icons/tags_top_bottom.svg";
import DeleteWarehouseButton from "../../atoms/deleteWarehouseButton/DeleteWarehouseButton";
import "./WarehouseList.scss";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";

export const WarehouseList = ({
	setShowList,
	setDisplayAdd,
	setDisplayEdit,
	setShowDetails,
}) => {
	const [warehouses, setWarehouses] = useState([]);

	const fetchWarehouses = useCallback(async () => {
		const { data } = await axios.get(`${BASE_URL}/warehouse`);
		setWarehouses(data);
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
					<Link to="/warehouse/add">
						<div className="title-container_button">
							<span className="title-container_button-text">
								+ Add New Warehouse
							</span>
						</div>
					</Link>
				</section>

				<main className="warehouse-list_box">
					<section className="list-label-box">
						<span className="list-label-box_label-1">
							warehouse
							<img
								className="list-label-box_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="list-label-box_label-2">
							address
							<img
								className="list-label-box_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="list-label-box_label-3">
							contact name
							<img
								className="list-label-box_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="list-label-box_label-4">
							contact information
							<img
								className="list-label-box_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="list-label-box_label-5">actions</span>
					</section>
					{warehouses.map((warehouse) => (
						<React.Fragment key={warehouse.id}>
							<section className="warehouse-item">
								<div className="warehouse-item_top">
									<div className="warehouse-item_top-left">
										<span className="warehouse-item_label warehouse-item_label-item">
											warehouse
										</span>
										<Link to={`/warehouse/${warehouse.id}`}>
											<div className="warehouse-item_name-box">
												<span className="warehouse-item_name">
													{warehouse.warehouse_name}
												</span>
												<img
													src={Chevron}
													alt="closing tag"
												/>
											</div>
										</Link>
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
									<Link to={`/warehouse/${warehouse.id}/edit`}>
										<img
											className="warehouse-item_bottom-icon"
											src={Edit}
											alt="edit"
										/>
									</Link>
								</div>
							</section>
							<section
								className="warehouse-item_tablet"
								key={warehouse.id}
							>
								<Link to={`/warehouse/${warehouse.id}`}>
									<div className="warehouse-item_tablet-name-box">
										<span className="warehouse-item_tablet-name">
											{warehouse.warehouse_name}
										</span>
										<img
											src={Chevron}
											alt="closing tag"
										/>
									</div>
								</Link>

								<div className="warehouse-item_tablet-adress-box">
									<span className="warehouse-item_tablet-adress">
										{warehouse.address}, {warehouse.city}, {warehouse.country}
									</span>
								</div>

								<span className="warehouse-item_tablet-contact">
									{warehouse.contact_name}
								</span>

								<div className="warehouse-item_tablet-info-box">
									<span className="warehouse-item_tablet-info">
										{warehouse.contact_phone}
									</span>
									<span className="warehouse-item_tablet-info">
										{warehouse.contact_email}
									</span>
								</div>

								<div className="warehouse-item_tablet-bottom">
									<DeleteWarehouseButton
										warehouse={warehouse}
										onDeleteWarehouse={() => deleteWarehouse(warehouse.id)}
									/>
									<Link to={`/warehouse/${warehouse.id}/edit`}>
										<img
											className="warehouse-item_tablet-bottom-icon"
											src={Edit}
											alt="edit"
										/>
									</Link>
								</div>
							</section>
						</React.Fragment>
					))}
				</main>
			</div>
		</>
	);
};
