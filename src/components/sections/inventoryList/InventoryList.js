import axios from "axios";
import React, { useEffect, useState } from "react";
import Chevron from "../../../assets/Icons/chevron_right-24px.svg";
import Trash from "../../../assets/Icons/delete_outline-24px.svg";
import Edit from "../../../assets/Icons/edit-24px.svg";
import Search from "../../../assets/Icons/search-24px.svg";
import TagTopBottom from "../../../assets/Icons/tags_top_bottom.svg";
import { Link } from "react-router-dom";
import "./InventoryList.scss";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";

export const InventoryList = ({
	setDisplayAdd,
	setDisplayEdit,
	setShowList,
	setShowDetails,
}) => {
	const [inventories, setInventories] = useState([]);

	useEffect(() => {
		const fetchInventories = async () => {
			const { data } = await axios.get(`${BASE_URL}/inventory`);
			setInventories(data);
		};
		fetchInventories();
	}, []);

	return (
		<>
			<div className="el-container">
				<section className="title-inventory">
					<div className="title-inventory-left">
						<h1 className="title-inventory_title">Inventory</h1>
					</div>
					<div className="title-inventory-right">
						<input
							type="text"
							className="title-inventory_search"
							placeholder="Search..."
						/>
						<img
							src={Search}
							alt="search icon"
							className="title-inventory_icon"
						/>
					</div>
					<Link
						to="/inventory"
						onClick={() => {
							setDisplayAdd(true);
							setShowList(false);
						}}
					>
						<div className="title-inventory_button">
							<span className="title-inventory_button-text">
								+ Add New Item
							</span>
						</div>
					</Link>
				</section>

				<main className="inventory-list">
					<section className="inventory-list_label-box">
						<span className="inventory-list_label-1">
							inventory item
							<img
								className="inventory-list_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="inventory-list_label-2">
							category
							<img
								className="inventory-list_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="inventory-list_label-3">
							status
							<img
								className="inventory-list_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="inventory-list_label-4">
							qty
							<img
								className="inventory-list_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="inventory-list_label-5">
							warehouse
							<img
								className="inventory-list_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="inventory-list_label-6">actions</span>
					</section>

					{inventories &&
						inventories.map((item) => {
							let statusBgRed = "";
							if (item.status === "Out of Stock") {
								statusBgRed = "redBG";
							}

							return (
								<>
									<section
										className="inventory-list_item"
										key={item.id}
									>
										<div className="inventory-list_item-top">
											<div className="inventory-list_item-top-left">
												<span className="inventory-list_item-label inventory-list_item-label-item">
													invenotory item
												</span>
												<Link
													to={`/inventory/${item.id}`}
													onClick={() => {
														setShowDetails(true);
														setShowList(false);
													}}
												>
													<div className="inventory-list_item-name-box">
														<span className="inventory-list_item-name">
															{item.item_name}
														</span>
														<img
															src={Chevron}
															alt="closing tag"
														/>
													</div>
												</Link>
												<span className="inventory-list_item-label inventory-list_item-label-category">
													category
												</span>
												<span className="inventory-list_item-category">
													{item.category}
												</span>
											</div>
											<div className="inventory-list_item-top-right">
												<span className="inventory-list_item-label ">
													status
												</span>
												<span
													className={`inventory-list_item-status ${statusBgRed}`}
												>
													{item.status}
												</span>

												<span className="inventory-list_item-label inventory-list_item-label-qty">
													qty
												</span>
												<span className="inventory-list_item-qty">
													{item.quantity}
												</span>
												<span className="inventory-list_item-label inventory-list_item-label-qty">
													warehouse
												</span>
												<span className="inventory-list_item-info">
													{" "}
													<span className="inventory-list_item-info">
														{item.warehouse_name}
													</span>
												</span>
											</div>
										</div>
										<div className="inventory-list_item-bottom">
											<img
												className="inventory-list_item-bottom-icon"
												src={Trash}
												alt="trash"
											/>
											<Link
												to={`/inventory/${item.id}`}
												onClick={() => {
													setDisplayEdit(true);
													setShowList(false);
												}}
											>
												<img
													className="inventory-list_item-bottom-icon"
													src={Edit}
													alt="trash"
												/>
											</Link>
										</div>
									</section>

									<section className="inventory-list_item-tablet">
										<span className="inventory-list_item-tablet-label inventory-list_item-tablet-label-item">
											invenotory item
										</span>
										<Link
											to={`/inventory/${item.id}`}
											onClick={() => {
												setShowDetails(true);
												setShowList(false);
											}}
										>
											<div className="inventory-list_item-tablet-name-box">
												<span className="inventory-list_item-tablet-name">
													{item.item_name}
												</span>
												<img
													src={Chevron}
													alt="closing tag"
												/>
											</div>
										</Link>
										<span className="inventory-list_item-tablet-label inventory-list_item-tablet-label-category">
											category
										</span>
										<span className="inventory-list_item-tablet-category">
											{item.category}
										</span>

										<span className="inventory-list_item-tablet-label ">
											status
										</span>
										<div className="inventory-list_item-tablet-status-box">
											<span
												className={`inventory-list_item-tablet-status ${statusBgRed}`}
											>
												{item.status}
											</span>
										</div>

										<span className="inventory-list_item-tablet-label inventory-list_item-tablet-label-qty">
											qty
										</span>
										<span className="inventory-list_item-tablet-qty">
											{item.quantity}
										</span>
										<span className="inventory-list_item-tablet-label inventory-list_item-tablet-label-warehouse">
											warehouse
										</span>
										<span className="inventory-list_item-tablet-warehouse">
											{item.warehouse_name}
										</span>

										<div className="inventory-list_item-tablet-bottom">
											<img
												className="inventory-list_item-tablet-bottom-icon"
												src={Trash}
												alt="trash"
											/>
											<Link
												to={`/inventory/${item.id}`}
												onClick={() => {
													setDisplayEdit(true);
													setShowList(false);
												}}
											>
												<img
													className="inventory-list_item-tablet-bottom-icon"
													src={Edit}
													alt="trash"
												/>
											</Link>
										</div>
									</section>
								</>
							);
						})}
				</main>
			</div>
		</>
	);
};
