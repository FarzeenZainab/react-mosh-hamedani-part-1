"use client";
import React, { useState } from "react";
import ListGroup from "@/components/ListGroup";
import Button from "@/components/Custom/Button";

const badges = [
  {
    id: 1,
    label: "Karachi",
  },
  {
    id: 2,
    label: "Lahore",
  },
  {
    id: 3,
    label: "Islamabad",
  },
  {
    id: 4,
    label: "Rawalpindi",
  },
  {
    id: 5,
    label: "Quetta",
  },
  {
    id: 6,
    label: "Swat",
  },
];

export default function Home() {
  const [bugs, setBugs] = useState([
    {
      id: 1,
      title: "Bug 1",
      fixed: false,
    },
    {
      id: 2,
      title: "Bug 2",
      fixed: false,
    },
    {
      id: 3,
      title: "Bug 3",
      fixed: true,
    },
  ]);

  const onSelectItem = (item: any) => {
    console.log(item);
  };

  const handleClick = () => {
    setBugs(
      bugs.map((bug) => {
        return bug.id === 1 ? { ...bug, fixed: true } : bug;
      })
    );
  };

  return (
    <main className="p-6">
      {/* the state of a component is independent, the state of this ListGroup will not affect the state of another ListGroup component if used here */}
      {/* The typescript compiler will remind us that we have forgotton to pass the defined props, if we do not pass the props that is defined in the interface of our component  */}
      <ListGroup items={badges} title="Cities" onSelectItem={onSelectItem} />

      <br />
      <Button onClick={handleClick} />
    </main>
  );
}
