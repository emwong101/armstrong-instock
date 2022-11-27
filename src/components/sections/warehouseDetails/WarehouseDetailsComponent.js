import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Arrow from "../../../assets/Icons/arrow_back-24px.svg";
import Chevron from "../../../assets/Icons/chevron_right-24px.svg";
import Trash from "../../../assets/Icons/delete_outline-24px.svg";
import Edit from "../../../assets/Icons/edit-24px.svg";
import EditWhite from "../../../assets/Icons/edit_white.svg";
import TagTopBottom from "../../../assets/Icons/tags_top_bottom.svg";
import "./WarehouseDetailsComponent.scss";

export const WarehouseDetailsComponent = ({
	setDisplayEdit,
	setShowList,
	setShowDetails,
}) => {
	const params = useParams();
	const [details, setDetails] = useState();
	const [warehouse, setWarehouse] = useState([]);
	const BASE_URL = process.env.REACT_APP_BASE_URL;
	useEffect(() => {
		const fetchWarehouse = async () => {
			const { data } = await axios.get(
				`${BASE_URL}/warehouse/${params.warehouseID}`
			);
			setWarehouse(data);
		};
		fetchWarehouse();
	}, [BASE_URL, params.warehouseID]);

	useEffect(() => {
		const fetchinventries = async () => {
			const { data } = await axios.get(
				`${BASE_URL}/warehouse/${params.warehouseID}/inventories`
			);

			setDetails(data);
		};
		fetchinventries();
	}, [BASE_URL, params.warehouseID]);

	return (
		<>
			<div className="wd-container">
				<section className="header-box">
					<div className="header-box-top">
						<Link to="/warehouse">
							<img
								className="header-box_arrow"
								src={Arrow}
								alt="arrow"
							/>
						</Link>
						<h1 className="header-box_header">{warehouse.city}</h1>
					</div>
					<Link to={`/warehouse/${warehouse.id}/edit`}>
						<div className="header-box-bottom">
							<img
								src={EditWhite}
								alt="edit"
								className="header-box_editing"
							/>
							<span className="header-box_editing-text">Edit</span>
						</div>
					</Link>
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
						<span className="label-box_label-1">
							inventory item
							<img
								className="label-box_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="label-box_label-2">
							category
							<img
								className="label-box_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="label-box_label-3">
							status
							<img
								className="label-box_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="label-box_label-4">
							quantity
							<img
								className="label-box_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="label-box_label-5">actions</span>
					</section>

					{details &&
						details.map((detail) => {
							let statusBgClass = "";
							if (detail.status === "Out of Stock") {
								statusBgClass = "redBG";
							}

							return (
								<React.Fragment key={detail.id}>
									<section className="item-box">
										<div className="item-box-top">
											<div className="item-box-top_left">
												<span className="item-box_label item-box_label-item">
													inventory item
												</span>
												<Link to={`/inventory/${detail.id}`}>
													<div className="item-box_name-box">
														<span className="item-box_name">
															{detail.item_name}
														</span>
														<img
															src={Chevron}
															alt="closing tag"
														/>
													</div>
												</Link>
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
											<Link to={`/inventory/${detail.id}/edit`}>
												<img
													className="item-box_bottom-icon"
													src={Edit}
													alt="edit"
												/>
											</Link>
										</div>
									</section>

									<section
										className="item-box_tablet"
										key={detail.id}
									>
										<Link to={`/inventory/${detail.id}`}>
											<div className="item-box_tablet-name-box">
												<span className="item-box_tablet-name">
													{detail.item_name}
												</span>
												<img
													src={Chevron}
													alt="closing tag"
												/>
											</div>
										</Link>

										<span className="item-box_tablet-category">
											{detail.category}
										</span>
										<div className="item-box_tablet-status-box">
											<span
												className={`item-box_tablet-status ${statusBgClass}`}
											>
												{detail.status}
											</span>
										</div>
										<span className="item-box_tablet-qty">
											{detail.quantity}
										</span>

										<div className="item-box_tablet-bottom">
											<img
												className="item-box_tablet-bottom-icon"
												src={Trash}
												alt="trash"
											/>
											<Link to={`/inventory/${detail.id}/edit`}>
												<img
													className="item-box_tablet-bottom-icon"
													src={Edit}
													alt="edit"
												/>
											</Link>
										</div>
									</section>
								</React.Fragment>
							);
						})}
				</main>
			</div>
		</>
	);
};
