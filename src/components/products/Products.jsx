import React, { useEffect, useState } from "react";
import "./products.scss";
import axios from "../../api";

const Products = ({ data, isAdmin, setReload }) => {
  let handleDelete = (id) => {
    if (confirm("are you sure")) {
      axios
        .delete(`/products/${id}`)
        .then((res) => {
          setReload((prev) => !prev);
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  let productItems = data?.map((el) => (
    <div key={el.id} className="products__card">
      <div className="products__top">
        <img className="products__img" src={el.url} alt={el.nomi} />
      </div>
      <h4>{el.nomi}</h4>
      <p>{el.narxi}</p>

      {isAdmin ? (
        <>
          <button className="products__edit">Edit</button>
          <button
            className="products__delete"
            onClick={() => handleDelete(el.id)}
          >
            Delete
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  ));
  return (
    <div className="products">
      <div className="container products__container">{productItems}</div>
    </div>
  );
};

export default Products;
