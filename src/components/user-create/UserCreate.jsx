import React, { useRef, useState } from "react";
import "./user-create.scss";
import axios from "../../api";
import { toast } from "react-toastify";

const UserCreate = () => {
  let [loading, setLoading] = useState(false);

  const nameRef = useRef();
  const lastNameRef = useRef();
  const ageRef = useRef();

  let handleUserCreate = (e) => {
    e.preventDefault();
    setLoading(true);

    let obj = {
      firstName: nameRef.current.value,
      lastName: lastNameRef.current.value,
      age: ageRef.current.value,
    };

    axios
      .post("/user", obj)
      .then((res) => {
        nameRef.current.value = "";
        lastNameRef.current.value = "";
        ageRef.current.value = "";
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
              ref={nameRef}
            />
            <input
              required
              className="create-user__input"
              type="text"
              placeholder="Add surname"
              ref={lastNameRef}
            />
            <input
              required
              className="create-user__input"
              type="number"
              placeholder="Add age"
              ref={ageRef}
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
