import React, { useEffect } from "react";
import "./user-product-modal.scss";
import axios from "../../api";

const UserPorductModal = ({ setData, data, setReload }) => {
  console.log(data);
  let handleUserProduct = (e) => {
    e.preventDefault();

    let updatedUser = {
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
    };

    axios
      .put(`/user/${data.id}`, updatedUser)
      .then((res) => {
        setData(null);
        setReload((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="user-product-modal">
        <form
          onSubmit={handleUserProduct}
          action=""
          className="user-product-modal__form"
        >
          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, firstName: e.target.value }))
            }
            value={data.firstName}
            type="text"
            required
          />
          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, lastName: e.target.value }))
            }
            value={data.lastName}
            type="text"
            required
          />
          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, age: e.target.value }))
            }
            value={data.age}
            type="text"
            required
          />
          <button onClick={() => setData(null)}>close</button>
          <button>edit</button>
        </form>
      </div>
      <div
        onClick={() => setData(null)}
        className="user-product-modal__overlay"
      ></div>
    </>
  );
};

export default UserPorductModal;
