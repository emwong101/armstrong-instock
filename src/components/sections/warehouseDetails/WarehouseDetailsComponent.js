import React from "react";
import Arrow from "../../../assets/Icons/arrow_back-24px.svg";
import Chevron from "../../../assets/Icons/chevron_right-24px.svg";
import Trash from "../../../assets/Icons/delete_outline-24px.svg";
import Edit from "../../../assets/Icons/edit-24px.svg";
import EditWhite from "../../../assets/Icons/edit_white.svg";
import TagTopBottom from "../../../assets/Icons/tags_top_bottom.svg";
import "./WarehouseDetailsComponent.scss";

export const WarehouseDetailsComponent = () => {
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
						<h1 className="title-box_title">Washington</h1>
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
							33 Pearl Street SW, Washington, USA
						</span>
					</div>
					<div className="info-box-bottom">
						<div className="info-box-bottom_left">
							<span className="info-box_label info-box_label-name">
								Contact name:{" "}
							</span>
							<span className="info-box_detail info-box_name">Graeme Lyon</span>
							<span className="info-box_detail info-box_name">
								Warehouse Manager
							</span>
						</div>
						<div className="info-box-bottom_right">
							<span className="info-box_label info-box_label-info">
								Contact information:{" "}
							</span>
							<span className="info-box_detail info-box_info">
								+1 (647) 504-0911
							</span>
							<span className="info-box_detail info-box_info">
								glyon@instock.com
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
					<section className="item-box">
						<div className="item-box-top">
							<div className="item-box-top_left">
								<span className="item-box_label item-box_label-item">
									inventory item
								</span>
								<div className="item-box_name-box">
									<span className="item-box_name">Television</span>
									<img
										src={Chevron}
										alt="closing tag"
									/>
								</div>
								<span className="item-box_label item-box_label-category">
									category
								</span>
								<span className="item-box_category">Electronics</span>
							</div>
							<div className="item-box-top_right">
								<span className="item-box_label item-box_label-status">
									status
								</span>
								<span className="item-box_status">in stock</span>

								<span className="item-box_label item-box_label-qty">QTY</span>
								<span className="item-box_qty">500</span>
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
									inventory item
								</span>
								<div className="item-box_name-box">
									<span className="item-box_name">Television</span>
									<img
										src={Chevron}
										alt="closing tag"
									/>
								</div>
								<span className="item-box_label item-box_label-category">
									category
								</span>
								<span className="item-box_category">Electronics</span>
							</div>
							<div className="item-box-top_right">
								<span className="item-box_label item-box_label-status">
									status
								</span>
								<span className="item-box_status">in stock</span>

								<span className="item-box_label item-box_label-qty">QTY</span>
								<span className="item-box_qty">500</span>
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
									inventory item
								</span>
								<div className="item-box_name-box">
									<span className="item-box_name">Television</span>
									<img
										src={Chevron}
										alt="closing tag"
									/>
								</div>
								<span className="item-box_label item-box_label-category">
									category
								</span>
								<span className="item-box_category">Electronics</span>
							</div>
							<div className="item-box-top_right">
								<span className="item-box_label item-box_label-status">
									status
								</span>
								<span className="item-box_status">in stock</span>

								<span className="item-box_label item-box_label-qty">QTY</span>
								<span className="item-box_qty">500</span>
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
									inventory item
								</span>
								<div className="item-box_name-box">
									<span className="item-box_name">Television</span>
									<img
										src={Chevron}
										alt="closing tag"
									/>
								</div>
								<span className="item-box_label item-box_label-category">
									category
								</span>
								<span className="item-box_category">Electronics</span>
							</div>
							<div className="item-box-top_right">
								<span className="item-box_label item-box_label-status">
									status
								</span>
								<span className="item-box_status">in stock</span>

								<span className="item-box_label item-box_label-qty">QTY</span>
								<span className="item-box_qty">500</span>
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
									inventory item
								</span>
								<div className="item-box_name-box">
									<span className="item-box_name">Television</span>
									<img
										src={Chevron}
										alt="closing tag"
									/>
								</div>
								<span className="item-box_label item-box_label-category">
									category
								</span>
								<span className="item-box_category">Electronics</span>
							</div>
							<div className="item-box-top_right">
								<span className="item-box_label item-box_label-status">
									status
								</span>
								<span className="item-box_status">in stock</span>

								<span className="item-box_label item-box_label-qty">QTY</span>
								<span className="item-box_qty">500</span>
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
									inventory item
								</span>
								<div className="item-box_name-box">
									<span className="item-box_name">Television</span>
									<img
										src={Chevron}
										alt="closing tag"
									/>
								</div>
								<span className="item-box_label item-box_label-category">
									category
								</span>
								<span className="item-box_category">Electronics</span>
							</div>
							<div className="item-box-top_right">
								<span className="item-box_label item-box_label-status">
									status
								</span>
								<span className="item-box_status">in stock</span>

								<span className="item-box_label item-box_label-qty">QTY</span>
								<span className="item-box_qty">500</span>
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
									inventory item
								</span>
								<div className="item-box_name-box">
									<span className="item-box_name">Television</span>
									<img
										src={Chevron}
										alt="closing tag"
									/>
								</div>
								<span className="item-box_label item-box_label-category">
									category
								</span>
								<span className="item-box_category">Electronics</span>
							</div>
							<div className="item-box-top_right">
								<span className="item-box_label item-box_label-status">
									status
								</span>
								<span className="item-box_status">in stock</span>

								<span className="item-box_label item-box_label-qty">QTY</span>
								<span className="item-box_qty">500</span>
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
									inventory item
								</span>
								<div className="item-box_name-box">
									<span className="item-box_name">Television</span>
									<img
										src={Chevron}
										alt="closing tag"
									/>
								</div>
								<span className="item-box_label item-box_label-category">
									category
								</span>
								<span className="item-box_category">Electronics</span>
							</div>
							<div className="item-box-top_right">
								<span className="item-box_label item-box_label-status">
									status
								</span>
								<span className="item-box_status">in stock</span>

								<span className="item-box_label item-box_label-qty">QTY</span>
								<span className="item-box_qty">500</span>
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
