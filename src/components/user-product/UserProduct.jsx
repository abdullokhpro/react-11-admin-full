import React, { useState } from "react";
import axios from "../../api";
import "./user-product.scss";
import UserPorductModal from "../user-product-modal/UserPorductModal";

const UserProduct = ({ data, isAdmin, setReload }) => {
  let [editUser, setEditUser] = useState(null);

  console.log(isAdmin);
  let handleUserDelete = (id) => {
    if (confirm("are you sure")) {
      axios
        .delete(`/user/${id}`)
        .then((res) => {
          setReload((prev) => !prev);
        })
        .catch((err) => console.log(err));
    }
  };

  let handleUserEdit = (product) => {
    setEditUser(product);
  };

  let productUserItems = data?.map((el) => (
    <div key={el.id} className="product-user__card">
      <div className="product-user__top">
        <img src={el.url} alt="" />
      </div>
      <div className="product-user__bottom">
        <p className="product-user__name">{el.firstName}</p>
        <p className="product-user__surname">{el.lastName}</p>
        <p className="product-user__age">{el.age}</p>

        {isAdmin ? (
          <>
            <button
              onClick={() => handleUserEdit(el)}
              className="product-user__edit"
            >
              edit
            </button>
            <button
              onClick={() => handleUserDelete(el.id)}
              className="product-user__delete"
            >
              delete
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  ));

  return (
    <div>
      <div className="product-user">
        <div className="product-user__container">
          <div className="product-user__cards">{productUserItems}</div>
        </div>
      </div>

      {editUser ? (
        <UserPorductModal
          setData={setEditUser}
          data={editUser}
          setReload={setReload}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserProduct;
