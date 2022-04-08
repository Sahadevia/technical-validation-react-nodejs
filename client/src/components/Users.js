import React from "react";
import { useSelector } from "react-redux";

const Users = () => {
  const users = useSelector((state) => state.Test.users);
  console.log(users);

  console.log("nex users");

  return (
    <div>
      <h3>Users</h3>
      {users && users.map((item, index) => <p key={index}>{item.name}</p>)}
    </div>
  );
};

export default Users;
