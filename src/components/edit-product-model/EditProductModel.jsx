import React, { useRef } from "react";
import "./edit-product-model.scss";
import axios from "../../api";

const EditProductModel = ({ setData, data, setReload }) => {
  let handleEditProduct = (e) => {
    e.preventDefault();

    let updateProduct = {
      narxi: data.narxi,
      nomi: data.nomi,
    };

    axios
      .put(`/products/${data.id}`, updateProduct)
      .then((res) => {
        console.log(res);
        setData(null);
        setReload((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="edit-product-model">
        <form
          onSubmit={handleEditProduct}
          action=""
          className="edit-product-model__form"
        >
          <input
            value={data.nomi}
            className="edit-product-model__input"
            type="text"
            onChange={(e) =>
              setData((prev) => ({ ...prev, nomi: e.target.value }))
            }
            required
          />
          <input
            value={data.narxi}
            className="edit-product-model__input"
            type="text"
            onChange={(e) =>
              setData((prev) => ({ ...prev, narxi: e.target.value }))
            }
            required
          />
          <button
            className="edit-product-model__btn"
            onClick={() => setData(null)}
          >
            Close
          </button>
          <button className="edit-product-model__btn">Edit</button>
        </form>
      </div>
      <div
        onClick={() => setData(null)}
        className="edit-product-model__overlay"
      ></div>
    </>
  );
};

export default EditProductModel;
