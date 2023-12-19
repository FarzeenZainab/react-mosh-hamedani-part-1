"use client";

import React, { useEffect, useState } from "react";

import axios, { AxiosError, CanceledError } from "axios";
import { Button } from "@/components/ui/button";

interface Users {
  id: number;
  name: string;
}

const Users = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // AbortController is a built-in class in modern browsers that allows us to cancel or abort async operations like fetch request, or any operation that may take a long time to complete
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    // WRONG: we can not set loading to false right here because axios/fetch is non blocking/async so the controll will immediatly move to the next line and we will hide our loader unintentionally.
    // setLoading(false)

    return () => controller.abort();
  }, []);

  const deleteUser = (user: Users) => {
    const originalUsers = [...users];
    // update the UI
    setUsers(users.filter((u) => user.id !== u.id));

    // axios
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((error) => {
        setError(error.message);
        setUsers(originalUsers);
      });
  };

  return (
    <>
      {error && <p className="text-destructive p-4">{error}</p>}
      {loading && <p className="text-primary p-4">{loading}</p>}
      <ul className="max-w-[300px] p-6">
        {users.map((user) => {
          return (
            <>
              <li
                key={user.id}
                className="flex justify-between items-center mb-6"
              >
                {user.name}{" "}
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => {
                    deleteUser(user);
                  }}
                >
                  Delete User
                </Button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Users;
