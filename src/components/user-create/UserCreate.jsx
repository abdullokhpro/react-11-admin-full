import React, { useState } from "react";
import "./user-create.scss";
import axios from "../../api";
import { toast } from "react-toastify";

let initialState = {
  firstName: "",
  lastName: "",
  age: "",
};

const UserCreate = () => {
  const [userProduct, setUserProduct] = useState(initialState);
  let [loading, setLoading] = useState(false);

  let handleUserCreate = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("/user", userProduct)
      .then((res) => {
        setUserProduct(initialState);
        toast.success("user qo'shildi");
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <div className="create-user">
        <div className="create-user__container">
          <h2 className="create-user__title">Create User</h2>
          <form
            action=""
            className="create-user__form"
            onSubmit={handleUserCreate}
          >
            <input
              required
              className="create-user__input"
              type="text"
              placeholder="Add name"
              value={userProduct.firstName}
              onChange={(e) =>
                setUserProduct((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
            />
            <input
              required
              className="create-user__input"
              type="text"
              placeholder="Add surname"
              value={userProduct.lastName}
              onChange={(e) =>
                setUserProduct((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }))
              }
            />
            <input
              required
              className="create-user__input"
              type="number"
              placeholder="Add age"
              value={userProduct.age}
              onChange={(e) =>
                setUserProduct((prev) => ({ ...prev, age: e.target.value }))
              }
              v
            />
            <button disabled={loading} className="create-user__btn">
              {loading ? "Loading..." : "Add"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserCreate;
