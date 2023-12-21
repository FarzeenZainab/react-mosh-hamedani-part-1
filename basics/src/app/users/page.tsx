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

  const addUser = () => {
    const newUser = {
      id: 2,
      name: "Farzeen Zainab",
    };

    const originalUsers = [...users]; // keeps track of original users' list

    setUsers([...users, newUser]);

    axios
      .post("https://jsonplaceholder.typicode.com/users/", newUser)
      .then(({ data: savedUsers }) => setUsers([savedUsers, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: Users) => {
    const updatedUser = { ...user, name: "Farzeen" };
    const originalUsers = users;

    setUsers(
      users.map((user) => {
        return updatedUser.id === user.id ? updatedUser : user;
      })
    );

    // difference between put and patch method is that in http we use the put method to replace an object and patch method updates one or more properties of an object

    axios
      .patch(
        "https://jsonplaceholder.typicode.com/users/" + user.id,
        updatedUser
      )
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <>
      {error && <p className="text-destructive p-4">{error}</p>}
      {loading && <p className="text-primary p-4">{loading}</p>}

      <Button
        size="sm"
        onClick={() => {
          addUser();
        }}
        className="m-6"
      >
        Add User
      </Button>

      <ul className="max-w-[600px] p-6">
        {users.map((user) => {
          return (
            <>
              <li
                key={user.id}
                className="flex justify-between items-center mb-6"
              >
                {user.name}{" "}
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => {
                      deleteUser(user);
                    }}
                  >
                    Delete User
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      updateUser(user);
                    }}
                  >
                    Update User
                  </Button>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Users;
