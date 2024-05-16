import React, { useState } from "react";
import axios from "../../../api";
import { toast } from "react-toastify";

let initialState = {
  nomi: "",
  narxi: "",
};

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState(initialState);
  let [loading, setLoading] = useState(false);

  const handleCreate = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/products", newProduct)
      .then((res) => {
        setNewProduct(initialState);
        toast.success("product qo'shildi");
        console.log(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="admin__create-product">
      <h2 className="admin__create-product__title">Create Product</h2>
      <form
        className="admin__create-product__form"
        onSubmit={handleCreate}
        action=""
      >
        <input
          className="admin__create-product__input"
          placeholder="Add name of product"
          required
          type="text"
          value={newProduct.nomi}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, nomi: e.target.value }))
          }
        />
        <input
          className="admin__create-product__input"
          placeholder="Add the price of product"
          value={newProduct.narxi}
          type="number"
          required
          onChange={(e) =>
            setNewProduct((prev) => ({
              ...prev,
              narxi: +e.target.value,
            }))
          }
        />
        <button disabled={loading} className="admin__create-product__btn">
          {loading ? "Loading..." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
