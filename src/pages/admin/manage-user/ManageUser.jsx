import React from "react";
import "./manage-user.scss";
import UserProduct from "../../../components/user-product/UserProduct";
import useFetch from "../../../hooks/useFetch";
import { useState } from "react";

const ManageUser = () => {
  const [reload, setReload] = useState(true);
  let { data, loading, error } = useFetch("/user", reload);
  return (
    <>
      <UserProduct setReload={setReload} isAdmin={true} data={data} />
    </>
  );
};

export default ManageUser;
