import React from "react";
import UserProduct from "../../components/user-product/UserProduct";
import useFetch from "../../hooks/useFetch";

const User = () => {
  let { data, loading, error } = useFetch("/user");

  return (
    <div>
      <UserProduct data={data} />
    </div>
  );
};

export default User;
