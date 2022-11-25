import axios from "axios";
import React, { useEffect, useState } from "react";
import Chevron from "../../../assets/Icons/chevron_right-24px.svg";
import Trash from "../../../assets/Icons/delete_outline-24px.svg";
import Edit from "../../../assets/Icons/edit-24px.svg";
import Search from "../../../assets/Icons/search-24px.svg";
import TagTopBottom from "../../../assets/Icons/tags_top_bottom.svg";
import "./InventoryList.scss";

export const InventoryList = () => {
	const [inventories, setInventories] = useState([]);

	useEffect(() => {
		const fetchInventories = async () => {
			const { data } = await axios.get(`http://localhost:5050/inventory`);
			setInventories(data);
			console.log("inventories", data);
		};
		fetchInventories();
	}, []);

	return (
		<>
			<div className="wd-container">
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
					<div className="title-inventory_button">
						<span className="title-inventory_button-text">+ Add New Item</span>
					</div>
				</section>

				<main className="inventory-list">
					<section className="inventory-list_label-box">
						<span className="inventory-list_label">
							warehouse
							<img
								className="inventory-list_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="inventory-list_label">
							address
							<img
								className="inventory-list_icon"
								src={TagTopBottom}
								alt="tags top and bottom"
							/>
						</span>
						<span className="inventory-list_label">
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

					{inventories &&
						inventories.map((item) => {
							let statusBgRed = "";
							if (item.status === "Out of Stock") {
								statusBgRed = "redBG";
							}

							return (
								<section
									className="inventory-list_item"
									key={item.id}
								>
									<div className="inventory-list_item-top">
										<div className="inventory-list_item-top-left">
											<span className="inventory-list_item-label inventory-list_item-label-item">
												invenotory item
											</span>
											<div className="inventory-list_item-name-box">
												<span className="inventory-list_item-name">
													{item.item_name}
												</span>
												<img
													src={Chevron}
													alt="closing tag"
												/>
											</div>
											<span className="inventory-list_item-label inventory-list_item-label-category">
												category
											</span>
											<span className="inventory-list_item-category">
												{item.category}
											</span>
										</div>
										<div className="inventory-list_item-top-right">
											<span className="inventory-list_item-label ">status</span>
											<span
												className={`inventory-list_item-status ${statusBgRed}`}
											>
												{item.status}
											</span>

											<span className="inventory-list_item-label inventory-list_item-label-qty">
												qty
											</span>
											<span className="inventory-list_item-info">
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
										<img
											className="inventory-list_item-bottom-icon"
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
