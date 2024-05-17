import React from "react";
import users from "../constant/users.json";

const UserDetails = ({ userId }) => {
  const user = users.find((user) => user.id === userId);

  if (!user) return null;

  return (
    <div className="user_info">
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>
        Address:{" "}
        {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
      </p>
      <p>Company: {user.company.name}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

export default UserDetails;
