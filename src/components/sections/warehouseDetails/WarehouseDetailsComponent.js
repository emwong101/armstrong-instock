import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import Arrow from "../../../assets/Icons/arrow_back-24px.svg";
import Chevron from "../../../assets/Icons/chevron_right-24px.svg";
import Trash from "../../../assets/Icons/delete_outline-24px.svg";
import Edit from "../../../assets/Icons/edit-24px.svg";
import EditWhite from "../../../assets/Icons/edit_white.svg";
import TagTopBottom from "../../../assets/Icons/tags_top_bottom.svg";
import "./WarehouseDetailsComponent.scss";

export const WarehouseDetailsComponent = () => {
	// const params = useParams();
	const [details, setDetails] = useState();
	const [warehouse, setWarehouse] = useState([]);

	useEffect(() => {
		const fetchWarehouse = async () => {
			const { data } = await axios.get(
				`http://localhost:5050/warehouse/2922c286-16cd-4d43-ab98-c79f698aeab0`
			);
			setWarehouse(data);
			console.log("warehouse", data);
		};
		fetchWarehouse();
	}, []);

	useEffect(() => {
		const fetchinventries = async () => {
			const { data } = await axios.get(
				`http://localhost:5050/warehouse/2922c286-16cd-4d43-ab98-c79f698aeab0/inventories`
			);

			console.log("inventory", data);
			setDetails(data);
		};
		fetchinventries();
	}, []);
	// [params.id]

	return (
		<>
			<div className="wd-container">
				<section className="title-box">
					<div className="title-box-left">
						<img
							className="title-box_arrow"
							src={Arrow}
							alt="arrow"
						/>
						<h1 className="title-box_title">{warehouse.city}</h1>
					</div>
					<div className="title-box-right">
						<img
							src={EditWhite}
							alt="edit"
							className="title-box_editing"
						/>
						<span className="title-box_editing-text">Edit</span>
					</div>
				</section>

				<section className="info-box">
					<div className="info-box-top">
						<span className="info-box_label info-box_label-adress">
							warehouse address:
						</span>
						<span className="info-box_detail info-box_address">
							{warehouse.address}, {warehouse.city}, {warehouse.country}
						</span>
					</div>
					<div className="info-box-bottom">
						<div className="info-box-bottom_left">
							<span className="info-box_label info-box_label-name">
								Contact name:{" "}
							</span>
							<span className="info-box_detail info-box_name">
								{warehouse.contact_name}
							</span>
							<span className="info-box_detail info-box_name">
								{warehouse.contact_position}
							</span>
						</div>
						<div className="info-box-bottom_right">
							<span className="info-box_label info-box_label-info">
								Contact information:{" "}
							</span>
							<span className="info-box_detail info-box_info">
								{warehouse.contact_phone}
							</span>
							<span className="info-box_detail info-box_info">
								{warehouse.contact_email}
							</span>
						</div>
					</div>
				</section>

				<main className="inventory-box">
					<section className="label-box">
						<span className="label-box_label">
							inventory item
							<img
								className="label-box_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="label-box_label">
							category
							<img
								className="label-box_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="label-box_label">
							status
							<img
								className="label-box_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="label-box_label">
							quantity
							<img
								className="label-box_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="label-box_label">actions</span>
					</section>

					{details &&
						details.map((detail) => {
							let statusBgClass = "";
							if (detail.status === "Out of Stock") {
								statusBgClass = "redBG";
							}

							return (
								<section
									className="item-box"
									key={detail.id}
								>
									<div className="item-box-top">
										<div className="item-box-top_left">
											<span className="item-box_label item-box_label-item">
												inventory item
											</span>
											<div className="item-box_name-box">
												<span className="item-box_name">
													{detail.item_name}
												</span>
												<img
													src={Chevron}
													alt="closing tag"
												/>
											</div>
											<span className="item-box_label item-box_label-category">
												category
											</span>
											<span className="item-box_category">
												{detail.category}
											</span>
										</div>
										<div className="item-box-top_right">
											<span className="item-box_label item-box_label-status">
												status
											</span>
											<span className={`item-box_status ${statusBgClass}`}>
												{detail.status}
											</span>

											<span className="item-box_label item-box_label-qty">
												QTY
											</span>
											<span className="item-box_qty">{detail.quantity}</span>
										</div>
									</div>
									<div className="item-box_bottom">
										<img
											className="item-box_bottom-icon"
											src={Trash}
											alt="trash"
										/>
										<img
											className="item-box_bottom-icon"
											src={Edit}
											alt="trash"
										/>
									</div>
								</section>
							);
						})}
				</main>
			</div>
		</>
	);
};
