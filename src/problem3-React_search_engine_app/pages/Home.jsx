import React, { useEffect, useState } from "react";
import users from "../constant/users.json";
import Suggestions from "../components/Suggestions";
import UserDetails from "../components/UserDetails";
export default function Home() {
  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  console.log(users);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query) {
        const lowercaseQuery = query.toLowerCase();
        const filtered = users.filter(
          (user) =>
            user.name.toLowerCase().includes(lowercaseQuery) ||
            user.username.toLowerCase().includes(lowercaseQuery) ||
            user.email.toLowerCase().includes(lowercaseQuery) ||
            user.address.city.toLowerCase().includes(lowercaseQuery) ||
            user.company.name.toLowerCase().includes(lowercaseQuery)
        );
        setFilteredUsers(filtered);
      } else {
        setFilteredUsers([]);
      }
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="result">
        <ul>
          {filteredUsers.map((user) => (
            <Suggestions
              key={user.id}
              user={user}
              onSelect={() => setSelectedUser(user.id)}
            />
          ))}
        </ul>
      </div>
      {selectedUser && <UserDetails userId={selectedUser} />}
    </div>
  );
}
