import React from "react";

const Modal = (props) => {
  const { data, setModalData } = props;
  const { action, category, img, name, price, capacity } = data;
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => setModalData(null)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <img className="h-64 mx-auto" src={img} alt="" />
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="py-4">Price: {price}</p>
          <p>Action: {action}</p>
          <p>Category: {category}</p>
          <p>Capacity: {capacity}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
