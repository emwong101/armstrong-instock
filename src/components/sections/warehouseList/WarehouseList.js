import React from "react";
import Chevron from "../../../assets/Icons/chevron_right-24px.svg";
import Trash from "../../../assets/Icons/delete_outline-24px.svg";
import Edit from "../../../assets/Icons/edit-24px.svg";
import Search from "../../../assets/Icons/search-24px.svg";
import TagTopBottom from "../../../assets/Icons/tags_top_bottom.svg";
import "./WarehouseList.scss";

export const WarehouseList = () => {
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
							className="title-box_serch"
							placeholder="Search..."
						/>
						<img
							src={Search}
							alt="search icon"
							className="title-box-icon"
						/>
					</div>
					<div className="title-box_button">
						<span className="title-box_button-text">+ Add New Warehouse</span>
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
					<section className="item-box">
						<div className="item-box-top">
							<div className="item-box-top_left">
								<span className="item-box_label item-box_label-item">
									warehouse
								</span>
								<div className="item-box_name-box">
									<span className="item-box_name">Manhattan</span>
									<img
										src={Chevron}
										alt="closing tag"
									/>
								</div>
								<span className="item-box_label item-box_label-category">
									adress
								</span>
								<span className="item-box_adress">503 Broadway, New York, USA</span>
							</div>
							<div className="item-box-top_right">
								<span className="item-box_label item-box_label-contact">
									contact name
								</span>
								<span className="item-box_contact">parmin aujla</span>

								<span className="item-box_label item-box_label-qty">contact information</span>
								<span className="item-box_qty">+1 (629) 555-0129</span>
								<span className="item-box_qty">
									paujla@instock.com
								</span>
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
					<section className="item-box">
						<div className="item-box-top">
							<div className="item-box-top_left">
								<span className="item-box_label item-box_label-item">
									warehouse
								</span>
								<div className="item-box_name-box">
									<span className="item-box_name">Manhattan</span>
									<img
										src={Chevron}
										alt="closing tag"
									/>
								</div>
								<span className="item-box_label item-box_label-category">
									adress
								</span>
								<span className="item-box_category">503 Broadway, New York, USA</span>
							</div>
							<div className="item-box-top_right">
								<span className="item-box_label item-box_label-status">
									contact name
								</span>
								<span className="item-box_status">parmin aujla</span>

								<span className="item-box_label item-box_label-qty">contact information</span>
								<span className="item-box_qty">+1 (629) 555-0129</span>
								<span className="item-box_qty">
									paujla@instock.com
								</span>
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
					<section className="item-box">
						<div className="item-box-top">
							<div className="item-box-top_left">
								<span className="item-box_label item-box_label-item">
									warehouse
								</span>
								<div className="item-box_name-box">
									<span className="item-box_name">Manhattan</span>
									<img
										src={Chevron}
										alt="closing tag"
									/>
								</div>
								<span className="item-box_label item-box_label-category">
									adress
								</span>
								<span className="item-box_category">503 Broadway, New York, USA</span>
							</div>
							<div className="item-box-top_right">
								<span className="item-box_label item-box_label-status">
									contact name
								</span>
								<span className="item-box_status">parmin aujla</span>

								<span className="item-box_label item-box_label-qty">contact information</span>
								<span className="item-box_qty">+1 (629) 555-0129</span>
								<span className="item-box_qty">
									paujla@instock.com
								</span>
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
					<section className="item-box">
						<div className="item-box-top">
							<div className="item-box-top_left">
								<span className="item-box_label item-box_label-item">
									warehouse
								</span>
								<div className="item-box_name-box">
									<span className="item-box_name">Manhattan</span>
									<img
										src={Chevron}
										alt="closing tag"
									/>
								</div>
								<span className="item-box_label item-box_label-category">
									adress
								</span>
								<span className="item-box_category">503 Broadway, New York, USA</span>
							</div>
							<div className="item-box-top_right">
								<span className="item-box_label item-box_label-status">
									contact name
								</span>
								<span className="item-box_status">parmin aujla</span>

								<span className="item-box_label item-box_label-qty">contact information</span>
								<span className="item-box_qty">+1 (629) 555-0129</span>
								<span className="item-box_qty">
									paujla@instock.com
								</span>
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
					<section className="item-box">
						<div className="item-box-top">
							<div className="item-box-top_left">
								<span className="item-box_label item-box_label-item">
									warehouse
								</span>
								<div className="item-box_name-box">
									<span className="item-box_name">Manhattan</span>
									<img
										src={Chevron}
										alt="closing tag"
									/>
								</div>
								<span className="item-box_label item-box_label-category">
									adress
								</span>
								<span className="item-box_category">503 Broadway, New York, USA</span>
							</div>
							<div className="item-box-top_right">
								<span className="item-box_label item-box_label-status">
									contact name
								</span>
								<span className="item-box_status">parmin aujla</span>

								<span className="item-box_label item-box_label-qty">contact information</span>
								<span className="item-box_qty">+1 (629) 555-0129</span>
								<span className="item-box_qty">
									paujla@instock.com
								</span>
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
					<section className="item-box">
						<div className="item-box-top">
							<div className="item-box-top_left">
								<span className="item-box_label item-box_label-item">
									warehouse
								</span>
								<div className="item-box_name-box">
									<span className="item-box_name">Manhattan</span>
									<img
										src={Chevron}
										alt="closing tag"
									/>
								</div>
								<span className="item-box_label item-box_label-category">
									adress
								</span>
								<span className="item-box_category">503 Broadway, New York, USA</span>
							</div>
							<div className="item-box-top_right">
								<span className="item-box_label item-box_label-status">
									contact name
								</span>
								<span className="item-box_status">parmin aujla</span>

								<span className="item-box_label item-box_label-qty">contact information</span>
								<span className="item-box_qty">+1 (629) 555-0129</span>
								<span className="item-box_qty">
									paujla@instock.com
								</span>
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
					<section className="item-box">
						<div className="item-box-top">
							<div className="item-box-top_left">
								<span className="item-box_label item-box_label-item">
									warehouse
								</span>
								<div className="item-box_name-box">
									<span className="item-box_name">Manhattan</span>
									<img
										src={Chevron}
										alt="closing tag"
									/>
								</div>
								<span className="item-box_label item-box_label-category">
									adress
								</span>
								<span className="item-box_category">503 Broadway, New York, USA</span>
							</div>
							<div className="item-box-top_right">
								<span className="item-box_label item-box_label-status">
									contact name
								</span>
								<span className="item-box_status">parmin aujla</span>

								<span className="item-box_label item-box_label-qty">contact information</span>
								<span className="item-box_qty">+1 (629) 555-0129</span>
								<span className="item-box_qty">
									paujla@instock.com
								</span>
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
					<section className="item-box">
						<div className="item-box-top">
							<div className="item-box-top_left">
								<span className="item-box_label item-box_label-item">
									warehouse
								</span>
								<div className="item-box_name-box">
									<span className="item-box_name">Manhattan</span>
									<img
										src={Chevron}
										alt="closing tag"
									/>
								</div>
								<span className="item-box_label item-box_label-category">
									adress
								</span>
								<span className="item-box_category">503 Broadway, New York, USA</span>
							</div>
							<div className="item-box-top_right">
								<span className="item-box_label item-box_label-status">
									contact name
								</span>
								<span className="item-box_status">parmin aujla</span>

								<span className="item-box_label item-box_label-qty">contact information</span>
								<span className="item-box_qty">+1 (629) 555-0129</span>
								<span className="item-box_qty">
									paujla@instock.com
								</span>
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
					
				</main>
			</div>
		</>
	);
};
