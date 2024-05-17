import React from "react";

const Suggestions = ({ user, onSelect }) => {
  return (
    <li className="suggestion" onClick={onSelect}>
      {user.name}
    </li>
  );
};

export default Suggestions;
