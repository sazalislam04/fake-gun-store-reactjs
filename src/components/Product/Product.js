import React, { useState } from "react";
import Modal from "../Modal/Modal";

const Product = (props) => {
  const [modalData, setModalData] = useState({});

  const { product, cartHandler } = props;
  const { action, category, img, name, price } = product;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-2xl">
        <figure>
          <img className="h-64" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <p className="text-xl">
              Price: <span className="text-secondary">$</span>
              <span className="text-secondary">{price}</span>
            </p>
            <div className="badge badge-outline btn-primary">{action}</div>
            <div className="badge badge-outline btn-secondary">{category}</div>
          </div>
          <div className="mt-4 flex justify-start">
            <label
              onClick={() => setModalData(product)}
              htmlFor="my-modal-3"
              className="btn modal-button btn-sm btn-secondary btn-outline mr-4"
            >
              Details
            </label>
            <div
              onClick={cartHandler}
              className="btn btn-sm btn-primary btn-outline"
            >
              Add To Cart
            </div>
          </div>
        </div>
      </div>
      {modalData && <Modal data={modalData} setModalData={setModalData} />}
    </div>
  );
};

export default Product;
