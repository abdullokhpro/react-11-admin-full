import React, { useState } from "react";
import UserProduct from "../../components/user-product/UserProduct";
import useFetch from "../../hooks/useFetch";

const User = () => {
  let { data, loading, error } = useFetch("/user");

  return (
    <div>
      <h2 className="user__title">User</h2>
      <UserProduct data={data} />
    </div>
  );
};

export default User;
