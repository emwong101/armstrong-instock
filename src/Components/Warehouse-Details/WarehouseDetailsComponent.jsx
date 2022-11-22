import React from "react";
import Arrow from "../../assets/Icons/arrow_back-24px.svg";
import Chevron from "../../assets/Icons/chevron_right-24px.svg";
import Trash from "../../assets/Icons/delete_outline-24px.svg";
import Edit from "../../assets/Icons/edit-24px.svg";
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
					<img
						src={Edit}
						alt="edit"
						className="title-box_editing"
					/>
				</section>
				<section className="info-box">
					<div className="info-box-top">
						<span className="info-box_label info-box_label-adress">
							warehouse address:
						</span>
						<span className="info-box_address">
							33 Pearl Street SW, Washington, USA
						</span>
					</div>
					<div className="info-box-bottom">
						<div className="info-box-bottom_left">
							<span className="info-box_label info-box_label-name">
								Contact name:{" "}
							</span>
							<span className="info-box_name">
								Graeme Lyon Warehouse Manager
							</span>
						</div>
						<div className="info-box-bottom_right">
							<span className="info-box_label info-box_label-info">
								Contact information:{" "}
							</span>
							<span className="info-box_info">
								+1 (647) 504-0911 glyon@instock.com
							</span>
						</div>
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
							<span className="item-box_category">500</span>
						</div>
					</div>
					<div className="item-box_bottom">
						<img
							src={Trash}
							alt="trash"
						/>
						<img
							src={Edit}
							alt="trash"
						/>
					</div>
				</section>
			</div>
		</>
	);
};
