"use client";

import React, { useEffect, useState } from "react";

import axios from "axios";

interface Users {
  id: number;
  name: string;
}

const Users = () => {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <ul>
      {users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
};

export default Users;
